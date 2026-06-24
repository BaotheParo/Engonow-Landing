// Shared design tokens + tiny primitives
const ASSET = 'landing/'; // asset base (HTML lives at project root)

// Standalone-export resolver: bundled file fills window.__resources[id] with a blob URL.
function R(id, fallback) {
  return (typeof window !== 'undefined' && window.__resources && window.__resources[id]) || fallback;
}

const E = {
  red: '#BA3638',
  red600: '#A32F31',
  red700: '#8C2527',
  redSoft: '#FEF2F2',
  redTint: '#FBE9E9',
  coral: '#F97373',
  cream: '#FFF9F3',
  cream2: '#FBF1E7',
  gold: '#E8A317',
  goldDark: '#C9842F',
  goldDeep: '#B5781C',
  goldSoft: '#FBEFD6',
  goldTint: '#F6E2BC',
  // Trust blue — method / LMS / credentials / parent
  blue: '#2C6FB5',
  blueDeep: '#1E5A9E',
  blueSoft: '#EAF3FB',
  blueTint: '#D3E6F7',
  blueWash: '#F4F9FD',
  steam: '#66C0F4',
  ink: '#1F1F1F',
  inkHead: '#23201C',
  ink2: '#4A4A4A',
  ink3: '#6B6B6B',
  ink4: '#9CA3AF',
  line: '#ECE8E2',
  lineStrong: '#DCD6CD',
  surface: '#FFFFFF',
  surfaceAlt: '#FBF6EF',   // warm cream panel (hero + footer zone only)
  greyPanel: '#F4F5F6',    // cool light-grey panel (middle sections)
  greyLine: '#E4E6E9',
  // slate — neutral professional accent (worker / "người đi làm")
  slate: '#586374',
  slateDeep: '#414B59',
  slateSoft: '#EFF1F4',
  // segment CTA colors
  green: '#15803D',
  fontHead: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
  fontBody: "'Helvetica Neue', 'Univers', Arial, sans-serif",
  fontUi: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
  shadowSm: '0 1px 2px rgba(15,23,42,0.05)',
  shadowMd: '0 4px 6px -1px rgba(15,23,42,0.08), 0 2px 4px -2px rgba(15,23,42,0.04)',
  shadowLg: '0 10px 15px -3px rgba(15,23,42,0.10), 0 4px 6px -4px rgba(15,23,42,0.05)',
  shadowXl: '0 24px 48px -16px rgba(15,23,42,0.18), 0 8px 16px -8px rgba(15,23,42,0.08)',
  shadowRed: '0 12px 28px -10px rgba(186,54,56,0.55)',
  shadowRedSm: '0 6px 16px -8px rgba(186,54,56,0.45)',
};

// Responsive hook — re-renders on breakpoint cross. mobile <760, tablet <1040
function useIsMobile(bp = 760) {
  const [m, setM] = React.useState(() => typeof window !== 'undefined' && window.innerWidth < bp);
  React.useEffect(() => {
    const on = () => setM(window.innerWidth < bp);
    window.addEventListener('resize', on);
    on();
    return () => window.removeEventListener('resize', on);
  }, [bp]);
  return m;
}

function EIcon({ name, size = 20, style }) {
  return (
    <img src={R('icon-' + name, `${ASSET}icons/${name}.svg`)} width={size} height={size}
         style={{ display: 'block', ...style }} alt="" />
  );
}

// User-fillable image placeholder (web component <image-slot>)
function Slot({ id, w, h, shape = 'rounded', radius = 16, placeholder, fit = 'cover', style }) {
  return (
    <image-slot
      id={id}
      shape={shape}
      radius={String(radius)}
      fit={fit}
      placeholder={placeholder || 'Kéo ảnh vào đây'}
      style={{ width: typeof w === 'number' ? `${w}px` : w, height: typeof h === 'number' ? `${h}px` : h, display: 'block', ...style }}
    ></image-slot>
  );
}

function Pill({ children, variant = 'primary', onClick, href, icon, type, style }) {
  const cls = `pill pill-${variant}`;
  const inner = (
    <>
      {children}
      {icon && <EIcon name={icon} size={16} />}
    </>
  );
  if (href) return <a className={cls} href={href} style={style}>{inner}</a>;
  return <button type={type || 'button'} className={cls} onClick={onClick} style={style}>{inner}</button>;
}

