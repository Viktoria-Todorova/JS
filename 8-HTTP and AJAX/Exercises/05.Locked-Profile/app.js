async function lockedProfile() {
    const mainEl = document.getElementById('main');
    
    const createRes = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    const profilesData = await createRes.json();
    const profileArr = Object.values(profilesData);
    mainEl.innerHTML = '';

    profileArr.forEach((profileObk, index) => {
        const userIndex = index + 1;

        const divProfileEl = document.createElement('div');
        divProfileEl.className = 'profile';

        const imgEl = document.createElement('img');
        imgEl.src = "./iconProfile2.png";
        imgEl.className = 'userIcon';

        const labelLock = document.createElement('label');
        labelLock.textContent = 'Lock';

        const inputRadioLock = document.createElement('input');
        inputRadioLock.type = 'radio';
        inputRadioLock.name = `user${userIndex}Locked`;
        inputRadioLock.value = 'lock';
        inputRadioLock.checked = true;

        const labelUnlock = document.createElement('label');
        labelUnlock.textContent = 'Unlock';

        const inputRadioUnlock = document.createElement('input');
        inputRadioUnlock.type = 'radio';
        inputRadioUnlock.name = `user${userIndex}Locked`;
        inputRadioUnlock.value = 'unlock';

        const br = document.createElement('br');
        const hr1 = document.createElement('hr');
        const hr2 = document.createElement('hr');

        const labelUsername = document.createElement('label');
        labelUsername.textContent = 'Username';

        const inputUsername = document.createElement('input');
        inputUsername.type = 'text';
        inputUsername.name = `user${userIndex}Username`; // <- Updated
        inputUsername.value = profileObk.username;
        inputUsername.disabled = true;
        inputUsername.readOnly = true;

        // Hidden fields container
        const divHiddenFields = document.createElement('div');
        divHiddenFields.className = 'hiddenFields';
        divHiddenFields.style.display = 'none';

        const labelEmail = document.createElement('label');
        labelEmail.textContent = 'Email:';

        const inputEmail = document.createElement('input');
        inputEmail.type = 'email';
        inputEmail.name = `user${userIndex}Email`; // <- Updated
        inputEmail.value = profileObk.email;
        inputEmail.disabled = true;
        inputEmail.readOnly = true;

        const labelAge = document.createElement('label');
        labelAge.textContent = 'Age:';

        const inputAge = document.createElement('input');
        inputAge.type = 'number';
        inputAge.name = `user${userIndex}Age`; // <- Updated
        inputAge.value = profileObk.age;
        inputAge.disabled = true;
        inputAge.readOnly = true;

        divHiddenFields.appendChild(hr1);
        divHiddenFields.appendChild(labelEmail);
        divHiddenFields.appendChild(inputEmail);
        divHiddenFields.appendChild(labelAge);
        divHiddenFields.appendChild(inputAge);

        const showMoreBtn = document.createElement('button');
        showMoreBtn.textContent = 'Show more';

        // Assemble the profile card
        divProfileEl.appendChild(imgEl);
        divProfileEl.appendChild(labelLock);
        divProfileEl.appendChild(inputRadioLock);
        divProfileEl.appendChild(labelUnlock);
        divProfileEl.appendChild(inputRadioUnlock);
        divProfileEl.appendChild(br);
        divProfileEl.appendChild(hr2);
        divProfileEl.appendChild(labelUsername);
        divProfileEl.appendChild(inputUsername);
        divProfileEl.appendChild(divHiddenFields);
        divProfileEl.appendChild(showMoreBtn);

        // Add to DOM
        mainEl.appendChild(divProfileEl);

        // Event listener for Show/Hide
        showMoreBtn.addEventListener('click', () => {
            const isUnlocked = inputRadioUnlock.checked;

            if (isUnlocked) {
                const isHidden = divHiddenFields.style.display === 'none';

                if (isHidden) {
                    divHiddenFields.style.display = 'block';
                    showMoreBtn.textContent = 'Hide it';
                } else {
                    divHiddenFields.style.display = 'none';
                    showMoreBtn.textContent = 'Show more';
                }
            }
        });
    });
}
