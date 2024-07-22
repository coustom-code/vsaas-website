// Get references to the text column and image column
const textColumn = document.getElementById('textColumn');
const imageColumn = document.getElementById('imageColumn');
const images = imageColumn.querySelectorAll('img');

// Function to synchronize text and images based on scroll position
function syncTextAndImages() {
    // Calculate the middle point of the viewport
    const middleViewport = window.innerHeight / 2;

    images.forEach((img, index) => {
        // Get the bounding box of each image
        const imageRect = img.getBoundingClientRect();

        // Check if the middle of the image is within the middle of the viewport
        if (imageRect.top <= middleViewport && imageRect.bottom >= middleViewport) {
            // Show the corresponding image and scroll to the corresponding text
            images.forEach((img) => img.style.display = 'none'); // Hide all images first
            img.style.display = 'block'; // Display the current image

            // Scroll to the corresponding text content
            const textContent = textColumn.querySelector('.text-content p:nth-child(' + (index + 1) + ')');
            if (textContent) {
                textColumn.scrollTo({ top: textContent.offsetTop, behavior: 'smooth' });
            }
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', syncTextAndImages);

// Initial synchronization on page load
syncTextAndImages();
