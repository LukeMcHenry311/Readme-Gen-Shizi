// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  ## ${response.name + "'s " + response.title}

  ## Table of Contents
  * [Github-Username](#github-username)
  * [Description](#description)
  * [Technologies Applied](#technologies)
  * [Github-link](#github-link)
  * [Deployed-Application](#deployed-application)
  * [Installation](#installation)
  * [Instructions](#instructions)
  * [Licenses](#licenses)
  * [Test-Instructions](#test-instructions)
  * [Email](#email)
  * [Collaborations](#collaborations)

  ## Github-Username
  ${response.gname}
  ## Description
  ${response.description}
  ## Technologies
  ${response.technologies}
  ## Github-link
  ${response.glink}
  ## Deployed-Application
  ${response.deployedurl}
  ## Installation
  ${response.installation}
  ## Instructions
  ${response.instructions}
  ## Licenses
  ${response.licenses}
  ## Test-Instructions
  ${response.test}
  ## Email
  ${response.email}
  ## Collaborations
  ${response.create}
  `;
}

module.exports = generateMarkdown;
