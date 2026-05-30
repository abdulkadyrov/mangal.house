import { forwardRef, useState } from 'react';

const PremiumImage = forwardRef(function PremiumImage(
  { src, alt, className = '', fallbackLabel = 'Mangal House', imgClassName = '' },
  ref,
) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`premium-image-fallback flex items-center justify-center overflow-hidden ${className}`}
        aria-label={alt}
      >
        <div className="px-4 text-center">
          <span className="block font-display text-2xl text-goldLight">{fallbackLabel}</span>
          <span className="mt-2 block text-[10px] uppercase tracking-[0.32em] text-cream/45">
            premium cuisine
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`${className} ${imgClassName}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
});

export default PremiumImage;
