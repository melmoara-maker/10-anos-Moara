document.addEventListener('DOMContentLoaded', () => {
  const cover = document.getElementById('cover');
  const invite = document.getElementById('invite');
  const openBtn = document.getElementById('openBtn');
  const backBtn = document.getElementById('backBtn');

  function openInvite() {
    cover.classList.add('hidden');
    invite.classList.remove('hidden');
    invite.setAttribute('aria-hidden', 'false');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Moara • 10 anos 🦄✨';
  }

  function closeInvite() {
    invite.classList.add('hidden');
    cover.classList.remove('hidden');
    invite.setAttribute('aria-hidden', 'true');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openBtn.addEventListener('click', openInvite);
  backBtn.addEventListener('click', closeInvite);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !invite.classList.contains('hidden')) closeInvite();
  });
});
