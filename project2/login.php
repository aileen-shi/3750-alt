<?php 
    //session_start();
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

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
        $clean_pass = mysqli_real_escape_string($mysqli, $_POST['password']);

        // Query
        $sql = "SELECT * FROM User_Login WHERE username='$clean_user' AND pass='$clean_pass'";
        $res = mysqli_query($mysqli, $sql);

        // Handle data
        if ($res) {
            if (mysqli_num_rows($res) > 0) {
                echo "Success";
            } else {
                echo "Failed";    
            }
        }
        else {
            echo "Query error";
        }


        mysqli_close($mysqli);
    }
?>