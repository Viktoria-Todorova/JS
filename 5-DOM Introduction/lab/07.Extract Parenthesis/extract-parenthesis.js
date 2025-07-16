function extract(content) {
    const targetText = document.getElementById(content);
    const contentEl = targetText.textContent;
    const pattern = /\(.+?\)/g;
    const matches = contentEl.match(pattern);
    return matches.join(';');
    
    
    
}

let text = extract("content");