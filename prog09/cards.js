/*
    Aileen Shi
    6/15/24
    CPSC 3750
    Prog 09 JS
*/
// define the functions
    function Card(name,email,address,phone,birthdate) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.birthdate = birthdate;
        this.printCard = printCard;
    }
    // Print card
    function printCard() {
        return `
            <strong>Name: </strong>${this.name}<br>
            <strong>Email: </strong>${this.email}<br>
            <strong>Address: </strong>${this.address}<br>
            <strong>Phone: </strong>${this.phone}<br>
            <strong>Birthdate: </strong>${this.birthdate}<hr>
        `;
    }

 