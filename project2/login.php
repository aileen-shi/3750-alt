<?php 
    session_start();

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

        $entries = array();

        // Handle data
        if ($res) {
            // Set session
            if (mysqli_num_rows($res) > 0) {
                echo "Success";
                $_SESSION['user'] = $clean_user;
                $_SESSION['loggedin'] = true;
                // Update login
                date_default_timezone_set('America/New_York');
                $login_date = date('Y-m-d H:i:s');
                $update = "UPDATE User_Login
                            SET last_login='$login_date', num_login=num_login + 1 
                            WHERE username='$clean_user' AND pass='$clean_pass'";
                mysqli_query($mysqli, $update);
            } else {
                echo "Incorrect combo";    
            }
            mysqli_free_result($res);
            
        }
        
        else {
            echo "Query error";
        }
            


        mysqli_close($mysqli);
    }
?>