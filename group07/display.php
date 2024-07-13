<?php 
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Your Cars</title>
    </head>
    <body>
    <h1>Your Cars</h1>
    <?php 
    if (isset($_SESSION['products'])) {
        echo "<strong>Your selection:</strong><ol>";
        foreach(unserialize($_SESSION['products']) as $p) {
            echo "<li>" . $p . "</li>";
        }
        echo "</ol>";
    }
    ?>
    <p><a href="car.php">Return to Car Choice Page</a></p>
    <script src="../navbar.js"></script>
    </body>
</html>