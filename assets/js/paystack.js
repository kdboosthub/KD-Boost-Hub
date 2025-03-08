document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("proceedButton").addEventListener("click", function () {
        // Collect all user inputs
        let fullName = document.getElementById("fullName").value;
        let userEmail = document.getElementById("userEmail").value;
        let serviceCategory = document.getElementById("category-container").textContent || "Not Selected";
        let selectedService = document.getElementById("services-container").textContent || "Not Selected";
        let description = document.getElementById("description-container").textContent || "No description provided";
        let additionalDetails = document.getElementById("details-container").textContent || "No additional details";

        let amount = 10000; // Amount in kobo (100 GHS = 10000 kobo)

        // Validate input fields
        if (fullName.trim() === "" || userEmail.trim() === "") {
            alert("Please enter your full name and email before proceeding.");
            return;
        }

        // Store user data in an object
        let userData = {
            fullName: fullName,
            userEmail: userEmail,
            serviceCategory: serviceCategory,
            selectedService: selectedService,
            description: description,
            additionalDetails: additionalDetails
        };

        // Store userData in localStorage (temporary storage)
        localStorage.setItem("userData", JSON.stringify(userData));

        // Initialize Paystack Payment
        let handler = PaystackPop.setup({
            key: 'pk_test_4d4a9be6b5d429cfb284eaff972293630169a4cd', // Your Paystack Public Key
            email: userEmail,
            amount: amount,
            currency: "GHS",
            callback: function (response) {
                let reference = response.reference; // Paystack Payment Reference ID
                alert(`Payment Successful! Reference ID: ${reference}`);

                // Retrieve stored user data
                let storedUserData = JSON.parse(localStorage.getItem("userData"));

                // Send the data via email
                sendEmail(storedUserData, reference);
            },
            onClose: function () {
                alert("Transaction canceled");
            }
        });

        handler.openIframe();
    });
});