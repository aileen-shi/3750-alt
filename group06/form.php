<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Response</title>
</head>
<body>
    <h1>Welcome!</h1>
    <p><strong><?php echo $_POST['name']; ?></strong> has been registered</p>
    <h2>Description:</h2>
    <p><?php echo $_POST['description']; ?></p>
    <h2>Password:</h2>
    <p><?php echo $_POST['password']; ?></p>
    <h2>Species:</h2>
    <p><?php echo $_POST['species']; ?></p>
    <h2>Conditions:</h2>
    <?php 
    if (!empty($_POST['health'])) {
        echo '<ul>';
        foreach($_POST['health'] as $condition) {
            echo '<li>' . htmlspecialchars($condition) . '</li>';
        }
        echo '</ul>';
    }
    else {
        echo '<p>None</p>';
    }
    ?>
    <h2>You Heard Us From</h2>
    <p><?php echo $_POST['ref'] ?></p>
    <h2>Image</h2>
    <?php

    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["uploadFile"])) {
        $fileTmpPath = $_FILES["uploadFile"]["tmp_name"];
        $filePath = "/../../../../" . $fileTmpPath;
        $fileName = $_FILES["uploadFile"]["name"];
        $fileSize = $_FILES["uploadFile"]["size"];
        $fileType = $_FILES["uploadFile"]["type"];

        // Display uploaded file details
        echo "<h2>Uploaded File Details:</h2>";
        echo "<p>Name: $fileName</p>";
        echo "<p>Type: $fileType</p>";
        echo "<p>Size: $fileSize bytes</p>";
        echo "<p>Temporary Path: $fileTmpPath</p>";
        echo "<p>Path: $filePath</p>";

        // Check if file exists and display it
        if (file_exists($fileTmpPath)) {
            echo "<h2>Uploaded File Content:</h2>";
            echo "<img src='$fileTmpPath' alt='Uploaded File'>";
        } else {
            echo "File not found: $fileTmpPath";
        }
    }
    ?>
    <script src="../navbar.js"></script>
</body>
</html>
