const fs = require('fs');
const inquirer = require('inquirer');

// array of questions
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter instructions for your app installation',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide your applications usage instructions',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution instructions for other users',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter instructions for application testing',
  },
  {
    type: 'list',
    name: 'license',
    choices: ["Apache 2.0", "Unilicense", "MIT", "Boost Software License", "IBM Public License", "none"],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter github username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your preferred point of contact email address',
  },
];

// Function to generate the content of the README file based on user responses
function generateReadme(answers) {
  // grab the user's responses
  const {
    projectTitle,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    githubUsername,
    email,
  } = answers;

  // Generate the README content using template literals
  const readmeContent = `
# ${projectTitle}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license} license.

## Contributing
${contributing}

## Tests
${tests}

## Questions
For any questions or inquiries, please reach out to me via GitHub or email:

GitHub: [${githubUsername}](https://github.com/${githubUsername})

Email: ${email}
`;

  return readmeContent;
}

// Function to write the README content to a file
function writeToFile(fileName, content) {
  fs.writeFile(fileName, content, (error) => {
    if (error) {
      console.error('Error writing to file:', error);
    } else {
      console.log('README file generated successfully!');
    }
  });
}

// Prompt the user with the questions
inquirer.prompt(questions)
  .then((answers) => {
    console.log('User responses:', answers);
    // Generate README or perform other operations based on the responses

    // Generate the README content
    const readmeContent = generateReadme(answers);

    // Write the README content to a file
    writeToFile('README.md', readmeContent);
  })
  .catch((error) => {
    // any errors that occur during the prompt
    console.error(error);
  });


