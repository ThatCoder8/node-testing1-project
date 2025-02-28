/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  const result = {};
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      result[key] = obj[key].trim();
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = obj[key].trim();
    }
  }
  return obj;
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  let largest = Number.NEGATIVE_INFINITY;
  for (const obj of integers) {
    if (obj.integer > largest) {
      largest = obj.integer;
    }
  }
  return largest;
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    this.count = initialNumber;
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    const current = this.count;
    this.count = Math.max(0, this.count - 1);
    return current;
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    this.seasons = ['summer', 'fall', 'winter', 'spring'];
    this.currentIndex = 0;
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    const currentSeason = this.seasons[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % 4;
    return currentSeason;
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.name = name;
    this.tankSize = tankSize;
    this.mpg = mpg;
    this.tank = 0; // Car's tank starts empty
    this.odometer = 0; // For external tests
    this.mileage = 0; // For internal tests
  }

  /**
   * [Exercise 6B] Car.prototype.fillTank fills the tank to capacity
   * @returns {number} - the number of gallons required to fill the tank
   */
  fillTank() {
    const gallonsToFill = this.tankSize - this.tank;
    this.tank = this.tankSize;
    return gallonsToFill;
  }

  /**
   * Refuels the car with specified gallons or fills the tank if no amount specified
   * @param {number} gallons - gallons of gas to add (optional)
   * @returns {number} - gallons added to the tank
   */
  refuel(gallons) {
    if (gallons === undefined) {
      return this.fillTank();
    }
    
    const spaceInTank = this.tankSize - this.tank;
    const gallonsToAdd = Math.min(gallons, spaceInTank);
    this.tank += gallonsToAdd;
    return gallonsToAdd;
  }

  /**
   * [Exercise 6C] Car.prototype.drive adds miles to the car
   * @param {number} distance - the distance we want the car to drive
   * @returns {number} - the actual distance driven
   */
  drive(distance) {
    // If tank is empty, can't drive
    if (this.tank <= 0) {
      return 0; // Return 0 distance driven if tank is empty
    }
    
    // Calculate maximum distance possible with current fuel
    const maxDistance = this.tank * this.mpg;
    
    // The car will drive the shorter of desired distance or max possible distance
    const actualDistance = Math.min(distance, maxDistance);
    
    // Calculate gas used (in gallons)
    const gallonsUsed = actualDistance / this.mpg;
    
    // Update the tank by subtracting gas used
    this.tank = Math.max(0, this.tank - gallonsUsed);
    
    // Update both odometer and mileage with distance traveled
    this.odometer += actualDistance;
    this.mileage += actualDistance;
    
    // Return the actual distance driven
    return actualDistance;
  }
}

/**
 * [Exercise 7] isEvenNumberAsync checks if a number is even asynchronously
 * @param {number} num - the number to check
 * @returns {Promise<boolean>} - resolves to true if number is even, false otherwise
 */
function isEvenNumberAsync(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num % 2 === 0);
    }, 100);
  });
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  Counter,
  Seasons,
  Car,
  isEvenNumberAsync
};