<?php

/*
    Aileen Shi
    CPSC 3750
    7/13/24
    File I/O
*/

// Set cookie
setcookie("first", "user", time()+3600, "/", ".aileenshi.com", 0);

// Check cookie
// First time
if (!isset($_COOKIE['first'])) {
    echo "First visit";
    // Create files
    $armstrong = fopen("armstrong.txt", "w");
    fclose($armstrong);
    $fibonacci = fopen("fibonacci.txt", "w");
    fclose($fibonacci);
    $prime = fopen("prime.txt", "w");
    fclose($prime);
    $none = fopen("none.txt", "w");
    fclose($none);

// Existing cookie
} else {
	echo "Existing cookie";
    
}
?>