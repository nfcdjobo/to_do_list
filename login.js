const dataLocal = localStorage.USERS ?JSON.parse(localStorage.USERS) : [];


if(localStorage.SESSIONUSER){
    window.location.href = "./profile.html";
}
const message =document.getElementById("message")

if(!dataLocal.length) {
    message.classList.add("error");
    message.textContent = "Vous n'avez pas de compte, cherchez à vous inscrire !"
    setTimeout(() => {
        window.location.href = "./register.html";
    }, 2000);
    
}
console.log(document.querySelector("form"))
document.querySelector("form").addEventListener("submit", event=>{
    event.preventDefault();
    if(dataLocal.find(user=>user.email === event.target.email.value && event.target.password.value === user.password)){
        const data = {
            email: event.target.email.value,
            password: event.target.password.value,
            durre: new Date()+6*60*60*60*1000
        };
        localStorage.setItem("SESSIONUSER", JSON.stringify(data));
        message.classList.add("success")
        message.textContent = "Connexion effectuée !"
        setTimeout(() => {
            window.location.href = "./profile.html";
        }, 2000);
    }else{
        message.classList.add("error")
        message.textContent = "Email ou mot de passe incorrect !"
    }
})