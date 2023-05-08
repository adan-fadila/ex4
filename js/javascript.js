function fullName(fullName){
    if(typeof fullName != "string"){
        return false;
    }
    return fullName.indexOf(' ') >= 1;
}

function phone(phone) {
    if (isNaN(phone) ) {
      return false;
    }
    const phoneString = phone.toString();
    return phoneString.length === 9 || phoneString.length === 10;
}
  
function checkList(intresets){
    let numChecked = 0;
    for (let i = 0; i < intresets.length; i++) {
    if (intresets[i].checked) {
        numChecked++;
    }
    }
    return numChecked >= 3;
}
function validateForm() {
    return fullName(document.forms["form"]["fullName"].value) && phone(document.forms["form"]["phone"].value) && checkList(document.querySelectorAll('input[name="interests[]"]'))
    ; // return false to cancel form action
}