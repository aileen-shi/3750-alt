<?php

/*
    Aileen Shi
    CPSC 3750
    7/13/24
    File I/O
*/
// Check POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['type'])) {
        // Get file name
        $type = $_POST['type'];
        $file = $type . ".txt";

        // Check file and get contents
        if (file_exists($file)) {
            echo file_get_contents($file);
        }
        else {
            echo "Empty";
        }
    }
}
?>