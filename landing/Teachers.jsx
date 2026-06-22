// Sec 6: Teachers — devotions + horizontal teacher cards
// Sec 7: Pricing band

function TeachersSection() {
  const mobile = useIsMobile(760);
  const devotions = [
    { icon: 'edit', title: 'Sửa Writing 1-1 chi tiết', body: 'Mổ xẻ theo 4 tiêu chí, chấm dứt điểm số khô khan' },
    { icon: 'heart-health-muscle', title: 'Speaking 1-1 mỗi tuần', body: 'Luyện nói 1-1 cho đến khi thực sự tự tin' },
    { icon: 'envelope', title: 'Chủ động liên hệ khi cần', body: 'Giáo viên chủ động theo sát và hỗ trợ kịp thời' },
  ];
  const teachers = [
    { name: 'Thầy Huỳnh Thế Mạnh', band: '8.0', slot: 'teacher-1' },
    { name: 'Thầy Trần Anh Kha',   band: '8.0', slot: 'teacher-2' },
    { name: 'Thầy Trần Bạch Đằng', band: '8.0', slot: 'teacher-3' },
    { name: 'Cô Felicia Phạm', band: '8.5', slot: 'teacher-4' },
  ];
  return (
    <section id="teachers" className="section" style={{ background: E.greyPanel, borderTop: `1px solid ${E.greyLine}` }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,32px)', color: E.inkHead, margin: '0 0 36px', letterSpacing: '-0.02em' }}>
          Đội ngũ giáo viên tận tâm – Chuyên môn vững vàng
        </h2>

        {/* 3 inline devotions */}
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, marginBottom: 36 }}>
          {devotions.map((d, i) => (
            <div key={d.title} style={{
              display: 'flex', gap: 14, alignItems: 'flex-start',
              padding: mobile ? '0' : '0 28px',
              borderLeft: (!mobile && i) ? `1px solid ${E.line}` : 'none',
              borderTop: (mobile && i) ? `1px solid ${E.line}` : 'none',
              paddingTop: (mobile && i) ? 18 : undefined,
              marginTop: (mobile && i) ? 18 : undefined,
            }}>
              <div>
                <div style={{ fontFamily: E.fontHead, fontWeight: 700, fontSize: 16, color: E.inkHead, letterSpacing: '-0.01em' }}>{d.title}</div>
                <div style={{ fontFamily: E.fontBody, fontSize: 13, lineHeight: 1.45, color: E.ink3, marginTop: 4 }}>{d.body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 teacher cards */}
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: mobile ? 12 : 18 }}>
          {teachers.map(t => <TeacherCard key={t.slot} t={t} />)}
        </div>
      </div>
    </section>
  );
}

function TeacherCard({ t }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff', borderRadius: 16, padding: 14,
        border: `1px solid ${hover ? E.red : E.line}`,
        boxShadow: hover ? E.shadowLg : E.shadowSm,
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'transform 220ms cubic-bezier(0.4,0,0.2,1), box-shadow 220ms ease, border-color 220ms ease',
        display: 'flex', gap: 14, alignItems: 'center', cursor: 'default',
      }}
    >
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <Slot id={t.slot} w={72} h={84} radius={10} placeholder="Ảnh GV" />
        <span style={{
          position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)',
          fontFamily: E.fontUi, fontSize: 9.5, fontWeight: 700, color: '#fff', background: E.red,
          padding: '2px 8px', borderRadius: 999, whiteSpace: 'nowrap', boxShadow: E.shadowRedSm,
        }}>{t.band}</span>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: E.fontHead, fontWeight: 700, fontSize: 14.5, color: hover ? E.red : E.inkHead, lineHeight: 1.25, letterSpacing: '-0.01em', transition: 'color 200ms ease' }}>{t.name}</div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={E.red} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span style={{ fontFamily: E.fontUi, fontSize: 11.5, fontWeight: 600, color: E.ink3 }}>TESOL · IELTS {t.band}</span>
        </div>
      </div>
    </div>
  );
}

// ============= PRICING BAND =============
function PricingSection() {
  return (
    <section id="pricing" className="section-tight" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{
          background: E.redSoft, borderRadius: 28, padding: '36px 44px',
          display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 36, alignItems: 'center',
          border: `1px solid ${E.redTint}`,
        }}>
          {/* Illustration */}
          <div style={{ width: 130, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="120" height="96" viewBox="0 0 120 96" fill="none">
              {/* coins stack */}
              <g>
                <ellipse cx="28" cy="80" rx="22" ry="7" fill="#E9A93A"/>
                <rect x="6" y="64" width="44" height="16" fill="#F2B860"/>
                <ellipse cx="28" cy="64" rx="22" ry="7" fill="#F6C97A"/>
                <ellipse cx="28" cy="58" rx="17" ry="6" fill="#E9A93A"/>
                <ellipse cx="28" cy="58" rx="17" ry="6" fill="#F6C97A"/>
              </g>
              {/* grad cap */}
              <path d="M56 18 L96 32 L56 46 L16 32 Z" fill={E.red}/>
              <path d="M78 39 L78 54 Q66 62 54 54 L54 40" stroke={E.red} strokeWidth="4" fill="none"/>
              <line x1="96" y1="32" x2="96" y2="48" stroke="#E9A93A" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="96" cy="50" r="3" fill="#E9A93A"/>
              {/* calculator */}
              <rect x="66" y="54" width="38" height="34" rx="5" fill="#fff" stroke={E.red} strokeWidth="2.5"/>
              <rect x="71" y="59" width="28" height="9" rx="2" fill={E.redTint}/>
              <g fill={E.red}>
                <circle cx="76" cy="76" r="2.2"/><circle cx="85" cy="76" r="2.2"/><circle cx="94" cy="76" r="2.2"/>
                <circle cx="76" cy="83" r="2.2"/><circle cx="85" cy="83" r="2.2"/><circle cx="94" cy="83" r="2.2"/>
              </g>
            </svg>
          </div>

          {/* Text */}
          <div>
            <h2 style={{ fontFamily: E.fontHead, fontWeight: 700, fontSize: 30, color: E.inkHead, margin: 0, letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              Học phí minh bạch<br/>Chỉ từ <span style={{ color: E.red }}>1.500.000đ/tháng</span>
            </h2>
            <p style={{ fontFamily: E.fontBody, fontSize: 15.5, lineHeight: 1.55, color: E.ink2, margin: '12px 0 0' }}>
              Chất lượng cao, mức giá phù hợp ngân sách gia đình Việt
            </p>
          </div>

          <Pill href="#final-cta" variant="primary" style={{ padding: '18px 36px', fontSize: 16, flexShrink: 0 }}>
            Nhận lộ trình miễn phí
          </Pill>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TeachersSection, PricingSection });
