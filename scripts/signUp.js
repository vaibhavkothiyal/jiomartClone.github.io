function goTOsignIn() {
    window.location.href = "signIn.html";
}
function goTocart() {
    window.location.href = "cart.html";
}

var myForm = document.getElementById("form");
if (localStorage.getItem("MartUsers") == null) {
    localStorage.setItem("MartUsers", JSON.stringify([]));
}
console.log(JSON.parse(localStorage.getItem("MartUsers")))

function checkSignIn(e) {
    e.preventDefault();
    let name = myForm.firstName.value;
    let lname = myForm.lastName.value;
    let email = myForm.emailId.value;
    let pwd = myForm.pwd.value;
    let confirmPwd = myForm.pwd2.value;
    let mobile = myForm.mob.value;

    var objOfUser = {
        Name: name,
        lastName: lname,
        Mail: email,
        Password: pwd,
        Mobile: mobile
    }

    if (pwd === confirmPwd && name !== "" && lname !== "" && mobile !== "" && email !== "" && pwd !== "" && pwd.length > 6) {
        var array = JSON.parse(localStorage.getItem("MartUsers"))
        var isPresent = false;
        array.forEach(function (user) {
            console.log(user.Mobile);
            if (user.Mobile === mobile || user.Mail == email) {
                isPresent = true;
            }
        })
        if (isPresent === false) {
            alert("you are successfully signed Up");
            array.push(objOfUser);
            localStorage.setItem("MartUsers", JSON.stringify(array));
            window.location.href = "signIn.html"
        }
        else if (isPresent == true) {
            alert("Mobile or Email Already Used! Please Enter different")
        }
    }
    else if (name == "" || lname == "" || mobile == "" || email == "" || pwd == "") {
        alert("Empty feids! Please fill All data")
    }
    else if (pwd !== confirmPwd) {
        alert("passwords in both the fields should be same")
    }
    else if (pwd.length < 6) {
        alert("password should have more than 6 characters")
    }
}

function refresh(){
    window.location.href = "home.html"
}
