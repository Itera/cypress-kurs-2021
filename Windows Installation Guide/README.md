# Cypress Windows Installation Guide

In this guide we will cover how to install Cypress onto your windows machine via npm, which supports [Intelligent Code Completion](https://docs.cypress.io/guides/tooling/intelligent-code-completion.html#Set-up-in-your-Dev-Environment), thus makes it easier to write Cypress tests. 

Node *(pun)* that Cypress requires Node.js version 12 or above. Download the latest version of Node [here](https://nodejs.org/en/)

![Node](https://i.imgur.com/zIZNiwx.png)

After you've successfully installed Node, open up a command prompt and type in 'node -v' to ensure that Node is correctly installed:
![Cmd node](https://i.imgur.com/W8NWX4c.png)

Create a folder in which you would like the Cypress to be installed. For example, a folder in your directory:
![Directory folder](https://i.imgur.com/SI5GQip.png)

Using your command prompt, navigate to that folder: ![Cmd directory](https://i.imgur.com/qe0BpXR.png)

In the command prompt, run the command 'npm install cypress --save-dev' to install Cypress. Beware that this can take a while! After installation the prompt should look something like this:
![Installation complete](https://i.imgur.com/TJbB6Td.png)

Finally, your folder should have these two elements:
![Final folder structure](https://i.imgur.com/tlUjsGR.png)

Congrats! You have succesfully installed Cypress!