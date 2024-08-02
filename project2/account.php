<?php
    session_start();

    $response = array("loggedin" => false);

    echo "account php";
    // User logged in
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
        $response["loggedin"] = true;
    }
    header('Content-Type: application/json');
    echo json_encode($response);
?>