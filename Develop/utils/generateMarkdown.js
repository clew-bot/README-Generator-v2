// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.realProjectName}
## Description 
${data.realDescription}
## GitHub Name
${data.realGitHubName}
## Installation Process
${data.realInstallation}
## Real World Usage
${data.realUsage}
## Licenses 
${data.realLicense}
## Contributors
${data.realContributors}
## FAQ
${data.realFAQ}
`;
}

module.exports = generateMarkdown;
