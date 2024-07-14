<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['type'])) {
        $type = $_POST['type'];
        $file = $type . ".txt";

        if (file_exists($file)) {
            $fileData = fopen($file, "r");
            echo fread($filedata, filesize($file));
            fclose($fileData);
        }
    }
}
?>