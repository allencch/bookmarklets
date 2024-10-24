(function() {
  document.addEventListener('copy', function(e) {
    e.stopImmediatePropagation();
    return true;
  }, true);
})();