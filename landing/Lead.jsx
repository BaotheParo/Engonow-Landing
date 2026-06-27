// Shared lead-capture modal — opened by every CTA (delegated click on a[href="#final-cta"] or a[data-lead])

const LEAD_TITLES = {
  '':        ['Nhận lộ trình cá nhân hóa MIỄN PHÍ', 'Để lại thông tin — đội ngũ ENGONOW sẽ gọi tư vấn & gửi lộ trình trong 24 giờ.'],
  cta:       ['Nhận lộ trình cá nhân hóa MIỄN PHÍ', 'Để lại thông tin — đội ngũ ENGONOW sẽ gọi tư vấn & gửi lộ trình trong 24 giờ.'],
  student:   ['Đăng ký test trình độ MIỄN PHÍ', 'Có ngay lộ trình xét tuyển đại học bằng IELTS trong 24 giờ.'],
  worker:    ['Tư vấn lộ trình du học / định cư', 'Để lại thông tin — chuyên viên sẽ tư vấn lộ trình phù hợp mục tiêu của bạn.'],
  parent:    ['Tư vấn lộ trình cho con', 'Để lại thông tin — đội ngũ sẽ liên hệ tư vấn lộ trình học cho con bạn.'],
  'lms-trial': ['Kích hoạt học thử LMS 7 ngày', 'Để lại thông tin — chúng tôi sẽ mở tài khoản học thử study & dictation cho bạn.'],
};

function openLead(source) {
  window.dispatchEvent(new CustomEvent('engo-open-lead', { detail: { source: source || '' } }));
}

