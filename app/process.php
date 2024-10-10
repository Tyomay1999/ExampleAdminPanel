<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Validate email address (optional)
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Handle invalid email address
    echo "Invalid email address.";
} else {
    // Send email (replace with your email sending logic)
    $to = "test_lever@icfn.net"; // Replace with your email address
    $headers = "From: $name <$email>";
    $subject = "Contact Form Submission: $subject";

    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Failed to send your message.";
    }
}
?>