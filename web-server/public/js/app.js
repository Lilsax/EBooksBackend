const weatherForm = document.querySelector("form");
const searchInput = document.querySelector("input");
const resultP = document.querySelectorAll("p")[1];
const errorP = document.querySelectorAll("p")[2];

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchInput.value;

  fetch(`weather?address=${location}`, {
    method: "get",
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.error) {
        console.log(res.error);
        errorP.innerText = res.error;
      } else {
        console.log(res);
        resultP.innerText = res.forecastData;
      }
    });
});
