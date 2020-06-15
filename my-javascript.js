function colorChanger1() {
    var color2 = document.getElementById("navbar").style.background = "black";  
}
function colorChanger2(){
    var color3 = document.getElementById("navbar").style.background = "red";
}
function colorChanger3() {
    var color4 = document.getElementById("navbar").style.backgroundColor = "aqua";
}
function colorChanger4() {
    var color2 = document.getElementById("navbar").style.background = "purple";  
}

function validate() {
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");

    if(firstName.value == "") {
        alert("Please enter your first name");
        return false;
    }
    else if(lastName.value == "") {
        alert("Please enter your last name");
        return false;
    }
    else if(phone.value == "") {
        alert("Please enter a valid phone number");
        return false;
    }
    else if(email.value == "") {
        alert("Please enter a valid email address");
        return false;
    }
    else{
        alert("Submitted successfully");
        return true;
    }
}

