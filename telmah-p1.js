function display(form){
    let fullName = form.elements["name2"].value;
    let emailAddress = form.elements["email2"].value;
    let telephone = form.elements["tele2"].value;
    document.getElementById('name1').innerHTML = fullName;
    document.getElementById('email1').innerHTML = emailAddress;
    document.getElementById('tele1').innerHTML = telephone;
}



