/// <reference types="cypress" />

import FakeUser from './fakeUser'

describe('Titan Eye Plus', () => {
  it('book a free eye test', () => {
    const fakeUser = new FakeUser()

    cy.visit('https://www.titaneyeplus.com/free-eye-test')
    cy.get('[name=full_name]').type(fakeUser.fullName)
    cy.get('[name=email_id][class=form_textbox__1_P35]').type(fakeUser.emailId)
    cy.get('[name=age]').type(fakeUser.age)
    cy.get('[name=mobile_no]').type(fakeUser.mobileNo)
    cy.get('[name=pin_code]').type('721304')
    if (Math.random() < 0.1) {
      cy.get('[name=is_checked]').check()
    }

    // // shoot
    cy.contains('Book Free Eye Test').click()

    cy.contains('Confirmation').should('be.visible')
  })
})
