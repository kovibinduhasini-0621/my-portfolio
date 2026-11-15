
console.log("JavaScript is connected!");
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector(".contact-form");

    if (!contactForm) {
        console.error("Contact form not found!");
        return;
    }

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector("button[type='submit']");

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                alert("Thank you! Your message has been sent successfully.");
                contactForm.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }

        } catch (error) {
            alert("Network error. Please check your internet connection.");
            console.error(error);
        }

        submitButton.disabled = false;
        submitButton.textContent = "Send Message";

    });

});