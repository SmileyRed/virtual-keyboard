export function addKeyboardWrapper() {
  document.body.insertAdjacentHTML('afterbegin',
    `
    <div class="keyboard-wrapper">
    <div class="keyboard__textarea-wrapper">
      <textarea class="keyboard__textarea" name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="keyboard-container">
      <div class="keyboard__line">
        <div class="keyboard__key" data-engCapsCode="96" data-engLowCode="96" data-shiftCode="126" data-ruCode="184" data-ruCapsCode="168" data-ruShiftCode="191">\`</div >
        <div class="keyboard__key" data-engCapsCode="49" data-engLowCode="49" data-shiftCode="33">1</div>
        <div class="keyboard__key" data-engCapsCode="50" data-engLowCode="50" data-shiftCode="64">2</div>
        <div class="keyboard__key" data-engCapsCode="51" data-engLowCode="51" data-shiftCode="35">3</div>
        <div class="keyboard__key" data-engCapsCode="52" data-engLowCode="52" data-shiftCode="36">4</div>
        <div class="keyboard__key" data-engCapsCode="53" data-engLowCode="53" data-shiftCode="37">5</div>
        <div class="keyboard__key" data-engCapsCode="54" data-engLowCode="54" data-shiftCode="94">6</div>
        <div class="keyboard__key" data-engCapsCode="55" data-engLowCode="55" data-shiftCode="38">7</div>
        <div class="keyboard__key" data-engCapsCode="56" data-engLowCode="56" data-shiftCode="42">8</div>
        <div class="keyboard__key" data-engCapsCode="57" data-engLowCode="57" data-shiftCode="40">9</div>
        <div class="keyboard__key" data-engCapsCode="48" data-engLowCode="48" data-shiftCode="41">0</div>
        <div class="keyboard__key" data-engCapsCode="45" data-engLowCode="45" data-shiftCode="95">-</div>
        <div class="keyboard__key" data-engCapsCode="61" data-engLowCode="61" data-shiftCode="43">=</div>
        <div class="keyboard__fn backspace">backspace</div>
      </div >
      <div class="keyboard__line">
        <div class="keyboard__key tab" data-nonchanged="true" data-engLowCode="9" data-engCapsCode="9" data-shiftCode="9" data-ruCode="9" data-ruCapsCode="9">tab</div>
        <div class="keyboard__key" data-engCapsCode="81" data-engLowCode="113" data-shiftCode="81" data-ruCode="233" data-ruCapsCode="201">q</div>
        <div class="keyboard__key" data-engCapsCode="87" data-engLowCode="119" data-shiftCode="87" data-ruCode="246" data-ruCapsCode="214">w</div>
        <div class="keyboard__key" data-engCapsCode="69" data-engLowCode="101" data-shiftCode="69" data-ruCode="243" data-ruCapsCode="197">e</div>
        <div class="keyboard__key" data-engCapsCode="82" data-engLowCode="114" data-shiftCode="82" data-ruCode="234" data-ruCapsCode="202">r</div>
        <div class="keyboard__key" data-engCapsCode="84" data-engLowCode="116" data-shiftCode="84" data-ruCode="229" data-ruCapsCode="197">t</div>
        <div class="keyboard__key" data-engCapsCode="89" data-engLowCode="121" data-shiftCode="89" data-ruCode="237" data-ruCapsCode="205">y</div>
        <div class="keyboard__key" data-engCapsCode="85" data-engLowCode="117" data-shiftCode="85" data-ruCode="227" data-ruCapsCode="195">u</div>
        <div class="keyboard__key" data-engCapsCode="73" data-engLowCode="105" data-shiftCode="73" data-ruCode="248" data-ruCapsCode="216">i</div>
        <div class="keyboard__key" data-engCapsCode="79" data-engLowCode="111" data-shiftCode="79" data-ruCode="249" data-ruCapsCode="217">o</div>
        <div class="keyboard__key" data-engCapsCode="80" data-engLowCode="112" data-shiftCode="80" data-ruCode="231" data-ruCapsCode="199">p</div>
        <div class="keyboard__key" data-engCapsCode="91" data-engLowCode="91" data-shiftCode="123" data-ruCode="245" data-ruCapsCode="213">[</div>
        <div class="keyboard__key" data-engCapsCode="93" data-engLowCode="93" data-shiftCode="125" data-ruCode="250" data-ruCapsCode="218">]</div>
        <div class="keyboard__key" data-engCapsCode="92" data-engLowCode="92" data-shiftCode="124">\\</div>
        <div class="keyboard__fn del">del</div>
      </div>
      <div class="keyboard__line">
        <div class="keyboard__fn capsock" data-engCode="20">cpslck</div>
        <div class="keyboard__key" data-engCapsCode="65" data-engLowCode="97" data-shiftCode="65" data-ruCode="244" data-ruCapsCode="212">a</div>
        <div class="keyboard__key" data-engCapsCode="83" data-engLowCode="115" data-shiftCode="83" data-ruCode="251" data-ruCapsCode="219">s</div>
        <div class="keyboard__key" data-engCapsCode="68" data-engLowCode="100" data-shiftCode="68" data-ruCode="226" data-ruCapsCode="194">d</div>
        <div class="keyboard__key" data-engCapsCode="70" data-engLowCode="102" data-shiftCode="70" data-ruCode="224" data-ruCapsCode="192">f</div>
        <div class="keyboard__key" data-engCapsCode="71" data-engLowCode="103" data-shiftCode="71" data-ruCode="239" data-ruCapsCode="207">g</div>
        <div class="keyboard__key" data-engCapsCode="72" data-engLowCode="104" data-shiftCode="72" data-ruCode="240" data-ruCapsCode="208">h</div>
        <div class="keyboard__key" data-engCapsCode="74" data-engLowCode="106" data-shiftCode="74" data-ruCode="238" data-ruCapsCode="206">j</div>
        <div class="keyboard__key" data-engCapsCode="75" data-engLowCode="107" data-shiftCode="75" data-ruCode="235" data-ruCapsCode="203">k</div>
        <div class="keyboard__key" data-engCapsCode="76" data-engLowCode="108" data-shiftCode="76" data-ruCode="228" data-ruCapsCode="196">l</div>
        <div class="keyboard__key" data-engCapsCode="59" data-engLowCode="59" data-shiftCode="58" data-ruCode="230" data-ruCapsCode="198">;</div>
        <div class="keyboard__key" data-engCapsCode="39" data-engLowCode="39" data-shiftCode="34" data-ruCode="253" data-ruCapsCode="221">'</div>
        <div class="keyboard__key enter" data-nonchanged="true" data-engCapsCode="10" data-engLowCode="10" data-shiftCode="10" data-ruCode="10" data-ruCapsCode="10">enter</div>
      </div>
      <div class="keyboard__line">
        <div class="keyboard__fn shift" data-engCode="16">shift</div>
        <div class="keyboard__key" data-engCapsCode="90" data-engLowCode="122" data-shiftCode="90" data-ruCode="255" data-ruCapsCode="223">z</div>
        <div class="keyboard__key" data-engCapsCode="88" data-engLowCode="102" data-shiftCode="88" data-ruCode="247" data-ruCapsCode="215">x</div>
        <div class="keyboard__key" data-engCapsCode="67" data-engLowCode="99" data-shiftCode="67" data-ruCode="241" data-ruCapsCode="209">c</div>
        <div class="keyboard__key" data-engCapsCode="86" data-engLowCode="118" data-shiftCode="86" data-ruCode="236" data-ruCapsCode="204">v</div>
        <div class="keyboard__key" data-engCapsCode="66" data-engLowCode="98" data-shiftCode="66" data-ruCode="232" data-ruCapsCode="200">b</div>
        <div class="keyboard__key" data-engCapsCode="78" data-engLowCode="110" data-shiftCode="78" data-ruCode="242" data-ruCapsCode="210">n</div>
        <div class="keyboard__key" data-engCapsCode="77" data-engLowCode="109" data-shiftCode="77" data-ruCode="252" data-ruCapsCode="220">m</div>
        <div class="keyboard__key" data-engCapsCode="44" data-engLowCode="44" data-shiftCode="60" data-ruCode="225" data-ruCapsCode="193">,</div>
        <div class="keyboard__key" data-engCapsCode="46" data-engLowCode="46" data-shiftCode="62" data-ruCode="254" data-ruCapsCode="222">.</div>
        <div class="keyboard__key" data-engCapsCode="47" data-engLowCode="47" data-shiftCode="63" data-ruCode="62" data-ruCapsCode="62" data-ruShiftCode="60">/</div>
        <div class="keyboard__key" data-engCapsCode="9650" data-engLowCode="9650" data-shiftCode="9650" data-ruCode="9650" data-ruCapsCode="9650" data-ruShiftCode="9650">▲</div>
        <div class="keyboard__fn shift" data-engCode="16">shift</div>
      </div>
      <div class="keyboard__line">
        <div class="keyboard__fn ctrl" data-engCode="17">ctrl</div>
        <div class="keyboard__key"><img class="win" src="./icon/icons8-windows-10-32.png" alt=""></div>
        <div class="keyboard__fn alt" data-engCode="18">alt</div>
        <div class="keyboard__key space" data-engCode="32">space</div>
        <div class="keyboard__fn alt" data-engCode="18">alt</div>
        <div class="keyboard__key" data-engCapsCode="9668" data-engLowCode="9668" data-shiftCode="9668" data-ruCode="9668" data-ruCapsCode="9668" data-ruShiftCode="9668">◄</div>
        <div class="keyboard__key" data-engCapsCode="9660" data-engLowCode="9660" data-shiftCode="9660" data-ruCode="9660" data-ruCapsCode="9660" data-ruShiftCode="9660">▼</div>
        <div class="keyboard__key" data-engCapsCode="9658" data-engLowCode="9658" data-shiftCode="9658" data-ruCode="9658" data-ruCapsCode="9658" data-ruShiftCode="9658">►</div>
        <div class="keyboard__fn ctrl" data-engCode="17">ctrl</div>
      </div>
      <div>Клавиатура создана в операционной системе Windows</div>
      <div>Для переключения языка используйте Ctrl + Alt</div>
    </div >
  </div >

    `);
}


