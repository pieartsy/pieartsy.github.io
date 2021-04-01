function checkPswd() {
    var confirmPassword = "stopasianhate";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
         document.getElementById("form").classList.add("none");
         document.getElementById("tropes").classList.remove("none");
    }
    else{
        document.getElementById("wrong").innerHTML = "Good guess :("
    }
}