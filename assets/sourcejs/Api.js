//FONCTION DE RECUPERATION DES WORKS
export async function getAllWorks() {
  const response = await fetch("http://localhost:5678/api/works");
  return response.json();
}

//FONCTION DE RECUPERATION DES CATEGORIES
export async function getFilter() {
  const response = await fetch("http://localhost:5678/api/categories");
  return response.json();
}



export async function loginpost(email, password) {
  try {
    const url = "http://localhost:5678/api/users/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const json = await response.json();
    window.localStorage.setItem("token", json.token);
    console.log(json)
    return response;
  } catch (error) {
    console.log("Une erreur s'est produite lors de l'appel à l'API users/login :", error);
    throw error;
  }
}


