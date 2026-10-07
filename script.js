const openButton = document.getElementById('openInvitation');
const intro = document.getElementById('intro');
const weddingContent = document.getElementById('weddingContent');

openButton.addEventListener('click', () => {
  openButton.disabled = true;
  intro.classList.add('animate');

  setTimeout(() => {
    intro.classList.add('finished');
    weddingContent.classList.add('show');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, 2450);
});
