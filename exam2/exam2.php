<?php 

// Function to check if vowel
function isVowel($letter) {
    if (
        $letter == "a" ||
        $letter == "e" ||
        $letter == "i" ||
        $letter == "o" ||
        $letter == "u" 
    ) {
        return true;
    }
    else {
        return false;
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Open file
    $file = fopen('temp.txt', 'r');
    if($file === false) {
        console.log("error opening file");
    }
    else {
        header('Content-Type: application/json');
        // Empty array to store words and vowels
        $wordArray = array();
        // Read each line
        while (($line = fgets($file)) !== false ) {
            $count = 0;
            $word = trim($line);
            // Split into letters
            $chars = str_split($word);
            // Check if vowel
            foreach ($chars as $char) {
                // Update count
                if (isVowel($char)) {
                    $count++;
                }
            }
            // Add word and vowels to array
            $wordArray[$word] = $count;
        }
        echo json_encode($wordArray);
    }
    // Close file
    fclose($file);
}
?>