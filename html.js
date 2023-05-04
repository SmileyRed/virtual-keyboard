export function addKeyboardWrapper() {
  document.body.insertAdjacentHTML('afterbegin',
    `
    <div class="keyboard-wrapper">
    <div class="keyboard__textarea-wrapper">
      <textarea class="keyboard__textarea" name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="keyboard-container">
      <div class="keyboard__line">
        <div class="keyboard__key" data-engCapsCode="96" data-engLowCode="96" data-shiftCode="126" data-ruLowCode="1105" data-ruCapsCode="1025" data-ruSiftCode="1025" data-keycode="Backquote">\`</div >
        <div class="keyboard__key" data-engCapsCode="49" data-engLowCode="49" data-shiftCode="33" data-ruLowCode="49" data-ruCapsCode="49" data-ruSiftCode="33" data-keycode="Digit1">1</div>
        <div class="keyboard__key" data-engCapsCode="50" data-engLowCode="50" data-shiftCode="64" data-ruLowCode="50" data-ruCapsCode="50" data-ruSiftCode="64" data-keycode="Digit2">2</div>
        <div class="keyboard__key" data-engCapsCode="51" data-engLowCode="51" data-shiftCode="35" data-ruLowCode="51" data-ruCapsCode="51" data-ruSiftCode="35" data-keycode="Digit3">3</div>
        <div class="keyboard__key" data-engCapsCode="52" data-engLowCode="52" data-shiftCode="36" data-ruLowCode="52" data-ruCapsCode="52" data-ruSiftCode="36" data-keycode="Digit4">4</div>
        <div class="keyboard__key" data-engCapsCode="53" data-engLowCode="53" data-shiftCode="37" data-ruLowCode="53" data-ruCapsCode="53" data-ruSiftCode="37" data-keycode="Digit5">5</div>
        <div class="keyboard__key" data-engCapsCode="54" data-engLowCode="54" data-shiftCode="94" data-ruLowCode="54" data-ruCapsCode="54" data-ruSiftCode="94" data-keycode="Digit6">6</div>
        <div class="keyboard__key" data-engCapsCode="55" data-engLowCode="55" data-shiftCode="38" data-ruLowCode="55" data-ruCapsCode="55" data-ruSiftCode="38" data-keycode="Digit7">7</div>
        <div class="keyboard__key" data-engCapsCode="56" data-engLowCode="56" data-shiftCode="42" data-ruLowCode="56" data-ruCapsCode="56" data-ruSiftCode="42" data-keycode="Digit8">8</div>
        <div class="keyboard__key" data-engCapsCode="57" data-engLowCode="57" data-shiftCode="40" data-ruLowCode="57" data-ruCapsCode="57" data-ruSiftCode="40" data-keycode="Digit9">9</div>
        <div class="keyboard__key" data-engCapsCode="48" data-engLowCode="48" data-shiftCode="41" data-ruLowCode="48" data-ruCapsCode="48" data-ruSiftCode="41" data-keycode="Digit0">0</div>
        <div class="keyboard__key" data-engCapsCode="45" data-engLowCode="45" data-shiftCode="95" data-ruLowCode="45" data-ruCapsCode="45" data-ruSiftCode="95" data-keycode="Minus">-</div>
        <div class="keyboard__key" data-engCapsCode="61" data-engLowCode="61" data-shiftCode="43" data-ruLowCode="61" data-ruCapsCode="61" data-ruSiftCode="43" data-keycode="Equal">=</div>
        <div class="keyboard__fn backspace" data-keycode="Backspace">backspace</div>
      </div >
      <div class="keyboard__line">
        <div class="keyboard__key tab" data-nonchanged="true" data-engLowCode="9" data-engCapsCode="9" data-shiftCode="9" data-ruLowCode="9" data-ruCapsCode="9" data-ruSiftCode="9" data-keycode="Tab">tab</div>
        <div class="keyboard__key" data-engCapsCode="81" data-engLowCode="113" data-shiftCode="81" data-ruLowCode="1081" data-ruCapsCode="1049" data-ruSiftCode="1049" data-keycode="81" data-keycode="KeyQ">q</div>
        <div class="keyboard__key" data-log="true" data-engCapsCode="87" data-engLowCode="119" data-shiftCode="87" data-ruLowCode="1094" data-ruCapsCode="1062" data-ruSiftCode="1062" data-keycode="KeyW">w</div>
        <div class="keyboard__key" data-engCapsCode="69" data-engLowCode="101" data-shiftCode="69" data-ruLowCode="1091" data-ruCapsCode="1059" data-ruSiftCode="1059" data-keycode="KeyE">e</div>
        <div class="keyboard__key" data-engCapsCode="82" data-engLowCode="114" data-shiftCode="82" data-ruLowCode="1082" data-ruCapsCode="1050" data-ruSiftCode="1050" data-keycode="KeyR">r</div>
        <div class="keyboard__key" data-engCapsCode="84" data-engLowCode="116" data-shiftCode="84" data-ruLowCode="1077" data-ruCapsCode="1045" data-ruSiftCode="1045" data-keycode="KeyT">t</div>
        <div class="keyboard__key" data-engCapsCode="89" data-engLowCode="121" data-shiftCode="89" data-ruLowCode="1085" data-ruCapsCode="1053" data-ruSiftCode="1053" data-keycode="KeyY">y</div>
        <div class="keyboard__key" data-engCapsCode="85" data-engLowCode="117" data-shiftCode="85" data-ruLowCode="1075" data-ruCapsCode="1043" data-ruSiftCode="1043" data-keycode="KeyU">u</div>
        <div class="keyboard__key" data-engCapsCode="73" data-engLowCode="105" data-shiftCode="73" data-ruLowCode="1096" data-ruCapsCode="1064" data-ruSiftCode="1064" data-keycode="KeyI">i</div>
        <div class="keyboard__key" data-engCapsCode="79" data-engLowCode="111" data-shiftCode="79" data-ruLowCode="1097" data-ruCapsCode="1065" data-ruSiftCode="1065" data-keycode="KeyO">o</div>
        <div class="keyboard__key" data-engCapsCode="80" data-engLowCode="112" data-shiftCode="80" data-ruLowCode="1079" data-ruCapsCode="1047" data-ruSiftCode="1047" data-keycode="KeyP">p</div>
        <div class="keyboard__key" data-engCapsCode="91" data-engLowCode="91" data-shiftCode="123" data-ruLowCode="1093" data-ruCapsCode="1061" data-ruSiftCode="1061" data-keycode="BracketLeft">[</div>
        <div class="keyboard__key" data-engCapsCode="93" data-engLowCode="93" data-shiftCode="125" data-ruLowCode="1098" data-ruCapsCode="1066" data-ruSiftCode="1066" data-keycode="BracketRight">]</div>
        <div class="keyboard__key" data-engCapsCode="92" data-engLowCode="92" data-shiftCode="124" data-ruLowCode="92" data-ruCapsCode="92" data-ruSiftCode="47" data-keycode="Backslash">\\</div>
        <div class="keyboard__fn del" data-keycode="Delete">del</div>
      </div>
      <div class="keyboard__line">
        <div class="keyboard__fn capsock" data-engCode="20" data-keycode="CapsLock">cpslck</div>
        <div class="keyboard__key" data-engCapsCode="65" data-engLowCode="97" data-shiftCode="65" data-ruLowCode="1092" data-ruCapsCode="1060" data-ruSiftCode="1060" data-keycode="KeyA">a</div>
        <div class="keyboard__key" data-engCapsCode="83" data-engLowCode="115" data-shiftCode="83" data-ruLowCode="1099" data-ruCapsCode="1067" data-ruSiftCode="1067" data-keycode="KeyS">s</div>
        <div class="keyboard__key" data-engCapsCode="68" data-engLowCode="100" data-shiftCode="68" data-ruLowCode="1074" data-ruCapsCode="1042" data-ruSiftCode="1042" data-keycode="KeyD">d</div>
        <div class="keyboard__key" data-engCapsCode="70" data-engLowCode="102" data-shiftCode="70" data-ruLowCode="1072" data-ruCapsCode="1040" data-ruSiftCode="1040" data-keycode="KeyF">f</div>
        <div class="keyboard__key" data-engCapsCode="71" data-engLowCode="103" data-shiftCode="71" data-ruLowCode="1087" data-ruCapsCode="1055" data-ruSiftCode="1055" data-keycode="KeyG">g</div>
        <div class="keyboard__key" data-engCapsCode="72" data-engLowCode="104" data-shiftCode="72" data-ruLowCode="1088" data-ruCapsCode="1056" data-ruSiftCode="1056" data-keycode="KeyH">h</div>
        <div class="keyboard__key" data-engCapsCode="74" data-engLowCode="106" data-shiftCode="74" data-ruLowCode="1086" data-ruCapsCode="1054" data-ruSiftCode="1054" data-keycode="KeyJ">j</div>
        <div class="keyboard__key" data-engCapsCode="75" data-engLowCode="107" data-shiftCode="75" data-ruLowCode="1083" data-ruCapsCode="1051" data-ruSiftCode="1051" data-keycode="KeyK">k</div>
        <div class="keyboard__key" data-engCapsCode="76" data-engLowCode="108" data-shiftCode="76" data-ruLowCode="1076" data-ruCapsCode="1044" data-ruSiftCode="1044" data-keycode="KeyL">l</div>
        <div class="keyboard__key" data-engCapsCode="59" data-engLowCode="59" data-shiftCode="58" data-ruLowCode="1078" data-ruCapsCode="1046" data-ruSiftCode="1046" data-keycode="Semicolon">;</div>
        <div class="keyboard__key" data-engCapsCode="39" data-engLowCode="39" data-shiftCode="34" data-ruLowCode="1101" data-ruCapsCode="1069" data-ruSiftCode="1069" data-keycode="Quote">'</div>
        <div class="keyboard__key enter" data-nonchanged="true" data-engCapsCode="10" data-engLowCode="10" data-shiftCode="10" data-ruLowCode="10" data-ruCapsCode="10"  data-ruSiftCode="10" data-keycode="Enter">enter</div>
      </div>
      <div class="keyboard__line">
        <div class="keyboard__fn shift" data-engCode="16" data-keycode="ShiftLeft">shift</div>
        <div class="keyboard__key" data-engCapsCode="90" data-engLowCode="122" data-shiftCode="90" data-ruLowCode="1103" data-ruCapsCode="1071" data-ruSiftCode="1071" data-keycode="KeyZ">z</div>
        <div class="keyboard__key" data-engCapsCode="88" data-engLowCode="102" data-shiftCode="88" data-ruLowCode="1095" data-ruCapsCode="1063" data-ruSiftCode="1063" data-keycode="KeyX">x</div>
        <div class="keyboard__key" data-engCapsCode="67" data-engLowCode="99" data-shiftCode="67" data-ruLowCode="1089" data-ruCapsCode="1057" data-ruSiftCode="1057" data-keycode="KeyC">c</div>
        <div class="keyboard__key" data-engCapsCode="86" data-engLowCode="118" data-shiftCode="86" data-ruLowCode="1084" data-ruCapsCode="1052" data-ruSiftCode="1052" data-keycode="KeyV">v</div>
        <div class="keyboard__key" data-engCapsCode="66" data-engLowCode="98" data-shiftCode="66" data-ruLowCode="1080" data-ruCapsCode="1048" data-ruSiftCode="1048" data-keycode="KeyB">b</div>
        <div class="keyboard__key" data-engCapsCode="78" data-engLowCode="110" data-shiftCode="78" data-ruLowCode="1090" data-ruCapsCode="1058" data-ruSiftCode="1058" data-keycode="KeyN">n</div>
        <div class="keyboard__key" data-engCapsCode="77" data-engLowCode="109" data-shiftCode="77" data-ruLowCode="1100" data-ruCapsCode="1068" data-ruSiftCode="1068" data-keycode="KeyM">m</div>
        <div class="keyboard__key" data-engCapsCode="44" data-engLowCode="44" data-shiftCode="60" data-ruLowCode="1073" data-ruCapsCode="1041" data-ruSiftCode="1041" data-keycode="Comma">,</div>
        <div class="keyboard__key" data-engCapsCode="46" data-engLowCode="46" data-shiftCode="62" data-ruLowCode="1102" data-ruCapsCode="1070" data-ruSiftCode="1070" data-keycode="Period">.</div>
        <div class="keyboard__key" data-engCapsCode="47" data-engLowCode="47" data-shiftCode="63" data-ruLowCode="46" data-ruCapsCode="46" data-ruSiftCode="44" data-keycode="Slash">/</div>
        <div class="keyboard__key" data-engCapsCode="9650" data-engLowCode="9650" data-shiftCode="9650" data-ruLowCode="9650" data-ruCapsCode="9650" data-ruShiftCode="9650" data-keycode="ArrowUp">▲</div>
        <div class="keyboard__fn shift" data-engCode="16" data-keycode="ShiftRight">shift</div>
      </div>
      <div class="keyboard__line">
        <div class="keyboard__fn ctrl" data-keycode="ControlLeft">ctrl</div>
        <div class="keyboard__key" data-keycode="MetaLeft"><img class="win" src="./icon/icons8-windows-10-32.png" alt=""></div>
        <div class="keyboard__fn alt" data-keycode="AltLeft">alt</div>
        <div class="keyboard__key space" data-engCode="32" data-keycode="Space">space</div>
        <div class="keyboard__fn alt" data-keycode="AltRight">alt</div>
        <div class="keyboard__key" data-engCapsCode="9668" data-engLowCode="9668" data-shiftCode="9668" data-ruLowCode="9668" data-ruCapsCode="9668" data-ruShiftCode="9668" data-keycode="ArrowLeft">◄</div>
        <div class="keyboard__key" data-engCapsCode="9660" data-engLowCode="9660" data-shiftCode="9660" data-ruLowCode="9660" data-ruCapsCode="9660" data-ruShiftCode="9660" data-keycode="ArrowDown">▼</div>
        <div class="keyboard__key" data-engCapsCode="9658" data-engLowCode="9658" data-shiftCode="9658" data-ruLowCode="9658" data-ruCapsCode="9658" data-ruShiftCode="9658" data-keycode="ArrowRight">►</div>
        <div class="keyboard__fn ctrl" data-keycode="ControlRight">ctrl</div>
      </div>
      <div>Клавиатура создана в операционной системе Windows</div>
      <div>Для переключения языка используйте левые Ctrl + Alt</div>
    </div >
  </div >

    `);
}


