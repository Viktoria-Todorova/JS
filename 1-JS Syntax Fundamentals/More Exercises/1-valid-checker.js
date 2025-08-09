function validityChecker(x1, y1, x2, y2) {

    function isValidDistance(a1, b1, a2, b2) {
        let distance = Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2);
        return Number.isInteger(distance);
    }

    // Check 1: (x1, y1) -> (0, 0)
    if (isValidDistance(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    // Check 2: (x2, y2) -> (0, 0)
    if (isValidDistance(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    // Check 3: (x1, y1) -> (x2, y2)
    if (isValidDistance(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// Example:
validityChecker(3, 4, 5, 12);
