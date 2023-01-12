const villager = ``;
const villagers = `http://acnhapi.com/v1/villagers/${villager}`;

async function getData(villagers) {
  try {
    const response = await fetch(villagers);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json(); //makes the data in a JSON object we can use
      console.log(data);
      data.forEach((Object) => {
        document.getElementById("api-reponse").insertAdjacentElement(
          "afterbegin",
          `<div class="card"> <h2 class="villagername">${
            Object.name.name - USen
          }</h2>
             img class="image" src="${
               Object.image.jpg.large_image_url
             }"/></div>`
        );
      });
      console.log("good");
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("bad");
  }
}
getData(villagers);
