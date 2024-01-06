const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.send();

xhr.onreadystatechange = function () {
  let countriesData = JSON.parse(xhr.responseText);
  // console.log(countriesData);
  countriesData.filter((country) => {
    `${country.region}` === "Asia";
    console.log(`Countries in Asia are : ${country.name.common}`);
  });
};
