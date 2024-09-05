// visitor.js

// Function to log visitor if not already logged
function logVisitor() {
    let visitorIP = localStorage.getItem('visitorIP');
    if (!visitorIP) {
        visitorIP = generateUUID(); // Generate a unique identifier for the visitor
        localStorage.setItem('visitorIP', visitorIP); // Store visitor identifier in local storage
    }

    // Log visit
    if (!localStorage.getItem(visitorIP)) {
        localStorage.setItem(visitorIP, 'visited');
        incrementVisitorCount(); // Increment visitor count if it's a new visitor
    }
}

// Function to increment visitor count and display
function incrementVisitorCount() {
    let visitorCount = localStorage.getItem('visitorCount');
    if (!visitorCount) {
        visitorCount = 0;
    }
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    displayVisitorCount(visitorCount); // Display visitor count on the page
}

// Function to display visitor count on the page
function displayVisitorCount(count) {
    document.getElementById('visitorCount').innerText = 'Visitor Count: ' + count;
}

// Function to generate a unique visitor identifier
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Function to initialize visitor tracking
function initVisitorTracking() {
    logVisitor(); // Log the visitor
    let visitorCount = localStorage.getItem('visitorCount');
    if (!visitorCount) {
        visitorCount = 0;
    }
    displayVisitorCount(visitorCount); // Display initial visitor count on page load
}

// Initialize visitor tracking on page load
initVisitorTracking();
