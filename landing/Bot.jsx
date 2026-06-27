// Floating chat assistant — "Trợ lý ENGONOW", docked bottom-right

const BOT_QUICK = [
  { label: 'Nhận lộ trình miễn phí', key: 'lead' },
  { label: 'Học phí bao nhiêu?', key: 'price' },
  { label: 'Học Online được không?', key: 'online' },
  { label: 'Gọi tư vấn', key: 'call' },
];

const PHONE = '0399994132';
const ZALO = 'https://zalo.me/0399994132';

function botReply(text) {
  const t = (text || '').toLowerCase();
  if (/(học phí|hoc phi|giá|gia|bao nhiêu|phí|chi phí)/.test(t))
    return { text: 'Học phí ENGONOW chỉ từ 1.500.000đ/tháng — minh bạch, không phí ẩn. Để mình gửi báo giá & lộ trình chi tiết theo trình độ của bạn nhé!', chips: [{ label: 'Nhận báo giá', key: 'lead' }, { label: 'Gọi tư vấn', key: 'call' }] };
  if (/(online|từ xa|tu xa|ở nhà)/.test(t))
    return { text: 'Có ạ! Lớp Online giữ sĩ số nhỏ và vẫn sửa bài 1-1 mỗi tuần. Nhiều bạn đạt 8.0 IELTS học hoàn toàn Online. Bạn muốn học thử LMS 7 ngày miễn phí không?', chips: [{ label: 'Học thử LMS', key: 'trial' }, { label: 'Nhận lộ trình', key: 'lead' }] };
  if (/(cơ sở|co so|địa chỉ|dia chi|ở đâu|chi nhánh|offline)/.test(t))
    return { text: 'ENGONOW có 4 cơ sở phía Tây Sài Gòn (Bình Tân – Bình Thạnh) và lớp Online toàn quốc. Bạn xem bản đồ & chỉ đường ở cuối trang nhé!', chips: [{ label: 'Nhận lộ trình', key: 'lead' }, { label: 'Gọi tư vấn', key: 'call' }] };
  if (/(giáo viên|giao vien|thầy|cô|teacher)/.test(t))
    return { text: 'Đội ngũ giáo viên 7.5+ IELTS, chứng chỉ TESOL/CELTA, sửa Writing & Speaking 1-1 đến khi bạn tự tin. Để mình kết nối bạn với giáo viên phù hợp nhé?', chips: [{ label: 'Nhận tư vấn', key: 'lead' }] };
  if (/(lộ trình|lo trinh|đăng ký|dang ky|test|mục tiêu|muc tieu|bắt đầu)/.test(t))
    return { text: 'Tuyệt vời! Bạn để lại tên + số điện thoại, đội ngũ ENGONOW sẽ test trình độ và gửi lộ trình cá nhân hóa trong 24 giờ — hoàn toàn miễn phí.', chips: [{ label: 'Để lại thông tin', key: 'lead' }] };
  return { text: 'Cảm ơn bạn! Để được tư vấn nhanh nhất, bạn có thể để lại thông tin hoặc gọi hotline 039.999.4132. Mình có thể giúp gì thêm?', chips: [{ label: 'Nhận lộ trình miễn phí', key: 'lead' }, { label: 'Gọi tư vấn', key: 'call' }] };
}

