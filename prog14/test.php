<?php
$myfile = fopen("testing.txt", "w") or die("unable to open");
fwrite($myfile, "meow");
fclose($myfile);

$myfile = fopen("testing.txt", "r") or die("unable to open");
$temp = fread($myfile,filesize("testing.txt"));
fclose($myfile);

echo "read $temp";
?>