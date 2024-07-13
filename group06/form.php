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
    <h2>Referral Link</h2>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (!empty($_POST['url'])) {
            $url = filter_var($_POST['url'], FILTER_SANITIZE_URL);
            echo "<a href=\"$url\" target=\"_blank\">$url</a>";
        } else {
            echo "<p>No URL submitted.</p>";
        }
    } else {
        echo "<p>Invalid request method.</p>";
    }
    ?>
    <h2>Image</h2>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["upload"])) {
        $fileTmpPath = $_FILES["upload"]["tmp_name"];
        $filePath = "/../../../.." . $fileTmpPath;

        // Check if file exists and display it
        if (file_exists($filePath)) {
            echo "<img src='$filePath' alt='Uploaded File'>";
        } else {
            echo "File not found: $filePath";
        }
    }
    ?>
    <script src="../navbar.js"></script>
</body>
</html>
