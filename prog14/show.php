<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['listType'])) {
        $type = $_POST['listType'];
        $file = $type . "txt";

        if (file_exists($file)) {
            $fileData = fopen($file, "r");
            echo fread($filedata, filesize($file));
        }
        else {
            echo "<p>Empty</p>";
        }
    }
}
?>