import { displayModalWorks } from "./renderModalGallery.js";

import { renderWorks } from "./gallery.js";
import { getAllWorks } from "./Api.js";
import { getFilter } from "./Api.js";
let Categories
Categories = await getFilter();


//Ouverture MODAL 2
export function openModalTwo() {
    const reussiteAdd = document.querySelector(".reussite_message");
    const erreurAdd = document.querySelector(".color_message2");
    const erreurFormat = document.querySelector(".color_message2");
    const modal = document.querySelector(".modal")
    const modal2 = document.querySelector(".modal2")
    const modalButton = document.querySelector(".modal_btn");
    modalButton.addEventListener("click", async function () {
        modal2.style.display = "block";
        modal.style.display = "none";
        reussiteAdd.style.display = "none";
        erreurAdd.style.display = "none";
        erreurFormat.style.display = "none";
        const iconPhoto = document.querySelector(".fa-image");
        iconPhoto.style.display = "flex";

        const addText = document.querySelector(".add_text");
        addText.style.display = "block";

        const addButton = document.querySelector(".add_btn");
        addButton.style.display = "flex";
        addButton.innerHTML = " Ajouter photo";

        const imageAdd = document.querySelector("#image");
        imageAdd.remove();
        addTitle.disabled = true;
        CategoryLabel.disabled = true;

    });

}

//FERMETURE RETOUR MODAL 2
export function closeModaltwo() {
    const arrowreturn = document.querySelector(".fa-arrow-left");
    const modal2 = document.querySelector(".modal2")
    arrowreturn.addEventListener("click", () => {

        modal2.style.display = "none";
        modal.style.display = "block";

    });

    //fermeture de la modal par la X
    const modal = document.querySelector(".modal")
    const iconClose2 = document.querySelector(".icon");
    iconClose2.addEventListener("click", (e) => {
        console.log("X")
        e.stopPropagation();
        modal2.style.display = "none";
        // modal.style.display = "none";

    });

    // Pas sur la fenetre modalWrapper
    const modalWrapper = document.querySelector(".modal_wrapper");
    modalWrapper.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    window.addEventListener("click", async (e) => {
        if (e.target === modal2) {
            modal.style.display = "none";
            modal2.style.display = "none"
            e.stopPropagation();
        }
    });
}

// FONCTION GLOBAL DE LANCEMENT
async function renderAddWorksModal() {
    displayModalTwo();
    sendNewWork();

}
renderAddWorksModal();


