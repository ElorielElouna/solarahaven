document.addEventListener('click', (e) => {
  const pulse = document.createElement('div');
  pulse.className = 'pulse';
  pulse.style.left = e.clientX + 'px';
  pulse.style.top = e.clientY + 'px';
  document.body.appendChild(pulse);

  setTimeout(() => pulse.remove(), 1000);
});