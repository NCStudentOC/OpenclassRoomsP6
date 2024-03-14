import { getAllWorks, getFilter, } from "./Api.js";
import { renderWorks } from "./gallery.js";
import { renderFilter } from "./filter.js";
// import { renderAddWorksModal } from "./addForm.js";
import { tokenLogin } from "./connected.js";

// import { openModal, closeModal, openModalTwo, closeModaltwo } from "./openCloseModal.js";
import { openModal, closeModal } from "./renderModalGallery.js";
import { openModalTwo, closeModaltwo } from "./renderModalAddWorks.js";

async function main() {

  // Récupére les données des travaux et des catégories depuis le serveur, et afficher les works de travail et les filtres en page d'accueil
  getFilter().then((categories) => {
    renderFilter(categories);
  });

  getAllWorks().then((works) => {
    renderWorks(works);
  });

  // renderAddWorksModal()
  await tokenLogin()


  openModal()
  closeModal()
  openModalTwo()
  closeModaltwo()

}

main();


