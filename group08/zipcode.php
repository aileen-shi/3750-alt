<?php 

/*
    Aileen Shi
    CPSC 3740
    7/19/24
    Zip Code
*/

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $zip1 = isset($_POST['zip1']);
    $zip2 = isset($_POST['zip2']);

    // Testing
    $result = "Zip1: " . $zip1 . " Zip2: " . $zip2;

    echo $result;
}
?>