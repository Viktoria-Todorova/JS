document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const sendetrTextEl = document.querySelector('#encode textarea');
    const receiverTextEl = document.querySelector('#decode textarea');

    const encodeBtnEl = document.querySelector('#encode button');
    const decodeBtnEl = document.querySelector('#decode button');

    encodeBtnEl.addEventListener('click',handleEncodeMsg);
    decodeBtnEl.addEventListener('click', handleDecodeMsg);
    function handleEncodeMsg(e){
        e.preventDefault();
        const originalMsg = sendetrTextEl.value.trim();
        let encodedmsg = '';

        for(const ch of originalMsg){
            const originalaSCII = ch.charCodeAt();
            const newAscii = originalaSCII +1;
            const newChar = String.fromCharCode(newAscii);
            encodedmsg += newChar;
        }

        sendetrTextEl.value = '';
        receiverTextEl.value = encodedmsg;
    }

    function handleDecodeMsg(e){
        e.preventDefault();

        const encodedMsg = receiverTextEl.value.trim();
        let decodedmsg = '';

        for(const ch of encodedMsg){
            const originalaSCII = ch.charCodeAt();
            const newAscii = originalaSCII - 1;
            const newChar = String.fromCharCode(newAscii);
            decodedmsg += newChar;
        }

        
        receiverTextEl.value = decodedmsg;
    }

}