// FONCTION CREATION MODAL
export function displayModalTwo() {

    // CREATION MODAL
    const main = document.querySelector(".main");

    // Ajout div modalWrapper contenant toute la partie modal à la modal
    const modal2 = document.createElement("div");
    modal2.classList.add("modal2");
    main.appendChild(modal2);

    // //Ajout div modalWrapper contenant toute la partie modal à la modal
    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add("modal_wrapper");
    modal2.appendChild(modalWrapper);

    // Ajout div closeBtn contenant le X à div modalWrapper
    const navigation = document.createElement("div");
    navigation.classList.add("close_btn2");
    modalWrapper.appendChild(navigation);

    // ajout i contenant le logo x à div iconCmlose
    const iconClose2 = document.createElement("i");
    iconClose2.classList.add("icon", "fa-solid", "fa-xmark");
    navigation.appendChild(iconClose2);

    //Ajout de la fleche
    const arrowLeft = document.createElement("i");
    arrowLeft.classList.add("fa-solid", "fa-arrow-left");
    navigation.appendChild(arrowLeft);

    // Ajout h3 titlemodal à div modalWrapper
    const titlemodal = document.createElement("h3");
    titlemodal.classList.add("title_modal");
    titlemodal.innerHTML = "Ajout photo";
    modalWrapper.appendChild(titlemodal);

    //Ajout div modalContainer à div modalWrapper
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal_container");
    modalWrapper.appendChild(modalContainer);

    //Ajout div photModalContainer à div modalContainer
    const photoModalContainer = document.createElement("div");
    photoModalContainer.classList.add("photo_modal_container");
    modalContainer.appendChild(photoModalContainer);

    //Ajout de l'icone photo
    const iconPhoto = document.createElement("i");
    iconPhoto.classList.add("fa-solid", "fa-image");
    photoModalContainer.appendChild(iconPhoto);

    //Ajout de l'emplacement image
    const imageAdd = document.createElement("img");
    imageAdd.classList.add("imageAdd");
    // imageAdd.setAttribute("id", "imageAdd");
    photoModalContainer.appendChild(imageAdd)

    // //Ajout button à la div photoModalContainer
    const addButton = document.createElement("label");
    addButton.classList.add("add_btn");
    addButton.setAttribute("for", "imageFile");
    addButton.innerHTML = " Ajouter photo";
    photoModalContainer.appendChild(addButton);

    const imageInput = document.createElement("input");
    imageInput.type = "file";
    imageInput.id = "imageFile";
    imageInput.name = "imageFile";
    photoModalContainer.appendChild(imageInput);

    //Ajout text à photoModalContainer
    const addText = document.createElement("p");
    addText.classList.add("add_text");
    addText.innerHTML = "jpg, png : 4mo max";
    addText.accept = "jpg,png,jpeg";
    addText.max = "4096";
    photoModalContainer.appendChild(addText);

    //Ajout label et input titre à modalContainer
    const addTitleLabel = document.createElement("label");
    addTitleLabel.innerHTML = "Titre";
    addTitleLabel.classList.add("add_title_label");
    addTitleLabel.setAttribute("for", "title");
    modalContainer.appendChild(addTitleLabel);

    const addTitle = document.createElement("input");
    addTitle.classList.add("add_title");
    addTitle.type = "text";
    addTitle.id = "title";

    // AddTitle.setAttribute() recuperation a prevoir
    modalContainer.appendChild(addTitle);

    //Ajout label et select option titre à modalContainer
    const CategoryLabel = document.createElement("label");
    CategoryLabel.innerHTML = "Catégorie";
    CategoryLabel.classList.add("add_title_label");
    CategoryLabel.setAttribute("for", "Categorie");
    modalContainer.appendChild(CategoryLabel);

    //Ajout button à la div modalwrapper
    const modalButton = document.createElement("button");
    modalButton.classList.add("valide_btn");
    modalButton.innerHTML = "Valider";
    modalWrapper.appendChild(modalButton);


    // MESSAGE ALERTE FORMULAIRE VALIDE
    const reussiteAdd = document.createElement("p");
    reussiteAdd.classList.add("reussite_message")
    reussiteAdd.innerHTML = "Formulaire validé ";
    modalWrapper.appendChild(reussiteAdd)

    const erreurAdd = document.createElement("p");
    erreurAdd.classList.add("color_message2")
    erreurAdd.innerHTML = "Veuillez remplir tous les champs pour ajouter un projet ";
    modalWrapper.appendChild(erreurAdd)

    const erreurFormat = document.createElement("p");
    erreurFormat.classList.add("color_message2")
    erreurFormat.innerHTML = "selectionner un fichier valide JPG ou PNG ";
    modalWrapper.appendChild(erreurFormat)

    const fichierTropLourd = document.createElement("p");
    fichierTropLourd.classList.add("color_message2")
    fichierTropLourd.innerHTML = "le fichier dépasse les 4mo requis ";
    modalWrapper.appendChild(fichierTropLourd)



    // REMPLISSAGE FORMULAIRE
    const imageSelect = document.querySelector(".imageAdd");
    imageInput.addEventListener("change", () => {
        const file = imageInput.files[0];

        const allowedFormats = ['image/jpeg', 'image/png'];
        if (photoInput.files.length === 0 || !allowedFormats.includes(photoInput.files[0].type)) {
            erreurFormat.style.display = "flex";
            return;

        }
        if (file.size > 4096000) {
            fichierTropLourd.style.display = "flex";
            const iconPhoto = document.querySelector(".fa-image");
            iconPhoto.style.display = "flex";

            const addText = document.querySelector(".add_text");
            addText.style.display = "block";

            const addButton = document.querySelector(".add_btn");
            addButton.style.display = "flex";
            addButton.innerHTML = " Ajouter photo";

            const imageAdd = document.querySelector("#image");
            imageAdd.remove();
            addTitle.disabled = true;
            CategoryLabel.disabled = true;
        }
        else {
            fichierTropLourd.style.display = "none"
            imageAdd.style.display = "block";
        }
        const reader = new FileReader();

        reader.onload = (e) => {
            imageSelect.src = e.target.result;
            imageAdd.setAttribute("id", "image");
            imageAdd.src = e.target.result;
            imageAdd.style.opacity = "1";
            imageAdd.style.display = "block";

            photoModalContainer.appendChild(imageAdd)

            iconPhoto.style.display = "none";
            addText.style.display = "none";
            addButton.style.display = "none";
        };
        reader.readAsDataURL(file);
    });

    listCategories()
}


