# Media sources and licensing

Verified 2026-10-26 against the individual Pexels asset pages and the [Pexels License](https://www.pexels.com/license/). [Commercial-use guidance](https://help.pexels.com/hc/en-us/articles/360042295214-Can-I-use-the-photos-and-videos-for-a-commercial-project).

All nine original assets are free Pexels content, licensed for commercial and personal use and modification. Attribution is appreciated but not required. Restrictions include no implied endorsement, no standalone resale/stock redistribution and no use as a trademark. People pictured are not represented as Stephy staff, customers or endorsers. Stock pets are not represented as client outcomes. These restrictions continue to apply; this is not a rights clearance for unrelated future uses.

| Local stem in public/media | Subject                   | Contributor         | Original asset                                                                                       |
| -------------------------- | ------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------- |
| `portrait`                 | Golden retriever portrait | Helena Lopes        | [Pexels source](https://www.pexels.com/photo/golden-retriever-portrait-in-natural-setting-35511912/) |
| `groomer`                  | Terrier being combed      | Gustavo Fring       | [Pexels source](https://www.pexels.com/photo/a-person-combing-a-dog-6816841/)                        |
| `coat-care`                | Dog coat being combed     | Yaroslav Shuraev    | [Pexels source](https://www.pexels.com/photo/a-person-combing-a-dog-8498859/)                        |
| `lifestyle`                | Corgi brushed at home     | Ron Lach            | [Pexels source](https://www.pexels.com/photo/a-man-combing-his-dog-9986349/)                         |
| `cat`                      | White cat portrait        | Pawan Sable         | [Pexels source](https://www.pexels.com/photo/a-portrait-of-a-white-cat-12544682/)                    |
| `puppy`                    | Poodle puppy on sofa      | Tima Miroshnichenko | [Pexels source](https://www.pexels.com/photo/brown-poodle-puppy-on-beige-sofa-5952001/)              |
| `grooming`                 | Terrier grooming film     | Tima Miroshnichenko | [Pexels source](https://www.pexels.com/video/person-grooming-a-dog-6131498/)                         |
| `bathing`                  | Terrier bath film         | Tima Miroshnichenko | [Pexels source](https://www.pexels.com/video/person-bathing-a-dog-6131723/)                          |
| `brushing`                 | Outdoor brush-out film    | Gustavo Fring       | [Pexels source](https://www.pexels.com/video/a-woman-combing-her-dog-excess-hair-4267753/)           |

Photos: downloaded from the Pexels image CDN at 1200px, resized to 480px and 960px widths and encoded as WebP (quality 81). Responsive srcset chooses the appropriate size; CSS object-fit preserves proportions. No generative editing.

Videos: official Pexels CDN renditions downloaded at 1280×720; trimmed to a maximum of 12 seconds (bathing is 9.88 seconds), resized to 960×540, H.264 CRF 28 with faststart, and all audio removed. Grooming and bathing use 25fps; brushing uses 30fps. Posters are frames at 1 second, encoded as WebP quality 82. All are served locally. Section-film source URLs are assigned following an explicit Play action. The separate decorative hero background described below may autoplay silently, as requested. No remote players, analytics or runtime stock-CDN requests.

Original video CDN URLs:

- https://videos.pexels.com/video-files/6131498/6131498-hd_1280_720_25fps.mp4
- https://videos.pexels.com/video-files/6131723/6131723-hd_1280_720_25fps.mp4
- https://videos.pexels.com/video-files/4267753/4267753-hd_1280_720_30fps.mp4

The original local media set is approximately 3.6 MiB, including its image variants and three section films.

## Hero background revision

The hero background reuses Tima Miroshnichenko’s already licensed Pexels video 6131498 from the source table above. No new source or licensing claim is introduced. Additional files:

- `hero-grooming-1280.mp4`: 1280×720, 24fps, 10 seconds, approximately 990 KiB.
- `hero-grooming-640.mp4`: 640×360, 24fps, 10 seconds, approximately 334 KiB.
- `hero-grooming-poster.webp`: a source frame at 1 second, 1280×720, approximately 45 KiB.

Both MP4s use H.264 CRF 27, yuv420p and faststart, with audio physically removed. The page selects one rendition; it does not download both during normal playback or resizing. The hero uses muted inline autoplay and looping without native controls, keeps its poster if autoplay is blocked, pauses offscreen or in a hidden tab, and avoids video source assignment for reduced-motion, data-saver or 2G connections. A focus-revealed keyboard button can pause/resume background motion. The remaining section videos stay opt-in. No genuine matching before/after photographs were supplied, so no comparison or transformation claim is displayed.
