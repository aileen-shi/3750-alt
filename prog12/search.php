<?php
/*
    Aileen Shi
    7/12/24
    CPSC 3750
    Prog12 AJAX PHP
*/
  header("Content-type: text/xml");
  $names = array(
   "Alabama" => "Montgomery",
   "Alaska" => "Juneau",
   "Arizona" => "Phoenix",
   "Arkansas" => "Little Rock",
   "California" => "Sacramento",
   "Colorado" => "Denver",
   "Connecticut" => "Hartford",
   "Delaware" => "Dover",
   "Florida" => "Tallahassee",
   "Georgia" => "Atlanta",
   "Hawaii" => "Honolulu",
   "Idaho" => "Boise",
   "Illinois" => "Springfield",
   "Indiana" => "Indianapolis",
   "Iowa" => "Des Moines",
   "Kansas" => "Topeka",
   "Kentucky" => "Frankfort",
   "Louisiana" => "Baton Rouge",
   "Maine" => "Augusta",
   "Maryland" => "Annapolis",
   "Massachusetts" => "Boston",
   "Michigan" => "Lansing",
   "Minnesota" => "Saint Paul",
   "Mississippi" => "Jackson",
   "Missouri" => "Jefferson City",
   "Montana" => "Helena",
   "Nebraska" => "Lincoln",
   "Nevada" => "Carson City",
   "New Hampshire" => "Concord",
   "New Jersey" => "Trenton",
   "New Mexico" => "Santa Fe",
   "New York" => "Albany",
   "North Carolina" => "Raleigh",
   "North Dakota" => "Bismarck",
   "Ohio" => "Columbus",
   "Oklahoma" => "Oklahoma City",
   "Oregon" => "Salem",
   "Pennsylvania" => "Harrisburg",
   "Rhode Island" => "Providence",
   "South Carolina" => "Columbia",
   "South Dakota" => "Pierre",
   "Tennessee" => "Nashville",
   "Texas" => "Austin",
   "Utah" => "Salt Lake City",
   "Vermont" => "Montpelier",
   "Virginia" => "Richmond",
   "Washington" => "Olympia",
   "West Virginia" => "Charleston",
   "Wisconsin" => "Madison",
   "Wyoming" => "Cheyenne"
  );

echo "<?xml version=\"1.0\" ?>\n";
echo "<names>\n";

// Check if query exists and is not null and use query
$query = isset($_GET['query']) ? $_GET['query'] : '';

// Changed each to foreach

if (!empty($query)) {
    // Go through names
    foreach ($names as $state => $capital) {
        if (stristr($state, $query)) {
            // Echo capital that matches
            echo "<name>" . $capital . "</name>\n";
        }
    }
}

echo "</names>\n";
?>