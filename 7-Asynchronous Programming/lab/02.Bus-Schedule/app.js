function solve() {
    // Grab the part of the page where messages go (like "Next stop X")
    const infoSpan = document.querySelector('#info .info');

    // Grab the two buttons
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    // We'll keep track of where we are and where we're going next
    let currentStop = {
        name: '',         // name of the stop (e.g., "Depot")
        next: 'depot'     // ID of the next stop (starts at "depot")
    };

    // This runs when "Depart" is clicked
    async function depart() {
        try {
            // Fetch data about the next stop from the server
            const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`);

            // If the server says "nope", show an error
            if (!response.ok) {
                throw new Error('Fetch failed');
            }

            // Read the stop data as JSON (like a box with "name" and "next" inside)
            const data = await response.json();

            // Update our memory: where we are and where we go next
            currentStop.name = data.name;   // e.g., "Depot"
            currentStop.next = data.next;   // e.g., "nextStopId"

            // Show message like: "Next stop Downtown"
            infoSpan.textContent = `Next stop ${currentStop.name}`;

            // Disable "Depart" because we are moving
            departBtn.disabled = true;
            // Enable "Arrive" so the driver can say when we get there
            arriveBtn.disabled = false;
        } catch (error) {
            // If anything goes wrong, show "Error" and stop the bus
            showError();
        }
    }

    // This runs when "Arrive" is clicked
    function arrive() {
        // Show a message like: "Arriving at Downtown"
        infoSpan.textContent = `Arriving at ${currentStop.name}`;

        // Enable "Depart" to go to the next stop
        departBtn.disabled = false;
        // Disable "Arrive" since we're stopped now
        arriveBtn.disabled = true;
    }

    // In case of errors (e.g., bad data, server down)
    function showError() {
        infoSpan.textContent = 'Error';
        departBtn.disabled = true;
        arriveBtn.disabled = true;
    }

    // Return the two functions so the HTML can use them (onclick="result.depart()")
    return {
        depart,
        arrive
    };
}

// This runs the function and stores the result so HTML buttons can call it
const result = solve();
