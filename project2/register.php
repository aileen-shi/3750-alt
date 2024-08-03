<?php 
/* 
    Aileen Shi
    CPSC 3750
    8/3/24
    Register
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
    // Clean
    $clean_user = mysqli_real_escape_string($mysqli, $_POST['username']);
    $clean_email = mysqli_real_escape_string($mysqli, $_POST['email']);
    $clean_pass = mysqli_real_escape_string($mysqli, $_POST['password']);
    date_default_timezone_set('America/New_York');
    $reg_date = date('Y-m-d H:i:s');
    $login_date = date('Y-m-d H:i:s');
    $num_login = 0;


    $sql = "INSERT INTO User_Login (username, pass, email, registration, last_login, num_login) VALUES ('$clean_user', '$clean_pass', '$clean_email', '$reg_date', '$login_date', '$num_login')";
    $res = mysqli_query($mysqli, $sql);

    if ($res == TRUE) {
        echo "Success";
    }
    else {
        printf("Register failed: %s\n", mysqli_error($mysqli));
    }
    mysqli_close($mysqli);
}
?>