function attachGradientEvents() {
    const gradientEl = document.getElementById('gradient');
    const resultDiv = document.getElementById('result');

    gradientEl.addEventListener('mousemove',calculateXPercentage); //all the time that the mouse moves it calculates the gradient

    function calculateXPercentage(e){
        const percentage = Math.floor(e.offsetX/ e.target.clientWidth * 100);
        resultDiv.textContent =`${percentage}%`;
    }
}
