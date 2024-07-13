<?php 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $armstrong = "armstrong.txt";
    unlink($armstrong);
    $prime = "prime.txt";
    unlink($prime);
    $fibonacci = "fibonacci.txt";
    unlink($fibonacci);
    $none = "none.txt";
    unlink($none);

    // Clear cookie
    setcookie("first", "", time()-60, "/", ".aileenshi.com", 0);
}
?>