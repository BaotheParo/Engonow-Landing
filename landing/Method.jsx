// Sec 3: Pain (cream) · Sec 4: Framework (pale blue) · Sec 5: Results (white)

function ProblemSection() {
  const mobile = useIsMobile(860);
  const [hovered, setHovered] = React.useState(false);
  const pains = [
    'Lớp quá đông, giáo viên khó theo sát.',
    'Không ai sửa bài Writing/Speaking chi tiết.',
    'Thiếu môi trường luyện tập thực tế mỗi ngày.',
    'Học nhiều nhưng không thấy tiến bộ.',
  ];
  return (
    <section className="section" style={{ background: E.surfaceAlt, borderBottom: `1px solid ${E.greyLine}` }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 56, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(26px,4vw,38px)', lineHeight: 1.14, letterSpacing: '-0.025em', color: E.inkHead, margin: '0 0 24px' }}>
              Tại sao bạn vẫn ở band <span style={{ color: E.red }}>5.5</span>?
            </h2>

            <div style={{ marginBottom: 26, borderTop: `1px solid ${E.line}` }}>
              {pains.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '13px 0', borderBottom: `1px solid ${E.line}` }}>
                  <span style={{ width: 18, height: 2, background: E.red, flexShrink: 0, marginTop: 10 }} />
                  <div style={{ fontFamily: E.fontBody, fontSize: 15.5, lineHeight: 1.45, color: E.ink }}>{p}</div>
                </div>
              ))}
            </div>

            {/* Bridge card (Giải pháp) */}
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                padding: '18px 22px', background: '#fff', color: E.ink,
                borderRadius: 14, border: `1px solid ${hovered ? E.red : E.redTint}`,
                boxShadow: hovered ? E.shadowLg : E.shadowSm,
                transform: hovered ? 'translateY(-6px) scale(1.02)' : 'none',
                transition: 'transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <p style={{ fontFamily: E.fontBody, fontSize: 14.5, lineHeight: 1.5, margin: 0, color: E.ink2 }}>
                <strong style={{ color: E.red }}>ENGONOW IELTS Master</strong> hóa giải bài toán này bằng sự tận tâm từ đội ngũ giáo viên và hệ thống LMS độc quyền.
              </p>
            </div>
          </div>

          {/* Right — photo (bubbles completely removed) */}
          <div style={{ position: 'relative' }}>
            <Slot id="pain-student" w="100%" h={mobile ? 300 : 400} radius={20}
              src="pain-student.jpg"
              placeholder="Ảnh học viên nam căng thẳng, học một mình bên laptop" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= FRAMEWORK — pale blue method band =============
