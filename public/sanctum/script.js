(() => {
  const tl    = document.querySelector('.spiral.tl');
  const br    = document.querySelector('.spiral.br');
  const sigil = document.querySelector('.sigil');
  const panel = document.getElementById('tri-panel');

  let step  = 0;   // 0 = ingen, 1 = venstre trykket, 2 = aktiveret
  let timer = null;

  function resetSequence() {
    step = 0;
    tl.classList.remove('active');
    br.classList.remove('active');
    if (timer) { clearTimeout(timer); timer = null; }
  }

  function activatePortal() {
    step = 2;
    sigil.classList.add('active');
    panel.style.display = 'block';
  }

  tl.addEventListener('click', () => {
    if (step === 0) {
      step = 1;
      tl.classList.add('active');
      timer = setTimeout(resetSequence, 4000); // 4s vindue
    } else {
      resetSequence();
      step = 1;
      tl.classList.add('active');
      timer = setTimeout(resetSequence, 4000);
    }
  });

  br.addEventListener('click', () => {
    if (step === 1) {
      br.classList.add('active');
      if (timer) { clearTimeout(timer); timer = null; }
      activatePortal();
    } else {
      // Højre først? Blink og reset
      br.classList.add('active');
      setTimeout(() => br.classList.remove('active'), 300);
      resetSequence();
    }
  });

  // Tastatur fallback: 1→2 inden for 3 sek.
  let lastKey = null;
  let lastTime = 0;
  const TIMEOUT = 3000;

  function handleKey(code){
    const now = Date.now();
    if (code === '1') {
      lastKey = '1'; lastTime = now;
      tl.classList.add('active');
      timer = setTimeout(() => { tl.classList.remove('active'); lastKey=null; }, TIMEOUT);
    } else if (code === '2') {
      if (lastKey === '1' && (now - lastTime) <= TIMEOUT) {
        if (timer) { clearTimeout(timer); timer = null; }
        br.classList.add('active');
        activatePortal();
      } else {
        br.classList.add('active');
        setTimeout(() => br.classList.remove('active'), 300);
      }
      lastKey = null;
    }
  }

  window.addEventListener('keydown', e => {
    if (e.key === '1' || e.key === '2') handleKey(e.key);
  });
})();