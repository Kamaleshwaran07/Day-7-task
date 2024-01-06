const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      let countriesData = JSON.parse(xhr.responseText);
      let totalPopulation = countriesData.reduce((acc, country) => {
        const population = country.population;
        return acc + population;
      }, 0);
      console.log(`Total population of the world is ${totalPopulation}`);
    } else {
      console.log(xhr.status);
    }
  }
};
