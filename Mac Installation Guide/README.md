# Cypress Mac Installation Guide

In this guide we will cover how to install Cypress onto your Mac via npm, which supports [Intelligent Code Completion](https://docs.cypress.io/guides/tooling/intelligent-code-completion.html#Set-up-in-your-Dev-Environment), thus makes it easier to write Cypress tests. 

## 1. Install Node
Cypress requires Node.js version 12 or above. Download the latest version of Node [here](https://nodejs.org/en/)

![Node](https://i.imgur.com/7OnS70e.png)

Open the downloaded *.pkg* file and go through the installation wizard.

## 2. Create a project folder
Open the *Finder* application and nagivate to a plce of your choosing. For example, your desktop. Create a new folder for this workshop, e.g. "Itera Cypress Workshop":

![Folder](https://i.imgur.com/9u2sOiE.png)

## 3. Open the project folder in your terminal
- [Open](https://www.makeuseof.com/open-terminal-on-mac/) the terminal app
 - Type 'cd ' - include the trailing space - and leave it at that
 - Click-and-drag the project folder from the *Finder* app, into the *Terminal* app. This should add the project folder's path to the terminal *after* 'cd '. 
 - Type *pwd*and press ENTER/RETURN to verify that your terminal is in the correct folder, the terminals' output should match the project folder's path. For example /Users/username/Desktop/Itera\ Cypress\ Workshop

![Terminal Mac](https://i.imgur.com/Zsx4oiQ.png)

## 4. Initialize your project
- Type 'npm init' in your terminal and press ENTER/RETURN, the current directory of your terminal should be the project folder
- You will be prompted to write a name for the project, type in an url friendly name, e.g. itera-cypress-workshop, and press ENTER/RETURN
- Press ENTER/RETURN without typing anything on the remaining prompts/questions, default values will be used.

![Project Initialization Mac](https://i.imgur.com/zXn8g2w.png)
- Verify that a package.json file has been created in your project folder. Its content should be the same as the output in your terminal:
 
![Mac Package.json](https://i.imgur.com/ypZ4ECz.png)

## Installation
Type 'npm install cypress' in your terminal and press ENTER/RETURN, the directory in the terminal must be the project folder from the previous steps. After the installation, verify that the package.json file has been updated with Cypress listed as a dependency:

![Package.json post installation](https://i.imgur.com/vNhw3C7.png)

Finally, verify that a node_modules folder was created in your project folder:

![Node_modules Mac](https://i.imgur.com/kN0Wq5I.png)

Congratulations, you have now successfully installed Cypress! 🎉