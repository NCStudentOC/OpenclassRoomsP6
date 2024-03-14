import { getAllWorks, getFilter } from "./Api.js";
import { renderWorks } from "./gallery.js";

let categories;
categories = await getFilter();



// // // CREATION DES BUTTON FILTRES

export function renderFilter(categories) {


  if (categories && categories.length > 0) {

    // creation du button unique Tous

    const galleryFilter = document.querySelector(".filter_container");
    const TousButton = document.createElement("button");
    TousButton.classList.add("filter_card", "filter_active", "filter_title");
    TousButton.innerHTML = "Tous";
    TousButton.setAttribute("category", "Tous");
    galleryFilter.appendChild(TousButton);


    // creation des autres buttons par catégories

    for (const category of categories) {

      const filterButton = document.createElement("button");
      filterButton.innerText = category.name;
      filterButton.id = category.id;
      filterButton.classList.add("filter_card", "filter_title");
      galleryFilter.appendChild(filterButton);

    }
    // // ACTIONS BUTTONS

    const filterButtons = document.querySelectorAll("button");


    for (let i = 0; i < filterButtons.length; i++) {

      const filterButton = document.querySelector(
        `.filter_container button:nth-child(${i + 1})`
        // const filterButton = document.querySelector('.filter_container button:nth-child(' + (i + 1) + ')');
      );
      if (filterButton) {
        filterButton.addEventListener("click", async function () {
          let works = await getAllWorks();
          let worksFiltered;


          filterButtons.forEach((filterButton) => {

            filterButton.classList.remove("filter_active");
          });

          filterButton.classList.add("filter_active");


          //Le premier boutton Tous affiche tout works
          if (i === 0) {
            worksFiltered = works;
          }
          // les autres filtrent pas catégories respectivent
          else {
            worksFiltered = works.filter(function (work) {
              return work.categoryId === i;
            });

          }
          renderWorks(worksFiltered);
        });
      }
    }

  };

}
