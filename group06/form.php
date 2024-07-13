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
    <h2>Image</h2>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {
        // Check if file was uploaded without errors
        if (isset($_FILES["upload"]) && $_FILES["upload"]["error"] == UPLOAD_ERR_OK) {
            // File uploaded successfully, process it
            $uploadDir = '../../uploads/';  // Directory where uploaded files will be stored
            $targetFile = $uploadDir . basename($_FILES["upload"]["name"]); // Full path to the uploaded file
            
            // Move the uploaded file from temporary directory to target directory
            if (move_uploaded_file($_FILES["upload"]["tmp_name"], $targetFile)) {
                echo "File is uploaded successfully.";
                // Here you can further process the uploaded file, like storing its path in a database, etc.
            } else {
                echo "Error uploading file.";
            }
        } else {
            // Handle cases where no file was uploaded or an error occurred
            echo "No file uploaded or an error occurred.";
        }
    }
    ?>
    <script src="../navbar.js"></script>
</body>
</html>
