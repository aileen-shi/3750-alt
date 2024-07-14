<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['type'])) {
        $type = $_POST['type'];
        $file = $type . ".txt";
        echo $file . "\n";

        if (file_exists($file)) {
            $fileData = fopen($file, "r");
            echo fread($filedata, filesize($file));
            fclose($fileData);
        }
        else {
            echo "<p>Empty</p>";
        }
    }
}
?>