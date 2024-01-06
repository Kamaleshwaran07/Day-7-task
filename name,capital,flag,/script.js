const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.send();

xhr.onreadystatechange = function () {
  let countriesData = JSON.parse(xhr.responseText);

  countriesData.forEach((country) => {
    console.log(
      `Country name: ${country.name.common}
Capital of the country: ${country.capital}
Flag of the country: ${country.flags.png}`
    );
  });
};
