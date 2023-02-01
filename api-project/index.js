async function getAmiibos() {
    try {
      const response = await fetch('https://www.amiiboapi.com/api/amiibo/');
      const amiibosData = await response.json();
      if (response.status < 200 || response.status > 299) {
        console.log('poop');
      }
      const amiibos = amiibosData.amiibo;
      window.amiibos = amiibos;
      displayAmiibos(amiibos);
    } catch (error) {
      console.log(error);
      console.log("big poo");
    }
  
    function displayAmiibos(amiibos) {
      const container = document.querySelector('.container');
      container.innerHTML = '';
      amiibos.forEach((amiibo) => {
        let imageUrl = amiibo.image;
        let name = amiibo.name;
        let gameSeries = amiibo.gameSeries;
        let release = amiibo.release.na;
        const card =  container.insertAdjacentHTML('beforeend',
         `<div class="card">
          <img src="${imageUrl}" alt="${name}">
          <h2>${name}</h2>
          <p>Game Series: ${gameSeries}</p>
          <p>Release Date: ${release}</p>
          </div>
        `);
      });
    }

    function allAmiibos(amiibos) {
        const container = document.querySelector('.container');
        container.innerHTML = '';
        amiibos.forEach((amiibo) => {
          let imageUrl = amiibo.image;
          let name = amiibo.name;
          let gameSeries = amiibo.gameSeries;
          let release = amiibo.release.na;
          const card =  container.insertAdjacentHTML('beforeend',
           `<div class="card">
            <img src="${imageUrl}" alt="${name}">
            <h2>${name}</h2>
            <p>Game Series: ${gameSeries}</p>
            <p>Release Date: ${release}</p>
            </div>
          `);
        });
      }
  
      document.querySelector("#All series").addEventListener("click", function () {
        container.innerHTML = '';
        allAmiibos(amiibos);
      });


    document.querySelector("#Super Smash Bros").addEventListener("click", function () {
      const container = document.querySelector('.container');
      container.innerHTML = '';
      displayAmiibos(amiibos.filter((amiibo) => amiibo.gameSeries === "Super Smash Bros"));
      {
        let imageUrl = amiibo.image;
        let name = amiibo.name;
        let gameSeries = amiibo.gameSeries;
        let release = amiibo.release.na;
        const card =  container.insertAdjacentHTML('beforeend',
         `<div class="card">
          <img src="${imageUrl}" alt="${name}">
          <h2>${name}</h2>
          <p>Game Series: ${gameSeries}</p>
          <p>Release Date: ${release}</p>
          </div>
        `);
      };
    });
      
    document.querySelector("#Splatoon").addEventListener("click", function () {
        const container = document.querySelector('.container');
        container.innerHTML = '';
        displayAmiibos(amiibos.filter((amiibo) => amiibo.gameSeries === "Splatoon"));
         {
          let imageUrl = amiibo.image;
          let name = amiibo.name;
          let gameSeries = amiibo.gameSeries;
          let release = amiibo.release.na;
          const card =  container.insertAdjacentHTML('beforeend',
           `<div class="card">
            <img src="${imageUrl}" alt="${name}">
            <h2>${name}</h2>
            <p>Game Series: ${gameSeries}</p>
            <p>Release Date: ${release}</p>
            </div>
          `);
        };
      });

      document.querySelector("#Super Mario").addEventListener("click", function () {
        const container = document.querySelector('.container');
        container.innerHTML = '';
        displayAmiibos(amiibos.filter((amiibo) => amiibo.gameSeries === "Super Mario"));
      {
          let imageUrl = amiibo.image;
          let name = amiibo.name;
          let gameSeries = amiibo.gameSeries;
          let release = amiibo.release.na;
          const card =  container.insertAdjacentHTML('beforeend',
           `<div class="card">
            <img src="${imageUrl}" alt="${name}">
            <h2>${name}</h2>
            <p>Game Series: ${gameSeries}</p>
            <p>Release Date: ${release}</p>
            </div>
          `);
        };
      });

      document.querySelector("#Animal Crossing").addEventListener("click", function () {
        const container = document.querySelector('.container');
        container.innerHTML = '';
        displayAmiibos(amiibos.filter((amiibo) => amiibo.gameSeries === "Animal Crossing"));
        {
          let imageUrl = amiibo.image;
          let name = amiibo.name;
          let gameSeries = amiibo.gameSeries;
          let release = amiibo.release.na;
          const card =  container.insertAdjacentHTML('beforeend',
           `<div class="card">
            <img src="${imageUrl}" alt="${name}">
            <h2>${name}</h2>
            <p>Game Series: ${gameSeries}</p>
            <p>Release Date: ${release}</p>
            </div>
          `);
        };
      });

    // function filterAmiibosBySeries(amiibos, series) {
    //   displayAmiibos(amiibos.filter((amiibo) => amiibo.gameSeries === series));
    // }
    // filterAmiibosBySeries(amiibos, series)

    // const filterButtons = document.querySelectorAll('.filter-btn');
    // filterButtons.forEach((button) => {
    //   button.addEventListener('click', (event) => {
    //     const series = event.target.dataset.series;
    //     if (series) {
    //       filterAmiibosBySeries(amiibos, series);
    //     }
    //   });
    // });
  
    function filterAmiibosByName(amiibos, name) {
      displayAmiibos(amiibos.filter((amiibo) => amiibo.name.toLowerCase().includes(name.toLowerCase())));
    }
  
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-btn');
    searchButton.addEventListener('click', () => {
      const searchTerm = searchBar.value;
      filterAmiibosByName(amiibos, searchTerm);
    });
  }
  
  getAmiibos();
  


  