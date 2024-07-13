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
            $none = True;
            // Check if armstrong
            if (armstrong($num)) {
                // Write
                $armstrong = fopen("armstrong.txt", "a");
                fwrite($armstrong, $num . "\n");
                fclose($armstrong);
                $none = False;
            }
            if (fibonacci($num)) {
                $fibonacci = fopen("fibonacci.txt", "a");
                fwrite($fibonacci, $num . "\n");
                fclose($fibonacci);
                $none = False;
            }
            if (prime($num, 2)) {
                if (file_put_contents('prime.txt', $num, "\n", FILE_APPEND !== false)) {
                    echo "<p>Number written to armstrong.txt</p>";
                } else {
                    echo "<p>Failed to write number to armstrong.txt</p>";
                }
                }
                //$prime = fopen("prime.txt", "a");
                //fwrite($prime, $num . "\n");
                //fclose($prime);
                $none = False;
            }
            if ($none) {
                $none = fopen("none.txt", "a");
                fwrite($none, $num . "\n");
                fclose($none);
            }
        }
            
    }
}
?>