var FormData = {};
function Validation() {
    var Fname = document.getElementById("FirstName");
    if (Fname.value == "") {
        alert("Please enter FisrtName");
        Fname.focus();
        return false;
    }
    else {
        var r = new RegExp("[a-zA-Z]");
        if (!Fname.value.match(r)) {
            alert("First Name should contain only alphabets");
            Fname.focus();
            return false;
        }
    }
    FormData["First Name"] = Fname.value;

    var Lname = document.getElementById("LastName");
    if (Lname.value == "") {
        alert("Please enter LastName");
        Lname.focus();
        return false;
    }
    else {
        var r = new RegExp("[a-zA-Z]");
        if (!Lname.value.match(r)) {
            alert("Last Name should contain only alphabets");
            Lname.focus();
            return false;
        }
    }

    FormData["Last Name"] = Lname.value;

    var DOB = document.getElementById("DOB");
    if (DOB.value == "") {
        alert("Please enter Date of Birth");
        DOB.focus();
        return false;
    }

    FormData["Date of Birth"] = DOB.value;

    var Country = document.getElementById("country");
    if (Country.value == 0) {
        alert("Please Select country");
        Country.focus();
        return false;
    }
    FormData["country"] = Country.value;

    var Male = document.getElementById("Male");
    var Female = document.getElementById("Female");
    if (!Male.checked && !Female.checked) {
        alert("Please Select Gender");
        Male.focus();
        return false;
    }
    else if (Male.checked) FormData["Gender"] = "Male";
    else FormData["Gender"] = "Female";

    var Profession = document.getElementById("Profession");
    if (Profession.value == 0) {
        alert("Please enter Profession");
        Profession.focus();
        return false;
    }
    else {
        var r = new RegExp("[a-zA-Z]");
        if (!Profession.value.match(r)) {
            alert("Profession should contain only alphabets");
            Profession.focus();
            return false;
        }
    }
    FormData["Profession"] = Profession.value;

    var email = document.getElementById("email");
    if (email.value == 0) {
        alert("Please enter email");
        email.focus();
        return false;
    }
    else {
        var r = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
        if (!email.value.match(r)) {
            alert("enter valid email");
            email.focus();
            return false;
        }
    }
    FormData["Email"] = email.value;

    var Phn = document.getElementById("Phn");
    if (Phn.value == 0) {
        alert("Please enter mobile number");
        Phn.focus();
        return false;
    }
    else {
        var r = new RegExp("[0-9]");
        if (!Phn.value.match(r)) {
            alert("Mobile Number should contain only Numbers");
            Phn.focus();
            return false;
        }
        else if (Phn.value.length > 10) {
            alert("Mobile Number has more than 10 digits");
            Phn.focus();
            return false;
        }
        else if (Phn.value.length < 10) {
            alert("Mobile Number has less than 10 digits");
            Phn.focus();
            return false;
        }
    }
    FormData["Mobile Number"] = Phn.value;
    return true;
}

function SubmitForm() {
    if (Validation()) {
        alert(JSON.stringify(FormData));
        ResetForm();
        return true
    }
    else {
        return false
    }
}

function ResetForm() {
    location.reload();
}
