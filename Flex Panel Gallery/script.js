const panels = document.querySelectorAll('.panel');

function toogleOppen() {
    console.log('msg');
    for(let i= 0; i < panels.length; i++) {
        panels[i].classList.remove('open');
    }
    this.classList.toggle('open');  
}
function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

panels.forEach(panel => panel.addEventListener('click', toogleOppen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));