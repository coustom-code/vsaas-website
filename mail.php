<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // reCAPTCHA secret key
    $recaptcha_secret = 'YOUR_SECRET_KEY';

    // Verify the reCAPTCHA response
    $recaptcha_response = $_POST['g-recaptcha-response'];
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);

    if ($recaptcha->success == true) {
        // Retrieve form input data
        $name = strip_tags(trim($_POST["name"]));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = strip_tags(trim($_POST["phone"]));
        $message = trim($_POST["message"]);

        // Validate form data
        if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($phone) || !preg_match('/^\d{10}$/', $phone)) {
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address
        $recipient = "info@vsaastechnologies.com";

        // Set the email subject
        $subject = "New contact from $name";

        // Build the email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Phone: $phone\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers
        $email_headers = "From: $name <$email>";

        // Send the email
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Thank you! Your message has been sent.";
        } else {
            http_response_code(500);
            echo "Oops! Something went wrong, we couldn't send your message.";
        }
    } else {
        http_response_code(400);
        echo "Please verify that you are not a robot.";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
