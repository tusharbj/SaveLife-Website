<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $organ = $_POST['organ'] ?? '';
    $message = $_POST['message'] ?? '';

    if (!empty($name) && !empty($email) && !empty($phone) && !empty($organ)) {

        $stmt = $conn->prepare("INSERT INTO donors (name, email, phone, organ, message) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $name, $email, $phone, $organ, $message);

        if ($stmt->execute()) {
            echo "Registration Successful ❤️ Thank you for becoming a donor!";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Please fill all required fields.";
    }

    $conn->close();

} else {
    echo "Access Denied";
}
?>
