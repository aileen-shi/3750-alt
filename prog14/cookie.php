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
        $temp = pow((int)$array[$i], $n);
        //echo "<p>" . $temp . "</p>";
        // Update Sum
        $sum += $temp;
    }

    return $sum == $num;
}

// Check fibonacci
function fibonacci($num) {
    $a = 0;
    $b = 1;
    while($a < $num) {
        $temp = $a;
        $a = $b;
        $b += $temp;
    }
    return $a == $num;
}

// Check prime
function prime($num, $i) {
    if ($num == 0 || $num == 1) {
        return False;
    }

    if ($num == $i) {
        return True;
    }

    if ($num % $i == 0) {
        return False;
    }
    $i++;
    prime($num, $i);
}

// Check form
// Check these numbers
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['numbers'])) {
        $str = $_POST['numbers'];
        
        $nums = explode(" ", $str);
    
        foreach($nums as $num) {
            echo "<p>current num " . $num . "</p>";
            $none = True;
            // Check if armstrong
            if (armstrong($num)) {
                echo "<p>armstrong</p>";
                $none = False;
            }
            if (fibonacci($num)) {
                echo "<p>fib</p>";
                $none = False;
            }
            if (prime($num, 2)) {
                echo "<p>prime</p>";
                $none = False;
            }
            if ($none) {
                echo "<p>none</p>";
            }
        }
            
    }
}
?>