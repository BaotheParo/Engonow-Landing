// Sec 3: Pain (cream) · Sec 4: Framework (pale blue) · Sec 5: Results (white)

function ProblemSection() {
  const mobile = useIsMobile(820);
  const [hovered, setHovered] = React.useState(false);
  const pains = [
    'Lớp quá đông, giáo viên khó theo sát.',
    'Không ai sửa bài Writing/Speaking chi tiết.',
    'Thiếu môi trường luyện tập thực tế mỗi ngày.',
    'Học nhiều nhưng không thấy tiến bộ.',
  ];
  return (
    <section className="section" style={{ background: '#F7F7F7', borderBottom: `1px solid ${E.greyLine}` }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 56, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(26px,4vw,38px)', lineHeight: 1.14, letterSpacing: '-0.02em', color: E.inkHead, margin: '0 0 24px' }}>
              Tại sao bạn vẫn ở band <span style={{ color: E.red }}>5.5</span>?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 26 }}>
              {pains.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 999, background: '#fff', border: `1px solid ${E.redTint}`, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={E.red} strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  </span>
                  <div style={{ fontFamily: E.fontBody, fontSize: 15.5, lineHeight: 1.45, color: E.ink }}>{p}</div>
                </div>
              ))}
            </div>

            {/* Bridge card (Giải pháp) */}
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                padding: '18px 20px', background: '#fff', color: E.ink,
                borderRadius: 14, border: `1px solid ${E.redTint}`,
                boxShadow: hovered ? E.shadowLg : E.shadowSm,
                transform: hovered ? 'translateY(-6px) scale(1.02)' : 'none',
                transition: 'transform 250ms ease, box-shadow 250ms ease',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={E.red}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  flexShrink: 0,
                  transform: hovered ? 'translateX(4px)' : 'none',
                  transition: 'transform 250ms ease',
                }}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              <p style={{ fontFamily: E.fontBody, fontSize: 14.5, lineHeight: 1.5, margin: 0, color: E.ink2 }}>
                <strong style={{ color: E.red }}>ENGONOW IELTS Master</strong> hóa giải bài toán này bằng sự tận tâm từ đội ngũ giáo viên và hệ thống LMS độc quyền.
              </p>
            </div>
          </div>

          {/* Right — photo (bubbles completely removed) */}
          <div style={{ position: 'relative' }}>
            <Slot id="pain-student" w="100%" h={mobile ? 300 : 400} radius={20}
              placeholder="Ảnh học viên nam căng thẳng, học một mình bên laptop" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= FRAMEWORK — pale blue method band =============
