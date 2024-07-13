<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Car Display</title>
</head>
<body>
	<h1>Content Page</h1>
	<?php 
	if (isset($_POST['clear'])) {
		session_destroy();
		unset($_SESSION['products']);
	}
	?>
	<?php
	if (isset($_SESSION['products'])) {
		echo "<strong>Your cars:</strong><ol>";
		foreach (unserialize($_SESSION['products']) as $p) {
			echo "<li>".$p."</li>";
		}
		echo "</ol>";
	}
	?>
	<form method="post" action="">
		<button type="submit" name="clear" value="clear">Clear</button>
	</form>
	<p><a href="cararray.php">Return to product choice page</a></p>
	<script src="../navbar.js"></script>
</body>
</html>