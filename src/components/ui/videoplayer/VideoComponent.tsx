
export function Video() {
  return (
    <video
      width="600"
      height="350"
      controls
      autoPlay={true}
      loop={true}
      preload="none"
    >
      <source src="/video/bmw.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
