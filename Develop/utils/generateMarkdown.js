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
function generateMarkdown(data) {
  return `
  ${Response.name}
  ${Response.gname}
  ${Response.description}
  ${Response.technologies}
  ${Response.glink}
  ${Response.installation}
  ${Response.instructions}
  ${Response.licenses}
  ${Response.test}
  ${Response.email}
  ${Response.create}
  `;
}

module.exports = generateMarkdown;
