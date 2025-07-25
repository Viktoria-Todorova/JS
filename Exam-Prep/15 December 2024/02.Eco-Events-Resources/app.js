// Wait for the full window (DOM + images + other resources) to load
window.addEventListener("load", solve);

function solve() {

  // Select the submit button and attach the 'click' event listener to handle form submission
  let submitBtn = document.getElementById('next-btn');
  submitBtn.addEventListener('click', onSubmit);

  // Main function triggered when user clicks "Next"
  function onSubmit(e) {
    e.preventDefault(); // Prevent the form from submitting/reloading the page

    // Retrieve input values from the form fields
    let email = document.getElementById('email').value;
    let event = document.getElementById('event').value;
    let location = document.getElementById('location').value;

    // Validate input: if any field is empty, do not continue
    if (!email || !event || !location) {
      return; // Stop if inputs are not all filled in
    }

    // Create the main <li> element to represent the user’s event entry
    let result = create('li', [
      create('article', [ // Create an <article> tag to hold event info
        create('h4', [email]), // User email goes in <h4>

        // First paragraph: Event name
        create('p', [
          create('strong', ['Event:']), // Bold label
          create('br', []),             // Line break
          event                         // Event name as text
        ]),

        // Second paragraph: Location
        create('p', [
          create('strong', ['Location:']), // Bold label
          create('br', []),                // Line break
          location                         // Location as text
        ])
      ])
    ]);

    // Create the "Edit" button for this entry
    let editBtn = create('button', ['edit']);
    editBtn.className = 'action-btn edit'; // Assign CSS class for styling
    editBtn.addEventListener('click', () => onEdit(email, event, location)); // Add edit functionality
    result.appendChild(editBtn); // Add button to list item

    // Create the "Apply" button
    let applyBtn = create('button', ['apply']);
    applyBtn.className = 'action-btn apply';
    applyBtn.addEventListener('click', () => onApply(result)); // Add apply functionality
    result.appendChild(applyBtn);

    // Add a class to the list item for styling purposes
    result.className = 'application';

    // Append the new list item to the preview list on the page
    let list = document.getElementById('preview-list');
    list.appendChild(result);

    // Reset the form fields after submission
    document.querySelector('.registerEvent').reset();

    // Disable the "Next" button to prevent multiple entries until current one is processed
    submitBtn.disabled = true;
  }

  // Function to handle "Edit" button click
  function onEdit(email, event, location) {
    // Restore the input values to the form so user can make changes
    document.getElementById('email').value = email;
    document.getElementById('event').value = event;
    document.getElementById('location').value = location;

    // Enable the submit button again so user can re-submit the edited version
    submitBtn.disabled = false;

    // Clear the preview list — we remove the original list item to allow re-submission
    document.getElementById('preview-list').replaceChildren(); // Clear all children efficiently
  }

  // Function to handle "Apply" button click
  function onApply(element) {
    // Move the current event item from preview list to the final confirmed list
    document.getElementById('event-list').appendChild(element);

    // Remove Edit and Apply buttons so the item can't be changed anymore
    let btns = Array.from(element.querySelectorAll('button'));
    for (let btn of btns) {
      btn.remove();
    }

    // Allow user to submit another event
    submitBtn.disabled = false;
  }

  // Utility function: dynamically creates a DOM element and appends children/text to it
  function create(tagName, content) {
    let element = document.createElement(tagName); // Create the element (e.g., 'p', 'li', 'button')

    for (let child of content) {
      // If the child is a DOM element (e.g., <strong>), append it directly
      if (typeof child === 'object') {
        element.appendChild(child);
      } else {
        // Otherwise, treat it as text and create a text node
        let node = document.createTextNode(child);
        element.appendChild(node);
      }
    }

    return element; // Return the constructed DOM element
  }
}
