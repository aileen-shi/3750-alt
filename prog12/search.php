<?php
  header("Content-type: text/xml");
  $names = array(
   "John Smith", "John Jones", "Jane Smith", "Jane Tillman",
   "Abraham Lincoln", "Sally Johnson", "Kilgore Trout",
   "Bob Atkinson","Joe Cool", "Dorothy Barnes",
   "Elizabeth Carlson", "Frank Dixon", "Gertrude East",
   "Harvey Frank", "Inigo Montoya", "Jeff Austin",
   "Lynn Arlington", "Michael Washington", "Nancy West" );

   $test = array("Alabam => Montgomery",
   "Alaska => Juneau");

echo "<?xml version=\"1.0\" ?>\n";
echo "<names>\n";

$query = isset($_GET['query']) ? $_GET['query'] : '';

if (!empty($query)) {
    // Loop through the names array
    foreach ($test as $state => $capital) {
        if (stristr($state, $query)) {
            // Output matched state and capital, using htmlspecialchars to prevent XML injection
            echo "<name>" . htmlspecialchars($state . ' - ' . $capital, ENT_XML1, 'UTF-8') . "</name>\n";
        }
    }
}

echo "</names>\n";
?>