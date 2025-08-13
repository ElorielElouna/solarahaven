// Triélai – aktiveringslogik
document.addEventListener('DOMContentLoaded', () => {
  const left  = document.querySelector('[data-sigil="left"]');
  const right = document.querySelector('[data-sigil="right"]');
  const sun   = document.querySelector('[data-sun]');
  const toast = document.getElementById('toast');
  const panel = document.getElementById('tri-panel');

  // lille helper
  const pingSun = () => { 
    sun.classList.remove('sun--ping');
    // force reflow så animation kan gentages
    void sun.offsetWidth;
    sun.classList.add('sun--ping');
  };
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add('toast--show');
    setTimeout(()=> toast.classList.remove('toast--show'), 1800);
  };

  // nøgle-tilstand
  let key = { left:false, right:false, timer:null, windowMs:8000 };

  const resetKey = () => {
    key.left = key.right = false;
    if (key.timer) { clearTimeout(key.timer); key.timer = null; }
  };

  const armTimer = () => {
    if (key.timer) clearTimeout(key.timer);
    key.timer = setTimeout(() => { resetKey(); }, key.windowMs);
  };

  const checkUnlock = () => {
    if (key.left && key.right) {
      resetKey();
      pingSun();
      showToast('🔓 Nøglen er drejet');
      panel.classList.add('show');
    }
  };

  // interaktioner
  left?.addEventListener('click', () => {
    key.left = true; armTimer();
    pingSun(); showToast('↺ Venstre spiral aktiveret');
    checkUnlock();
  });

  right?.addEventListener('click', () => {
    key.right = true; armTimer();
    pingSun(); showToast('↻ Højre spiral aktiveret');
    checkUnlock();
  });

  sun?.addEventListener('click', () => {
    pingSun(); showToast('☀️ Solen kvitterer');
  });

  // første ping for vished
  showToast('🔔 Sanctum-script kører');
});