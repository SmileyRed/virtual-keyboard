let isCapsLock = false;
let isShift = false;
let isEng = true;

function getCurrentCodeType() {
  if (isCapsLock && !isShift && isEng) {
    return 'engcapscode'
  }

  if (!isCapsLock && !isShift && isEng) {
    return 'englowcode'
  }

  if (!isCapsLock && isShift && isEng) {
    return 'shiftcode'
  }

  if (!isCapsLock && !isShift && !isEng) {
    return 'rulowcode'
  }

  if (isCapsLock && !isShift && !isEng) {
    return 'rucapscode'
  }

  if (!isCapsLock && isShift && !isEng) {
    return 'rusiftcode'
  }

  if (isCapsLock && isShift && isEng) {
    return 'englowcode'
  }
  if (isCapsLock && isShift && !isEng) {
    return 'rulowcode'
  }
}

export function initClickListeners() {
  const keyboardKeys = document.querySelectorAll('.keyboard__key');
  const textarea = document.querySelector('.keyboard__textarea');

  for (let i = 0; i < keyboardKeys.length; i++) {
    keyboardKeys[i].addEventListener('click', () => {
      const codeAttribute = getCurrentCodeType();
      const dataCode = keyboardKeys[i].dataset[codeAttribute];
      const cursorPosition = textarea.selectionStart;

      const strBeforeCursor = textarea.value.slice(0, cursorPosition);
      const strAfterCursor = textarea.value.slice(cursorPosition);

      textarea.value = strBeforeCursor + String.fromCharCode(dataCode) + strAfterCursor;
      textarea.selectionStart = cursorPosition + 1;
    });
  };


  const keyBackspace = document.querySelector('.backspace');
  const keyDel = document.querySelector('.del');
  const keyCapsock = document.querySelector('.capsock');
  const keyShift = document.querySelectorAll('.shift');
  const keyCtrl = document.querySelectorAll('.ctrl');
  const keyAlt = document.querySelectorAll('.alt');

  keyBackspace.addEventListener('click', () => {
    const cursorPosition = textarea.selectionStart;

    const strBeforeCursor = textarea.value.slice(0, cursorPosition - 1);
    const strAfterCursor = textarea.value.slice(cursorPosition);

    textarea.value = strBeforeCursor + strAfterCursor;
    textarea.selectionStart = cursorPosition - 1;
  });

  keyDel.addEventListener('click', () => {
    const cursorPosition = textarea.selectionStart;

    const strBeforeCursor = textarea.value.slice(0, cursorPosition);
    const strAfterCursor = textarea.value.slice(cursorPosition + 1);

    textarea.value = strBeforeCursor + strAfterCursor;
    textarea.selectionStart = cursorPosition;
  });


  keyCapsock.addEventListener('click', () => {
    const capsock = document.querySelector('.capsock')
    capsock.classList.toggle('capsock-active')
    isCapsLock = !isCapsLock;
    const codeAttribute = getCurrentCodeType();
    for (let i = 0; i < keyboardKeys.length; i++) {
      const dataCode = keyboardKeys[i].dataset[codeAttribute];
      if (dataCode && !keyboardKeys[i].dataset.nonchanged) {
        keyboardKeys[i].innerHTML = String.fromCharCode(dataCode);
      }
    };
  });



  for (let j = 0; j < keyShift.length; j++) {
    keyShift[j].addEventListener('click', () => {
      const shift = document.querySelectorAll('.shift')
      for (let k = 0; k < shift.length; k++) {
        shift[k].classList.toggle('shift-active')
      }
      isShift = !isShift;
      const codeAttribute = getCurrentCodeType();
      for (let i = 0; i < keyboardKeys.length; i++) {
        const dataCode = keyboardKeys[i].dataset[codeAttribute];
        if (dataCode && !keyboardKeys[i].dataset.nonchanged) {
          keyboardKeys[i].innerHTML = String.fromCharCode(dataCode);
        }
      };
    });
  }

  let pressed = new Set();
  const codes = ['ControlLeft', 'AltLeft'];

  document.addEventListener('keydown', function (event) {
    pressed.add(event.code);

    for (let i = 0; i < codes.length; i++) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }
    pressed.clear();

    isEng = !isEng
    const codeAttribute = getCurrentCodeType();
    for (let i = 0; i < keyboardKeys.length; i++) {
      const dataCode = keyboardKeys[i].dataset[codeAttribute];
      if (dataCode && !keyboardKeys[i].dataset.nonchanged) {
        keyboardKeys[i].innerHTML = String.fromCharCode(dataCode);
      }
    };
  });

  document.addEventListener('keyup', function (event) {
    pressed.delete(event.code);
  });
};
