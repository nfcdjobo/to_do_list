if(!localStorage.SESSIONUSER){
    window.location.href = "./index.html";
}

const session = JSON.parse(localStorage.SESSIONUSER) ;
const all = localStorage.ALL ? JSON.parse(localStorage.ALL) : [];
const tbody = document.querySelector("tbody");
if(all.length && all.find(user=>user.email === session.userId)){
    all.filter(user=>user.email === session.userId).forEach((uses, indece) => {
        tbody.innerHTML += `
        <tr id="${indece+1}">
          <td data-title="N°">${indece+1}</td>
          <td data-title="NOM">${uses.nom}</td>
          <td data-title="PRENOM">${uses.prenom}</td>
          <td data-title="EMAIL">${uses.email}</td>
          <td data-title="POSTE">${uses.poste}</td>
          <td data-title="SALAIRE">${uses.salaire}</td>
          <td data-title="MODIFICATION"><i class="edite-${indece+1}">Edite</i> <i class="delete-${indece+1}">Delete</i></td>
        </tr>
        `
    });
}