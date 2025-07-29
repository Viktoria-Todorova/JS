function loadRepos(){
    const resDiv =document.querySelector('#res');

    fetch('https://api.github.com/users/testnakov/repos')
        .then(res => res.text())
        .then(data => {
            resDiv.textContent =data;
        });

}