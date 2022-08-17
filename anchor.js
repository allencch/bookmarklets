(() => {
  const elems = document.querySelectorAll("h1[id],h2[id],h3[id],h4[id],h5[id],h6[id],h1>*[id],h2>*[id],h3>*[id],h4>*[id],h5>*[id],h6>*[id],a[name]:not([href])");

  const array = Array.from(elems);

  array.forEach((elem) => {
    elem.style.cursor = "pointer";
    elem.setAttribute("title", "anchor:" + (elem.id ? elem.id : elem.name));
    elem.innerHTML += " &#9875;";
    elem.addEventListener("click", (el) => {
      location.hash = el.target.id ? el.target.id : el.target.name;
    });
  });
})();