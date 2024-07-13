<?php
/*
    Aileen Shi
    CPSC 3750
    7/13/24
    PHP I/O
*/
setcookie("first", "user", time()+3600, "/", ".aileenshi.com", 0);

if (!isset($_COOKIE['first'])) {
    echo "<p>Hello, you. This may be your first visit.</p>";

} else {
	echo "<p>Welcome back!</p>";
    
}

echo "<p>Entered" . $_POST['numbers'] . "</p>";


// Check form
// Check these numbers
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    echo "<p>" . Entered FIRST IF ."</p>"
    if (isset($_POST['numbers'])) {
        echo "<p>" . Entered val in text area ."</p>"
        
        $nums = explode(' ', $_POST['numbers']);
    
        foreach($nums as $num) {
            echo "<p>" . $num ."</p>"
        }
            
    }
}

?>