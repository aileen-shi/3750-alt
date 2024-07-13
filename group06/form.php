<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Response</title>
</head>
<body>
    <h1>hello<h1>
    <p><strong><?php echo $_POST['name']; ?></strong> has been registered</p>
    <h2>Description:</h2>
    <p><?php echo $_POST['description']; ?></p>
    <h2>Password:</h2>
    <?php echo $_POST['password']; ?>
    <h2>Species:</h2>
    <?php echo $_POST['species']; ?>
    <h2>Conditions:</h2>
    <?php 
    if (!empty($_POST[health])) {
        echo '<ul>';
        foreach($_POST[health] as $condition) {
            echo '<li>' . $condition . '</li>';
        }
        echo '</ul>';
    }
    else {
        echo '<p>None</p>'
    }
    ?>
    <h2>Heard About Us From:</h2>
    <?php 
    $ref = $_POST['ref'];
    echo $_POST['ref'];
    ?>
    <h2>Pet Image</h2>
     <script src="../navbar.js"></script>
</body>
</html>
