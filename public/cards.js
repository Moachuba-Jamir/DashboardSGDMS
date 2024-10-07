import { fetchData } from "./fetch.js";
import {
  overAllBin,
  driver1,
  driver2,
  driver3,
  driver4,
  driver5,
  totalBins,
} from "./chartOptions.js";

// fetching data from the server
const adminRoute = "https://dglmawjx1pzub.cloudfront.net/adminRoute";
const getBins = "https://dglmawjx1pzub.cloudfront.net/bins";
// const adminRoute = "http://localhost:3000/adminRoute";

// fething content on browser load from the bins endpoint on the backend server
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dglmawjx1pzub.cloudfront.net/dashAdmin/checkLogout")
    .then((response) => response.json())
    .then((data) => {
      if (data.isLoggedOut) {
        // User is logged out, keep them on index.html
        location.href = "./index.html";
      } else {
        // User is logged in, redirect to dashboard
        location.href;
      }
    })
    .catch((err) => {
      console.error("Error checking logout status:", err);
    });

  fetchData();
  const home = document.getElementById("home");
  const driverAnalytics = document.getElementById("analytics");
  const driverContainer = document.querySelector(".driverContainer");
  const analyticsContainer = document.querySelector(".driverAnalticsContainer");
  const homeImg = document.querySelector(".homeImg");
  const analyticsImg = document.querySelector(".analyticsImg");
  homeImg.style.filter = "invert(100%)";
  home.style.boxShadow =
    "rgba(228, 228, 228, 0.112) 15px 13px 38px, rgba(255, 255, 255, 0.236) 0px 15px 12px";
  home.style.borderRadius = "10px";
  home.style.paddingLeft = "5%";

  home.addEventListener("click", () => {
    driverContainer.style.display = "block";
    analyticsContainer.style.display = "none";
    home.style.boxShadow =
      "rgba(228, 228, 228, 0.112) 15px 13px 38px, rgba(255, 255, 255, 0.236) 0px 15px 12px";
    home.style.borderRadius = "10px";
    home.style.paddingLeft = "5%";
    driverAnalytics.style.boxShadow = "";
    driverContainer.classList.add("fade-in2");
    analyticsContainer.classList.remove("fade-in2");
    homeImg.style.filter = "invert(100%)";
    analyticsImg.style.filter = "none";
  });
  document.getElementById("analytics").addEventListener("click", () => {
    driverContainer.style.display = "none";
    analyticsContainer.style.display = "block";
    home.style.boxShadow = "";
    driverAnalytics.style.boxShadow =
      "rgba(228, 228, 228, 0.112) 15px 13px 38px, rgba(255, 255, 255, 0.236) 0px 15px 12px";
    driverAnalytics.style.borderRadius = "10px";
    driverAnalytics.style.paddingLeft = "5%";
    analyticsContainer.classList.add("fade-in2");
    driverContainer.classList.remove("fade-in2");
    analyticsImg.style.filter = "invert(100%)";
    homeImg.style.filter = "none";
  });

  document.querySelector(".logout").addEventListener("click", () => {
    fetch("https://dglmawjx1pzub.cloudfront.net/dashAdmin/logout", {
      method: "POST",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.logout) {
          location.href = "./index.html";
        } else {
          location.href = "./dashboard.html";
        }
      })
      .catch((err) => {
        console.log("there was an error loggin admin user in ", err);
      });
  });

  // for overallbin cleared chart
  var overAllBinClearChart = [];
  var binLocations = [];
  var driverAnaltics = [];
  var totalBinCleared = 0;
  var driverNames = [];

  var chart1 = new ApexCharts(document.querySelector("#chart1"), driver1);
  var chart2 = new ApexCharts(document.querySelector("#chart2"), driver2);
  var chart3 = new ApexCharts(document.querySelector("#chart3"), driver3);
  var chart4 = new ApexCharts(document.querySelector("#chart4"), driver4);
  var chart5 = new ApexCharts(document.querySelector("#chart5"), driver5);
  var chart6 = new ApexCharts(document.querySelector("#chart6"), overAllBin);
  var chart7 = new ApexCharts(document.querySelector("#chart7"), totalBins);

  chart1.render();
  chart2.render();
  chart3.render();
  chart4.render();
  chart5.render();
  chart6.render();
  chart7.render();

  fetch(getBins)
    .then((res) => {
      if (!res.ok) {
        throw new Error("could not fetch the bins data from the database");
      }
      console.log(res);
      return res.json();
    })
    .then((data) => {
      let name1 = document.querySelector(".name1");
      let loc1 = document.querySelector(".loc1");
      let name2 = document.querySelector(".name2");
      let loc2 = document.querySelector(".loc2");
      let name3 = document.querySelector(".name3");
      let loc3 = document.querySelector(".loc3");
      let name4 = document.querySelector(".name4");
      let loc4 = document.querySelector(".loc4");
      let name5 = document.querySelector(".name5");
      let loc5 = document.querySelector(".loc5");

      let noOfBins = data.bins[0].myBins.length;
      // let noOfDrivers = data.drivers.length;

      for (let i = 0; i < noOfBins; i++) {
        overAllBinClearChart.push(data.bins[0].myBins[i].binCleared[2024]);
        binLocations.push(data.bins[0].myBins[i].location);
        driverNames.push(data.drivers[i].driverName);
        console.log(`Driver name: ${data.drivers[i].driverName}`);
        console.log(overAllBinClearChart);
        totalBinCleared += data.bins[0].myBins[i].binCleared[2024];
        driverAnaltics.push(data.drivers[i].analytics[2024]);
      }

      // send the total bin numbers here using fetch
      console.log("Total bin cleared " + totalBinCleared);
      // http://localhost:3000/totalBins
      fetch("https://dglmawjx1pzub.cloudfront.net/totalBins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalBins: totalBinCleared,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("update total bins");
          console.log(data.bins[0].totalBinCleared);
          // udpate the total number of bins cleared chart here
          chart7.updateOptions({
            title: {
              text: data.bins[0].totalBinCleared,
            },
          });
          totalBinCleared = 0;
        });
      chart6.updateSeries([
        {
          name: "Total bins cleared ",
          data: overAllBinClearChart,
        },
      ]);
      // udpate location names on     the x axis
      chart6.updateOptions({
        xaxis: {
          categories: binLocations, // Example categories
        },
      });

      chart1.updateSeries([
        {
          name: "Bin Cleared",
          data: driverAnaltics[0],
        },
      ]);
      chart2.updateSeries([
        {
          name: "Bin Cleared",
          data: driverAnaltics[1],
        },
      ]);
      chart3.updateSeries([
        {
          name: "Bin Cleared",
          data: driverAnaltics[2],
        },
      ]);
      chart4.updateSeries([
        {
          name: "Bin Cleared",
          data: driverAnaltics[3],
        },
      ]);
      chart5.updateSeries([
        {
          name: "Bin Cleared",
          data: driverAnaltics[4],
        },
      ]);

      // console.log(`from driverAnalytics: ${JSON.stringify(driverAnaltics, null, 2)}`);
      // console.log(`My list of drivers: ${JSON.stringify(drivers[0], null, 2)}`);

      // set driver name and location here
      loc1.innerHTML = binLocations[0];
      loc2.innerHTML = binLocations[1];
      loc3.innerHTML = binLocations[2];
      loc4.innerHTML = binLocations[3];
      loc5.innerHTML = binLocations[4];

      name1.innerHTML = driverNames[0];
      name2.innerHTML = driverNames[1];
      name3.innerHTML = driverNames[2];
      name4.innerHTML = driverNames[3];
      name5.innerHTML = driverNames[4];

      console.log(`List of driver names: ${driverNames}`);
    })
    .catch((err) => {
      console.log("something went wrong while fetching the endpoint. " + err);
    });
});

