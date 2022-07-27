const dimensions = require("./dimensions.js")

describe("samasys Responsiveness Automation",() => {
  beforeEach(() => {
    cy.visit('https://samasys.vercel.app/')
  })
// I will be testing the responsiveness of the URL on various screen using the view individual employee profile feature
  it('View individual employee profile', () => {
    let viewindividualEmployeeButton = cy.get('#root > div.app-container > main > div > div > div:nth-child(1)')
    viewindividualEmployeeButton.click()
    cy.wait(5000)
    cy.scrollTo('bottom')
    cy.get('html')
    cy.wait(3000)
  })
// Test responsiveness on Andriod phone Samsung
  it('Samasys Responsiveness Automation = samsunggalaxynote9' , () => {
    cy.viewport(360, 740)
      let viewindividualEmployeeButton = cy.get('#root > div.app-container > main > div > div > div:nth-child(1)')
      viewindividualEmployeeButton.click()
      cy.wait(5000)
      cy.scrollTo('bottom')
      cy.get('html')
      cy.wait(3000)
  })
// Test responsiveness on Notebook
  it('Samasys Responsiveness Automation = tenInch' , () => {
    cy.viewport(1024, 600)
      let viewindividualEmployeeButton = cy.get('#root > div.app-container > main > div > div > div:nth-child(1)')
      viewindividualEmployeeButton.click()
      cy.wait(5000)
      cy.scrollTo('bottom')
      cy.get('html')
      cy.wait(3000)
  })
// Test responsiveness on Apple phone
  it('Samasys Responsiveness Automation = iphone12pro' , () => {
    cy.viewport(390, 844)
      let viewindividualEmployeeButton = cy.get('#root > div.app-container > main > div > div > div:nth-child(1)')
      viewindividualEmployeeButton.click()
      cy.wait(5000)
      cy.scrollTo('bottom')
      cy.get('html')
      cy.wait(3000)
  })
// Test responsiveness on Laptop
  it('Samasys Responsiveness Automation = nineteenInch' , () => {
    cy.viewport(1440, 900)
      let viewindividualEmployeeButton = cy.get('#root > div.app-container > main > div > div > div:nth-child(1)')
      viewindividualEmployeeButton.click()
      cy.wait(10000)
      cy.get('#root > div.app-container > header > nav > div.d-none.d-md-block > ul > li:nth-child(2) > a').click()
  })
})