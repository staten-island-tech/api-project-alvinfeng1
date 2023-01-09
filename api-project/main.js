const animalcrossing = `http://acnhapi.com/v1/villagers/`;
async function getData(animalcrossing) {
  try {
    const response = await fetch(animalcrossing);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json(); //makes the data in a JSON object we can use
      data.forEach((id, name) => {
        document.getElementById("api-reponse").insertAdjacentElement(
          "afterbegin",
          `<div class="card"> <h2 class="title">${name.name - USen}</h2>
            img src="${id.image.jpg.large_image_url}" alt="" /></div>`
        );
      });

      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("bad");
  }
}
getData(animalcrossing);
