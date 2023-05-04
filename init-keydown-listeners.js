export function initKeydownListeners() {
  document.addEventListener('keydown', (event) => {

    const button = document.querySelector(`[data-keycode='${event.code}']`);
    if (button) {
      button.click();
      button.classList.add('shift-active');
      setTimeout(() => {
        button.classList.remove('shift-active');
      }, 100);
    }
  })
}