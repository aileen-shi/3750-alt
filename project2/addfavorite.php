<?php 
    session_start();

    // Check if user logged in
    if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
        echo "Please login first";
        exit();
    }
    
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
            $cardYear = $data['yearStr'];
            $cardRarity = $data['rarityStr'];
            $cardPrice = $data['priceStr'];
            date_default_timezone_set('America/New_York');
            $date = date('Y-m-d H:i:s');           
            $user = $_SESSION['user'];            

            $sql = "INSERT INTO Favorites (card_name, card_year, rarity, price, time_added, username)
                    VALUES ('$cardName', '$cardYear', '$cardRarity', '$cardPrice', '$date', '$user')";      
                 
            if ($mysqli->query($sql) === TRUE) {
                echo "Successfully added to collection";
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
