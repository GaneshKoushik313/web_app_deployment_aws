function onLogin(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    if(username == 'test' && password == 'test'){
        alert("Logged In Successfully")
    }
    else{
        alert("Login Failed Due to Incorrect Username and Password")
    }
}
function stoppedTyping(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    
    if(username.length > 0 && password.length > 0) { 
        document.getElementById('submit').disabled = false; 
    } else { 
        document.getElementById('submit').disabled = true;
    }
}