<?php 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = $_POST['text'];
    if (isset($_POST['text'])) {
        $data = $_POST['text'];
        $nums = explode(" ", $data);

        // Check each number
        foreach($nums as $num) {
            echo $num . "\n"; 
            $none = True;
            // Check if armstrong
            if (armstrong($num)) {
                // Write
                $armstrong = fopen("armstrong.txt", "a");
                fwrite($armstrong, $num . "\n");
                fclose($armstrong);
                echo "wrote to armstrong\n";
                $none = False;
            }
            // Check fibonacci
            if (fibonacci($num)) {
                // Write
                $fibonacci = fopen("fibonacci.txt", "a");
                fwrite($fibonacci, $num . "\n");
                fclose($fibonacci);
                echo "wrote to fib\n";
                $none = False;
            }
            // Check prime
            if (prime($num)) {
                // Write
                $prime = fopen("prime.txt", "a");
                fwrite($prime, $num . "\n");
                fclose($prime);
                echo "wrote to prime\n";
                $none = False;
            }
            // None
            if ($none) {
                // Write
                $none = fopen("none.txt", "a");
                fwrite($none, $num . "\n");
                fclose($none);
                echo "wrote to none\n";
            }
        }
    }
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

?>