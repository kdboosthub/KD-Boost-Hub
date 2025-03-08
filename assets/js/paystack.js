document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("orderButton").addEventListener("click", function () {
        // Collect user input data
        let fullName = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let network = document.getElementById("network").value.trim();
        let offer = document.getElementById("offer").value.trim();
        let recipientPhone = document.getElementById("recipientPhone").value.trim();

        // Validate inputs before proceeding
        if (!fullName || !email || !network || !offer || !recipientPhone) {
            alert("Please fill all fields correctly!");
            return;
        }

        // Convert amount to Kobo (Paystack requires smallest currency unit)
        let amountInKobo = parseFloat(offer) * 100;

        // Paystack Public Key
        const PAYSTACK_PUBLIC_KEY = "pk_test_4d4a9be6b5d429cfb284eaff972293630169a4cd"; // Use a secure method in production

        let handler = PaystackPop.setup({
            key: PAYSTACK_PUBLIC_KEY,
            email: email,
            amount: amountInKobo,
            currency: "GHS",
            ref: "KD4AFRICA_" + Math.floor(Math.random() * 1000000000 + 1), // Generates a unique reference
            callback: function (response) {
                let paymentRef = response.reference;
                alert(`Payment Successful! Reference ID: ${paymentRef}`);

                // You can now store the payment reference and proceed with further actions (e.g., sending data)
            },
            onClose: function () {
                alert("Transaction canceled.");
            }
        });

        handler.openIframe(); // Open the Paystack payment popup
    });
});
