<?php 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = $_POST['text'];
    if (isset($_POST['text'])) {
        $data = $_POST['text'];
        $nums = explode(" ", $data);

        // Check each number
        foreach($nums as $num) {
            $none = True;
            // Check if armstrong
            if (armstrong($num)) {
                // Write
                $armstrong = fopen("armstrong.txt", "a");
                fwrite($armstrong, $num . "\n");
                fclose($armstrong);
                echo "wrote to armstrong";
                $none = False;
            }
            // Check fibonacci
            if (fibonacci($num)) {
                // Write
                $fibonacci = fopen("fibonacci.txt", "a");
                fwrite($fibonacci, $num . "\n");
                fclose($fibonacci);
                echo "wrote to fib";
                $none = False;
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
?>