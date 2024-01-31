const quotedata = async (apiUrl) => {
  const details = await fetch(apiUrl);
  const data = await details.json();
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
};

document.addEventListener("DOMContentLoaded", function () {
  quotedata("https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/quotes").then(
    (quote) => {
      document
        .getElementById("card-1")
        .addEventListener("click", async function () {
          const cardTitle = document.querySelector(".card-title");
          cardTitle.innerHTML = `"${quote.quote}"<br>- ${quote.author}`;
          cardTitle.style.fontSize = "16px";
        });
        document
        .getElementById("card-2")
        .addEventListener("click", async function () {
          const cardTitle = document.querySelector(".card-title1");
          cardTitle.innerHTML = `"${quote.quote}"<br>- ${quote.author}`;
          cardTitle.style.fontSize = "16px";
        });
        document
        .getElementById("card-3")
        .addEventListener("click", async function () {
          const cardTitle = document.querySelector(".card-title2");
          cardTitle.innerHTML = `"${quote.quote}"<br>- ${quote.author}`;
          cardTitle.style.fontSize = "16px";
        });
        document
        .getElementById("card-4")
        .addEventListener("click", async function () {
          const cardTitle = document.querySelector(".card-title3");
          cardTitle.innerHTML = `"${quote.quote}"<br>- ${quote.author}`;
          cardTitle.style.fontSize = "16px";
        });
        document
        .getElementById("card-5")
        .addEventListener("click", async function () {
          const cardTitle = document.querySelector(".card-title4");
          cardTitle.innerHTML = `"${quote.quote}"<br>- ${quote.author}`;
          cardTitle.style.fontSize = "16px";
        });
        document
        .getElementById("card-6")
        .addEventListener("click", async function () {
          const cardTitle = document.querySelector(".card-title5");
          cardTitle.innerHTML = `"${quote.quote}"<br>- ${quote.author}`;
          cardTitle.style.fontSize = "16px";
        });
        document
        .getElementById("card-7")
        .addEventListener("click", async function () {
          const cardTitle = document.querySelector(".card-title6");
          cardTitle.innerHTML = `"${quote.quote}"<br>- ${quote.author}`;
          cardTitle.style.fontSize = "16px";
        });
        document
        .getElementById("card-8")
        .addEventListener("click", async function () {
          const cardTitle = document.querySelector(".card-title7");
          cardTitle.innerHTML = `"${quote.quote}"<br>- ${quote.author}`;
          cardTitle.style.fontSize = "16px";
        });
        document
        .getElementById("card-9")
        .addEventListener("click", async function () {
          const cardTitle = document.querySelector(".card-title8");
          cardTitle.innerHTML = `"${quote.quote}"<br>- ${quote.author}`;
          cardTitle.style.fontSize = "16px";
        });
    }
  );
});

const Cv = document.getElementById("card-1");
Cv