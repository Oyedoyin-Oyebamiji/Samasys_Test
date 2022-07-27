/// <reference types="cypress" />

 
describe('samasys', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so I must tell it to visit our website with the `cy.visit()` command.
    // Since I want to visit the same URL at the start of all our tests,
    // I include it in my beforeEach function so that it runs before each test
    cy.visit('https://samasys.vercel.app/')
  })
    // Since I have sucessfully visited my URL, the next is to test the features on the URL landing page
    // I start with Add Employee
   it('add employees', () => {
    let getEmployeeButton = cy.get('#root > div.app-container > header > nav > div.d-none.d-md-block > ul > li:nth-child(1) > a')
    getEmployeeButton.click()
    // I'm directed to the create page https://samasys.vercel.app/employees/create and required to fill employee details
    cy.get('#fullName').type('Bola Alade').should('have.value', 'Bola Alade')
    //'cy.wait()' slows down the time taken to input employee details into each field
    cy.wait(1000)
    cy.get('#phoneNumber').type('+2348100000000').should('have.value', '+2348100000000')
    cy.wait(1000)
    cy.get('#email').type('bolaalade@mailinator.com').should('have.value', 'bolaalade@mailinator.com')
    cy.wait(1000)
    cy.get('#position').type('Project Manager').should('have.value', 'Project Manager')
    cy.wait(1000)
    cy.get('#salary').type('5000').should('have.value', '5000')
    cy.wait(1000)
    cy.get('#root > div.app-container > main > div > form > button').click()
    cy.wait(10000)
  })
  // I view all employees with
  it('view all employees', () => {
    let getallEmployeeButton = cy.get('#root > div.app-container > header > nav > div.d-none.d-md-block > ul > li:nth-child(2) > a')
    getallEmployeeButton.click()

      let employeePagesArray = cy.get('.pagination > li')
      employeePagesArray.should('have.length', 5)

    //  I visit each page that contains employee details
      cy.get('.container-fluid').find('.profile-card').its('length').should('to.be.greaterThan', 0)
      //'cy.wait()' ensures each page is fully loaded before moving to the next page
      cy.wait(3000)
      cy.get('.pagination > li').eq(1).click()
      cy.get('.container-fluid').find('.profile-card').its('length').should('to.be.greaterThan', 0)
      cy.wait(3000)
      cy.get('.pagination > li').eq(2).click()
      cy.get('.container-fluid').find('.profile-card').its('length').should('to.be.greaterThan', 0)
      cy.wait(3000)
      cy.get('.pagination > li').eq(3).click()
      cy.get('.container-fluid').find('.profile-card').its('length').should('to.be.greaterThan', 0)
      cy.wait(3000)
      cy.get('.pagination > li').eq(4).click()
      cy.get('.container-fluid').find('.profile-card').its('length').should('to.be.greaterThan', 0)
      cy.wait(3000)
 
  })
  // I view individual employee profile with a mocked list of loans for each month.
  it('View individual employee profile', () => {
    let viewindividualEmployeeButton = cy.get('#root > div.app-container > main > div > div > div:nth-child(1)')
    viewindividualEmployeeButton.click()
    cy.wait(5000)
    // I scroll to the bottom of the page to view all of the seleceted employee's details
    cy.scrollTo('bottom')
    cy.get('html')
    cy.wait(3000)
    
  })
  //I delete an employee profile to ascertain that the delete button is clickable
  it('Delete an employee profile', () => {
    let deleteanEmployeeButton = cy.get('#root > div.app-container > main > div > div > div:nth-child(1) > div.action-btns > button:nth-child(2)')
    deleteanEmployeeButton.click()
    cy.wait(5000)


  })
  // I test that Real time errors are displayed while filling the form to create an employee
  //I'm going to fill the form with invalid credentials
  it('add employees negative', () => {
    let getEmployeeButton = cy.get('#root > div.app-container > header > nav > div.d-none.d-md-block > ul > li:nth-child(1) > a')
    getEmployeeButton.click()
    // I'm directed to the create page https://samasys.vercel.app/employees/create and is required to fill employee details
    cy.get('#fullName').type('Bola').should('have.value', 'Bola')
    //'cy.wait()' slows down the time taken to input employee details into each field
    cy.wait(1000)
    cy.get('#phoneNumber').type('abcd').should('have.value', 'abcd')
    cy.wait(1000)
    cy.get('#email').type('bolaalade@mailinator').should('have.value', 'bolaalade@mailinator')
    cy.wait(1000)
    cy.get('#position').type('20').should('have.value', '20')
    cy.wait(1000)
    cy.get('#salary').type('$5000').should('have.value', '$5000')
    cy.wait(1000)
    //cy.get('#root > div.app-container > main > div > form > button').click()
  })
})
