<?php
/*
    Aileen Shi
    CPSC 3750
    7/13/24
    PHP I/O
*/
// Set cookie
setcookie("visitor", "user", time() + 3600, "/", "aileenshi.com", 0);

if (!isset($_COOKIE['visitor'])) {
    // Create text files
    file_put_contents('prime.txt', '');
    file_put_contents('armstrong.txt', '');
    file_put_contents('fibonacci.txt', '');
    file_put_contents('none.txt', '');

    echo "<p>Welcome first time visitor</p>"
}
else {
    echo "<p>Welcome back</p>"
}
?>