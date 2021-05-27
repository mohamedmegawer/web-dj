function Validate() {

    var Destination = document.forms['myform']['contact_name'].value;
    if (Destination == "" || Destination == null) {
        alert("Name field can't be Empty");
        return false;
    }

    var CheckIn = document.forms['myform']['contact_email'].value;
    if (CheckIn == "" || CheckIn == null) {
        alert("Email field can't be Empty");
        return false;
    }

    var Checkout = document.forms['myform']['contact_message'].value;
    if (Checkout == "" || Checkout == null) {
        alert("Message field can't be Empty");
        return false;
    }


}