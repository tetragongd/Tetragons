// 1. Grab the button element by its ID from the HTML
const sitesButton = document.getElementById('sitesLink');

// 2. Add an event listener to 'listen' for a mouse click
sitesButton.addEventListener('click', function() {
    
    // 3. Log a message to the console (useful for debugging!)
    console.log("Redirecting to the sites page...");

    // 4. Change the URL of the current tab
    window.location.href = "http://t4tcrew.com/sites";
});