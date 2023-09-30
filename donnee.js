if(!localStorage.SESSIONUSER){
    window.location.href = "./index.html";
}

const session = JSON.parse(localStorage.SESSIONUSER) ;
const all = localStorage.ALL ? JSON.parse(localStorage.ALL) : [];

const tbody = document.querySelector("tbody");
console.log(all,  session)
if(all.length && all.find(user=>user.email === session.userId)){

    all.filter(user=>user.email === session.userId).forEach((uses, indece) => {
        tbody.innerHTML += `
        <tr id="${indece+1}">
          <td data-title="N°">${indece+1}</td>
          <td data-title="TACHE 1">${uses.nom}</td>
          <td data-title="DUREE TACHE 1">${uses.prenom}</td>
          <td data-title="TACHE 2">${uses.email}</td>
          <td data-title="DUREE TACHE 2">${uses.poste}</td>
          <td data-title="MONTANT DES DEUX TACHES">${uses.salaire}</td>
          <td data-title="ACTION"><i class="edite" id="edite-${indece+1}">Edite</i> <i class="delete" id="delete-${indece+1}">Delete</i></td>
        </tr>
        `
    });
}