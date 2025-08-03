async function lockedProfile() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    const data = await response.json();

    let index = 1;

    Object.values(data).forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');

        const radioName = `user${index}Locked`;
        const hiddenDivClass = `user${index}HiddenFields`;

        profileDiv.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="${radioName}" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="${radioName}" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${index}Username" value="${profile.username}" disabled readonly />
            <div class="${hiddenDivClass}" style="display: none">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${index}Email" value="${profile.email}" disabled readonly />
                <label>Age:</label>
                <input type="number" name="user${index}Age" value="${profile.age}" disabled readonly />
            </div>
            <button>Show more</button>
        `;

        const button = profileDiv.querySelector('button');
        const hiddenDiv = profileDiv.querySelector(`.${hiddenDivClass}`);
        const lockRadio = profileDiv.querySelector(`input[value="lock"]`);
        const unlockRadio = profileDiv.querySelector(`input[value="unlock"]`);

        button.addEventListener('click', () => {
            if (!lockRadio.checked) {
                if (hiddenDiv.style.display === 'none') {
                    hiddenDiv.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    hiddenDiv.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });

        main.appendChild(profileDiv);
        index++;
    });
}

lockedProfile();
