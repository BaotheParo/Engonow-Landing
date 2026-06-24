// Sec 8/9/10: Three segment columns (text-left + photo-right)

function SegmentsSection() {
  const mobile = useIsMobile(820);
  const segments = [
    {
      id: 'segment-student',
      tag: 'DÀNH CHO HỌC SINH CẤP 3',
      icon: 'student',
      headline: 'Nắm chắc tấm vé vào Đại học Top đầu',
      bullets: [
        'Tối ưu lộ trình, học song song THPT & kỳ thi ĐGNL mà không lo quá tải.',
        'Rút ngắn 50% thời gian ôn luyện so với các mô hình truyền thống.',
        'Lịch học buổi tối & cuối tuần linh hoạt, quy đổi điểm xét tuyển sớm.',
      ],
      cta: 'Đăng ký test trình độ MIỄN PHÍ', ctaSub: null,
      color: E.red, accent: 'red', slot: 'seg-student', slotPh: 'Nữ sinh cấp 3, đeo balo',
    },
    {
      id: 'segment-worker',
      tag: 'DÀNH CHO SINH VIÊN & NGƯỜI ĐI LÀM',
      icon: 'bullseye-arrow',
      headline: 'Bứt phá IELTS – Mở lối Du học & Thăng tiến Sự nghiệp',
      bullets: [
        'Lớp học Online/Offline tương tác cao, giải quyết bài toán tăng ca hay kẹt xe.',
        'Tối ưu quỹ thời gian eo hẹp với hệ sinh thái luyện tập Smart Dictation 24/7.',
        'Giải pháp đầu tư thông minh cho sự nghiệp chỉ từ 1.500.000đ/tháng.',
      ],
      cta: 'Tư vấn lộ trình cấp tốc', ctaSub: null,
      color: '#1D00B7', accent: 'blue', slot: 'seg-worker', slotPh: 'Nam giới đi làm, laptop',
    },
    {
      id: 'segment-parent',
      tag: 'DÀNH CHO PHỤ HUYNH',
      icon: 'heart-health-muscle',
      headline: 'Trao gửi niềm tin – An tâm đồng hành cùng con',
      bullets: [
        'Minh bạch tuyệt đối với báo cáo tiến độ học tập và điểm số định kỳ.',
        'Giáo viên chủ nhiệm theo sát, lập tức liên hệ hỗ trợ khi con vắng mặt.',
        'Cam kết môi trường học tập chất lượng, không để học viên bị bỏ lại phía sau.',
      ],
      cta: 'Nhận tư vấn lộ trình cho con', ctaSub: null,
      color: E.red, accent: 'red', slot: 'seg-parent', slotPh: 'Gia đình (bố mẹ & con)',
    },
  ];
  return (
    <section id="segments" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,32px)', color: E.inkHead, margin: 0, letterSpacing: '-0.02em' }}>
            Lộ trình riêng cho từng nhóm học viên
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
          {segments.map(s => <SegmentColumn key={s.id} s={s} mobile={mobile} />)}
        </div>
      </div>
    </section>
  );
}

function SegmentColumn({ s, mobile }) {
  return (
    <div id={s.id} style={{
      background: '#fff', borderRadius: 20, overflow: 'hidden',
      border: `1px solid ${E.line}`, boxShadow: E.shadowSm,
      display: 'flex', flexDirection: 'column',
      scrollMarginTop: 84,
    }}>
      {/* Header label */}
      <div style={{ padding: '18px 22px 0', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: E.fontUi, fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: '0.04em' }}>{s.tag}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 0.62fr', gap: 14, padding: '14px 22px 0', flex: 1 }}>
        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 19, lineHeight: 1.22, color: E.inkHead, margin: '0 0 14px', letterSpacing: '-0.01em' }}>{s.headline}</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {s.bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontFamily: E.fontBody, fontSize: 13, lineHeight: 1.4, color: E.ink2 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
        {/* Photo */}
        <Slot id={s.slot} w="100%" h={mobile ? 200 : 180} radius={12} placeholder={s.slotPh} style={{ alignSelf: 'stretch' }} />
      </div>

      {/* Button */}
      <div style={{ padding: '4px 22px 22px' }}>
        <a href="#final-cta" data-lead={s.id === 'segment-worker' ? 'worker' : s.id === 'segment-parent' ? 'parent' : 'student'} style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: s.color, color: '#fff', borderRadius: 999,
          padding: '13px 22px', fontFamily: E.fontUi, fontWeight: 700, fontSize: 13,
          lineHeight: 1.25, justifyContent: 'center', width: mobile ? '100%' : 'auto',
        }}>
          <span>{s.cta}{s.ctaSub && <span style={{ display: 'block', fontSize: 10.5, fontWeight: 500, opacity: 0.9 }}>{s.ctaSub}</span>}</span>
        </a>
      </div>
    </div>
  );
}

Object.assign(window, { SegmentsSection });
