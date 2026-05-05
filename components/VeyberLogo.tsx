import Image from 'next/image';

interface VeyberLogoProps {
  /** Height in px — width scales proportionally */
  height?: number;
  /** Accent color for the V shape (unused now since using image) */
  accentColor?: string;
  /** Force a specific theme, or rely on global dark mode */
  theme?: 'dynamic' | 'dark' | 'light';
}

/**
 * Veyber brand logo — using provided image assets.
 * Switches between black/white based on dark mode, or forced via prop.
 */
export default function VeyberLogo({
  height = 30,
  theme = 'dynamic',
}: VeyberLogoProps) {
  if (theme === 'dark') {
    return (
      <span className="inline-flex items-center select-none" style={{ height }} aria-label="Veyber">
        <Image src="/logo-white.png" alt="Veyber Logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%', objectFit: 'contain' }} priority />
      </span>
    );
  }

  if (theme === 'light') {
    return (
      <span className="inline-flex items-center select-none" style={{ height }} aria-label="Veyber">
        <Image src="/logo-black.png" alt="Veyber Logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%', objectFit: 'contain' }} priority />
      </span>
    );
  }

  // Dynamic theme (relies on Tailwind's .dark class on <html>)
  return (
    <span className="inline-flex items-center select-none" style={{ height }} aria-label="Veyber">
      {/* Light Mode Logo (Black) */}
      <Image
        src="/logo-black.png"
        alt="Veyber Logo"
        width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%', objectFit: 'contain' }}
        className="block dark:hidden"
        priority
      />
      {/* Dark Mode Logo (White) */}
      <Image
        src="/logo-white.png"
        alt="Veyber Logo"
        width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%', objectFit: 'contain' }}
        className="hidden dark:block"
        priority
      />
    </span>
  );
}
