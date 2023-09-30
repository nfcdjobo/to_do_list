document.querySelector(".deconnexion").addEventListener("click", event=>{
    if(confirm("VOULOEZ-VOUS DECONNECTER ,")){
        localStorage.removeItem("SESSIONUSER");
        location.reload()
    }
})