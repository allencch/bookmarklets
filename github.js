(() => {
  const elem = document.querySelector('.gh-header-title > span:nth-child(2)');
  const link = document.createElement('a');
  link.setAttribute('href', window.location);
  link.innerHTML = elem.innerHTML.replace('#', '');
  elem.parentElement.append(link);
})();