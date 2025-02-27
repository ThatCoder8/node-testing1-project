const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(input)
    expect(input).toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }, { integer: -5 }]
    const expected = 3
    const actual = utils.findLargestInteger(input)
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  })
  
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3)
  })
  
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown() // first call
    expect(counter.countDown()).toBe(2) // second call
  })
  
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown() // 3
    counter.countDown() // 2
    counter.countDown() // 1
    expect(counter.countDown()).toBe(0) // reached zero
    expect(counter.countDown()).toBe(0) // stays at zero
    expect(counter.countDown()).toBe(0) // stays at zero
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe('summer')
  })
  
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next() // first call
    expect(seasons.next()).toBe('fall')
  })
  
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next() // first call
    seasons.next() // second call
    expect(seasons.next()).toBe('winter')
  })
  
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next() // first call
    seasons.next() // second call
    seasons.next() // third call
    expect(seasons.next()).toBe('spring')
  })
  
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next() // first call - summer
    seasons.next() // second call - fall
    seasons.next() // third call - winter
    seasons.next() // fourth call - spring
    expect(seasons.next()).toBe('summer')
  })
  
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    // 40 % 4 = 0, which corresponds to spring (after calling 39 times)
    for (let i = 0; i < 39; i++) {
      seasons.next()
    }
    expect(seasons.next()).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  
  test('[15] the car has the correct initial properties', () => {
    expect(focus.name).toBe('focus')
    expect(focus.tankSize).toBe(20)
    expect(focus.mpg).toBe(30)
    expect(focus.tank).toBe(0)
    expect(focus.mileage).toBe(0)
  })
  
  test('[16] fillTank returns the number of gallons needed to fill the tank', () => {
    expect(focus.fillTank()).toBe(20)
    focus.tank = 5
    expect(focus.fillTank()).toBe(15)
  })
  
  test('[17] fillTank fills the tank to capacity', () => {
    focus.fillTank()
    expect(focus.tank).toBe(20)
  })
  
  test('[18] drive returns the actual distance driven', () => {
    focus.fillTank()
    expect(focus.drive(600)).toBe(600)
    expect(focus.drive(100)).toBe(0) // can't drive, tank is empty
  })
  
  test('[19] drive increases the mileage by the actual distance driven', () => {
    focus.fillTank()
    focus.drive(300)
    expect(focus.mileage).toBe(300)
    // With 10 gallons left and 30 MPG, can only drive 300 more miles
    focus.drive(300) // Drive only what's possible with remaining fuel
    expect(focus.mileage).toBe(600)
  })
  
  test('[20] drive decreases the amount of gas in the tank', () => {
    focus.fillTank()
    focus.drive(30) // Should use 1 gallon
    expect(focus.tank).toBe(19)
    focus.drive(300) // Should use 10 gallons
    expect(focus.tank).toBe(9)
  })
  
  test('[21] car can only drive until the tank is empty', () => {
    focus.fillTank() // 20 gallons
    expect(focus.drive(700)).toBe(600) // can drive only 600 miles with 20 gallons
    expect(focus.tank).toBe(0)
    expect(focus.mileage).toBe(600)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
