// Sec 11: FAQ (2-column)
// Sec 12: Final CTA red band

function FAQSection() {
  const mobile = useIsMobile(860);
  const faqs = [
    {
      q: 'ENGONOW cam kết điều gì với người học?',
      a: 'Chúng tôi cam kết về chất lượng đồng hành: mỗi học viên có lộ trình cá nhân hoá theo trình độ đầu vào, được sửa bài 1-1 theo tiêu chí chấm, và nhận báo cáo tiến độ minh bạch định kỳ. Giáo viên chủ nhiệm theo sát và điều chỉnh lộ trình kịp thời. Kết quả học tập phụ thuộc vào sự phối hợp giữa lộ trình, chất lượng giảng dạy và mức độ chuyên cần, hoàn thành bài tập của mỗi học viên.'
    },
    {
      q: 'Mất bao lâu để đạt IELTS 6.5–7.0?',
      a: 'Thời gian phụ thuộc vào trình độ đầu vào, mục tiêu và mức độ chuyên cần của mỗi học viên. Sau bài test định vị, giáo viên sẽ tư vấn khung thời gian phù hợp với riêng bạn. Hệ thống LMS luyện tập cùng lớp sĩ số nhỏ giúp việc học tập trung và hiệu quả hơn.'
    },
    {
      q: 'Giáo viên có sửa Writing/Speaking 1-1 không?',
      a: 'Có. Mỗi bài Writing được sửa chi tiết theo bốn tiêu chí chấm thi, và học viên có buổi Speaking 1-1 hàng tuần — áp dụng cho cả hình thức Online và Offline.'
    },
    {
      q: 'Lớp học Online có hiệu quả không?',
      a: 'Lớp Online giữ sĩ số tinh gọn và vẫn duy trì quy trình sửa bài 1-1 hàng tuần như lớp Offline. Nhiều học viên đã tiến bộ tốt qua hình thức Online nhờ tính tương tác cao và hệ thống luyện tập LMS đi kèm.'
    },
    {
      q: 'Học phí đã bao gồm những gì?',
      a: 'Học phí từ 1.500.000đ/tháng đã bao gồm: lớp học, giáo viên chủ nhiệm, sửa bài 1-1, quyền truy cập study.engonow.com & dictation.engonow.com trong suốt khoá học, và báo cáo tiến độ minh bạch. Không phát sinh phí ẩn.'
    },
    {
      q: 'Có được học thử LMS 7 ngày miễn phí không?',
      a: 'Có. Bạn được trải nghiệm miễn phí study.engonow.com và dictation.engonow.com trong 7 ngày để luyện nghe, chép chính tả và làm bài mẫu trước khi đăng ký. Để lại số điện thoại, đội ngũ sẽ kích hoạt tài khoản học thử cho bạn.'
    },
    {
      q: 'Lịch học có linh hoạt cho người bận rộn không?',
      a: 'Rất linh hoạt. Có lớp buổi tối, cuối tuần và lớp Online. Bạn có thể chuyển sang học Online khi bận đột xuất, và bảo lưu tối đa 6 tháng khi cần.'
    }
  ];
  const [open, setOpen] = React.useState(0);
  const left = faqs.filter((_, i) => i % 2 === 0);
  const right = faqs.filter((_, i) => i % 2 === 1);
  const renderCol = (arr) => arr.map((f) => {
    const idx = faqs.indexOf(f);
    const isOpen = open === idx;
    return (
      <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
        <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : idx)} style={{ fontSize: 16 }}>
          <span>{f.q}</span>
          <span className="faq-icon">+</span>
        </button>
        <div className="faq-a">
          <div style={{ fontFamily: E.fontBody, fontSize: 14.5, lineHeight: 1.6, color: E.ink2, paddingRight: 40 }}>{f.a}</div>
        </div>
      </div>
    );
  });
  return (
    <section id="faq" className="section" style={{ background: '#fff', borderTop: `1px solid ${E.line}` }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,32px)', color: E.inkHead, margin: 0, letterSpacing: '-0.02em' }}>
            Câu hỏi thường gặp
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? '0' : '0 48px' }}>
          <div>{renderCol(mobile ? faqs : left)}</div>
          {!mobile && <div>{renderCol(right)}</div>}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const mobile = useIsMobile(860);
  return (
    <section id="final-cta" style={{ background: `linear-gradient(100deg, ${E.red} 0%, ${E.red700} 100%)`, padding: 'clamp(36px,5vw,48px) clamp(20px,5vw,40px)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -60, right: 80, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
      <div className="container" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
        <div>
          <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,30px)', color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
            Sẵn sàng bứt phá IELTS cùng ENGONOW?
          </h2>
          <p style={{ fontFamily: E.fontBody, fontSize: 15, color: 'rgba(255,255,255,0.9)', margin: '8px 0 0' }}>
            Để lại số điện thoại — nhận lộ trình cá nhân hóa và báo giá trong 24 giờ.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, flexShrink: 0, width: mobile ? '100%' : 'auto', flexDirection: mobile ? 'column' : 'row' }}>
          <a href="#" data-lead="lms-trial" className="pill" style={{ background: '#fff', color: E.ink, padding: '15px 26px', fontSize: 14, justifyContent: 'center' }}>
            Nhận tư vấn lộ trình
          </a>
          <a href="#" data-lead="cta" className="pill" style={{ background: E.red700, color: '#fff', padding: '15px 26px', fontSize: 14, border: '1px solid rgba(255,255,255,0.3)', justifyContent: 'center' }}>
            Nhận tư vấn lộ trình
          </a>
        </div>
      </div>
    </section>
  );
}

