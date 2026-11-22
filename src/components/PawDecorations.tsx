import React, { useState } from 'react';

export function PawPrintIcon({
  className = 'w-5 h-5',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="16" cy="24" rx="5.5" ry="7.5" transform="rotate(-18 16 24)" />
      <ellipse cx="27" cy="14" rx="5.5" ry="8" transform="rotate(-6 27 14)" />
      <ellipse cx="39" cy="14" rx="5.5" ry="8" transform="rotate(8 39 14)" />
      <ellipse cx="49" cy="24" rx="5.5" ry="7.5" transform="rotate(20 49 24)" />
      <path d="M32 25c-9.2 0-16.5 7.4-16.5 15.2 0 5.4 4.2 9.3 9.7 9.3 2.8 0 4.8-.9 6.8-.9s4 .9 6.8.9c5.5 0 9.7-3.9 9.7-9.3C48.5 32.4 41.2 25 32 25z" />
    </svg>
  );
}

export function FloatingPawTrail({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <PawPrintIcon
        className="w-7 h-7 text-[#9BC4E6]/45 animate-paw-float absolute top-6 left-4"
        style={{ '--paw-rotate': '-16deg', animationDelay: '0s' } as React.CSSProperties}
      />
      <PawPrintIcon
        className="w-5 h-5 text-[#B4ACEB]/50 animate-paw-float absolute top-20 right-10"
        style={{ '--paw-rotate': '22deg', animationDelay: '1.2s' } as React.CSSProperties}
      />
      <PawPrintIcon
        className="w-6 h-6 text-[#69B1BA]/40 animate-paw-float absolute bottom-12 left-12"
        style={{ '--paw-rotate': '-8deg', animationDelay: '2.4s' } as React.CSSProperties}
      />
      <PawPrintIcon
        className="w-8 h-8 text-[#9BC4E6]/35 animate-paw-float absolute bottom-6 right-6"
        style={{ '--paw-rotate': '14deg', animationDelay: '0.8s' } as React.CSSProperties}
      />
    </div>
  );
}

export function PuppyBadgeIllustration({
  type,
  className = 'w-14 h-14',
}: {
  type: 'confidence' | 'habits' | 'friends';
  className?: string;
}) {
  if (type === 'confidence') {
    return (
      <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
        <circle cx="40" cy="40" r="36" fill="#D5E9FA" />
        <path
          d="M24 54c0-10 7-18 16-18s16 8 16 18"
          stroke="#162B4D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="40" cy="31" r="10.5" fill="#FAFBFD" stroke="#162B4D" strokeWidth="2.5" />
        <path
          d="M30 27c-3 0-6 4-5 9 1 3 3.5 3.5 5 2.5M50 27c3 0 6 4 5 9-1 3-3.5 3.5-5 2.5"
          fill="#CFE5F7"
          stroke="#162B4D"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="36.5" cy="30" r="1.5" fill="#162B4D" />
        <circle cx="43.5" cy="30" r="1.5" fill="#162B4D" />
        <ellipse cx="40" cy="34" rx="2.5" ry="1.8" fill="#162B4D" />
        <path d="M22 57h36" stroke="#277D89" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'habits') {
    return (
      <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
        <circle cx="40" cy="40" r="36" fill="#DFDAFA" />
        <rect x="23" y="45" width="34" height="12" rx="6" fill="#FAFBFD" stroke="#162B4D" strokeWidth="2.4" />
        <circle cx="40" cy="31" r="10.5" fill="#FAFBFD" stroke="#162B4D" strokeWidth="2.4" />
        <path
          d="M31 25l-4-6 7 3M49 25l4-6-7 3"
          stroke="#162B4D"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36.5" cy="30.5" r="1.5" fill="#162B4D" />
        <circle cx="43.5" cy="30.5" r="1.5" fill="#162B4D" />
        <ellipse cx="40" cy="34" rx="2.4" ry="1.7" fill="#162B4D" />
        <path
          d="M34 51l4 4 8-8"
          stroke="#277D89"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="#CBE7EA" />
      <circle cx="30" cy="35" r="8.5" fill="#FAFBFD" stroke="#162B4D" strokeWidth="2.3" />
      <circle cx="50" cy="35" r="8.5" fill="#FAFBFD" stroke="#162B4D" strokeWidth="2.3" />
      <path
        d="M22.5 31c-2 0-3.5 3-3 6.5M37.5 31c2 0 3.5 3 3 6.5M42.5 31c-2 0-3.5 3-3 6.5M57.5 31c2 0 3.5 3 3 6.5"
        stroke="#162B4D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="28" cy="34" r="1.2" fill="#162B4D" />
      <circle cx="32" cy="34" r="1.2" fill="#162B4D" />
      <circle cx="48" cy="34" r="1.2" fill="#162B4D" />
      <circle cx="52" cy="34" r="1.2" fill="#162B4D" />
      <path
        d="M40 53.5s-6.5-4.3-6.5-8.4c0-2.2 1.7-3.8 3.6-3.8 1.2 0 2.3.7 2.9 1.7.6-1 1.7-1.7 2.9-1.7 1.9 0 3.6 1.6 3.6 3.8 0 4.1-6.5 8.4-6.5 8.4z"
        fill="#277D89"
      />
    </svg>
  );
}

export function TrainerPortraitPlaceholderSvg({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 360" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="trainerBgGrad" x1="0" y1="0" x2="320" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6F2FC" />
          <stop offset="55%" stopColor="#EAE6FA" />
          <stop offset="100%" stopColor="#DFEFF1" />
        </linearGradient>
      </defs>
      <rect width="320" height="360" rx="36" fill="url(#trainerBgGrad)" />
      <circle cx="255" cy="70" r="46" fill="#FFFFFF" fillOpacity="0.45" />
      <circle cx="62" cy="285" r="54" fill="#CFE5F7" fillOpacity="0.55" />
      {/* Trainer silhouette */}
      <circle cx="152" cy="126" r="40" fill="#FAFBFD" stroke="#162B4D" strokeWidth="3" />
      <path
        d="M84 274c0-42 30-72 68-72s68 30 68 72"
        fill="#FAFBFD"
        stroke="#162B4D"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Friendly puppy companion silhouette beside trainer */}
      <circle cx="222" cy="222" r="24" fill="#CFE5F7" stroke="#162B4D" strokeWidth="2.8" />
      <path
        d="M201 215c-5 2-8 9-6 16 2 5 6 5 8 3M243 215c5 2 8 9 6 16-2 5-6 5-8 3"
        fill="#B9D9F3"
        stroke="#162B4D"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M196 290c0-22 12-38 26-38s26 16 26 38"
        fill="#CFE5F7"
        stroke="#162B4D"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="215" cy="220" r="2.2" fill="#162B4D" />
      <circle cx="229" cy="220" r="2.2" fill="#162B4D" />
      <ellipse cx="222" cy="228" rx="4" ry="2.8" fill="#162B4D" />
    </svg>
  );
}

export function PuppyImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle = 'Pawuahas Puppy Studio',
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#EAF4FC] via-[#EAE6FA] to-[#E2F2F3] text-[#162B4D]"
        role="img"
        aria-label={alt}
      >
        <PawPrintIcon className="w-10 h-10 text-[#277D89]/70 mb-2" />
        <p className="font-display font-semibold text-sm">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
