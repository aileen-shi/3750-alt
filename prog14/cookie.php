<?php
/*
    Aileen Shi
    CPSC 3750
    7/13/24
    PHP I/O
*/
setcookie("first", "user", time()+3600, "/", ".aileenshi.com", 0);

if (isset($_COOKIE['user'])) {
	echo "<p>Hello again!</p>";
} else {
	echo "<p>Hello, you. This may be your first visit.</p>";
}
?>