function updateCards() {
  fetch(adminRoute, { cache: "no-store" })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong: " + res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      const esp = data;
      console.dir(`${JSON.stringify(esp, null, 2)}`);
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        const cardId = card.dataset.id;
        const binData = esp[cardId];
        // console.log("THis is from the setintertval : " + cardId);
        var percent = document.querySelector(".progressNotify");
        if (percent.innerHTML == "Bin offline") {
          var button = card.querySelector(".notifyBtn");
          button.disabled = true;
        }

        // if the json obj recieved from the backend has the card id
        // inside the for each card block
        if (esp.hasOwnProperty(cardId)) {
          if (binData !== undefined) {
            const bars = card.querySelector(".progress-bar");
            var button = card.querySelector(".notifyBtn");
            const percentElement = card.querySelector(".progressNotify");
            const cardBg = document.querySelector(".card");
            if (binData <= 20) {
              bars.style.width = `90%`;
              bars.setAttribute("aria-valuenow", "90");
              button.disabled = false;
              percentElement.innerHTML = `90%`;
              bars.classList.add("bg-danger"); // Red color for above 80%
              bars.classList.remove("bg-success");
              bars.classList.remove("bg-warning");
            } else if (binData > 20 && binData < 40) {
              bars.style.width = `60% `;
              bars.setAttribute("aria-valuenow", "60");
              percentElement.innerHTML = `60%`;
              button.disabled = true;
              cardBg.style.background = "rgb(26, 26, 26) !important";
              bars.classList.add("bg-warning"); // Yellow color for 40-60%
              bars.classList.remove("bg-danger"); // Red color for above 80%
              bars.classList.remove("bg-success");
            } else if (binData > 40 && binData < 60) {
              bars.style.width = `40% `;
              bars.setAttribute("aria-valuenow", "40");
              percentElement.innerHTML = `40%`;
              button.disabled = true;
              cardBg.style.background = "rgb(26, 26, 26) !important";
              bars.classList.add("bg-warning"); // Yellow color for 40-60%f
              bars.classList.remove("bg-danger"); // Red color for above 80%
              bars.classList.remove("bg-success");
            } else {
              bars.style.width = `20%`;
              bars.setAttribute("aria-valuenow", "20");
              percentElement.innerHTML = `20%`;
              button.disabled = true;
              cardBg.style.background = "rgb(26, 26, 26) !important";
              bars.classList.remove("bg-warning"); // Yellow color for 40-60%f
              bars.classList.remove("bg-danger"); // Red color for above 80%
              bars.classList.add("bg-success");
            }
          }
        }
      });
    })
    .catch((err) => {
      console.error(
        "There was a problem fetching the current endpoint: " +
          adminRoute +
          " " +
          err
      );
    });
}

setInterval(updateCards, 10000);
