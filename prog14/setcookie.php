<?php

setcookie("first", "user", time()+3600, "/", ".aileenshi.com", 0);

if (!isset($_COOKIE['first'])) {
    echo "First visit";
    $armstrong = fopen("armstrong.txt", "w");
    fclose($armstrong);
    $fibonacci = fopen("fibonacci.txt", "w");
    fclose($fibonacci);
    $prime = fopen("prime.txt", "w");
    fclose($prime);
    $none = fopen("none.txt", "w");
    fclose($none);

} else {
	echo "Existing cookie";
    
}
?>