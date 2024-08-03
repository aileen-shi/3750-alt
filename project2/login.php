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
        $test = "SELECT * FROM User_Login";
        $res = mysqli_query($mysqli, $test);

        //echo $clean_user . " " . $clean_pass;
        $entries = array();

        // Handle data
        if ($res) {
            while ($row = mysqli_fetch_assoc($res)) {
                $entries[] = $row;
            }
            echo json_encode($entries);
            /*
            if (mysqli_num_rows($res) > 0) {
                echo "Success";
            } else {
                echo "Incorrect combo";    
            }
            mysqli_free_result($res);
            */
        }
        else {
            echo "Query error";
        }


        mysqli_close($mysqli);
    }
?>