function CampusMap() {
  const mobile = useIsMobile(860);
  const campuses = [
    { tag: 'CHI NHÁNH 1', addr: '119 & 120 Phùng Tá Chu, P. An Lạc A, TP.HCM', desc: 'Đào tạo gia sư chất lượng cao và hỗ trợ học viên cá nhân hóa.', pos: [10.7537997, 106.6199272], hq: true, gmap: 'https://maps.app.goo.gl/YJgiJ3sjKQZQYRAs7' },
    { tag: 'CHI NHÁNH 2', addr: '117 Hồ Văn Long, P. Tân Tạo, TP.HCM', desc: 'Chi nhánh mở rộng phục vụ khu vực phía Nam với cơ sở vật chất hiện đại.', pos: [10.7623131, 106.5834299], gmap: 'https://maps.app.goo.gl/aFidBbogpZBzZfYX7' },
    { tag: 'CHI NHÁNH 3', addr: '107 Đường Số 5, P. Bình Trị Đông B, TP.HCM', desc: 'Trung tâm đào tạo IELTS chuyên sâu với đội ngũ giảng viên chuẩn quốc tế.', pos: [10.7501097, 106.6156021], gmap: 'https://maps.app.goo.gl/pjerhtndEzE4RJ2T7' },
    { tag: 'CHI NHÁNH 4', addr: '90 Nguyễn Hữu Cảnh, P. 22, TP.HCM', desc: 'Hợp tác chiến lược với Tập đoàn Sunwah.', pos: [10.7886729, 106.7155131], gmap: 'https://maps.app.goo.gl/Q2rYvWZ65M5FFgLZ6' },
    { tag: 'CHI NHÁNH 5', addr: '6 đường 1B, P. An Lạc, TP.HCM', desc: '', pos: [10.7476357, 106.6175955], upcoming: true, gmap: 'https://maps.app.goo.gl/egmWGrdHxtnDfKYL7' },
  ];
  const elRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const markersRef = React.useRef([]);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    let cancelled = false;
    function init() {
      const L = window.L;
      if (!L || !elRef.current || mapRef.current) return;
      const map = L.map(elRef.current, { scrollWheelZoom: false, zoomControl: true, attributionControl: false });
      mapRef.current = map;
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(map);
      const pin = (hq) => L.divIcon({
        className: 'engo-pin',
        html: `<div style="position:relative;width:30px;height:38px;filter:drop-shadow(0 4px 6px rgba(0,0,0,.3))">
          <svg width="30" height="38" viewBox="0 0 30 38" fill="none"><path d="M15 0C6.7 0 0 6.7 0 15c0 10 15 23 15 23s15-13 15-23C30 6.7 23.3 0 15 0z" fill="${hq ? '#CB0000' : '#8C0000'}"/><circle cx="15" cy="15" r="6" fill="#fff"/>${hq ? '<circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"#1D00B7\"/>' : '<circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"#CB0000\"/>'}</svg>
        </div>`,
        iconSize: [30, 38], iconAnchor: [15, 38], popupAnchor: [0, -34],
      });
      const pts = [];
      campuses.forEach((c, i) => {
        const m = L.marker(c.pos, { icon: pin(c.hq) }).addTo(map);
        const gmap = c.gmap || `https://www.google.com/maps/dir/?api=1&destination=${c.pos[0]},${c.pos[1]}`;
        m.bindPopup(`<div style="font-family:'Be Vietnam Pro',sans-serif;min-width:170px"><strong style="color:#CB0000">${c.tag}</strong><br><span style="font-size:12px;color:#3F4651">${c.addr}</span><br><a href="${gmap}" target="_blank" rel="noopener" style="display:inline-block;margin-top:8px;font-size:12px;font-weight:700;color:#1D00B7;text-decoration:underline">Chỉ đường Google Maps</a></div>`);
        m.on('click', () => setActive(i));
        markersRef.current[i] = m;
        pts.push(c.pos);
      });
      if (pts.length > 0) {
        map.fitBounds(pts, { padding: [50, 50] });
      }
      setTimeout(() => { if (!cancelled && mapRef.current) mapRef.current.invalidateSize(); }, 300);
    }
    // wait for Leaflet to be available
    if (window.L) init();
    else {
      const t = setInterval(() => { if (window.L) { clearInterval(t); init(); } }, 100);
      setTimeout(() => clearInterval(t), 5000);
    }
    return () => { cancelled = true; if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; } };
  }, []);

  const focus = (i) => {
    setActive(i);
    const map = mapRef.current, m = markersRef.current[i];
    if (map && m) { map.flyTo(campuses[i].pos, 15, { duration: 0.8 }); setTimeout(() => m.openPopup(), 400); }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.82fr 1.18fr', gap: 24, marginBottom: 44, alignItems: 'stretch' }}>
      {/* Campus list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'space-between' }}>
        {campuses.map((c, i) => {
          return (
            <div key={c.tag} onClick={() => focus(i)} style={{
              textAlign: 'left', cursor: 'pointer',
              background: active === i ? E.redSoft : '#fff',
              border: `1px solid ${active === i ? E.red : E.line}`,
              borderRadius: 14, padding: '14px 16px',
              display: 'flex', gap: 12, alignItems: 'flex-start',
              transition: 'background 180ms ease, border-color 180ms ease',
            }}>
              <span style={{
                width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                background: active === i ? E.red : E.redSoft,
                color: active === i ? '#fff' : E.red,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: E.fontHead, fontWeight: 800, fontSize: 13,
              }}>{i + 1}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: E.fontUi, fontSize: 12.5, fontWeight: 700, color: E.red }}>{c.tag}</span>
                  {c.hq && <span style={{ fontFamily: E.fontUi, fontSize: 9, fontWeight: 700, color: '#fff', background: E.gold, padding: '2px 6px', borderRadius: 4, letterSpacing: '0.06em' }}>HQ</span>}
                  {c.upcoming && <span style={{ fontFamily: E.fontUi, fontSize: 9, fontWeight: 700, color: '#fff', background: E.blue, padding: '2px 6px', borderRadius: 4, letterSpacing: '0.06em' }}>UPCOMING</span>}
                </div>
                <div style={{ fontFamily: E.fontBody, fontSize: 13.5, lineHeight: 1.45, color: E.ink2, marginTop: 5 }}>{c.addr}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Map */}
      <div ref={elRef} style={{ height: mobile ? 280 : 480, borderRadius: 18, border: `1px solid ${E.line}`, overflow: 'hidden', background: E.surfaceAlt, order: mobile ? -1 : 0 }}></div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="campus" style={{ background: E.surfaceAlt, borderTop: `1px solid ${E.line}`, padding: 'clamp(44px,6vw,56px) clamp(20px,5vw,40px) 28px', scrollMarginTop: 56 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontFamily: E.fontUi, fontSize: 12, fontWeight: 700, color: E.red, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>
            Hệ thống cơ sở
          </div>
          <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(22px,3.2vw,28px)', color: E.inkHead, margin: 0, letterSpacing: '-0.02em' }}>
            5 cơ sở phía Tây Sài Gòn &amp; học Online toàn quốc
          </h2>
        </div>

        <CampusMap />

        {/* Bottom bar */}
        <div style={{
          paddingTop: 28, borderTop: `1px solid ${E.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
            <img src={R('logo', `${ASSET}engonow-logo.png`)} alt="ENGONOW" style={{ height: 100, width: 'auto', display: 'block', mixBlendMode: 'multiply' }} />
            <span style={{ fontFamily: E.fontBody, fontSize: 13, color: E.ink3 }}>© 2026 ENGONOW IELTS Master · Bình Tân, TP.HCM</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <a href="tel:0399994132" style={{ fontFamily: E.fontUi, fontSize: 14, fontWeight: 700, color: E.ink }}>
              Hotline 039.999.4132
            </a>
            <span style={{ fontFamily: E.fontBody, fontSize: 13, color: E.ink3 }}>study.engonow.com · dictation.engonow.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FAQSection, FinalCTA, Footer, CampusMap });
