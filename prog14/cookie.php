<?php
/*
    Aileen Shi
    CPSC 3750
    7/13/24
    PHP I/O
*/
error_reporting(E_ALL);
ini_set('display_errors', 1);

setcookie("first", "user", time()+3600, "/", ".aileenshi.com", 0);

if (!isset($_COOKIE['first'])) {
    echo "<p>Hello, you. This may be your first visit.</p>";

} else {
	echo "<p>Welcome back!</p>";
    
}

// Check armstrong
function armstrong($num) {
    $sum = 0;
    $n = strlen((string)$num);
    $array = str_split($num);

    for($i = 0; $i < $n; $i++) {
        $temp = pow($array[$i], $n);
        echo "<p>" . $temp . "</p>";
    }
}

// Check form
// Check these numbers
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['numbers'])) {
        $str = $_POST['numbers'];
        
        $nums = explode(" ", $str);
    
        foreach($nums as $num) {
            // Check if armstrong
            armstrong($num);
        }
            
    }
}
?>