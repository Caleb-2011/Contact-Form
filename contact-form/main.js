const myForm =
document.getElementById("myForm");

myForm.addEventListener("submit",(event) =>{
    event.preventDefault();

    const usernameInput =
    document.getElementById("username");
    const usernameValue =
    usernameInput.value;

    localStorage.setItem("username", usernameValue);

    alert("Username saved to local storage.");
});
