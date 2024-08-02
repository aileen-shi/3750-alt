<?php
    session_start();

    echo "account php";
    // If logged in show account page
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {

    }
    // Get user to log in
    else {
        header("Location: login.html");
        exit;
    }
?>