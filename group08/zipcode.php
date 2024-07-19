<?php 

/*
    Aileen Shi
    CPSC 3740
    7/19/24
    Zip Code
*/

// Get coordinates from csv
function getCoord($zip) {
    // Open csv
    if (($file = fopen("uszips.csv", "r")) !== false) {
        // Read every line
        while (($data = fgetcsv($file, 1000, ",")) !== false) {
            // Zip col matches
            if ($data[0] == $zip) {
                // Return lat and long
                return array('lat' => $data[1], 'long' => $data[2]);
            }
        }
        fclose($file);
    }
    return false;
}

// Calc distance
function calcDistance($coord1, $coord2) {
    $radius = 3958.756;

    $lat1 = deg2rad($coord1['lat']);
    $long1 = deg2rad($coord1['long']);
    $lat2 = deg2rad($coord2['lat']);
    $long2 = deg2rad($coord2['long']);

    // Haversine formula
    $dlong = $long2 - $long1;
    $dlat = $lat2 - $lat1;

    $value = pow(sin($dlat/2), 2) + cos($lat1) * cos($lat2) * pow(sin($dlong/2), 2);

    $result = 2 * asin(sqrt($value));

    $distance = $radius * $result;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get zip codes
    $zip1 = isset($_POST['zip1']) ? $_POST['zip1'] : '';
    $zip2 = isset($_POST['zip2']) ? $_POST['zip2'] : '';

    // Get coordinates
    $coord1 = getCoord($zip1);
    $coord2 = getCoord($zip2);

    echo $coord1['lat'];

    // Calculate distance
    if ($coord1 && $coord2) {
        $distance = calcDistance($coord1, $coord2);
        echo round($distance, 2);
    }
    else {
        echo "Invalid zip entry";
    }
}

?>