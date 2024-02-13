function updateHelsinkiTime() {
    const helsinkiTime = new Date().toLocaleTimeString('en-US', {timeZone: 'Europe/Helsinki', hour12: false});
    document.getElementById('helsinki-time').innerText = `${helsinkiTime}`;
}

setInterval(updateHelsinkiTime, 1000);
updateHelsinkiTime();


document.addEventListener("DOMContentLoaded", function () {
    // Add a scroll event listener
    window.addEventListener("scroll", function () {
        // Get the total height of the document
        const totalHeight = document.documentElement.scrollHeight;

        // Get the height of the viewport
        const viewportHeight = window.innerHeight;

        // Calculate the scroll position relative to the total height
        const scrollPosition = (window.scrollY / (totalHeight - viewportHeight)) * 100;

        // Check if the scroll position is greater than or equal to 20%
        if (scrollPosition >= 20) {
            let style = document.getElementById('main_nav')
            style.style.backgroundColor = 'white'
            // Change the background color
        } else {
            let style = document.getElementById('main_nav')
            style.style.backgroundColor = ''
            // Revert the background color
        }
    });
});

function showPopup() {
  const popup = document.getElementById('popup-message');

  // Display the popup
  popup.style.display = 'block';

  // Hide the popup after 6 seconds
  setTimeout(function() {
    popup.style.display = 'none';
  }, 5555);
}