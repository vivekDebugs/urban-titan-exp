import { faker } from '@faker-js/faker/locale/en_IN'

class FakeUser {
  constructor() {
    this.fullName = this.generateFakeName()
    this.age = this.generateFakeAge()
    this.emailId = this.generateFakeEmailId()
    this.mobileNo = this.generateFakeMobileNo()
  }

  generateFakeName() {
    return faker.person.firstName() + ' ' + faker.person.lastName()
  }

  generateFakeEmailId() {
    const parts = this.fullName.toLowerCase().split(' ')
    const firstName = parts[0]
    const lastName = parts[1]
    const fakeEmail =
      firstName + '.' + lastName + '@' + this.getRandomEmailDomain()
    return fakeEmail
  }

  generateFakeAge() {
    return this.getRandomNumberInRange(18, 50)
  }

  generateFakeMobileNo() {
    const startingDigits = ['9', '8', '7', '6']
    const _9Digits = Math.floor(Math.random() * Math.pow(10, 9))
    const startingDigit =
      startingDigits[this.getRandomNumberInRange(0, startingDigits.length - 1)]
    return startingDigit + _9Digits
  }

  getRandomEmailDomain() {
    const emailDomains = ['gmail.com', 'outlook.com', 'yahoo.com']
    const randomIndex = this.getRandomNumberInRange(0, emailDomains.length - 1)
    return emailDomains[randomIndex]
  }

  getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
}

export default FakeUser