function LeadModal() {
  const mobile = useIsMobile(560);
  const [open, setOpen] = React.useState(false);
  const [source, setSource] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', phone: '', goal: '' });
  const [err, setErr] = React.useState('');

  // Delegated: any CTA anchor opens the modal
  React.useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href="#final-cta"], a[data-lead], button[data-lead]');
      if (!a) return;
      e.preventDefault();
      setSource(a.getAttribute('data-lead') || '');
      setSent(false); setErr(''); setForm({ name: '', phone: '', goal: '' });
      setOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      document.body.classList.add('lead-modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('lead-modal-open');
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('lead-modal-open');
    };
  }, [open]);

  if (!open) return null;

  const [title, subtitle] = LEAD_TITLES[source] || LEAD_TITLES[''];

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) { setErr('Vui lòng nhập họ và tên.'); return; }
    const phone = form.phone.replace(/[^\d+]/g, '');
    if (phone.length < 9) { setErr('Vui lòng nhập số điện thoại hợp lệ.'); return; }
    setErr('');
    try {
      const prev = JSON.parse(localStorage.getItem('engo-leads') || '[]');
      prev.push({ ...form, source, at: new Date().toISOString() });
      localStorage.setItem('engo-leads', JSON.stringify(prev));
    } catch (_) {}
    setSent(true);
  };

  const field = (label, key, type, placeholder) => (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontFamily: E.fontUi, fontSize: 13, fontWeight: 700, color: E.ink, marginBottom: 6 }}>{label}</span>
      <input
        type={type} value={form[key]} placeholder={placeholder}
        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
        style={{
          width: '100%', padding: '13px 15px', borderRadius: 12,
          border: `1px solid ${E.lineStrong}`, background: '#fff',
          fontFamily: E.fontBody, fontSize: 15, color: E.ink, outline: 'none',
        }}
        onFocus={e => { e.currentTarget.style.borderColor = E.red; e.currentTarget.style.boxShadow = `0 0 0 3px ${E.redSoft}`; }}
        onBlur={e => { e.currentTarget.style.borderColor = E.lineStrong; e.currentTarget.style.boxShadow = 'none'; }}
      />
    </label>
  );

  return (
    <div
      onMouseDown={e => { if (e.target === e.currentTarget) setOpen(false); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(28,20,14,0.55)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: mobile ? 16 : 24,
      }}
    >
      <div style={{
        position: 'relative', width: '100%', maxWidth: 440,
        background: '#fff', borderRadius: 22, boxShadow: E.shadowXl,
        padding: mobile ? '28px 22px' : '34px 32px',
        animation: 'leadIn 240ms cubic-bezier(0.16,1,0.3,1)',
      }}>
        {/* Close */}
        <button onClick={() => setOpen(false)} aria-label="Đóng" style={{
          position: 'absolute', top: 16, right: 16, height: 34, padding: '0 14px', borderRadius: 999,
          background: E.surfaceAlt, border: `1px solid ${E.line}`, cursor: 'pointer',
          color: E.ink2, fontFamily: E.fontUi, fontSize: 12.5, fontWeight: 700,
        }}>Đóng</button>
 
        {!sent ? (
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14, overflow: 'hidden', height: 50 }}>
              <img src={R('logo', `${ASSET}engonow-logo.png`)} alt="ENGONOW" style={{ height: 100, width: 'auto', display: 'block', mixBlendMode: 'multiply', margin: '-25px 0' }} />
            </div>
            <h3 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 22, lineHeight: 1.18, letterSpacing: '-0.015em', color: E.inkHead, margin: '0 0 8px', paddingRight: 28 }}>{title}</h3>
            <p style={{ fontFamily: E.fontBody, fontSize: 14, lineHeight: 1.5, color: E.ink3, margin: '0 0 22px' }}>{subtitle}</p>

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {field('Họ và tên', 'name', 'text', 'VD: Nguyễn Văn An')}
              {field('Số điện thoại', 'phone', 'tel', 'VD: 09xx xxx xxx')}
              <label style={{ display: 'block' }}>
                <span style={{ display: 'block', fontFamily: E.fontUi, fontSize: 13, fontWeight: 700, color: E.ink, marginBottom: 6 }}>Mục tiêu band <span style={{ color: E.ink4, fontWeight: 500 }}>(không bắt buộc)</span></span>
                <select value={form.goal} onChange={e => setForm(f => ({ ...f, goal: e.target.value }))}
                  style={{ width: '100%', padding: '13px 15px', borderRadius: 12, border: `1px solid ${E.lineStrong}`, background: '#fff', fontFamily: E.fontBody, fontSize: 15, color: form.goal ? E.ink : E.ink4, outline: 'none' }}>
                  <option value="">Chọn mục tiêu của bạn</option>
                  <option value="mat-goc">Mất gốc / mới bắt đầu</option>
                  <option value="5.0-6.0">5.0 → 6.0</option>
                  <option value="6.5-7.0">6.5 → 7.0</option>
                  <option value="7.5+">7.5 → 8.0+</option>
                </select>
              </label>

              {err && <div style={{ fontFamily: E.fontUi, fontSize: 13, fontWeight: 600, color: E.red }}>{err}</div>}

              <button type="submit" className="pill pill-primary" style={{ width: '100%', marginTop: 4, padding: '15px 28px' }}>
                Gửi thông tin — Nhận tư vấn MIỄN PHÍ
              </button>
              <div style={{ textAlign: 'center', fontFamily: E.fontUi, fontSize: 12.5, color: E.ink3 }}>
                Thông tin của bạn được bảo mật tuyệt đối
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '12px 0 4px' }}>
            <div style={{ display: 'inline-block', background: E.redSoft, color: E.red, fontFamily: E.fontUi, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 16px', borderRadius: 999, marginBottom: 18 }}>
              Hoàn tất
            </div>
            <h3 style={{ fontFamily: E.fontHead, fontWeight: 800, fontSize: 22, color: E.inkHead, margin: '0 0 10px', letterSpacing: '-0.015em' }}>Đã nhận thông tin của bạn!</h3>
            <p style={{ fontFamily: E.fontBody, fontSize: 14.5, lineHeight: 1.55, color: E.ink2, margin: '0 0 22px' }}>
              Cảm ơn <strong style={{ color: E.ink }}>{form.name.trim()}</strong>. Đội ngũ ENGONOW sẽ liên hệ số <strong style={{ color: E.ink }}>{form.phone.trim()}</strong> trong vòng 24 giờ.
            </p>
            <button onClick={() => setOpen(false)} className="pill pill-primary" style={{ width: '100%' }}>Hoàn tất</button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { LeadModal, openLead });
