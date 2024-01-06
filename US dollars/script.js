const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      let countriesData = JSON.parse(xhr.responseText);
      let currencyUSD = countriesData.filter((country) => {
        // console.log(country.currencies);
        return country.currencies && country.currencies.USD;
      });
      currencyUSD.forEach((country) => {
        console.log(
          `Countries that uses USD as a currency are ${country.name.common}`
        );
      });
    } else {
      console.log(xhr.status);
    }
  }
};
// const URL = "https://restcountries.com/v3.1/all";

// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);

// xhr.send();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {
//       let countriesData = JSON.parse(xhr.responseText);

//       // Using filter to find countries that use US dollars as currency
//       const countriesWithUSD = countriesData.filter((country) => {
//         return country.currencies && country.currencies.USD;
//       });

//       if (countriesWithUSD.length > 0) {
//         console.log("Countries that use US Dollars:");
//         countriesWithUSD.forEach((country) => {
//           console.log(country.name.common);
//         });
//       } else {
//         console.log("No countries found that use US Dollars as currency.");
//       }
//     } else {
//       console.error("Error fetching data. Status code:", xhr.status);
//     }
//   }
// };
