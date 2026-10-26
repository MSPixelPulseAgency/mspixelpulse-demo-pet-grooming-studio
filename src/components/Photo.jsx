export default function Photo({
  photo,
  className = "",
  priority = false,
  sizes = "(max-width: 680px) 100vw, 50vw",
}) {
  const responsive = photo.src.includes("-960.webp");
  return (
    <img
      className={className}
      src={photo.src}
      srcSet={
        responsive
          ? `${photo.src.replace("-960", "-480")} 480w, ${photo.src} 960w`
          : undefined
      }
      sizes={responsive ? sizes : undefined}
      alt={photo.alt}
      width="960"
      height="960"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
