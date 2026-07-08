// Sec 1: Top nav + Hero
// Sec 2: Audience cards

const NAV_LINKS = [
  { label: 'Lộ trình',   href: '#why' },
  { label: 'Phương pháp', href: '#why-fast' },
  { label: 'Kết quả',    href: '#results' },
  { label: 'Giáo viên',  href: '#teachers' },
  { label: 'Câu hỏi',    href: '#faq' },
  { label: 'Cơ sở',      href: '#campus' },
];

function TopNav() {
  const mobile = useIsMobile(1040);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { if (!mobile) setOpen(false); }, [mobile]);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 1100,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'saturate(180%) blur(10px)',
      borderBottom: `1px solid ${E.line}`,
      padding: '0 clamp(20px, 5vw, 48px)',
    }}>
      <div className="container" style={{
        height: mobile ? 72 : 96, display: 'flex', alignItems: 'center', gap: 20,
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, overflow: 'hidden', marginLeft: mobile ? -4 : -8 }}>
          <EngonowMark height={mobile ? 90 : 140} label={null} imgStyle={{ margin: mobile ? '-25px 0' : '-45px 0' }} />
        </a>

        {!mobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 22, flex: 1, justifyContent: 'flex-end' }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} style={{
                fontFamily: E.fontUi, fontSize: 14, fontWeight: 600, color: E.ink2, whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.color = E.red}
              onMouseLeave={e => e.currentTarget.style.color = E.ink2}
              >{l.label}</a>
            ))}
            <Pill href="#final-cta" variant="primary" style={{ padding: '11px 22px', fontSize: 14, marginLeft: 6 }}>
              Nhận tư vấn lộ trình
            </Pill>
          </nav>
        )}

        {mobile && (
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)} style={{
              height: 42, padding: '0 18px', borderRadius: 999, background: open ? E.red : '#fff',
              border: `1px solid ${open ? E.red : E.lineStrong}`, color: open ? '#fff' : E.ink,
              fontFamily: E.fontUi, fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center', cursor: 'pointer',
            }}>
              {open ? 'Đóng' : 'Menu'}
            </button>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {mobile && open && (
        <div style={{ background: '#fff', borderTop: `1px solid ${E.line}`, padding: '12px 16px 20px', boxShadow: E.shadowLg }}>
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily: E.fontUi, fontSize: 16, fontWeight: 600, color: E.ink,
                padding: '14px 8px', borderBottom: `1px solid ${E.line}`,
              }}>{l.label}</a>
            ))}
          </nav>
          <a href="#final-cta" onClick={() => setOpen(false)} className="pill pill-primary" style={{ width: '100%', marginTop: 16 }}>
            Nhận tư vấn lộ trình
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const mobile = useIsMobile(860);
  const benefits = [
    'Giáo viên IELTS 7.5+ · chứng chỉ sư phạm quốc tế TESOL/CELTA',
    'Hệ sinh thái LMS học mọi lúc — study.engonow.com & dictation.engonow.com',
    '4 cơ sở phía Tây Sài Gòn · lớp Online tương tác toàn quốc',
  ];
  return (
    <section id="top" style={{
      position: 'relative', overflow: 'hidden',
      padding: 'clamp(40px, 5vw, 64px) clamp(20px, 5vw, 48px) clamp(56px, 6vw, 84px)',
      background: `linear-gradient(180deg, ${E.surfaceAlt} 0%, #FFFFFF 58%)`,
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1.04fr 0.96fr',
          gap: mobile ? 28 : 56, alignItems: mobile ? 'stretch' : 'flex-start',
        }}>
          {/* Left column */}
          <div style={{ order: mobile ? 2 : 1 }}>
            <div style={{ fontFamily: E.fontUi, fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: E.red, marginBottom: 18 }}>
              Đạt IELTS 7.0–8.0 với lộ trình tinh gọn
            </div>

            <h1 style={{
              fontFamily: E.fontHead, fontWeight: 800,
              fontSize: 'clamp(28px, 5vw, 46px)', lineHeight: 1.25, letterSpacing: '-0.03em',
              color: E.inkHead, margin: 0,
            }}>
              Chinh phục <span style={{ color: E.red }}>IELTS 7.0–8.0</span> bằng lộ trình cá nhân hoá
            </h1>

            <p style={{
              fontFamily: E.fontBody, fontSize: mobile ? 16 : 18, color: E.ink2,
              marginTop: 18, fontWeight: 500, lineHeight: 1.5, maxWidth: 520,
            }}>
              Lộ trình được thiết kế riêng theo trình độ đầu vào và mục tiêu của bạn, kết hợp phương pháp phản hồi M.E.E.R. và đội ngũ giáo viên IELTS 7.5+. Học phí đầu tư từ 1.500.000đ/tháng.
            </p>

            {/* Benefits — hairline-ruled rows, no icons */}
            <div style={{ marginTop: 26, borderTop: `1px solid ${E.line}` }}>
              {benefits.map((b) => (
                <div key={b} style={{ display: 'flex', gap: 14, padding: '12px 0', borderBottom: `1px solid ${E.line}`, alignItems: 'flex-start' }}>
                  <span style={{ width: 18, height: 2, background: E.red, flexShrink: 0, marginTop: 9 }} />
                  <span style={{ fontFamily: E.fontUi, fontSize: 14.5, fontWeight: 600, color: E.ink, lineHeight: 1.4 }}>{b}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <Pill href="#final-cta" variant="primary" style={mobile ? { width: '100%' } : undefined}>
                Nhận tư vấn lộ trình
              </Pill>
              <a href="https://zalo.me/0399994132" target="_blank" rel="noopener noreferrer" className="pill pill-ghost" style={mobile ? { width: '100%' } : undefined}>
                Liên hệ qua Zalo
              </a>
            </div>
          </div>

          {/* Right column — hero photo */}
          <div style={{ order: mobile ? 1 : 2 }}>
            <HeroVisual mobile={mobile} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Signature device — "race to the goal": both bars are time-to-reach IELTS 7.0;
// ENGONOW (red, on top) gets there in half the track. The −50% becomes literal.
function TimeSavedBar({ mobile }) {
  const ENGO = 50; // ENGONOW reaches the goal at ~half the timeline
  const Track = ({ label, months, pct, color, strong }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <span style={{ fontFamily: E.fontUi, fontSize: 12.5, fontWeight: strong ? 700 : 600, color: strong ? E.ink : E.ink3 }}>{label}</span>
        <span style={{ fontFamily: E.fontUi, fontSize: 12.5, fontWeight: 700, color: strong ? E.red : E.ink3 }}>{months}</span>
      </div>
      <div style={{ height: 12, borderRadius: 999, background: E.surfaceAlt }}>
        <div style={{ width: `${pct}%`, height: '100%', borderRadius: 999, background: color }} />
      </div>
    </div>
  );
  return (
    <div style={{ marginTop: 26, background: '#fff', border: `1px solid ${E.line}`, borderRadius: 14, padding: mobile ? '16px' : '18px 20px', boxShadow: E.shadowSm }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16, gap: 12 }}>
        <span style={{ fontFamily: E.fontUi, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: E.ink3 }}>Thời gian đạt mục tiêu IELTS 7.0</span>
        <span style={{ fontFamily: E.fontHead, fontSize: 15, fontWeight: 800, color: E.red, letterSpacing: '-0.02em', flexShrink: 0 }}>−50%</span>
      </div>
      <Track label="ENGONOW" months="4–6 tháng" pct={ENGO} color={E.red} strong />
      <Track label="Truyền thống" months="8–12 tháng" pct={100} color={E.ink4} />
    </div>
  );
}

const redFilter = 'brightness(0) saturate(100%) invert(28%) sepia(38%) saturate(1709%) hue-rotate(316deg) brightness(85%) contrast(92%)';

function HeroVisual({ mobile }) {
  return (
    <div style={{ position: 'relative', maxWidth: mobile ? 460 : 'none', margin: mobile ? '0 auto' : 0 }}>
      {/* Photo — clean framed slot, fills edge-to-edge */}
      <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', border: `1px solid ${E.line}`, boxShadow: E.shadowLg }}>
        <Slot id="hero-student" w="100%" h={mobile ? 300 : 440} radius={20} fit="cover"
          src="hero-student.jpg"
          placeholder="Ảnh học viên / lớp học" />
      </div>

      {/* Badge 1: TESOL · CELTA */}
      <div style={{
        position: 'absolute',
        top: 24,
        left: mobile ? 12 : -24,
        zIndex: 4,
        background: '#1D00B7',
        borderRadius: 10,
        padding: mobile ? '8px 12px' : '12px 18px',
        boxShadow: '0 8px 24px rgba(29, 0, 183, 0.25)',
      }}>
        <span style={{ fontFamily: E.fontUi, fontWeight: 700, fontSize: mobile ? 13 : 15, color: '#FFFFFF' }}>
          TESOL · CELTA
        </span>
      </div>

      {/* Badge 2: Giáo viên IELTS 7.5+ */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        right: mobile ? 12 : -24,
        zIndex: 4,
        background: '#1D00B7',
        borderRadius: 10,
        padding: mobile ? '8px 12px' : '12px 18px',
        boxShadow: '0 8px 24px rgba(29, 0, 183, 0.25)',
      }}>
        <span style={{ fontFamily: E.fontUi, fontWeight: 700, fontSize: mobile ? 13 : 15, color: '#FFFFFF' }}>
          Giáo viên IELTS 7.5+
        </span>
      </div>
    </div>
  );
}

// SECTION 2 — audience picker (WHITE)
function AudiencePicker() {
  const mobile = useIsMobile(860);
  const audiences = [
    { id: 'student', tag: 'Học sinh Cấp 3', body: 'Xét tuyển đại học bằng IELTS', icon: 'student', tint: E.redSoft, accent: E.red, href: '#segments' },
    { id: 'worker', tag: 'Sinh viên & Người đi làm', body: 'Du học · Định cư · Sự nghiệp', icon: 'bullseye-arrow', iconPng: 'man-laptop', tint: E.slateSoft, accent: E.data, href: '#segments' },
    { id: 'parent', tag: 'Phụ huynh', body: 'Đồng hành cùng con', icon: 'heart-health-muscle', tint: E.blueSoft, accent: E.red, href: '#segments' },
  ];
  return (
    <section id="why" className="section" style={{ background: '#fff', paddingTop: 'clamp(48px,6vw,64px)', paddingBottom: 'clamp(48px,6vw,64px)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,32px)', color: E.inkHead, margin: 0, letterSpacing: '-0.02em' }}>
            Bạn đang ở giai đoạn nào?
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>
          {audiences.map(a => (
            <a key={a.id} href={a.href} style={{
              display: 'flex', alignItems: 'center', gap: 18,
              background: '#fff', borderRadius: 18, padding: '22px 22px',
              border: `1px solid ${E.line}`, boxShadow: E.shadowSm,
              transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = E.shadowLg; e.currentTarget.style.borderColor = a.accent; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = E.shadowSm; e.currentTarget.style.borderColor = E.line; }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: E.fontHead, fontWeight: 700, fontSize: 18, color: E.inkHead, letterSpacing: '-0.01em' }}>{a.tag}</div>
                <div style={{ fontFamily: E.fontBody, fontSize: 13.5, color: E.ink3, marginTop: 4, lineHeight: 1.4 }}>{a.body}</div>
              </div>
              <span style={{ fontFamily: E.fontUi, fontSize: 13, fontWeight: 700, color: a.accent, whiteSpace: 'nowrap', flexShrink: 0 }}>Xem lộ trình</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TopNav, Hero, AudiencePicker, redFilter });
