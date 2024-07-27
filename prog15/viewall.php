<?php
// Connect
$mysqli = mysqli_connect("192.81.214.86", "aileen", "i-heart-deftones-and-cats", "cpsc_3750");

// Error
if (mysqli_connect_errno()) {
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
} 
// Success
else {
	$sql = "SELECT * FROM Person ORDER BY last_name";
	$res = mysqli_query($mysqli, $sql);

	if ($res) {
		while ($newArray = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
			$id  = $newArray['id'];
			$testField = $newArray['testField'];
			echo "Last Name: ".$last_name." First Name: ".$first_name. " Email: ".$email."<br>";
	   	}
	} else {
		printf("Could not retrieve records: %s\n", mysqli_error($mysqli));
	}

	mysqli_free_result($res);
	mysqli_close($mysqli);
}
?>