// FONCTION APPEL API
async function addWorks() {
    const photoInput = document.getElementById("imageFile");
    const titleInput = document.getElementById("title");
    const selectInput = document.getElementById("Categorie");
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append("image", photoInput.files[0]);
    formData.append("title", titleInput.value);
    formData.append("category", selectInput.value);

    try {
        const response = await fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        return response;
    } catch (error) {
        console.error("Erreur lors de l'ajout:", error);
    }
}


// FONCTION CREATION LISTE DEROULANTE API
function listCategories() {
    // Check if the CategorySelection already exists, if not create it
    const modalContainer = document.querySelector(".modal_container");
    let CategorySelection = modalContainer.querySelector("#Categorie");


    CategorySelection = document.createElement("select");
    CategorySelection.classList.add("add_title", "add_color");
    CategorySelection.id = "Categorie";
    modalContainer.appendChild(CategorySelection);

    const videOption = document.createElement("option");
    CategorySelection.appendChild(videOption);


    // Re-populate the options from your Categories array
    Categories.forEach((category) => {
        const option = document.createElement('option');
        option.innerText = category.name;
        option.value = category.id;
        option.id = "optionCategorie";
        CategorySelection.appendChild(option);
    });
}




// FONCTION ENVOI FORMULAIRE
async function sendNewWork() {

    const erreurAdd = document.querySelector(".color_message2")
    const reussiteAdd = document.querySelector(".reussite_message");
    const modalButton = document.getElementsByClassName("valide_btn", "valide_btn_active");


    modalButton[0].addEventListener("click", async (e) => {
        e.preventDefault();

        if (titleInput.value === "" || selectInput.value === "" || photoInput.value === "") {
            erreurAdd.style.display = "flex";
        }

        const response = await addWorks()
        if (response.ok) {

            reussiteAdd.style.display = "block";
            modalButton[0].classList.add("valide_btn_active");
            refreshModal()


            // REMET 0 ZERO
            const iconPhoto = document.querySelector(".fa-image");
            iconPhoto.style.display = "flex";

            const addText = document.querySelector(".add_text");
            addText.style.display = "block";

            const addButton = document.querySelector(".add_btn");
            addButton.style.display = "flex";
            addButton.innerHTML = " Ajouter photo";

            const imageAdd = document.querySelector(".imageAdd");
            imageAdd.remove();

            titleInput.value = "";
            selectInput.value = "";

        } else {
            console.log("result no");

            return;
        }
    });

}

// FONCTION DE RAFRAICHISSEMENT DES GALERIES
async function refreshModal() {

    // Réinitialisation des galeries
    document.querySelector(".gallery").innerHTML = "";
    document.querySelector(".modal_gallery").innerHTML = "";


    // RECARGE LES GALERIES
    let works = await getAllWorks();
    displayModalWorks(works);
    renderWorks(works);

}






// // FONCTION POUR VALIDER LES CHAMPS

const photoInput = document.getElementById("imageFile");
const titleInput = document.getElementById("title");
const selectInput = document.getElementById("Categorie");
const modalButton = document.getElementsByClassName("valide_btn", "valide_btn_active");
const erreurAdd = document.querySelector(".color_message2")


// Ajoutécouteur d'événements aux champs d'entrée
photoInput.addEventListener("input", updateButtonState);
titleInput.addEventListener("input", updateButtonState);
selectInput.addEventListener("input", updateButtonState);

async function updateButtonState() {

    // Vérifiez si tous les champs d'entrée sont remplis
    if (photoInput.value === "" || titleInput.value === "" || selectInput.value === "") {
        // Désactivez le bouton
        modalButton[0].classList.remove("valide_btn_active");


    } else {
        // Activez le bouton

        modalButton[0].classList.add("valide_btn_active");
        erreurAdd.style.opacity = "0";
    }
}





















