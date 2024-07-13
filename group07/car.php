<?php 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sessions</title>
    <link rel="stylesheet" href="car.css" />
  </head>
  <body>
    <h1>Car Sessions</h1>
    <?php 
    if (isset($_POST['cars'])) {
      if (!empty($_SESSION['products'])) {
          $products = array_unique(
          array_merge(unserialize($_SESSION['products']),
          $_POST['cars']));
          $_SESSION['products'] = serialize($products);
      } else {
          $_SESSION['products'] = serialize($_POST['cars']);
        }
     echo "<p>Your cars have been registered!</p>";
    }
    ?>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
      <p><label for="cars">Choose a car:</label>
      <select name="cars" id="cars" size="7" multiple>
        <option value="Clown">Clown</option>
        <option value="Minion">Minion</option>
        <option value="Fuzzy">Fuzzy</option>
        <option value="Pea">Pea</option>
        <option value="Pizza">Pizza</option>
        <option value="Duck">Duck</option>
        <option value="Fish">Fish</option>
      </select>
      </p>
      <br /><br />
      <input type="submit" value="Submit" />
    </form>
    <p>Select multiple with Ctrl or Command</p>
    <p><a href="display.php">Go to Content Page</a></p>
    <script src="../navbar.js"></script>
  </body>
</html>
