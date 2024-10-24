(async () => {
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  const inputs = document.querySelectorAll('section[aria-label="Section details"] input:checked');

  for (let i = 0; i < inputs.length; i += 1) {
    const rand = Math.floor(Math.random() * 2000);
    await sleep(9000 + rand);
    const input = inputs[i];
    input.click();
  }
})();