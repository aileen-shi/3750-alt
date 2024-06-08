/*
    Aileen Shi 
    Prog 07
    CPSC3750
    6/8/24

    JS file for sorting names
*/

// initialize the counter and the array
var numbernames=0;
var names = new Array();
function SortNames() {
    // Get the name from the text field
    thename=document.theform.newname.value;
    // Convert to uppercase
    thename=thename.toUpperCase();
    // Remove numbers from array
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i].replace(/[0-9]/g, '');
        names[i] = names[i].substring(1);
    }
    // Add the name to the array
    names[numbernames]=thename;
    // Increment the counter
    numbernames++;
    // Sort the array
    names.sort();
    // Number the array
    for (let i = 0; i < names.length; i++) {
        var num = i + 1;
        names[i] = num + " " + names[i];
    }
    document.theform.sorted.value=names.join("\n");
}

// Make sure content loaded
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for input form
    const element = document.getElementById("newname");
    element.addEventListener("keypress", function(event) {
        // Check if enter key
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("addname").click();
        }
    });
});

