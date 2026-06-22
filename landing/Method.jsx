// Sec 3: Pain (cream) · Sec 4: Framework (pale blue) · Sec 5: Results (white)

function ProblemSection() {
  const mobile = useIsMobile(820);
  const pains = [
    'Lớp quá đông, giáo viên khó theo sát.',
    'Không ai sửa bài Writing/Speaking chi tiết.',
    'Thiếu môi trường luyện tập thực tế mỗi ngày.',
    'Học nhiều nhưng không thấy tiến bộ.',
  ];
  const bubbles = ['Lớp đông, ít tương tác', 'Không ai sửa bài chi tiết', 'Thiếu môi trường cọ xát', 'Lộ trình quá dài'];
  return (
    <section className="section" style={{ background: E.greyPanel, borderBottom: `1px solid ${E.greyLine}` }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1.05fr', gap: mobile ? 32 : 56, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(26px,4vw,38px)', lineHeight: 1.14, letterSpacing: '-0.02em', color: E.inkHead, margin: '0 0 24px' }}>
              Tại sao bạn vẫn ở band <span style={{ color: E.red }}>5.5</span>?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 26 }}>
              {pains.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 999, background: '#fff', border: `1px solid ${E.redTint}`, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={E.red} strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </span>
                  <div style={{ fontFamily: E.fontBody, fontSize: 15.5, lineHeight: 1.45, color: E.ink }}>{p}</div>
                </div>
              ))}
            </div>

            {/* Bridge card */}
            <div style={{
              padding: '18px 20px', background: '#fff', color: E.ink,
              borderRadius: 14, border: `1px solid ${E.redTint}`,
            }}>
              <p style={{ fontFamily: E.fontBody, fontSize: 14.5, lineHeight: 1.5, margin: 0, color: E.ink2 }}>
                <strong style={{ color: E.red }}>ENGONOW IELTS Master</strong> hóa giải bài toán này bằng sự tận tâm từ đội ngũ giáo viên và hệ thống LMS độc quyền.
              </p>
            </div>
          </div>

          {/* Right — photo + thought bubbles (bubbles desktop-only) */}
          <div style={{ position: 'relative' }}>
            <Slot id="pain-student" w="100%" h={mobile ? 300 : 400} radius={20}
              placeholder="Ảnh học viên nam căng thẳng, học một mình bên laptop" />
            {!mobile && (
              <>
                <div style={{ position: 'absolute', top: -22, right: 60, zIndex: 3 }}>
                  <svg width="48" height="40" viewBox="0 0 48 40" fill="none" stroke={E.ink4} strokeWidth="2.4" strokeLinecap="round">
                    <path d="M10 30 Q4 22 13 19 Q23 16 20 26 Q18 33 28 29 Q39 25 33 16 Q28 9 38 8"/>
                  </svg>
                </div>
                <div style={{ position: 'absolute', top: 10, right: -16, display: 'flex', flexDirection: 'column', gap: 14, zIndex: 3 }}>
                  {bubbles.map((b, i) => (
                    <div key={i} style={{
                      background: '#fff', borderRadius: 999, padding: '10px 18px',
                      boxShadow: E.shadowLg, border: `1px solid ${E.line}`,
                      fontFamily: E.fontUi, fontSize: 13, fontWeight: 600, color: E.ink2,
                      whiteSpace: 'nowrap', alignSelf: i % 2 ? 'flex-end' : 'flex-start',
                    }}>{b}</div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= FRAMEWORK — pale blue method band =============
function WhyFast() {
  const mobile = useIsMobile(760);
  const items = [
    { icon: 'bullseye-arrow', t: 'Test đầu vào', t2: 'định vị trình độ' },
    { icon: 'admin-alt', t: 'Lớp sĩ số nhỏ', t2: 'kèm sát từng em' },
    { icon: 'edit', t: 'Sửa bài 1-1', t2: 'theo 4 tiêu chí' },
    { icon: 'dashboard-monitor', t: 'Luyện tập trên LMS', t2: 'mọi lúc mọi nơi' },
    { icon: 'heart-health-muscle', t: 'Giáo viên chủ nhiệm', t2: 'theo sát tiến độ' },
  ];
  return (
    <section id="why-fast" className="section" style={{ background: E.greyPanel, borderTop: `1px solid ${E.greyLine}`, borderBottom: `1px solid ${E.greyLine}` }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14,
            padding: '7px 16px', background: E.blueSoft, border: `1px solid ${E.blueTint}`,
            borderRadius: 999, fontFamily: E.fontUi, fontSize: 12, fontWeight: 700,
            color: E.blueDeep, letterSpacing: '0.06em',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={E.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18h6M10 21h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"/>
            </svg>
            PHƯƠNG PHÁP ĐỘC QUYỀN
          </span>
          <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,32px)', color: E.inkHead, margin: 0, letterSpacing: '-0.02em' }}>
            Vì sao học viên tiến bộ nhanh tại ENGONOW?
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(5, 1fr)', gap: mobile ? 20 : 0, rowGap: mobile ? 28 : 0 }}>
          {items.map((it, i) => (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12,
              padding: mobile ? '0 8px' : '0 16px',
              borderLeft: (!mobile && i) ? `1px solid ${E.blueTint}` : 'none',
              gridColumn: (mobile && i === 4) ? 'span 2' : 'auto',
            }}>
              <span style={{ width: 54, height: 54, borderRadius: 14, background: '#fff', border: `1px solid ${E.blueTint}`, boxShadow: E.shadowSm, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <EIcon name={it.icon} size={26} style={{ filter: blueFilter }} />
              </span>
              <div style={{ fontFamily: E.fontUi, fontSize: 14, fontWeight: 700, color: E.ink, lineHeight: 1.35 }}>
                {it.t}<br/>{it.t2}
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontFamily: E.fontBody, fontSize: 14, color: E.ink3, fontStyle: 'italic', margin: '32px 0 0' }}>
          Được xây dựng trên <strong style={{ color: E.blueDeep, fontStyle: 'normal', borderBottom: `2px solid ${E.steam}`, paddingBottom: 2 }}>E-N-G-O-N-O-W</strong> Framework
        </p>
      </div>
    </section>
  );
}

// ============= RESULTS — spotlight carousel (white) =============
function ResultsSection() {
  const mobile = useIsMobile(760);
  const winners = [
    { slot: 'result-1', name: 'ĐOÀN MINH NHẬT', school: 'THPT Bình Phú', band: '7.5',
      quote: 'Em học IELTS với nhiều lớp nhưng vẫn không tự tin. Thầy cô EngoNow không chỉ dạy kiến thức mà còn truyền động lực để em kiên trì mỗi ngày. Kết quả 7.5 là minh chứng cho sự nỗ lực và phương pháp đúng đắn!' },
    { slot: 'result-2', name: 'LÊ PHAN GIA BẢO', school: 'THPT Bình Phú', band: '8.0',
      quote: 'EngoNow giúp em cải thiện toàn diện 4 kỹ năng. Các thầy cô sửa bài chi tiết, tận tâm và theo sát kèm đến từng buổi. 8.0 IELTS — vượt ngoài mong đợi của bản thân!' },
    { slot: 'result-3', name: 'LÊ ÁNH THƯ', school: 'THPT Mạc Đĩnh Chi', band: '7.5',
      quote: 'Môi trường học thân thiện, lịch học linh hoạt giúp em cân bằng việc học ở trường và ôn IELTS. Cảm ơn EngoNow và các thầy cô rất nhiều!' },
  ];
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = winners.length;
  const go = (d) => setIdx(i => (i + d + n) % n);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, n]);

  const Arrow = ({ dir, inline }) => (
    <button
      onClick={() => go(dir)}
      aria-label={dir < 0 ? 'Trước' : 'Sau'}
      style={{
        position: inline ? 'static' : 'absolute', top: inline ? undefined : '50%',
        transform: inline ? 'none' : 'translateY(-50%)',
        [dir < 0 ? 'left' : 'right']: inline ? undefined : -22, zIndex: 6,
        width: 44, height: 44, borderRadius: 999, background: '#fff',
        border: `1px solid ${E.line}`, boxShadow: E.shadowLg, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={E.ink} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {dir < 0 ? <polyline points="15 18 9 12 15 6"/> : <polyline points="9 18 15 12 9 6"/>}
      </svg>
    </button>
  );

  const Dots = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
      {winners.map((_, i) => (
        <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i+1}`}
          style={{
            width: i === idx ? 26 : 9, height: 9, borderRadius: 999,
            background: i === idx ? E.red : E.lineStrong, border: 'none', cursor: 'pointer',
            transition: 'all 260ms cubic-bezier(0.4,0,0.2,1)', padding: 0,
          }} />
      ))}
    </div>
  );

  return (
    <section id="results" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,32px)', color: E.inkHead, margin: 0, letterSpacing: '-0.02em' }}>
            Học thật – Thi thật – Kết quả thật
          </h2>
        </div>

        {/* Stat bar */}
        <div style={{
          maxWidth: 920, margin: '0 auto 32px',
          background: '#fff', borderRadius: 18, border: `1px solid ${E.line}`, boxShadow: E.shadowSm,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
          {[
            ['5.000+', 'Lượt học viên'],
            ['300+', 'Khóa học thành công'],
            ['99%', 'Đánh giá tích cực'],
          ].map(([num, label], i) => (
            <div key={label} style={{
              textAlign: 'center', padding: mobile ? '16px 8px' : '22px 16px',
              borderLeft: i ? `1px solid ${E.line}` : 'none',
            }}>
              <div style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(26px,4.2vw,40px)', color: E.red, lineHeight: 1, letterSpacing: '-0.02em' }}>{num}</div>
              <div style={{ fontFamily: E.fontUi, fontSize: mobile ? 10.5 : 12.5, fontWeight: 600, color: E.ink3, marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div
          style={{ position: 'relative', maxWidth: 920, margin: '0 auto' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {!mobile && <Arrow dir={-1} />}
          {!mobile && <Arrow dir={1} />}

          {/* Viewport */}
          <div style={{ overflow: 'hidden', borderRadius: 22 }}>
            <div style={{ display: 'flex', transform: `translateX(-${idx * 100}%)`, transition: 'transform 520ms cubic-bezier(0.4,0,0.2,1)' }}>
              {winners.map(w => (
                <div key={w.slot} style={{ flex: '0 0 100%', minWidth: 0 }}>
                  <div style={{
                    background: '#fff', borderRadius: 22, border: `1px solid ${E.line}`, boxShadow: E.shadowLg,
                    padding: mobile ? '24px 20px 28px' : 32,
                    display: 'grid', gridTemplateColumns: mobile ? '1fr' : '230px 1fr', gap: mobile ? 28 : 32, alignItems: 'center',
                  }}>
                    {/* Photo + band */}
                    <div style={{ position: 'relative', width: mobile ? 180 : 'auto', margin: mobile ? '0 auto' : 0 }}>
                      <Slot id={w.slot} w="100%" h={mobile ? 220 : 280} radius={18} placeholder="Ảnh học viên" />
                      <div style={{
                        position: 'absolute', bottom: -14, left: '50%', transform: 'translateX(-50%)',
                        background: E.red, color: '#fff', borderRadius: 12, padding: '8px 16px',
                        boxShadow: E.shadowRedSm, textAlign: 'center', whiteSpace: 'nowrap',
                      }}>
                        <div style={{ fontFamily: E.fontUi, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', opacity: 0.85 }}>OVERALL</div>
                        <div style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 22, lineHeight: 1 }}>{w.band}</div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div style={{ textAlign: mobile ? 'center' : 'left', paddingTop: mobile ? 8 : 0 }}>
                      <div style={{ display: 'flex', gap: 3, marginBottom: 12, justifyContent: mobile ? 'center' : 'flex-start' }}>
                        {[0,1,2,3,4].map(s => (
                          <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={E.gold}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                        ))}
                      </div>
                      <p style={{ fontFamily: E.fontBody, fontSize: mobile ? 15 : 17, lineHeight: 1.6, color: E.ink, margin: '0 0 18px', fontStyle: 'italic' }}>"{w.quote}"</p>
                      <div style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 17, color: E.inkHead, letterSpacing: '-0.01em' }}>{w.name}</div>
                      <div style={{ fontFamily: E.fontUi, fontSize: 13, color: E.ink3, marginTop: 2 }}>{w.school} · Học viên ENGONOW</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: mobile ? 20 : 0, marginTop: 22 }}>
            {mobile && <Arrow dir={-1} inline />}
            <Dots />
            {mobile && <Arrow dir={1} inline />}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <a href="https://engonow.com/gioi-thieu/bang-vang-thanh-tich-engonow/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: E.fontUi, fontSize: 14, fontWeight: 700, color: E.red }}>
            Xem thêm 300+ câu chuyện
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProblemSection, WhyFast, ResultsSection });
