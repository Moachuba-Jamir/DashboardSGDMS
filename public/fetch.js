export function fetchData() {
  // fetching data from the server
  const server = "https://backend-for-sgdms-1.onrender.com/";
  const getBins = "https://backend-for-sgdms-1.onrender.com/bins";
  const updateDriver = "https://backend-for-sgdms-1.onrender.com/updateDriver";
  // const updateDriver = "http://localhost:3000/updateDriver";

  const originalCard = document.querySelector(".card");
  const dupCards = document.querySelector(".dupCards");

  var percent = document.querySelector(".progressNotify");
  var noOfBins, bins;
  var isClicked = false;

  fetch(updateDriver)
    .then((res) => {
      if (!res.ok) {
        throw new Error("could not fetch the bins data from the database");
      }
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);

      // Handle bins data
      const bins = data.bins[0].myBins;
      const noOfBins = bins.length;

      // Handle drivers data
      const drivers = data.updatedDriver;

      for (let i = 0; i < noOfBins; i++) {
        var newCard = originalCard.cloneNode(true);
        newCard.style.display = "block";

        var location = newCard.querySelector(".cardHeader1");
        location.innerHTML = bins[i].location;

        var id = newCard.querySelector(".id");
        id.innerHTML = `Bin-Id : ${bins[i].id}`;

        var nameNew = newCard.querySelector(".name");
        var numberNew = newCard.querySelector(".number");

        // Find the corresponding driver for this bin (for home smart bins)
        const driver = drivers.find((d) => d.id === bins[i].id);
        if (driver) {
          nameNew.innerHTML = driver.driverName;
          numberNew.innerHTML = driver.Phone;
        } else {
          nameNew.innerHTML = "No assigned driver";
          numberNew.innerHTML = "N/A";
        }
        // console.log(`FOr drivers ${JSON.stringify(drivers, null, 2)}`);

        newCard.setAttribute("data-id", bins[i].id);
        var buttons = newCard.querySelector(".notifyBtn");
        buttons.onclick = () => {
          var notificationBody = document.querySelector(".notificationBody");
          console.log(notificationBody);
          waNotify.play();
          notificationBody.classList.remove("fade-out");
          notificationBody.classList.add("fade-in");
          notificationBody.style.display = "block";
          setTimeout(() => {
            notificationBody.classList.remove("fade-in");
            notificationBody.classList.add("fade-out");
            notificationBody.style.display = "none";
          }, 5000);
          console.log("A button has been pressed");
        };

        var btnUpdate = newCard.querySelector(".btnUpdate");
        if (btnUpdate) {
          btnUpdate.addEventListener("click", (event) => {
            // Get the card that was clicked
            const card = event.currentTarget.closest(".card");
            const driverId = card.getAttribute("data-id");
            const form = card.querySelector(".formContainer");

            console.log("This is my card id " + driverId);

            // Get form data from the card
            const nameInput = card.querySelector('input[name="name"]').value;
            const numberInput = card.querySelector(
              'input[name="number"]'
            ).value;
            if (nameInput == "" || numberInput == "") {
              alert("Please enter a valid name and number!");
            } else {
              // Send the data via Fetch API
              fetch(updateDriver, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  driverId,
                  name: nameInput,
                  number: numberInput,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  // Updating the current card
                  var updatedName = card.querySelector(".name");
                  var updatedNumber = card.querySelector(".number");
                  updatedName.innerHTML = nameInput;
                  updatedNumber.innerHTML = numberInput;
                  let name1 = document.querySelector(".name1");
                  let name2 = document.querySelector(".name2");
                  let name3 = document.querySelector(".name3");
                  let name4 = document.querySelector(".name4");
                  let name5 = document.querySelector(".name5");

                  let driverNames = [name1, name2, name3, name4, name5];

                  for (let i = 0; i < data.updatedDriver.length; i++) {
                    driverNames[i].innerHTML = data.updatedDriver[i].driverName;
                  }
                })
                .catch((error) => console.error("Error:", error));
              form.reset();
              // Notify the server to fetch the updated details again
              fetch(server, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                })
                .catch((err) => console.log(`Error fetching server: ${err}`));

              var editDiv = event.currentTarget
                .closest(".card")
                .querySelector(".editContainer");
              editDiv.style.display = "none";
              editDiv.classList.remove("fade-out");
            }
          });
        }

        var mapBtn = newCard.querySelector(".mapBtn");
        mapBtn.onclick = () => {
          var mapClick = document.getElementById("mapClick");
          mapClick.play();
          var myMap = document.querySelector(".mapFrame");
          var mapLocation = document.getElementById("mapName");
          var mapId = document.getElementById("mapId");
          myMap.src = bins[i].link;
          mapLocation.innerHTML = bins[i].location;
          mapId.innerHTML = bins[i].id;
        };

        newCard.querySelector(".edit").addEventListener("click", (event) => {
          var editDiv = event.currentTarget
            .closest(".card")
            .querySelector(".editContainer");
          if (!isClicked) {
            isClicked = true;
            editDiv.style.display = "block";
            editDiv.classList.add("fade-in1");
          } else {
            isClicked = false;
            editDiv.style.display = "none";
            editDiv.classList.remove("fade-in1");
          }
        });
        dupCards.appendChild(newCard);
      }
      // Update driver names in the sidebar or wherever they are displayed
      let driverNames = [
        document.querySelector(".name1"),
        document.querySelector(".name2"),
        document.querySelector(".name3"),
        document.querySelector(".name4"),
        document.querySelector(".name5"),
      ];

      drivers.forEach((driver, index) => {
        if (driverNames[index]) {
          driverNames[index].innerHTML = driver.driverName;
        }
      });
    })
    .catch((err) => {
      console.log("something went wrong while fetching the endpoint. " + err);
    });
}