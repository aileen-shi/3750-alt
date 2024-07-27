<?php
$mysqli = mysqli_connect("192.81.214.86", "aileen", "i-heart-deftones-and-cats", "cpsc_3750");

if (mysqli_connect_errno()) {
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
} else {
	printf("Host information: %s\n", mysqli_get_host_info($mysqli));
	mysqli_close($mysqli);
}
?>