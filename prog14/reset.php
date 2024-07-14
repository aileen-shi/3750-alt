<?php 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    unlink("armstrong.txt");
    unlink("prime.txt");
    unlink("fibonacci.txt");
    unlink("none.txt");

    // Clear cookie
    setcookie("first", "", time()-60, "/", "aileenshi.com", 0);
}
?>