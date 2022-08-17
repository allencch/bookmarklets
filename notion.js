(() => {
  const container = document.querySelector('body');
  const button = document.createElement('button');
  button.innerHTML = 'Copy link as markdown';
  button.addEventListener('click', () => {
    const elem = document.querySelector('.notion-frame .notion-page-block');
    navigator.clipboard.writeText(`[${elem.textContent}](${window.location})`);
  });
  container.prepend(button);
})();