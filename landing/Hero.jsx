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
        <a href="#top" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, overflow: 'hidden' }}>
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
          </nav>
        )}

        {mobile && (
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <button aria-label="Menu" onClick={() => setOpen(o => !o)} style={{
              width: 44, height: 44, borderRadius: 12, background: open ? E.red : E.surfaceAlt,
              border: `1px solid ${open ? E.red : E.line}`,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={open ? '#fff' : E.ink} strokeWidth="2.2" strokeLinecap="round">
                {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                      : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
              </svg>
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
            Nhận lộ trình MIỄN PHÍ
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const mobile = useIsMobile(860);
  const checks = [
    "✓ Giáo viên sở hữu 7.5+ IELTS · TESOL/CELTA",
    "✓ Hệ sinh thái LMS học tập 24/7 study.engonow.com và dictation.engonow.com",
    "✓ 4 cơ sở phủ sóng phía Tây Sài Gòn + Mạng lưới Online toàn quốc",
  ];
  return (
    <section id="top" style={{
      position: 'relative', overflow: 'hidden',
      padding: 'clamp(40px, 5vw, 56px) clamp(20px, 5vw, 48px) clamp(56px, 6vw, 76px)',
      background: `linear-gradient(180deg, ${E.cream} 0%, #FFFFFF 72%)`,
    }}>
      <div className="noise"></div>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1.02fr 0.98fr',
          gap: mobile ? 8 : 56, alignItems: 'center',
        }}>
          {/* Left column */}
          <div style={{ order: mobile ? 2 : 1 }}>
            <h1 style={{
              fontFamily: E.fontHead, fontWeight: 800,
              fontSize: 'clamp(32px, 6.4vw, 52px)', lineHeight: 1.08, letterSpacing: '-0.025em',
              color: E.inkHead, margin: 0,
            }}>
              Bứt phá <span style={{ color: E.red }}>IELTS&nbsp;7.0–8.0</span> chỉ với một nửa thời gian
            </h1>

            <div style={{
              fontFamily: E.fontUi,
              fontSize: mobile ? '18px' : '20px',
              color: E.ink2,
              marginTop: 16,
              fontWeight: 500,
              lineHeight: 1.4,
              fontStyle: 'italic',
            }}>
              Đầu tư thông minh từ 1.500.000đ/tháng.
            </div>

            {/* Fused trust tick list — benefit + proof */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24 }}>
              {checks.map((item) => {
                const cleanText = item.replace(/^✓\s*/, '');
                return (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill={E.red} style={{ flexShrink: 0, marginTop: 1 }}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.2 14.2l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z"/></svg>
                    <div style={{ lineHeight: 1.35 }}>
                      <span style={{ fontFamily: E.fontUi, fontSize: 15, fontWeight: 700, color: E.ink }}>{cleanText}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
              <Pill href="#final-cta" variant="primary" style={mobile ? { width: '100%' } : undefined}>
                Nhận lộ trình MIỄN PHÍ
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

const redFilter = 'brightness(0) saturate(100%) invert(28%) sepia(38%) saturate(1709%) hue-rotate(316deg) brightness(85%) contrast(92%)';

function HeroVisual({ mobile }) {
  const cardPad = mobile ? '10px 12px' : '13px 16px';
  const numSize = mobile ? 26 : 32;
  return (
    <div style={{ position: 'relative', minHeight: mobile ? 300 : 440, maxWidth: mobile ? 460 : 'none', margin: mobile ? '0 auto' : 0 }}>
      {/* Red circle backdrop */}
      <div style={{
        position: 'absolute', top: 0, right: mobile ? '6%' : 10, width: mobile ? 280 : 380, height: mobile ? 280 : 380,
        borderRadius: '50%',
        background: `radial-gradient(circle at 46% 40%, ${E.redTint} 0%, ${E.cream2} 56%, transparent 72%)`,
      }} />

      {/* Photo — drag-drop replaceable slot, full 3:2 cutout, never cropped */}
      <div style={{ position: 'relative' }}>
        <Slot id="hero-student" w="100%" h={mobile ? 300 : 430} radius={20} fit="contain"
          placeholder="Kéo ảnh học viên vào đây (áo đỏ, tai nghe, cầm tài liệu IELTS)" />
      </div>

      {/* Floating: time saved */}
      <div style={{
        position: 'absolute', bottom: mobile ? 8 : 24, right: mobile ? 0 : -8, zIndex: 4,
        background: '#fff', borderRadius: 14, padding: cardPad,
        boxShadow: E.shadowXl, border: `1px solid ${E.line}`,
      }}>
        <div style={{ fontFamily: E.fontUi, fontSize: 10, fontWeight: 600, color: E.ink3 }}>Rút ngắn</div>
        <div style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: numSize, color: E.red, lineHeight: 1, margin: '2px 0' }}>50%</div>
        <div style={{ fontFamily: E.fontUi, fontSize: 10, fontWeight: 600, color: E.ink3 }}>thời gian ôn luyện</div>
      </div>
    </div>
  );
}

// SECTION 2 — audience picker (WHITE)
function AudiencePicker() {
  const mobile = useIsMobile(760);
  const audiences = [
    { id: 'student', tag: 'Học sinh Cấp 3', body: 'Xét tuyển đại học bằng IELTS', icon: 'student', tint: E.redSoft, accent: E.red, href: '#segment-student' },
    { id: 'worker', tag: 'Sinh viên & Người đi làm', body: 'Du học · Định cư · Sự nghiệp', icon: 'bullseye-arrow', iconPng: 'man-laptop', tint: E.slateSoft, accent: E.slate, href: '#segment-worker' },
    { id: 'parent', tag: 'Phụ huynh', body: 'Đồng hành cùng con', icon: 'heart-health-muscle', tint: E.blueSoft, accent: E.blue, href: '#segment-parent' },
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={a.accent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TopNav, Hero, AudiencePicker, redFilter });
