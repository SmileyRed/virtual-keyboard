export function initClickListeners() {

  const keyboardKeys = document.querySelectorAll('.keyboard__key');
  const textarea = document.querySelector('.keyboard__textarea');


  for (let i = 0; i < keyboardKeys.length; i++) {
    keyboardKeys[i].addEventListener('click', () => {
      const dataCode = keyboardKeys[i].dataset.englowcode;
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
  const keyAlt = document.querySelectorAll('.alt');
  const keyCtrl = document.querySelectorAll('.ctrl');

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
};