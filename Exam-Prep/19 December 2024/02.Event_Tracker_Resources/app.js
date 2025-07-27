window.addEventListener("load", solve);

function solve() {
    // Get references to important DOM elements
    const saveBtn = document.getElementById('save'); // "Save" button
    const upcomingList = document.getElementById('upcoming-list'); // Upcoming events <ul>
    const eventsList = document.getElementById('events-list'); // Ended events <ul>
    const form = document.querySelector('.event-content'); // Form element

    // Attach event listener to "Save" button
    saveBtn.addEventListener('click', handleOnSave);

    // Function to handle saving a new event
    function handleOnSave(e) {
        e.preventDefault(); // Prevent page refresh on form submit

        // Get input values and trim spaces
        const eventName = document.getElementById('event').value.trim();
        const shortNote = document.getElementById('note').value.trim();
        const eventDate = document.getElementById('date').value.trim();

        // If any field is empty, do not continue
        if (!eventName || !shortNote || !eventDate) {
            return;
        }

        // Create list item (<li class="event-item">)
        const listItem = create('li', [], { class: 'event-item' });

        // Create container div for the event
        const containerDiv = create('div', [], { class: 'event-container' });

        // Create an article containing event details
        const article = create('article', [
            create('p', [`Name: ${eventName}`]),
            create('p', [`Note: ${shortNote}`]),
            create('p', [`Date: ${eventDate}`])
        ]);

        // Create a div to hold the Edit/Done buttons
        const buttonsDiv = create('div', [], { class: 'buttons' });

        // Create Edit button
        const editBtn = create('button', ['Edit'], { class: 'btn edit' });
        // Create Done button
        const doneBtn = create('button', ['Done'], { class: 'btn done' });

        // Attach behavior for Edit button
        editBtn.addEventListener('click', () => {
            // Fill form inputs with the existing data
            document.getElementById('event').value = eventName;
            document.getElementById('note').value = shortNote;
            document.getElementById('date').value = eventDate;

            // Optional: enable save button if you were disabling it
            saveBtn.disabled = false;

            // Remove the existing upcoming list so user can submit again
            upcomingList.replaceChildren();
        });

        // Attach behavior for Done button
        doneBtn.addEventListener('click', () => {
            // Remove Edit and Done buttons
            editBtn.remove();
            doneBtn.remove();
            buttonsDiv.remove();

            // Move the list item to the ended events list
            eventsList.appendChild(listItem);
        });

        // Add buttons to button container
        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(doneBtn);

        // Build the structure of the event item
        containerDiv.appendChild(article);
        containerDiv.appendChild(buttonsDiv);
        listItem.appendChild(containerDiv);

        // Add to upcoming list
        upcomingList.appendChild(listItem);

        // Reset the form fields
        form.reset();
    }

    // Handle clicking the "Delete" button to remove all ended events
    const deleteBtn = document.querySelector('.btn.delete');
    deleteBtn.addEventListener('click', () => {
        eventsList.replaceChildren(); // Clear the "Ended" events list
    });

    // Helper function to create an HTML element
    function create(tag, content = [], attributes = {}) {
        const el = document.createElement(tag);

        // Apply any attributes (like class)
        for (const attr in attributes) {
            el.setAttribute(attr, attributes[attr]);
        }

        // Add text or child elements
        (Array.isArray(content) ? content : [content]).forEach(child => {
            if (typeof child === 'string') {
                el.appendChild(document.createTextNode(child));
            } else {
                el.appendChild(child);
            }
        });

        return el;
    }
}
