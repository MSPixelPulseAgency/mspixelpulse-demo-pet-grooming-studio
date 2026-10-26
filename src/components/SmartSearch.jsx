import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { searchContent } from "../lib/search.js";
export default function SmartSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const results = useMemo(() => searchContent(query), [query]);
  const navigate = useNavigate();
  const id = useId();
  const ref = useRef(null);
  useEffect(() => {
    if (open && active >= 0)
      document
        .getElementById(`${id}-${active}`)
        ?.scrollIntoView({ block: "nearest" });
  }, [active, open, id]);
  function choose(item) {
    setOpen(false);
    setQuery("");
    setActive(-1);
    navigate(item.url);
    ref.current?.blur();
  }
  function onKeyDown(event) {
    if (event.key === "Escape") {
      setOpen(false);
      setActive(-1);
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActive((i) => {
        if (!results.length) return -1;
        if (i < 0) return event.key === "ArrowDown" ? 0 : results.length - 1;
        return (
          (i + (event.key === "ArrowDown" ? 1 : -1) + results.length) %
          results.length
        );
      });
    }
    if (event.key === "Enter") {
      event.preventDefault();
      if (open && results.length) choose(results[active >= 0 ? active : 0]);
    }
  }
  return (
    <div
      className="smart-search"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <label className="sr-only" htmlFor={`${id}-input`}>
        Search services, packages and FAQs
      </label>
      <Search size={19} aria-hidden="true" />
      <input
        id={`${id}-input`}
        ref={ref}
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-activedescendant={
          open && active >= 0 ? `${id}-${active}` : undefined
        }
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setActive(-1);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder="Find a service, package or answer…"
        autoComplete="off"
      />
      {query && (
        <button
          className="icon-button"
          type="button"
          aria-label="Clear search"
          onClick={() => {
            setQuery("");
            setActive(-1);
            ref.current?.focus();
          }}
        >
          <X size={17} />
        </button>
      )}
      {open && (
        <div className="search-panel">
          <p className="search-hint">
            {query ? "On this website" : "A good place to start"}
            <span>↑ ↓ to explore · Enter to open</span>
          </p>
          <ul id={`${id}-list`} role="listbox" aria-label="Search suggestions">
            {results.map((item, index) => (
              <li
                key={`${item.type}-${item.url}`}
                id={`${id}-${index}`}
                role="option"
                aria-selected={active === index}
                className={active === index ? "selected" : ""}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(item)}
              >
                <span>
                  <small>{item.type}</small>
                  {item.title}
                </span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </li>
            ))}
          </ul>
          {!results.length && (
            <div className="search-empty">
              <strong>No matches for “{query}”</strong>
              <p>Try “bath”, “puppy”, “nails” or “pricing”.</p>
              <button
                className="text-link"
                type="button"
                onClick={() => {
                  setOpen(false);
                  navigate("/contact");
                }}
              >
                Ask us a question <ArrowUpRight size={16} />
              </button>
            </div>
          )}
          <span className="sr-only" role="status">
            {results.length} suggestions available
          </span>
        </div>
      )}
    </div>
  );
}
