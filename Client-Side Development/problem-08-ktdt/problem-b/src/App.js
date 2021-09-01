import React, { useState } from 'react';

import _ from 'lodash';

function App(prop) {
  let listBreed = Object.keys(_.groupBy(prop.pets, 'breed'));

  const [pets, setPets] = useState(prop.pets);

  const handleAdopt = (name) => {
    let apet = pets.map((pet) => {
      if (pet.name === name) {
        pet.adopted = true;
      }
      return pet;
    });
    setPets(apet);
  }

  return (
    <div>
      <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
            <AboutNav />
            <BreedNav breeds={listBreed}/>
          </div>
          <div id="petList" className="col-9">
            <PetList pets={pets} adoptCallback={handleAdopt}/>
          </div>
        </div>
      </main>
      <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
      </footer>
    </div>
  );
}

export default App;

export function AboutNav() {
  return (
    <div>
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="#/">How to Adopt</a></li>
          <li><a href="#/">Volunteering</a></li>
          <li><a href="#/">Events</a></li>
          <li><a href="#/">Donate</a></li>
          <li><a href="#/">About Us</a></li>
        </ul>
      </nav>
    </div>
  );
}

export function BreedNav(prop) {
  let breeds = prop.breeds.map((breed) => {
    let key = breed + "1";
    let item = <li key={key}><a href="">{breed}</a></li>
    return item;
  });
  return (
    <div>
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">
          {breeds}
        </ul>
      </nav>
    </div>
  );
}

export function PetCard(prop) {
  let displayName = "";
  if (prop.pet) {
    displayName = prop.pet.name;
    if (prop.pet.adopted) {
      displayName += " (Adopted)";
    }
  }
  return (
    <div className="card" onClick={() => (prop.adoptCallback(prop.pet.name))}>
      <img className="card-img-top" src={prop.pet.img} alt={prop.pet.name} />
      <div className="card-body">
        <h3 className="card-title">{displayName}</h3>
        <p className="card-text">{prop.pet.sex} {prop.pet.breed}</p>
      </div>
    </div>
  );
}

export function PetList(prop) {
  let cards = prop.pets.map((pet) => {
    let card = <PetCard key={pet.name} pet={pet} adoptCallback={prop.adoptCallback}/>
    return card;
  });
  return (
    <div>
      <h2>Dogs for Adoption</h2>
      <div className="card-deck">
        {cards}
      </div>
    </div>
  );
}