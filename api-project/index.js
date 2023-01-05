const animalcrossing = "http://acnhapi.com/v1/villagers/";

async function getData(animalcrossing) {
  try {
    const response = await fetch(animalcrossing);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json(); //makes the data in a JSON object we can use
      document.getElementById("api-response").textContent = data.content;

      console.log("amazing");
    }
  } catch (error) {
    console.log(error);
    console.log("bad");
  }
}
getData(animalcrossing);
