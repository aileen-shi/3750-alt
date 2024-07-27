<?php
/*
	Aileen Shi
    7/27/24
    CPSC 3750
    Database
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
    $search_name = isset($_GET['last_name']) ? mysqli_real_escape_string($mysqli, $_GET['last_name']) : '';

	// Query
	$sql = "SELECT * FROM Person WHERE LOWER(last_name) = LOWER('$search_name') ORDER BY last_name";
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