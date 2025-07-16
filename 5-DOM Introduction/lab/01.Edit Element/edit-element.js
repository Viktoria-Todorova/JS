function editElement(htmlRederence,strinMaTCH,replacer) {
    let htmlContent = htmlRederence.textContent;
    htmlContent = htmlContent.replaceAll(strinMaTCH,replacer);
    htmlRederence.textContent =htmlContent;
    
}