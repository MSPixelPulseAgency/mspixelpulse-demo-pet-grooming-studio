import test from "node:test";
import assert from "node:assert/strict";
import { searchContent, searchIndex } from "../src/lib/search.js";
import { services } from "../src/data/services.js";
import { pricing } from "../src/data/pricing.js";
import { faqs } from "../src/data/faqs.js";
import { submitInquiry } from "../src/lib/mspInquiry.js";

test("search finds actual content with multiword, case and punctuation queries", () => {
  assert.ok(
    searchContent("BATH & BRUSH").some((r) => r.title === "Bath & Brush"),
  );
  assert.ok(searchContent("puppy").some((r) => r.type === "Service"));
  assert.ok(searchContent("pricing").some((r) => r.type === "FAQ"));
  assert.equal(searchContent("absolutelyunknownword").length, 0);
  assert.equal(searchContent("   ").length, 4);
});
test("every search anchor resolves to an existing service, package or FAQ", () => {
  const records = { "/services": services, "/pricing": pricing, "/faq": faqs };
  for (const entry of searchIndex) {
    const [path, id] = entry.url.split("#");
    if (id)
      assert.ok(
        records[path].some((item) => item.id === id),
        entry.url,
      );
  }
  for (const items of Object.values(records))
    assert.equal(new Set(items.map((i) => i.id)).size, items.length);
});
test("inquiry rejects missing consent without a network request", async () => {
  const original = globalThis.fetch;
  globalThis.fetch = () => {
    throw new Error("Network must not be called");
  };
  try {
    assert.equal((await submitInquiry({ consent: false })).ok, false);
  } finally {
    globalThis.fetch = original;
  }
});
test("intake acceptance, server rejection and offline state remain distinct", async () => {
  const original = globalThis.fetch;
  const input = {
    name: "Local test",
    email: "test@example.invalid",
    message: "Local mocked verification",
    consent: true,
  };
  try {
    globalThis.fetch = async () => ({
      ok: true,
      status: 200,
      json: async () => ({ inquiryId: "local-only", duplicate: false }),
    });
    assert.deepEqual(await submitInquiry(input), {
      ok: true,
      inquiryId: "local-only",
      duplicate: false,
    });
    globalThis.fetch = async () => ({
      ok: false,
      status: 429,
      json: async () => ({ error: "Please wait" }),
    });
    assert.deepEqual(await submitInquiry(input), {
      ok: false,
      status: 429,
      error: "Please wait",
    });
    globalThis.fetch = async () => {
      throw new Error("offline");
    };
    assert.equal((await submitInquiry(input)).status, 0);
  } finally {
    globalThis.fetch = original;
  }
});
