<?php
/*
    Aileen Shi
    CPSC 3750
    7/13/24
    PHP I/O
*/
setcookie("first", "user", time()+3600, "/", ".aileenshi.com", 0);

if (!isset($_COOKIE['first'])) {
    echo "<p>Hello, you. This may be your first visit.</p>";

} else {
	echo "<p>Welcome back!</p>";
    
}
?>