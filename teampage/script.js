function openBio(parameter) {
  var box1 = document.getElementById('lightbox__1');
  var box2 = document.getElementById('lightbox__2');
  var box3 = document.getElementById('lightbox__3');

  if (parameter === 1) {
    box1.classList.add('open');
    box2.classList.remove('open');
    box3.classList.remove('open');
  } else if (parameter === 2) {
    box2.classList.add("open");
    box1.classList.remove('open');
    box3.classList.remove('open');
  } else if (parameter === 3) {
    box3.classList.add("open");
    box1.classList.remove('open');
    box2.classList.remove('open');
  }
}

function closeBio() {
  var box1 = document.getElementById('lightbox__1');
  var box2 = document.getElementById('lightbox__2');
  var box3 = document.getElementById('lightbox__3');
  box1.classList.remove('open');
  box2.classList.remove('open');
  box3.classList.remove('open');
}
