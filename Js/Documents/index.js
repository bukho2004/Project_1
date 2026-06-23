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
