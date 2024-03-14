import { getAllWorks, getFilter } from "./Api.js";
let works;
works = await getAllWorks();



//CREATION DE LA GALLERY DE PHOTO PAGE D"ACCUEIL


export function renderWorks(works) {

  const galleryWorks = document.querySelector(".gallery");
  galleryWorks.innerHTML = "";

  works.forEach((work) => {
    const photoCard = document.createElement("figure");
    const photo = document.createElement("img");
    const photoText = document.createElement("figcaption");


    photo.src = work.imageUrl;
    photoText.innerText = work.title;
    photo.alt = work.title;
    photo.setAttribute("category", work.categoryId);

    photoCard.appendChild(photo);
    photoCard.appendChild(photoText);

    galleryWorks.appendChild(photoCard);
  });
}
