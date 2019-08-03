// THIS IS WHERE THE REQUISITE DATA STARTS

const Person1 = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "homeworld": "Tatooine",
    "films": [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith",
      "The Force Awakens"
    ],
    "species": [
      "Human"
    ],
    "vehicles": [
      {
        "name": "Snowspeeder",
        "model": "t-47 airspeeder",
        "manufacturer": "Incom corporation",
        "cost_in_credits": null,
        "length": "4.5",
        "max_atmosphering_speed": "650",
        "crew": 2,
        "passengers": 0,
        "cargo_capacity": "10"
      },
      {
        "name": "Imperial Speeder Bike",
        "model": "74-Z speeder bike",
        "manufacturer": "Aratech Repulsor Company",
        "cost_in_credits": 8000,
        "length": "3",
        "max_atmosphering_speed": "360",
        "crew": 1,
        "passengers": 1,
        "cargo_capacity": "4"
      }
    ],
    "starships": [
      {
        "name": "X-wing",
        "model": "T-65 X-wing",
        "manufacturer": "Incom Corporation",
        "cost_in_credits": 149999,
        "length": "12.5",
        "max_atmosphering_speed": "1050",
        "crew": 1,
        "passengers": 0,
        "cargo_capacity": "110",
        "consumables": "1 week",
        "hyperdrive_rating": "1.0",
        "MGLT": "100",
        "starship_class": "Starfighter"
      },
      {
        "name": "Imperial shuttle",
        "model": "Lambda-class T-4a shuttle",
        "manufacturer": "Sienar Fleet Systems",
        "cost_in_credits": 240000,
        "length": "20",
        "max_atmosphering_speed": "850",
        "crew": 6,
        "passengers": 20,
        "cargo_capacity": "80000",
        "consumables": "2 months",
        "hyperdrive_rating": "1.0",
        "MGLT": "50",
        "starship_class": "Armed government transport"
      }
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.co/api/people/1/"
}

const Person2 = {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female",
    "homeworld": "Alderaan",
    "films": [
        "A New Hope",
        "The Empire Strikes Back",
        "Return of the Jedi",
        "Revenge of the Sith",
        "The Force Awakens"
    ],
    "species": [
        "Human"
    ],
    "vehicles": [
      {
        "name": "Imperial Speeder Bike",
        "model": "74-Z speeder bike",
        "manufacturer": "Aratech Repulsor Company",
        "cost_in_credits": 8000,
        "length": "3",
        "max_atmosphering_speed": "360",
        "crew": 1,
        "passengers": 1,
        "cargo_capacity": "4"
      }
    ],
    "starships": [],
    "created": "2014-12-10T15:20:09.791000Z",
    "edited": "2014-12-20T21:17:50.315000Z",
    "url": "https://swapi.co/api/people/5/"
}

const Person3 = {
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hair_color": "auburn, white",
    "skin_color": "fair",
    "eye_color": "blue-gray",
    "birth_year": "57BBY",
    "gender": "male",
    "homeworld": "Stewjon",
    "films": [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "The Phantom Menace",
      "Attack of the Clones",
      "Revenge of the Sith"
    ],
    "species": [
      "Human"
    ],
    "vehicles": [
      {
        "name": "Tribubble bongo",
        "model": "Tribubble bongo",
        "manufacturer": "Otoh Gunga Bongameken Cooperative",
        "cost_in_credits": null,
        "length": "15",
        "max_atmosphering_speed": "85",
        "crew": 1,
        "passengers": 2,
        "cargo_capacity": "1600"
      }
    ],
    "starships": [
      {
        "name": "Jedi starfighter",
        "model": "Delta-7 Aethersprite-class interceptor",
        "manufacturer": "Kuat Systems Engineering",
        "cost_in_credits": 180000,
        "length": "8",
        "max_atmosphering_speed": "1150",
        "crew": 1,
        "passengers": 0,
        "cargo_capacity": "60",
        "consumables": "7 days"
      },
      {
        "name": "Trade Federation cruiser",
        "model": "Providence-class carrier/destroyer",
        "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
        "cost_in_credits": 125000000,
        "length": "1088",
        "max_atmosphering_speed": "1050",
        "crew": 600,
        "passengers": 48247,
        "cargo_capacity": "50000000",
        "consumables": "4 years"
      },
      {
        "name": "Naboo star skiff",
        "model": "J-type star skiff",
        "manufacturer": "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated",
        "cost_in_credits": null,
        "length": "29.2",
        "max_atmosphering_speed": "1050",
        "crew": 3,
        "passengers": 3,
        "cargo_capacity": null,
        "consumables": null
      },
      {
        "name": "Jedi Interceptor",
        "model": "Eta-2 Actis-class light interceptor",
        "manufacturer": "Kuat Systems Engineering",
        "cost_in_credits": 320000,
        "length": "5.47",
        "max_atmosphering_speed": "1500",
        "crew": 1,
        "passengers": 0,
        "cargo_capacity": "60",
        "consumables": "2 days"
      },
      {
        "name": "Belbullab-22 starfighter",
        "model": "Belbullab-22 starfighter",
        "manufacturer": "Feethan Ottraw Scalable Assemblies",
        "cost_in_credits": 168000,
        "length": "6.71",
        "max_atmosphering_speed": "1100",
        "crew": 1,
        "passengers": 0,
        "cargo_capacity": "140",
        "consumables": "7 days"
      }
    ],
    "created": "2014-12-10T16:16:29.192000Z",
    "edited": "2014-12-20T21:17:50.325000Z",
    "url": "https://swapi.co/api/people/10/"
}


