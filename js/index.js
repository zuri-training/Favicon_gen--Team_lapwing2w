var check = document.getElementById('show_password');
var password = document.getElementById("password");
function getVisibility(){
    if(check.checked){
        password.type = "text";
    }else{
        password.type = "password";
    }
}
check.onClick = getVisibility();