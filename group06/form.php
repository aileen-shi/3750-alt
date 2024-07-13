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
    <script src="../navbar.js"></script>
</body>
</html>
