(() => {
  const url = document.querySelector('meta[property=al\\:web\\:url]').content;
  const elem = document.querySelector('#channel-name');

  const existing = document.querySelector('#bookmarklet-channel');
  if (existing) {
    existing.remove();
  }

  const container = document.createElement('div');
  container.setAttribute('style', 'background:white;padding:4px');
  container.setAttribute('id', 'bookmarklet-channel');
  container.innerHTML = new URL(url).pathname;

  elem.parentElement.append(container);
})();