function ChatBot() {
  const mobile = useIsMobile(560);
  const [open, setOpen] = React.useState(false);
  const [typing, setTyping] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [msgs, setMsgs] = React.useState([
    { from: 'bot', text: 'Xin chào! Mình là trợ lý ENGONOW. Bạn đang muốn tìm hiểu điều gì về khóa IELTS?', chips: BOT_QUICK },
  ]);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, typing, open]);

  const pushUser = (text) => setMsgs(m => [...m, { from: 'user', text }]);
  const respond = (text) => {
    setTyping(true);
    setTimeout(() => {
      const r = botReply(text);
      setTyping(false);
      setMsgs(m => [...m, { from: 'bot', text: r.text, chips: r.chips }]);
    }, 700);
  };

  const handleAction = (key, label) => {
    if (key === 'lead') { openLead('cta'); return; }
    if (key === 'trial') { openLead('lms-trial'); return; }
    if (key === 'call') { window.location.href = `tel:${PHONE}`; return; }
    if (key === 'zalo') { window.open(ZALO, '_blank', 'noopener'); return; }
    // generic quick-reply: echo + canned answer
    pushUser(label);
    respond(label);
  };

  const send = () => {
    const text = input.trim();
    if (!text) return;
    pushUser(text);
    setInput('');
    respond(text);
  };

  return (
    <div style={{ position: 'fixed', right: mobile ? 14 : 24, bottom: mobile ? 14 : 24, zIndex: 1500, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
      {/* Panel */}
      {open && (
        <div style={{
          width: mobile ? 'calc(100vw - 28px)' : 350, maxWidth: 'calc(100vw - 28px)',
          height: mobile ? '70vh' : 480, maxHeight: 'calc(100vh - 120px)',
          background: '#fff', borderRadius: 20, boxShadow: E.shadowXl, border: `1px solid ${E.line}`,
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          animation: 'leadIn 220ms cubic-bezier(0.16,1,0.3,1)',
        }}>
          {/* Header */}
          <div style={{ background: `linear-gradient(100deg, ${E.red} 0%, ${E.red700} 100%)`, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <span style={{ width: 42, height: 42, borderRadius: 999, background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: E.fontHead, fontWeight: 800, fontSize: 15, color: E.red, letterSpacing: '-0.02em' }}>EN</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 15, color: '#fff', letterSpacing: '-0.01em' }}>Trợ lý ENGONOW</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: '#4ADE80' }} />
                <span style={{ fontFamily: E.fontUi, fontSize: 11.5, color: 'rgba(255,255,255,0.9)' }}>Thường trả lời trong vài phút</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Đóng" style={{ height: 30, padding: '0 12px', borderRadius: 999, background: 'rgba(255,255,255,0.18)', border: 'none', cursor: 'pointer', color: '#fff', fontFamily: E.fontUi, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
              Đóng
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', background: E.surfaceAlt, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: m.from === 'user' ? 'flex-end' : 'flex-start', gap: 8 }}>
                <div style={{
                  maxWidth: '82%', padding: '10px 14px', borderRadius: 16,
                  background: m.from === 'user' ? E.red : '#fff',
                  color: m.from === 'user' ? '#fff' : E.ink,
                  border: m.from === 'user' ? 'none' : `1px solid ${E.line}`,
                  borderBottomRightRadius: m.from === 'user' ? 4 : 16,
                  borderBottomLeftRadius: m.from === 'user' ? 16 : 4,
                  fontFamily: E.fontBody, fontSize: 13.5, lineHeight: 1.5,
                  boxShadow: m.from === 'user' ? 'none' : E.shadowSm,
                }}>{m.text}</div>
                {m.chips && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, maxWidth: '92%' }}>
                    {m.chips.map((c, j) => (
                      <button key={j} onClick={() => handleAction(c.key, c.label)} style={{
                        padding: '7px 13px', borderRadius: 999, cursor: 'pointer',
                        background: '#fff', border: `1px solid ${E.red}`, color: E.red,
                        fontFamily: E.fontUi, fontSize: 12.5, fontWeight: 600,
                        transition: 'background 160ms ease, color 160ms ease',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = E.red; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = E.red; }}
                      >{c.label}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div style={{ alignSelf: 'flex-start', display: 'flex', gap: 4, padding: '12px 16px', background: '#fff', border: `1px solid ${E.line}`, borderRadius: 16, borderBottomLeftRadius: 4 }}>
                {[0,1,2].map(d => <span key={d} style={{ width: 7, height: 7, borderRadius: 999, background: E.ink4, animation: `botDot 1s ${d * 0.15}s infinite ease-in-out` }} />)}
              </div>
            )}
          </div>

          {/* Quick contact row */}
          <div style={{ display: 'flex', gap: 8, padding: '10px 12px 0', background: '#fff' }}>
            <a href={`tel:${PHONE}`} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '9px', borderRadius: 10, background: E.redSoft, color: E.red, fontFamily: E.fontUi, fontSize: 12.5, fontWeight: 700 }}>
              Gọi hotline
            </a>
            <a href={ZALO} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '9px', borderRadius: 10, background: E.dataSoft, color: E.data, fontFamily: E.fontUi, fontSize: 12.5, fontWeight: 700 }}>
              Chat Zalo
            </a>
          </div>

          {/* Input */}
          <div style={{ display: 'flex', gap: 8, padding: 12, background: '#fff' }}>
            <input
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') send(); }}
              placeholder="Nhập câu hỏi của bạn…"
              style={{ flex: 1, padding: '11px 14px', borderRadius: 999, border: `1px solid ${E.lineStrong}`, fontFamily: E.fontBody, fontSize: 13.5, outline: 'none', color: E.ink }}
              onFocus={e => e.currentTarget.style.borderColor = E.red}
              onBlur={e => e.currentTarget.style.borderColor = E.lineStrong}
            />
            <button onClick={send} aria-label="Gửi" style={{ height: 42, padding: '0 18px', borderRadius: 999, background: E.red, border: 'none', cursor: 'pointer', color: '#fff', fontFamily: E.fontUi, fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
              Gửi
            </button>
          </div>
        </div>
      )}

      {/* Launcher */}
      <button onClick={() => setOpen(o => !o)} aria-label="Mở trợ lý ENGONOW" style={{
        position: 'relative', height: 54, padding: '0 26px', borderRadius: 999,
        background: E.data, border: 'none', cursor: 'pointer', boxShadow: E.shadowLg,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontFamily: E.fontUi, fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em',
        transition: 'transform 160ms ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {!open && <span style={{ position: 'absolute', inset: 0, borderRadius: 999, background: E.data, opacity: 0.4, animation: 'botPulse 2s infinite' }} />}
        <span style={{ position: 'relative' }}>{open ? 'Đóng' : (mobile ? 'Tư vấn' : 'Trợ lý ENGONOW')}</span>
      </button>
    </div>
  );
}

Object.assign(window, { ChatBot });
