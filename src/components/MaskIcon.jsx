export default function MaskIcon({ src, color = 'currentColor', width, height, className = '', style = {} }) {
  return (
    <span
      className={`mask-icon ${className}`}
      style={{
        width,
        height,
        color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        ...style,
      }}
    />
  );
}
