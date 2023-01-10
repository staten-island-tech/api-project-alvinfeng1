const villagername = `Cyrano`
const URL = `http://acnhapi.com/v1/villagers/${villagername}`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json(); //makes the data in a JSON object we can use
      data.forEach((name) => {
        document.getElementById("api-reponse").insertAdjacentElement(
          "afterbegin",
          `<div class="card"> <h2 class="villagername">${name - USen}</h2>
             img src="${image.jpg.large_image_url}" alt="" /></div>`
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
getData(animalcrossing);
