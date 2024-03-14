
import { loginpost } from "./Api.js";

function directionHome() {
  document.location.href = "index.html";

}




export async function login() {
  // RECUPERATION DU FORMULAIRE DE CONNEXION
  const connexionForm = document.querySelector("#form");

  //recuperation email et password directement sa value pour eviter une autre recuperation
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const erreur = document.querySelector("#error_message");
  connexionForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const response = await loginpost(email.value, password.value);


    if (response.ok) {
      const token = await response.json;
      console.log(token)

      directionHome();

    } else {
      erreur.classList.add("color_message");
      erreur.innerHTML = "Identifiant ou mot de passe incorrect";
      console.log("erreur de connexion");
    }
  })


}

await login();









