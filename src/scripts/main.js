'use strict';

function copyText() {
    var copiedText = document.getElementById("copied__text");
    copiedText.select();
    document.execCommand("copy");
}
