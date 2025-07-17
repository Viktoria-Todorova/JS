function solve() {
    const textArealEl = document.getElementById('input');
    const outputEl = document.getElementById('output');

    const text = textArealEl.value;
    const sentences = text.split('.').filter(sentence => sentence.length > 0);

    let currentParagraph = '';
    for (let i=0; i< sentences.length;i++){
      const sentece =sentences[i].trim();
      currentParagraph += sentece + '.';
      if ((i+1) % 3 === 0 || i === sentences.length -1){
        const parargEl = `<p>${currentParagraph}</p>`;
        outputEl.innerHTML += parargEl;
        currentParagraph = '';
      }
    }


    

}