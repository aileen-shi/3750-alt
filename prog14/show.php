<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['type'])) {
        $type = $_POST['type'];
        $file = $type . ".txt";

        if (file_exists($file)) {
            echo file_get_contents("none.txt");
        }
        else {
            echo "Empty"
        }
    }
    else {
        echo "type parameter not set";
    }
}
?>