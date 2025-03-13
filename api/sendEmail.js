const nodemailer = require("nodemailer");
const multer = require("multer");
const fs = require("fs");

export const config = {
    api: {
        bodyParser: false
    }
};

// Multer setup to handle file uploads
const upload = multer({ dest: "/tmp/" });

export default async function handler(req, res) {
    upload.single("proofOfPayment")(req, res, async function (err) {
        if (err) {
            return res.status(500).json({ error: "File upload error" });
        }

        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method Not Allowed" });
        }

        const { userName, userEmail, service, category, link, quantity, charge, paymentMethod } = req.body;
        const proofPath = req.file?.path;
        const proofFilename = req.file?.originalname || "payment-proof.jpg";

        if (!userName || !userEmail || !service || !category || !quantity || !charge || !paymentMethod) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const adminEmail = "kdboosthub@gmail.com";

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        try {
            // Send email to the user (WITHOUT IMAGE)
            await transporter.sendMail({
                from: `"KD Boost Hub" <${process.env.EMAIL_USER}>`,
                to: userEmail,
                subject: "Order Confirmation - KD Boost Hub",
                html: `
                    <h2>Hello ${userName},</h2>
                    <p>Thank you for your order with <strong>KD Boost Hub</strong>. Below are your order details:</p>
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>Category:</strong> ${category}</p>
                    <p><strong>Link:</strong> ${link}</p>
                    <p><strong>Quantity:</strong> ${quantity}</p>
                    <p><strong>Total Charge:</strong> ${charge}</p>
                    <p><strong>Payment Method:</strong> ${paymentMethod}</p>
                    <p>We are processing your order and will update you soon.</p>
                    <p>Best Regards,<br><strong>KD Boost Hub Team</strong></p>
                `
            });

            // Send email to the admin (WITH IMAGE ATTACHMENT)
            let mailOptions = {
                from: `"KD Boost Hub" <${process.env.EMAIL_USER}>`,
                to: adminEmail,
                subject: "New Order Received - KD Boost Hub",
                html: `
                    <h2>New Order from ${userName}</h2>
                    <p><strong>Email:</strong> ${userEmail}</p>
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>Category:</strong> ${category}</p>
                    <p><strong>Link:</strong> ${link}</p>
                    <p><strong>Quantity:</strong> ${quantity}</p>
                    <p><strong>Total Charge:</strong> ${charge}</p>
                    <p><strong>Payment Method:</strong> ${paymentMethod}</p>
                    <p>Order received. Process it accordingly.</p>
                `,
                attachments: proofPath ? [{ filename: proofFilename, path: proofPath }] : []
            };

            await transporter.sendMail(mailOptions);

            // Delete the uploaded file after sending the email
            if (proofPath) {
                fs.unlinkSync(proofPath);
            }

            return res.status(200).json({ message: "Emails sent successfully!" });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    });
}