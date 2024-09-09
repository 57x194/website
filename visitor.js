function logVisitor() {
    let visitorIP = localStorage.getItem('visitorIP');
    if (!visitorIP) {
        visitorIP = generateUUID();
        localStorage.setItem('visitorIP', visitorIP);
    }

    if (!localStorage.getItem(visitorIP)) {
        localStorage.setItem(visitorIP, 'visited');
        incrementVisitorCount();
    }
}

function incrementVisitorCount() {
    let visitorCount = localStorage.getItem('visitorCount');
    if (!visitorCount) {
        visitorCount = 0;
    }
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    displayVisitorCount(visitorCount);
}

function displayVisitorCount(count) {
    document.getElementById('visitorCount').innerText = 'Visitor Count: ' + count;
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function initVisitorTracking() {
    logVisitor();
    let visitorCount = localStorage.getItem('visitorCount');
    if (!visitorCount) {
        visitorCount = 0;
    }
    displayVisitorCount(visitorCount);
}

initVisitorTracking();
