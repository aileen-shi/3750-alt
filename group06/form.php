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
    $targetDir = "../../uploads/";
    $targetFile = $targetDir . ($_FILES["image"]["name"]);

    if (isset($_FILES["image"]) && $_FILES["image"]["error"] == UPLOAD_ERR_OK) {
        // Display file details
        echo "Uploaded file: " . $_FILES["image"]["name"] . "<br>";
        echo "File type: " . $_FILES["image"]["type"] . "<br>";
        echo "File size: " . $_FILES["image"]["size"] . " bytes<br>";
    }

    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        // File moved successfully, do further processing or display
        echo "The file ". htmlspecialchars(basename($_FILES["image"]["name"])). " has been uploaded.";
        echo "<br>";
        echo '<img src="' . $targetFile . '" alt="Uploaded Image">';
    } else {
        // Error moving file
        echo "Sorry, there was an error uploading your file.";
    }

    ?>
    <script src="../navbar.js"></script>
</body>
</html>
