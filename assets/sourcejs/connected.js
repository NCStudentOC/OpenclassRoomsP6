export async function tokenLogin() {
    // Récupérer le token depuis le localStorage
    let token = localStorage.getItem("token");

    // Si connecté
    if (token) {
        console.log("Connecté");
        // Change la visibilité de la page après la connexion
        checkEditMode()
    } else {
        CloseEditMode()
        // Gère la déconnexion
        console.log("déconnecté")

    }

}


export async function checkEditMode() {

    // Changement du bouton "login" en "logout"
    const loginText = document.querySelector(".login");
    loginText.textContent = "logout";
    loginText.addEventListener("click", async function () {
        CloseEditMode();
    });;


    const banner = document.querySelector(".container")
    banner.style.opacity = '1';


    const modif = document.querySelector(".iconModification")
    modif.style.opacity = '1';


    // Les filtres sont masqués
    const filtersName = document.querySelector(".filter_container");
    filtersName.style.opacity = "0"
}






export async function CloseEditMode() {
    const token = localStorage.removeItem("token");
    // Changement du bouton "logout" en "login"
    const loginText = document.querySelector(".login");
    loginText.textContent = "login";

    // Masquer le banner
    const banner = document.querySelector(".container");
    banner.style.opacity = '0';

    // Masquer modif
    const modif = document.querySelector(".iconModification");
    modif.style.opacity = '0';

    // Afficher les filtres
    const filtersName = document.querySelector(".filter_container");
    filtersName.style.opacity = "1";
}





