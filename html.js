export function addKeyboardWrapper() {
  document.body.insertAdjacentHTML("afterbegin",
    `
    <div class="keyboard-wrapper">
    <div class="keyboard__textarea-wrapper">
      <textarea class="keyboard__textarea" name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="keyboard-container">
      <div class="keyboard__line">
        <div class="keyboard__key">\`</div >
        <div class="keyboard__key">1</div>
        <div class="keyboard__key">2</div>
        <div class="keyboard__key">3</div>
        <div class="keyboard__key">4</div>
        <div class="keyboard__key">5</div>
        <div class="keyboard__key">6</div>
        <div class="keyboard__key">7</div>
        <div class="keyboard__key">8</div>
        <div class="keyboard__key">9</div>
        <div class="keyboard__key">0</div>
        <div class="keyboard__key">-</div>
        <div class="keyboard__key">=</div>
        <div class="keyboard__key keyboard__key-letter backspace">backspace</div>
      </div >
      <div class="keyboard__line">
        <div class="keyboard__key keyboard__key-letter tab">tab</div>
        <div class="keyboard__key">q</div>
        <div class="keyboard__key">w</div>
        <div class="keyboard__key">e</div>
        <div class="keyboard__key">r</div>
        <div class="keyboard__key">t</div>
        <div class="keyboard__key">y</div>
        <div class="keyboard__key">u</div>
        <div class="keyboard__key">i</div>
        <div class="keyboard__key">o</div>
        <div class="keyboard__key">p</div>
        <div class="keyboard__key">[</div>
        <div class="keyboard__key">]</div>
        <div class="keyboard__key">\\</div>
        <div class="keyboard__key keyboard__key-letter del">del</div>
      </div>
      <div class="keyboard__line">
        <div class="keyboard__key keyboard__key-letter capsock">cpsLck</div>
        <div class="keyboard__key">a</div>
        <div class="keyboard__key">s</div>
        <div class="keyboard__key">d</div>
        <div class="keyboard__key">f</div>
        <div class="keyboard__key">g</div>
        <div class="keyboard__key">h</div>
        <div class="keyboard__key">j</div>
        <div class="keyboard__key">k</div>
        <div class="keyboard__key">l</div>
        <div class="keyboard__key">;</div>
        <div class="keyboard__key">'</div>
        <div class="keyboard__key enter">enter</div>
      </div>
      <div class="keyboard__line">
        <div class="keyboard__key keyboard__key-letter shift">shift</div>
        <div class="keyboard__key">z</div>
        <div class="keyboard__key">x</div>
        <div class="keyboard__key">c</div>
        <div class="keyboard__key">v</div>
        <div class="keyboard__key">b</div>
        <div class="keyboard__key">n</div>
        <div class="keyboard__key">m</div>
        <div class="keyboard__key">,</div>
        <div class="keyboard__key">.</div>
        <div class="keyboard__key">/</div>
        <div class="keyboard__key "><img class="arrow" src="./icon/arrow-top.png" alt=""></div>
        <div class="keyboard__key keyboard__key-letter shift">shift</div>
      </div>
      <div class="keyboard__line">
        <div class="keyboard__key keyboard__key-letter ctrl">ctrl</div>
        <div class="keyboard__key"><img class="win" src="./icon/icons8-windows-10-32.png" alt=""></div>
        <div class="keyboard__key keyboard__key-letter alt">alt</div>
        <div class="keyboard__key keyboard__key-letter space">space</div>
        <div class="keyboard__key keyboard__key-letter alt">alt</div>
        <div class="keyboard__key"><img class="arrow" src="./icon/arrow-left.png" alt=""></div>
        <div class="keyboard__key"><img class="arrow" src="./icon/arrow-bottom.png" alt=""></div>
        <div class="keyboard__key"><img class="arrow" src="./icon/arrow-right.png" alt=""></div>
        <div class="keyboard__key ctrl keyboard__key-letter">ctrl</div>
      </div>
    </div >
  </div >

    `);
}


