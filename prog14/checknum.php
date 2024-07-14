<?php 
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $data = $_POST['text'];
        if(empty($data)) {
            echo "Empty";
        }
        else {
            echo $data;
        }
    }
?>