/*
* ### Challenge `getName`
* MVP Challenge 🤓
* 
* @instructions
* Must return input object's `name` property.
*
* Sample data expected output: `Luke Skywalker`
*/
function getName(character) {
// ⭐️ Example Solution Provided For First Function ⭐️
return character.name
}

/**
 * ### Challenge `getFilmCount`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount(character) {
// TODO: Add your code inside the functions (others below).
return character.films.length
}

/**
 * ### Challenge `getFirstStarshipName`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return first starship's name from `starships` property.
 * If length is 0. Return 'none'
 */
function getFirstStarshipName(character) {
// TODO: Add your code here.
if (character.starships.length === 0) {
    return "none"
} else {
    return character.starships[0].name
}

}

/**
 * ### Challenge `getSummary`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
// TODO: Add your code here.
return `${character.name}, ${character.height}cm, ${character.mass}kg. Featured in ${character.films.length} films`
}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
 */
function getVehiclesCostInCreditsSumTotal(character) {
// TODO: Add your code here.
return character.vehicles.reduce((total, credits) => {
    return total + credits.cost_in_credits
}, 0)
}

/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
 */
function getStarshipPassengerAndCrewSumTotal(character) {
// TODO: Add your code here.
let passengers = character.starships.reduce((total, passengers) => {
    return total + passengers.passengers
}, 0)
let crew = character.starships.reduce((total, crew) => {
    return total + crew.crew
}, 0)
return passengers + crew
}

/**
 * ### Challenge `getNthFilm`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
 */
function getNthFilm(character, filmNumber) {
// TODO: Add your code here.
if (filmNumber >= 1 && filmNumber <= 3) {
    return character.films[filmNumber - 1]
} else {
    return "There are only THREE (3) Star Wars films, everything else is fan fiction"
}
}

// Console log for Question 1
console.log(getName(Person1)) // Luke Skywalker
console.log(getName(Person2)) // Leia Organa
console.log(getName(Person3)) // Obi-Wan Kenobi

// Console log for Question 2
console.log(getFilmCount(Person1)) // 5
console.log(getFilmCount(Person2)) // 5
console.log(getFilmCount(Person3)) // 6

// Console log for Question 3
console.log(getFirstStarshipName(Person1)) // X-Wing
console.log(getFirstStarshipName(Person2)) // None
console.log(getFirstStarshipName(Person3)) // Jedi Starfighter

// Console log for Question 4
console.log(getSummary(Person1)) // Luke Skywalker, 172cm, 77kg. Featured in 5 films.
console.log(getSummary(Person2)) // Leia Organa, 150cm, 49kg. Featured in 5 films.
console.log(getSummary(Person3)) // Obi-Wan Kenobi, 182cm, 77kg. Featured in 6 films.

// Console log for Question 5
console.log(getVehiclesCostInCreditsSumTotal(Person1)) // 8000
console.log(getVehiclesCostInCreditsSumTotal(Person2)) // 8000
console.log(getVehiclesCostInCreditsSumTotal(Person3)) // 0

// Console log for Question 6
console.log(getStarshipPassengerAndCrewSumTotal(Person1)) // 27
console.log(getStarshipPassengerAndCrewSumTotal(Person2)) // 0
console.log(getStarshipPassengerAndCrewSumTotal(Person3)) // 48856

// Console log for Question 7
console.log(getNthFilm(Person1, 1)) // A New Hope
console.log(getNthFilm(Person2, 2)) // The Empire Strikes Back
console.log(getNthFilm(Person3, 6)) // There are only THREE (3) Star Wars films, everything else is fan fiction)