function WhyFast() {
  const mobile = useIsMobile(760);
  const [activeIcon, setActiveIcon] = React.useState(0);

  const deepBlueFilter = 'brightness(0) saturate(100%) invert(11%) sepia(97%) saturate(6669%) hue-rotate(248deg) brightness(85%) contrast(105%)';

  const items = [
    {
      icon: 'bullseye-arrow',
      title: "Test đầu vào định vị trình độ",
      desc: "Không học tràn lan. Mỗi học viên đều được phân tích điểm mạnh - điểm cần cải thiện để thiết kế lộ trình cá nhân hóa ngay từ bước đầu tiên."
    },
    {
      icon: 'admin-alt',
      title: "Lớp sĩ số nhỏ kèm sát từng em",
      desc: "Nói không với lớp học nhồi nhét. Sĩ số tinh gọn giúp giáo viên nắm rõ năng lực, theo sát tốc độ tiếp thu và tương tác liên tục với từng học viên."
    },
    {
      icon: 'edit',
      title: "Sửa bài 1-1 theo 4 tiêu chí",
      desc: "Không nhận lại những điểm số vô hồn. Mọi bài Writing và Speaking đều được giáo viên trực tiếp mổ xẻ và tinh chỉnh chi tiết để khắc phục triệt để lỗi sai."
    },
    {
      icon: 'dashboard-monitor',
      title: "Luyện tập trên LMS mọi lúc mọi nơi",
      desc: "Tiên phong ứng dụng công nghệ vào giáo dục với hệ sinh thái độc quyền study.engonow.com và dictation.engonow.com, giúp duy trì môi trường cọ xát tiếng Anh 24/7."
    },
    {
      icon: 'heart-health-muscle',
      title: "Giáo viên chủ nhiệm theo sát tiến độ",
      desc: "Cam kết không để ai bị bỏ lại phía sau. Hệ thống báo cáo minh bạch kết hợp cùng giáo viên chủ nhiệm đôn đốc, hỗ trợ kịp thời trong suốt khóa học."
    },
  ];

  return (
    <section id="why-fast" className="section" style={{ background: '#FFFFFF', borderTop: `1px solid ${E.greyLine}`, borderBottom: `1px solid ${E.greyLine}`, position: 'relative', overflow: 'hidden' }}>
      {/* Background World Map / Educational Graphic Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 1200,
        height: 600,
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        color: '#1D00B7',
      }}>
        <svg width="1200" height="600" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: 1200, flexShrink: 0 }}>
          {/* Dotted map abstraction / network graph */}
          <circle cx="200" cy="200" r="8" fill="currentColor" />
          <circle cx="240" cy="220" r="4" fill="currentColor" />
          <circle cx="280" cy="180" r="6" fill="currentColor" />
          <circle cx="320" cy="210" r="5" fill="currentColor" />
          <circle cx="400" cy="250" r="7" fill="currentColor" />
          <circle cx="480" cy="220" r="5" fill="currentColor" />
          <circle cx="560" cy="270" r="8" fill="currentColor" />
          <circle cx="640" cy="230" r="6" fill="currentColor" />
          <circle cx="720" cy="280" r="5" fill="currentColor" />
          <circle cx="800" cy="240" r="8" fill="currentColor" />
          <circle cx="880" cy="260" r="4" fill="currentColor" />
          <circle cx="960" cy="210" r="7" fill="currentColor" />
          <circle cx="1040" cy="230" r="5" fill="currentColor" />

          {/* Connections */}
          <path d="M200 200 L280 180 L400 250 L560 270 L640 230 L800 240 L960 210 L1040 230" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M240 220 L320 210 L480 220 L640 230 L720 280 L880 260" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M280 180 L480 220 L800 240 M560 270 L880 260" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />

          {/* Stylized concentric globe lines on the background */}
          <circle cx="600" cy="300" r="280" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="600" cy="300" r="180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <ellipse cx="600" cy="300" rx="550" ry="180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <ellipse cx="600" cy="300" rx="350" ry="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,32px)', color: E.inkHead, margin: 0, letterSpacing: '-0.02em' }}>
            Vì sao học viên tiến bộ vượt bậc tại ENGONOW IELTS Master?
          </h2>
          <p style={{
            fontFamily: E.fontBody,
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: 1.5,
            color: E.ink3,
            marginTop: 12,
            marginBottom: 0,
            maxWidth: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Lộ trình tối ưu hóa nhờ E-N-G-O-N-O-W Framework và 4 trụ cột: Toàn diện - Cá nhân hóa – Tiếp cận mọi đối tượng - Nhân văn.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(5, 1fr)', gap: mobile ? 20 : 0, rowGap: mobile ? 28 : 0 }}>
          {items.map((it, i) => {
            const isActive = activeIcon === i;
            return (
              <div key={i}
                onClick={() => setActiveIcon(isActive ? null : i)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12,
                  padding: mobile ? '12px 8px' : '20px 16px',
                  borderLeft: (!mobile && i) ? `1px solid ${E.blueTint}` : 'none',
                  gridColumn: (mobile && i === 4) ? 'span 2' : 'auto',
                  cursor: 'pointer',
                  borderRadius: 16,
                  background: isActive ? 'rgba(29, 0, 183, 0.03)' : 'transparent',
                  transition: 'background 250ms ease',
                }}
              >
                <span style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  background: '#ffffff',
                  border: `1px solid ${isActive ? '#1D00B7' : E.greyLine}`,
                  boxShadow: isActive ? '0 6px 16px rgba(29, 0, 183, 0.12)' : '0 4px 12px rgba(29, 0, 183, 0.06)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 250ms ease',
                  flexShrink: 0,
                }}>
                  <EIcon name={it.icon} size={26} style={{ filter: deepBlueFilter }} />
                </span>
                <div style={{
                  fontFamily: E.fontUi,
                  fontSize: 14,
                  fontWeight: 700,
                  color: isActive ? '#1D00B7' : E.ink,
                  lineHeight: 1.35,
                  transition: 'color 250ms ease',
                }}>
                  {it.title}
                </div>
                {/* Subtle indicator chevron */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 2,
                }}>
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke={isActive ? '#1D00B7' : E.ink3} 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{
                      transform: isActive ? 'rotate(180deg)' : 'none',
                      transition: 'transform 250ms ease, stroke 250ms ease',
                      opacity: 0.6,
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {/* Description with smooth transition */}
                <div style={{
                  height: isActive ? (mobile ? 'auto' : 115) : 0,
                  opacity: isActive ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'height 300ms ease, opacity 300ms ease, margin 300ms ease',
                  marginTop: isActive ? 8 : 0,
                }}>
                  <p style={{
                    fontFamily: E.fontBody,
                    fontSize: 13,
                    lineHeight: 1.45,
                    color: E.ink3,
                    margin: 0,
                  }}>
                    {it.desc}
                  </p>
                </div>
              </div>
            );
          })}
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
    {
      slot: 'result-1', name: 'ĐOÀN MINH NHẬT', school: 'THPT Bình Phú', band: '7.5',
      quote: 'Em học IELTS với nhiều lớp nhưng vẫn không tự tin. Thầy cô EngoNow không chỉ dạy kiến thức mà còn truyền động lực để em kiên trì mỗi ngày. Kết quả 7.5 là minh chứng cho sự nỗ lực và phương pháp đúng đắn!'
    },
    {
      slot: 'result-2', name: 'LÊ PHAN GIA BẢO', school: 'THPT Bình Phú', band: '8.0',
      quote: 'EngoNow giúp em cải thiện toàn diện 4 kỹ năng. Các thầy cô sửa bài chi tiết, tận tâm và theo sát kèm đến từng buổi. 8.0 IELTS — vượt ngoài mong đợi của bản thân!'
    },
    {
      slot: 'result-3', name: 'LÊ ÁNH THƯ', school: 'THPT Mạc Đĩnh Chi', band: '7.5',
      quote: 'Môi trường học thân thiện, lịch học linh hoạt giúp em cân bằng việc học ở trường và ôn IELTS. Cảm ơn EngoNow và các thầy cô rất nhiều!'
    },
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
        {dir < 0 ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );

  const Dots = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
      {winners.map((_, i) => (
        <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
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
                        {[0, 1, 2, 3, 4].map(s => (
                          <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={E.gold}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" /></svg>
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProblemSection, WhyFast, ResultsSection });
