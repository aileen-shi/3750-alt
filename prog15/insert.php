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
    // Clean
    $clean_first = mysqli_real_escape_string($mysqli, $_POST['first-name']);
    $clean_last = mysqli_real_escape_string($mysqli, $_POST['last-name']);
    $clean_email = mysqli_real_escape_string($mysqli, $_POST['email']);

    $sql = "INSERT INTO Person (first_name, last_name, email) VALUES ('$clean_first', '$clean_last', '$clean_email')";
    $res = mysqli_query($mysqli, $sql);

    if ($res == TRUE) {
        echo "Record has been inserted";
    }
    else {
        printf("Could not insert record: %s\n", mysqli_error($mysqli));
    }
    mysqli_close($mysqli);
}
?>