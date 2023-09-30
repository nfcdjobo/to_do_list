if(!localStorage.SESSIONUSER){
    window.location.href = "./index.html";
}

const formulaire = document.querySelector("form");
formulaire.addEventListener("submit", event=>{
    event.preventDefault();
    if(!localStorage.SESSIONUSER) window.location.href="./index.html";
    const session = JSON.parse(localStorage.SESSIONUSER);
    const ALL = localStorage.ALL ? JSON.parse(localStorage.ALL) : [];
    const data = {
        nom:event.target.nom.value,
        prenom:event.target.prenom.value,
        email:event.target.email.value,
        poste:event.target.poste.value,
        salaire:Number(event.target.salaire.value),
        userId:session.email
    }
    
    ALL.push(data);
    localStorage.setItem("ALL", JSON.stringify(ALL));
    alert("Ajout effectué");
    formulaire.querySelectorAll("input:required").forEach(input=>input.value="");
})
