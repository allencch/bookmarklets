(() => {
  const url = document.querySelector('meta[property=al\\:web\\:url]').content;
  const elem = document.querySelector('#channel-name');

  const container = document.createElement('div');
  container.setAttribute('style', 'background:white;padding:4px');
  container.innerHTML = new URL(url).pathname;

  elem.parentElement.append(container);
})();