function Chip({ children, tone = 'red', style }) {
  const tones = {
    red:    { bg: E.redSoft, fg: E.red },
    cream:  { bg: E.cream2, fg: E.goldDark },
    ink:    { bg: '#F2EFEA', fg: E.ink },
    success:{ bg: '#E7F4EC', fg: '#15803D' },
    warning:{ bg: '#FEF3D6', fg: '#92590B' },
  };
  const t = tones[tone] || tones.red;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 12px', background: t.bg, color: t.fg,
      fontFamily: E.fontUi, fontSize: 12, fontWeight: 700,
      borderRadius: 999, letterSpacing: '0.02em', ...style,
    }}>{children}</span>
  );
}

function Eyebrow({ children, color = E.red, style }) {
  return (
    <div style={{
      fontFamily: E.fontUi, fontSize: 12, fontWeight: 700,
      color, textTransform: 'uppercase', letterSpacing: '0.14em',
      ...style,
    }}>{children}</div>
  );
}

function SectionHead({ eyebrow, title, sub, color = '#1F1F1F', eyebrowColor = E.red, align = 'center', maxWidth = 760 }) {
  const center = align === 'center';
  return (
    <div style={{
      textAlign: align, marginBottom: 48,
      maxWidth: center ? maxWidth : undefined,
      marginLeft: center ? 'auto' : undefined,
      marginRight: center ? 'auto' : undefined,
    }}>
      {eyebrow && <Eyebrow color={eyebrowColor} style={{ marginBottom: 14 }}>{eyebrow}</Eyebrow>}
      <h2 style={{
        fontFamily: E.fontHead, fontWeight: 800,
        fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.14, letterSpacing: '-0.02em',
        color, margin: 0,
      }}>{title}</h2>
      {sub && (
        <p style={{
          fontFamily: E.fontBody, fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.55,
          color: E.ink3, margin: '18px auto 0', maxWidth: 620,
        }}>{sub}</p>
      )}
    </div>
  );
}

// Cartoon avatar circle (uses bundled PNGs)
function Avatar({ name, size = 40, ring }) {
  return (
    <img src={`${ASSET}avatars/${name}.png`} width={size} height={size}
      style={{
        width: size, height: size, borderRadius: 999,
        background: '#F2EFEA',
        border: ring ? `2px solid ${ring}` : undefined,
        display: 'block', objectFit: 'cover',
      }} alt="" />
  );
}

function RedDot({ size = 8 }) {
  return <span style={{ width: size, height: size, borderRadius: 999, background: E.red, display: 'inline-block' }} />;
}

// Engonow logo — real brand lockup (open-book + gold pages, serif red wordmark)
function EngonowMark({ height = 42, label = 'IELTS MASTER', labelColor, imgStyle }) {
  const lc = labelColor || E.red;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <img src={R('logo', `${ASSET}engonow-logo.png`)} alt="ENGONOW — Enlighten Your Goal Now"
        style={{ height, width: 'auto', display: 'block', mixBlendMode: 'multiply', ...imgStyle }} />
      {label && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 1, height: height * 0.6, background: E.lineStrong, display: 'inline-block' }}></span>
          <span style={{
            fontFamily: E.fontUi, fontSize: height * 0.25, fontWeight: 700,
            letterSpacing: '0.16em', color: lc, whiteSpace: 'nowrap',
          }}>{label}</span>
        </span>
      )}
    </div>
  );
}

// Icon color filters (black SVG → brand color)
const goldFilter = 'brightness(0) saturate(100%) invert(58%) sepia(64%) saturate(620%) hue-rotate(358deg) brightness(92%) contrast(89%)';
const blueFilter = 'brightness(0) saturate(100%) invert(34%) sepia(86%) saturate(560%) hue-rotate(178deg) brightness(92%) contrast(88%)';
const slateFilter = 'brightness(0) saturate(100%) invert(38%) sepia(8%) saturate(900%) hue-rotate(176deg) brightness(94%) contrast(86%)';

Object.assign(window, { ASSET, R, E, useIsMobile, EIcon, Slot, Pill, Chip, Eyebrow, SectionHead, Avatar, RedDot, EngonowMark, goldFilter, blueFilter, slateFilter });
