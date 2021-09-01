/* global d3:writable*/
'use strict';

let states = document.getElementById('state');
let cities = document.getElementById('city');
// creating an event listener for the text boxes
states.addEventListener('input', loadData);

// initializing variables to store data
let allStates = {};
let allLandfills = [];
// function to load and reformat data into a correct form to put into the html doc
function loadData() {
  // fetching from external csv data in data folder
  d3.csv("data/waste_landfills.csv")
  .then(function(data) {
    // looping through data to format state and city data correctly
    for (const item in data) {
      if (data[item]["LSTATE"] != undefined) {
        if (!(data[item]["LSTATE"] in allStates)) {
          allStates[data[item]["LSTATE"]] = [];
        }
        let eachCity = {};
        eachCity["cityName"] = data[item]["LCITY"];
        eachCity["landfillName"] = data[item]["NAME"];
        eachCity["address"] = data[item]["LADDR"];
        eachCity["state"] = data[item]["LSTATE"];
        eachCity["zipcode"] = data[item]["LZIP"];
        if (!allLandfills.includes(eachCity)) {
          allLandfills.push(eachCity);
        }
        if (!allStates[data[item]["LSTATE"]].includes(data[item]["LCITY"])) {
          allStates[data[item]["LSTATE"]].push(data[item]["LCITY"]);
        }
      }
    }
    // adding data to the correct elements in the html
    for (const currState in allStates) {
      let stateOption = document.createElement("option");
      stateOption.value = currState;
      stateOption.innerHTML = currState;
      states.appendChild(stateOption);
    }
    while (cities.firstChild) {
      cities.removeChild(cities.firstChild);
    }
    let currStateValue = document.getElementById('state').value;
    for (const currCity in allStates[currStateValue]) {
      let cityOption = document.createElement("option");
      cityOption.value = allStates[currStateValue][currCity];
      cityOption.innerHTML = allStates[currStateValue][currCity];
      cities.appendChild(cityOption);
    }
  })
  // catch function in case there is an error fetching the data
  .catch(function(error) {
    alert("Unable to fetch the data ",error);
  });
}
loadData();

let click = document.getElementById('clickme');
// event listener to when the user wants to see the data
click.addEventListener("click", function(){
    showData(allLandfills);
}, false);

// function to show data of all the landfills on a button click
function showData(allLandfills) {
  let intro = document.createElement("p");
  let tablewrap = document.getElementById('displayinfo');

  while (tablewrap.firstChild) {
    tablewrap.removeChild(tablewrap.firstChild);
  }
  // adding the html needed when the user clicks the button to display data
  intro.innerHTML = "Waste Landfill Near You:"
  tablewrap.appendChild(intro);
  // parsing through all data to return correct data for the user
  for (const currLandfill in allLandfills) {
    // finds correct data and breaks from loop to return it
    if (allLandfills[currLandfill]['cityName'] == cities.value && allLandfills[currLandfill]['state'] == states.value) {
      let name = document.createElement("p");
      name.innerHTML = "Name: " + allLandfills[currLandfill]['landfillName'];
      tablewrap.appendChild(name);

      let address = document.createElement("p");
      address.innerHTML = "Address: " + allLandfills[currLandfill]['address'];
      tablewrap.appendChild(address);

      let location = document.createElement("p");
      location.innerHTML = "City, State, Zipcode: " +
                            allLandfills[currLandfill]['cityName'] + ", " +
                            allLandfills[currLandfill]['state'] + ", " +
                            allLandfills[currLandfill]['zipcode'];
      tablewrap.appendChild(location);
      tablewrap.style.fontSize = "1.4rem";
      tablewrap.style.color = "black";
      tablewrap.style.border = "5px solid white";
      tablewrap.style.float = "right";
      break
    }
  }
  tablewrap.classList.toggle('placeholder');
}
