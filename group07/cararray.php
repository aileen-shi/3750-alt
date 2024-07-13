<?php
/*
    Aileen Shi
    CPSC 3750
    7/13/24
    Sessions
*/
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Sessions</title>
    <link rel="stylesheet" href="car.css">
</head>
<body>
    <h1>Car Choice Page</h1>
    <!--Gallery-->
    <div class="img-container">
        <img src="clown.jpg">
        <img src="minion.jpg">
        <img src="fuzzy.jpg">
        <img src="pea.jpg">
        <img src="pizza.png">
        <img src="duck.jpg">
        <img src="fish.jpg">
    </div>
    <!--Session Array-->
    <?php
    if (isset($_POST['car'])) {
        if (!empty($_SESSION['products'])) {
            $products = array_unique(
            array_merge(unserialize($_SESSION['products']),
            $_POST['car']));
            $_SESSION['products'] = serialize($products);
        } else {
            $_SESSION['products'] = serialize($_POST['car']);
    }
    echo "<p>Your cars have been registered!</p>";
    }
    ?>
    <!--Form-->
    <div class="form-container">
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <p><label for="car">Select some cars:</label><br>
    <select id="car" name="car[]" multiple="multiple">
        <option value="Clown">Clown</option>
        <option value="Minion">Minion</option>
        <option value="Fuzzy">Fuzzy</option>
        <option value="Pea">Pea</option>
        <option value="Pizza">Pizza</option>
        <option value="Duck">Duck</option>
        <option value="Fish">Fish</option>
    </select></p>
    <button type="submit" name="submit" value="choose">Submit Form</button>
    </form>
    <p><a href="session.php">Go to content page</a></p>
    </div>
    <script src="../navbar.js"></script>
</body>
</html>
