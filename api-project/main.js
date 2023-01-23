const amiibo = `https://www.amiiboapi.com/api/amiibo/`;

async function getData(amiibo) {
  try {
    const response = await fetch(amiibo);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json(); //makes the data in a JSON object we can use
      console.log(data);
      data.forEach((data) => {
        document.getElementById("api-reponse").insertAdjacentElement(
          "beforeend",
          `<div class="card"> <h2 class="amiibo">${data.amiibo.name}</h2>
             img class="image" src="${data.amiibo.image}"/></div>`
        );
      });
      console.log("good");
    }
  } catch (error) {
    console.log(error);
    console.log("bad");
  }
}
getData(amiibo);
