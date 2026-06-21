export default function AnimatedBlobs({ variant }) {
  if (variant === "hero") {
    return (
      <div className="blobs-container hero-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
    );
  }
  if (variant === "services") {
    return (
      <div className="blobs-container services-blobs" aria-hidden="true">
        <div className="blob blob-primary" />
        <div className="blob blob-coral" />
      </div>
    );
  }
  if (variant === "about") {
    return (
      <div className="blobs-container about-blobs" aria-hidden="true">
        <div className="blob blob-sand" />
        <div className="blob blob-accent" />
      </div>
    );
  }
  return null;
}
