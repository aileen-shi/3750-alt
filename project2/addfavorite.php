<?php 
    session_start();

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

            $sql = "INSERT INTO Favorites (card_name, card_year, rarity, price, time_added)
                    VALUES ('$cardName', '$cardYear', '$cardRarity', '$cardPrice', '$date')";

            $res = mysqli_query($mysqli, $sql);
            
        }
    }
?>
