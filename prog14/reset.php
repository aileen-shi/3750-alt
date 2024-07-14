<?php 
/*
    Aileen Shi
    CPSC 3750
    7/13/24
    File I/O
*/
// Check post
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Delete
    unlink("armstrong.txt");
    unlink("prime.txt");
    unlink("fibonacci.txt");
    unlink("none.txt");

    // Clear cookie
    setcookie("first", "", time()-60, "/", "aileenshi.com", 0);
}
?>