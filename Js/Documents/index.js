document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close-btn");

    // 1. Open Lightbox when an image is clicked
    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            lightboxImg.src = image.src;      // Copy the source path over
            lightboxImg.alt = image.alt;      // Copy the alt description text
            lightbox.style.display = "flex";  // Display the container layout
        });
    });

    // 2. Close Lightbox when clicking the 'X' button
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // 3. Close Lightbox if a user clicks outside the image on the dark background
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});

// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
   
    // 1. Grab all the necessary elements from your HTML
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close-btn");

    // 2. Add a click event to every single image in the gallery
    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            // Take the source and alt text from the clicked image...
            lightboxImg.src = image.src;      
            lightboxImg.alt = image.alt;      
           
            // ...and show the lightbox (using 'flex' to keep it centered)
            lightbox.style.display = "flex";  
        });
    });

    // 3. Close the lightbox when the user clicks the 'X' button
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // 4. Close the lightbox if the user clicks anywhere on the dark background outside the image
    lightbox.addEventListener("click", (event) => {
        // This ensures clicking the image itself doesn't close the lightbox
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
