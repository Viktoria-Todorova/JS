async function solution() {
    const main = document.getElementById('main');

    // Step 1: Fetch the list of articles
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const articles = await response.json();

    for (const article of articles) {
        // Step 2: Create the accordion structure
        const accordion = document.createElement('div');
        accordion.classList.add('accordion');

        const headDiv = document.createElement('div');
        headDiv.classList.add('head');

        const span = document.createElement('span');
        span.textContent = article.title;

        const button = document.createElement('button');
        button.className = 'button';
        button.id = article._id;
        button.textContent = 'More';

        headDiv.appendChild(span);
        headDiv.appendChild(button);
        accordion.appendChild(headDiv);

        // Create hidden extra content container
        const extraDiv = document.createElement('div');
        extraDiv.classList.add('extra');
        extraDiv.style.display = 'none';

        const paragraph = document.createElement('p');
        extraDiv.appendChild(paragraph);

        accordion.appendChild(extraDiv);
        main.appendChild(accordion);

        // Step 3: Button toggle logic
        button.addEventListener('click', async () => {
            if (button.textContent === 'More') {
                // Fetch article details
                const contentRes = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`);
                const contentData = await contentRes.json();

                paragraph.textContent = contentData.content;
                extraDiv.style.display = 'block';
                button.textContent = 'Less';
            } else {
                extraDiv.style.display = 'none';
                button.textContent = 'More';
            }
        });
    }
}

solution(); // Call the function on script load
