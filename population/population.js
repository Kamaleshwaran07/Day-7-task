const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.send();

xhr.onreadystatechange = function () {
  let countriesData = JSON.parse(xhr.responseText);
  countriesData.filter((country) => {
    let population = country.population;
    if (population < 200000) {
      console.log(`${country.name.common}: ${country.population}`);
    }
  });
};
