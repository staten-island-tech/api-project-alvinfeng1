async function getAmiibos() {
  try {
    const response = await fetch("https://www.amiiboapi.com/api/amiibo/");
    const amiibosData = await response.json();
    if (response.status < 200 || response.status > 299) {
      console.log("poop");
    }
    const amiibos = amiibosData.amiibo;
    window.amiibos = amiibos;
    displayAmiibos(amiibos);
  } catch (error) {
    console.log(error);
    console.log("big poo");
  }

  function displayAmiibos(amiibos) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    amiibos.forEach((amiibo) => {
      let imageUrl = amiibo.image;
      let name = amiibo.name;
      let gameSeries = amiibo.gameSeries;
      let release = amiibo.release.na;
      const card = container.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
          <img src="${imageUrl}" alt="">
          <h2>${name}</h2>
          <p>Game Series: ${gameSeries}</p>
          <p>Release Date: ${release}</p>
          </div>
        `
      );
    });
  }

  function filterAmiibosByName(amiibos, name) {
    displayAmiibos(
      amiibos.filter((amiibo) =>
        amiibo.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  }

  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-btn");
  searchButton.addEventListener("click", () => {
    const searchTerm = searchBar.value;
    filterAmiibosByName(amiibos, searchTerm);
    event.preventDefault();
  });
}

getAmiibos();
