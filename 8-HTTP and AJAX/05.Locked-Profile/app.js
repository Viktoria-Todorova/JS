async function lockedProfile() {
    const mainEl = document.getElementById('main');
    
    const createRes = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    const profilesData = await createRes.json();
    const profileArr = Object.values(profilesData);
    mainEl.innerHTML='';
    console.log(profileArr);

    profileArr.forEach((profileObk, index) => {
        const userIndex = index + 1;
        const divProfileEl = document.createElement('div');
        divProfileEl.classList.add('profile');

        const imgEl = document.createElement('img');
        imgEl.src = "./iconProfile2.png";
        imgEl.classList.add('userIcon');

        const labelLoc = document.createElement('label');
        labelLoc.textContent = 'Lock';

        const inputRadioEl = document.createElement('input');
        inputRadioEl.type = 'radio';
        inputRadioEl.name = `user${userIndex}Locked`;
        inputRadioEl.value ='lock';
        inputRadioEl.checked = true;

        const labelUnlock = document.createElement('label');
        labelUnlock.textContent = 'Unlock';

        const inputRadiUnlock = document.createElement('input');
        inputRadiUnlock.type = 'radio';
        inputRadiUnlock.name = `user${userIndex}Locked`;
        inputRadiUnlock.value ='unlock';

        const br = document.createElement('br');
        const hr1 = document.createElement('hr');
        const hr2 = document.createElement('hr');

        const labelUsername = document.createElement('label');
        labelUsername.textContent = 'Username';

        const inputUsername = document.createElement('input');
        inputUsername.type = 'text';
        inputUsername.name = `user${userIndex}Username`;
        inputUsername.value = profileObk.username;
        inputUsername.disabled = true;
        inputUsername.readOnly = true;

        const divUsername = document.createElement('div');
        divUsername.classList.add(`user${userIndex}Username`);
        divUsername.style.display = 'none';

        const labelEmail = document.createElement('label');
        labelEmail.textContent = 'Email:';

        const inputEmail = document.createElement('input');
        inputEmail.type = 'email';
        inputEmail.name = `user${userIndex}Email`;
        inputEmail.value = profileObk.email;
        inputEmail.disabled = true;
        inputEmail.readOnly = true;

        const labelAge = document.createElement('label');
        labelAge.textContent = 'Age:';

        const inputAge = document.createElement('input');
        inputAge.type = 'number';
        inputAge.name = `user${userIndex}Age`;
        inputAge.value = profileObk.age;
        inputAge.disabled = true;
        inputAge.readOnly = true;

        divUsername.appendChild(hr1);
        divUsername.appendChild(labelEmail);
        divUsername.appendChild(inputEmail);
        divUsername.appendChild(labelAge);
        divUsername.appendChild(inputAge);

        const showMoreBtn = document.createElement('button');
        showMoreBtn.textContent = 'Show more';

        divProfileEl.appendChild(imgEl);
        divProfileEl.appendChild(labelLoc);
        divProfileEl.appendChild(inputRadioEl);
        divProfileEl.appendChild(labelUnlock);
        divProfileEl.appendChild(inputRadiUnlock);
        divProfileEl.appendChild(br);
        divProfileEl.appendChild(hr2);
        divProfileEl.appendChild(labelUsername);
        divProfileEl.appendChild(inputUsername);
        divProfileEl.appendChild(divUsername);
        divProfileEl.appendChild(showMoreBtn);

        mainEl.appendChild(divProfileEl);

        showMoreBtn.addEventListener('click', () => {
            if (inputRadiUnlock.checked) {
                const isHidden = divUsername.style.display === 'none';

                if (isHidden) {
                    divUsername.style.display = 'block';
                    showMoreBtn.textContent = 'Hide it';
                } else {
                    divUsername.style.display = 'none';
                    showMoreBtn.textContent = 'Show more';
                }
            }
        });
    });

    console.log(mainEl);
    
}