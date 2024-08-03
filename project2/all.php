<?php
/* 
	Aileen Shi
    8/3/24
    CPSC 3750
    Get all user data
*/
// Connect
$mysqli = mysqli_connect("192.81.214.86", "aileen", "i-heart-deftones-and-cats", "cpsc_3750");

// Error
if (mysqli_connect_errno()) {
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
} 
// Success
else {
	// Query
	$sql = "SELECT * FROM User_Login";
	$res = mysqli_query($mysqli, $sql);
    $entries = array();

	// Handle data
	if ($res) {
        while ($row = mysqli_fetch_assoc($res)) {
            $entries[] = $row;
        }
        echo json_encode($entries);
	} else {
		printf("Could not retrieve records: %s\n", mysqli_error($mysqli));
	}

	mysqli_free_result($res);
	mysqli_close($mysqli);
}
?>