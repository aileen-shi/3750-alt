<?php

setcookie("first", "user", time()+3600, "/", ".aileenshi.com", 0);

if (!isset($_COOKIE['first'])) {
    echo "<p>Hello, you. This may be your first visit.</p>";
    $armstrong = fopen("armstrong.txt", "w");
    fclose($armstrong);
    $fibonacci = fopen("fibonacci.txt", "w");
    fclose($fibonacci);
    $prime = fopen("prime.txt", "w");
    fclose($prime);
    $none = fopen("none.txt", "w");
    fclose($none);

} else {
	echo "<p>Welcome back!</p>";
    
}


$myfile = fopen("testing.txt", "w") or die("unable to open");
fwrite($myfile, "meow");
fclose($myfile);

$myfile = fopen("testing.txt", "r") or die("unable to open");
$temp = fread($myfile,filesize("testing.txt"));
fclose($myfile);

echo "read $temp";
?>