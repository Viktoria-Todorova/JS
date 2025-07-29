function loadRepos(){
    const usernameinputEl=document.querySelector('#username');
    const repoURL = document.querySelector('#repos');
    repoURL.innerHTML= '';
    const username = usernameinputEl.value.trim();

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => {
            if (!res.ok){
                throw new Error(res.status);
            }
            return res.json();
        } )
        .then(allrepos=> {
            allrepos.forEach(repoObj => {
                const liEl = document.createElement('li');
                const aEl = document.createElement('a');
                aEl.href = repoObj.html_url;
                aEl.textContent =repoObj.full_name;

                liEl.appendChild(aEl);
                repoURL.appendChild(liEl);
            })
        })
        .catch(err=> {
            const liEl = document.createElement('li');
            liEl.textContent = `${err} (Not Found)`;
            repoURL.appendChild(liEl);
            
        })
}