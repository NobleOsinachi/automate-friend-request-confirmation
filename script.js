// Function to simulate mousedown and click on an element
function triggerMouseEvents(element) {
    const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    element.dispatchEvent(mouseDownEvent);
    element.dispatchEvent(clickEvent);
}

// Function to confirm all friend requests
async function confirmAllFriendRequests() {
    let lastScrollHeight = 0;

    while (true) {
        // Find all confirm buttons
        const confirmButtons = document.querySelectorAll('div[aria-label="Confirm"]');

        confirmButtons.forEach(button => {
            triggerMouseEvents(button);
        });

        // Scroll down
        window.scrollBy(0, document.body.scrollHeight);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds

        // Check if more friend requests were loaded
        const currentScrollHeight = document.body.scrollHeight;
        if (currentScrollHeight === lastScrollHeight) {
            break; // No more new friend requests
        }
        lastScrollHeight = currentScrollHeight;
    }
}

// Run the function
confirmAllFriendRequests();
