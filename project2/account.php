<?php
    session_start();

    $response = array("loggedin" => false);

    // User logged in
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
        $response["loggedin"] = true;
        echo "loggedin" . $_SESSION['user'];
    }
    else {
        echo "not loggedin";
    }
    //header('Content-Type: application/json');
    
?>