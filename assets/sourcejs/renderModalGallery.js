import { getAllWorks } from "./Api.js";
import { renderWorks } from "./gallery.js"

let works;
works = await getAllWorks();


const token = localStorage.getItem("token");
const main = document.querySelector(".main");
const modal = document.createElement("div");
const modalWrapper = document.createElement("div");
const navigation = document.createElement("div");
const iconClose = document.createElement("i");
const titlemodal = document.createElement("h3");
const modalGalleryContainer = document.createElement("div");
const modalGallery = document.createElement("div");
const modalButton = document.createElement("button");

// //Ouverture MODAL 1
export function openModal() {
    const modal = document.querySelector(".modal");
    const openButton = document.querySelector(".top_Edition");
    openButton.addEventListener("click", () => {
        modal.style.display = "block";

    })

    const modal2 = document.querySelector(".modal2")
    const openModifer = document.querySelector(".iconModification");
    openModifer.addEventListener("click", () => {
        modal.style.display = "block";
        modal2.style.display = "none"
    });
}

// FERMETURE MODAL 1

export function closeModal() {
    const modal = document.querySelector(".modal");
    const iconClose = document.querySelector(".essai");
    iconClose.addEventListener("click", () => {

        modal.style.display = "none";


    });

    // Pas sur la fenetre modalWrapper
    const modalWrapper = document.querySelector(".modal_wrapper");
    modalWrapper.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // fermeture de la modal par le clic sur la modale grisée

    window.addEventListener("click", async (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            e.stopPropagation();
        }
    });
}

export function renderModalGallery() {

    displayModal();
    displayModalWorks(works);

}

renderModalGallery();




async function deleteWorks(workId) {
    try {
        const response = await fetch(`http://localhost:5678/api/works/${workId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            console.log("response.ok")


            // rafraichissement galerie accueil
            const works = await getAllWorks();
            renderWorks(works);
            displayModalWorks(works)

        } else {
            // Gérez l'erreur en conséquence
            alert("Échec de la suppression");
        }
    } catch (error) {
        console.error("Erreur lors de la suppression :", error);
    }

}



export function displayModalWorks(works) {
    const galleryModal = document.querySelector(".modal_gallery");
    galleryModal.innerHTML = "";

    works.forEach((work) => {

        //Sélection pour chaque work de allworks
        const photoCardModal = document.createElement("figure");
        photoCardModal.setAttribute("id", work.id)

        const containerTrash = document.createElement("div")
        const photoModal = document.createElement("img");
        const iTrashModal = document.createElement("i");

        containerTrash.classList.add("containerTrash")
        iTrashModal.classList.add("fa-solid", "fa-trash-can")
        photoModal.classList.add("modal_img")
        photoModal.src = work.imageUrl;

        // const modalGallery = document.querySelector("modal_gallery")

        photoCardModal.appendChild(photoModal);
        photoCardModal.appendChild(containerTrash);
        photoCardModal.appendChild(iTrashModal);
        modalGallery.appendChild(photoCardModal);

        // Suppression d'un work

        iTrashModal.setAttribute("data-work-id", work.id);
        iTrashModal.addEventListener("click", async () => {
            const workId = iTrashModal.getAttribute("data-work-id");

            const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer cette image ?");
            if (confirmDelete) {
                // Supprime l'image si l'utilisateur clique sur "OK".
                deleteWorks(workId);
            }


        });
    })
}

function displayModal() {
    modal.classList.add("modal");
    main.appendChild(modal);

    //Ajout div modalWrapper contenant toute la partie modal à la modal

    modalWrapper.classList.add("modal_wrapper");
    modal.appendChild(modalWrapper);

    //Ajout div closeBtn contenant le X à div modalWrapper

    navigation.classList.add("close_btn");
    modalWrapper.appendChild(navigation);

    // ajout i contenant le logo x à div iconCmlose

    iconClose.classList.add("essai", "fa-solid", "fa-xmark");
    navigation.appendChild(iconClose);

    // Ajout h3 titlemodal à div modalWrapper

    titlemodal.classList.add("title_modal");
    titlemodal.innerHTML = "Galerie photo";
    modalWrapper.appendChild(titlemodal);

    //Ajout div modalGalleryContainer à div modalWrapper

    modalGalleryContainer.classList.add("modal_container_gallery");
    modalWrapper.appendChild(modalGalleryContainer);

    //Ajout div modal_gallery à div modalGalleryContainer

    modalGallery.classList.add("modal_gallery");
    modalGalleryContainer.appendChild(modalGallery);

    //Ajout button à la div modalwrapper

    modalButton.classList.add("modal_btn");
    modalButton.innerHTML = "Ajouter une photo";
    modalWrapper.appendChild(modalButton);

}