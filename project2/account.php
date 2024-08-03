<?php
/* 
    Aileen Shi
    CPSC 3750
    8/3/24
*/
    session_start();

    $response = array("loggedin" => false);

    // User logged in?
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
        $response["loggedin"] = true;
        echo "loggedin" . $_SESSION['user'];
    }
    else {
        echo "not loggedin";
    }
    
?>