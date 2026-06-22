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
    { from: 'bot', text: 'Xin chào 👋 Mình là trợ lý ENGONOW. Bạn đang muốn tìm hiểu điều gì về khóa IELTS?', chips: BOT_QUICK },
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
    <div style={{ position: 'fixed', right: mobile ? 14 : 24, bottom: mobile ? 14 : 24, zIndex: 90, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
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
            <span style={{ width: 42, height: 42, borderRadius: 999, background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={E.red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 15, color: '#fff', letterSpacing: '-0.01em' }}>Trợ lý ENGONOW</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: '#4ADE80' }} />
                <span style={{ fontFamily: E.fontUi, fontSize: 11.5, color: 'rgba(255,255,255,0.9)' }}>Thường trả lời trong vài phút</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Đóng" style={{ width: 30, height: 30, borderRadius: 999, background: 'rgba(255,255,255,0.18)', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
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
            <a href={`tel:${PHONE}`} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '9px', borderRadius: 10, background: E.redSoft, color: E.red, fontFamily: E.fontUi, fontSize: 12.5, fontWeight: 700 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={E.red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Hotline
            </a>
            <a href={ZALO} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '9px', borderRadius: 10, background: E.blueSoft, color: E.blueDeep, fontFamily: E.fontUi, fontSize: 12.5, fontWeight: 700 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill={E.blueDeep}><path d="M12 2C6.48 2 2 5.94 2 10.8c0 2.74 1.42 5.18 3.64 6.78L5 21l3.86-1.5c.98.27 2.03.42 3.14.42 5.52 0 10-3.94 10-8.8S17.52 2 12 2z"/></svg>
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
            <button onClick={send} aria-label="Gửi" style={{ width: 42, height: 42, borderRadius: 999, background: E.red, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* Launcher */}
      <button onClick={() => setOpen(o => !o)} aria-label="Mở trợ lý ENGONOW" style={{
        position: 'relative', width: 60, height: 60, borderRadius: 999,
        background: E.red, border: 'none', cursor: 'pointer', boxShadow: E.shadowRed,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 160ms ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {!open && <span style={{ position: 'absolute', inset: 0, borderRadius: 999, background: E.red, opacity: 0.5, animation: 'botPulse 2s infinite' }} />}
        <span style={{ position: 'relative', display: 'inline-flex' }}>
          {open
            ? <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>}
        </span>
      </button>
    </div>
  );
}

Object.assign(window, { ChatBot });