function WhyFast() {
  const mobile = useIsMobile(900);
  const [activeIcon, setActiveIcon] = React.useState(null);

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
                  background: isActive ? E.dataSoft : 'transparent',
                  transition: 'background 250ms ease',
                }}
              >
                <span style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  background: isActive ? E.data : '#fff',
                  border: `1px solid ${isActive ? E.data : E.line}`,
                  color: isActive ? '#fff' : E.data,
                  boxShadow: isActive ? E.shadowMd : E.shadowSm,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: E.fontHead, fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em',
                  transition: 'all 250ms ease',
                  flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, '0')}
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
  const mobile = useIsMobile(860);
  const [val1, setVal1] = React.useState(0);
  const [val2, setVal2] = React.useState(0);
  const [val3, setVal3] = React.useState(0);
  const [linkHover, setLinkHover] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        const duration = 1500; // 1.5s
        const steps = 60; // 60fps
        const stepTime = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          const easeOutQuad = progress * (2 - progress);

          setVal1(Math.floor(easeOutQuad * 5000));
          setVal2(Math.floor(easeOutQuad * 300));
          setVal3(Math.floor(easeOutQuad * 99));

          if (currentStep >= steps) {
            clearInterval(timer);
            setVal1(5000);
            setVal2(300);
            setVal3(99);
          }
        }, stepTime);

        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const winners = [
    {
      slot: 'result-3',
      src: 'testi-anh-thu.jpg',
      name: 'LÊ ANH THƯ',
      subtitle: 'THPT MẠC ĐĨNH CHI',
      band: '7.5',
      quote: 'Từng loay hoay tự học và bế tắc khi Writing, Speaking thiếu ý tưởng, còn Reading, Listening chưa tiếp cận đúng phương pháp. Nhờ phương pháp M.E.E.R. tại Engonow, tư duy được hệ thống lại, khung ý trở nên rõ ràng và khả năng nắm bắt thông tin cải thiện vượt bậc. Kết quả IELTS 7.5 ngay lần thi đầu tiên là minh chứng sắc nét cho một lộ trình đúng đắn đi cùng sự kiên trì.'
    },
    {
      slot: 'result-1',
      src: 'testi-minh-nhat.jpg',
      name: 'ĐOÀN MINH NHẬT',
      subtitle: 'THPT BÌNH PHÚ',
      band: '7.5',
      quote: 'Ban đầu, mục tiêu học IELTS chỉ để đạt chứng chỉ do tâm lý FOMO. Tuy nhiên, quá trình rèn luyện tại Engonow đã giúp làm chủ ngôn ngữ, mở rộng tư duy và gia tăng lựa chọn trong cuộc sống. Mức điểm IELTS 7.5 không chỉ là một kết quả học thuật, mà còn đánh dấu sự trưởng thành trong nhận thức để chủ động định hướng tương lai.'
    },
    {
      slot: 'result-2',
      src: 'testi-gia-bao.jpg',
      name: 'LÊ PHAN GIA BẢO',
      subtitle: 'THPT BÌNH PHÚ',
      band: '8.0',
      quote: 'Từng mắc kẹt trong sự trì hoãn, dù có nền tảng từ vựng nhưng vẫn \'chững band\' do thiếu phương pháp và kỷ luật. Nhờ được định hướng lại cách tiếp cận ngôn ngữ một cách hệ thống tại Engonow, mọi giới hạn đã được phá vỡ. Kết quả IELTS 8.0 không chỉ là thành tích xuất sắc, mà còn là minh chứng vững chắc cho sự thay đổi toàn diện trong tư duy và tính kỷ luật.'
    },
  ];

  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = winners.length;
  const go = (d) => setIdx(i => (i + d + n) % n);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % n), 3000);
    return () => clearInterval(t);
  }, [paused, n]);

  const Arrow = ({ dir }) => (
    <button
      onClick={() => go(dir)}
      aria-label={dir < 0 ? 'Trước' : 'Sau'}
      style={{
        height: 40, padding: '0 18px', borderRadius: 999, background: '#fff',
        border: `1px solid ${E.lineStrong}`, cursor: 'pointer', flexShrink: 0,
        fontFamily: E.fontUi, fontSize: 13, fontWeight: 700, color: E.ink, letterSpacing: '0.02em',
        transition: 'border-color 180ms ease, color 180ms ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = E.red; e.currentTarget.style.color = E.red; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = E.lineStrong; e.currentTarget.style.color = E.ink; }}
    >
      {dir < 0 ? 'Trước' : 'Sau'}
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
    <section ref={sectionRef} id="results" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,32px)', color: E.inkHead, margin: 0, letterSpacing: '-0.02em' }}>
            Hơn 5.000 học viên đã chinh phục mục tiêu học Tiếng Anh
          </h2>
        </div>

        {/* Stat bar */}
        <div style={{
          maxWidth: 920, margin: '0 auto 32px',
          background: '#fff', borderRadius: 18, border: `1px solid ${E.line}`, boxShadow: E.shadowSm,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
          {[
            [`${formatNumber(val1)}+`, 'Lượt học viên'],
            [`${val2}+`, 'Khóa học thành công'],
            [`${val3}%`, 'Đánh giá tích cực'],
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
          {/* Viewport */}
          <div style={{ overflow: 'hidden', borderRadius: 22 }}>
            <div style={{ display: 'flex', transform: `translateX(-${idx * 100}%)`, transition: 'transform 520ms cubic-bezier(0.4,0,0.2,1)' }}>
              {winners.map(w => (
                <div key={w.slot} style={{ flex: '0 0 100%', minWidth: 0 }}>
                  <div style={{
                    background: '#fff', borderRadius: 22, boxShadow: E.shadowLg,
                    padding: mobile ? '24px 20px 28px' : 32,
                    display: 'grid', gridTemplateColumns: mobile ? '1fr' : '230px 1fr', gap: mobile ? 28 : 32, alignItems: 'center',
                  }}>
                    {/* Photo — square slot matches square Hall-of-Fame image (band already baked in) */}
                    <div style={{ position: 'relative', width: mobile ? 180 : 'auto', margin: mobile ? '0 auto' : 0 }}>
                      <Slot id={w.slot} src={w.src} fit="cover" w="100%" h={mobile ? 180 : 230} radius={18} placeholder="Ảnh học viên" />
                    </div>

                    {/* Quote */}
                    <div style={{ textAlign: mobile ? 'center' : 'left', paddingTop: mobile ? 8 : 0 }}>
                      <div style={{ fontFamily: E.fontUi, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: E.red, marginBottom: 12 }}>
                        Cảm nhận học viên
                      </div>
                      <p style={{ fontFamily: E.fontBody, fontSize: mobile ? 15 : 17, lineHeight: 1.6, color: E.ink, margin: '0 0 18px', fontStyle: 'italic' }}>"{w.quote}"</p>
                      <div style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 17, color: E.inkHead, letterSpacing: '-0.01em' }}>{w.name}</div>
                      <div style={{ fontFamily: E.fontUi, fontSize: 13, color: E.ink3, marginTop: 2 }}>{w.subtitle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 24 }}>
            <Arrow dir={-1} />
            <Dots />
            <Arrow dir={1} />
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a
            href="https://engonow.com/gioi-thieu/bang-vang-thanh-tich-engonow/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setLinkHover(true)}
            onMouseLeave={() => setLinkHover(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: E.fontUi,
              fontSize: mobile ? 13.5 : 14.5,
              fontWeight: 700,
              color: linkHover ? '#fff' : E.red,
              textDecoration: 'none',
              padding: '12px 28px',
              borderRadius: 30,
              background: linkHover ? E.red : E.redSoft,
              border: `1.5px solid ${E.red}`,
              boxShadow: linkHover ? E.shadowRedSm : 'none',
              transform: linkHover ? 'translateY(-2px)' : 'none',
              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}
          >
            <span>
              Xem thêm 100+ câu chuyện thành công
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProblemSection, WhyFast, ResultsSection });
