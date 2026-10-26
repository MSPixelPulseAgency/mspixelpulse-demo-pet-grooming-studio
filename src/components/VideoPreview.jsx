import { useId, useRef, useState } from "react";
import { Play } from "lucide-react";
export default function VideoPreview({ video, compact = false }) {
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef(null);
  const id = useId();
  async function play() {
    setStarted(true);
    // Load only following an explicit visitor action; no autoplay or sound track.
    const node = ref.current;
    node.src = video.src;
    try {
      await node.play();
    } catch {
      node.controls = true;
    }
    node.focus();
  }
  return (
    <figure className={`video-preview ${compact ? "compact-video" : ""}`}>
      <div className="video-frame">
        <video
          ref={ref}
          poster={video.poster}
          preload="none"
          aria-hidden={!started}
          muted
          playsInline
          controls={started}
          tabIndex={started ? 0 : -1}
          aria-label={video.title}
          aria-describedby={id}
          onError={() => setError(true)}
        />
        {error && (
          <p className="video-error" role="alert">
            This film could not load. You can still explore the services and
            photography.
          </p>
        )}
        {!started && (
          <button
            className="video-play"
            type="button"
            onClick={play}
            aria-label={`Play ${video.title}`}
          >
            <span>
              <Play size={22} fill="currentColor" />
            </span>
            <span>
              Watch a little care in action
              <small>Silent grooming film · {video.duration}</small>
            </span>
          </button>
        )}
      </div>
      <figcaption id={id}>
        {video.description}
        {error && (
          <span role="alert">
            {" "}
            This film could not load. You can still explore our services and
            photography.
          </span>
        )}
      </figcaption>
    </figure>
  );
}
