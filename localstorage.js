localStorage.setItem("name","santhiya")
localStorage.setItem("Designation","Senior Software Developer")
localStorage.setItem("Occupation","IT Employee")
localStorage.setItem("Password","ITSandy")
window.onload=()=>{
    document.getElementById("name").value = localStorage.getItem("name");
}
function login() {
    let storagePassword =localStorage.getItem("name");
    let userPassword = document.getElementById("password").value;
    console.log("localstorage password:"+storagePassword + " "+ userPassword)
    if (storagePassword == userPassword){
        alert("User Login successfully")
    }
    else {
      alert("Pawword is not Matched")
    }
}