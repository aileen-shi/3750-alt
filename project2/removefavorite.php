<?php 
    /* 
        Aileen Shi
        CPSC 3750
        8/3/24
        Remove favorited
    */
    session_start();

    $user = $_SESSION['user'];
    
    // Connect
    $mysqli = mysqli_connect("192.81.214.86", "aileen", "i-heart-deftones-and-cats", "cpsc_3750");

    // Error
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    } 
    else {
        $raw = file_get_contents('php://input');
        $data = json_decode($raw, true);

        if ($data) {
            $cardName = $data['nameStr'];
            $date = $data['dateStr'];          

            $sql = "DELETE FROM Favorites WHERE card_name='$cardName' AND time_added='$date' AND username='$user'";      
                 
            if ($mysqli->query($sql) === TRUE) {
                echo "Successfully deleted entry";
            }
            else {
                echo "Error:" . $mysql->error;
            }
            
        }
        else {
            echo "Invalid JSON data";
        }
            
    }   
        
?>
