<?php
/*
    Aileen Shi
    CPSC 3750
    7/13/24
    PHP I/O
*/
setcookie("vegetable", "artichoke", time()+3600, "/", ".aileenshi.com", 0);

if (isset($_COOKIE['vegetable'])) {
	echo "<p>Hello again! You have chosen: ".$_COOKIE['vegetable'].".</p>";
} else {
	echo "<p>Hello, you. This may be your first visit.</p>";
}
?>