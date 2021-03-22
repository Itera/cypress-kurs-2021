# Test automation with Cypress

Welcome to our test automation workshop! During this course you will learn the advantages of using Cypress, fundamental concepts and commands, and the value of test automation with regards to its coverage, response time, and efficiency.  By the end of this evening, we hope you attained both skill and knowledge on how you can properly test any web pages using automation with the Cypress framework. 

## Prerequisites 
Before you start working with Cypress, you will need to have two things in place: 
- [Node](https://nodejs.org/en/) (version 10 or higher)
- An IDE
- Go through our [Windows](https://github.com/Itera/cypress-kurs-navet-2021/tree/main/Windows%20Installation%20Guide) or [Mac](https://github.com/Itera/cypress-kurs-navet-2021/tree/main/Mac%20Installation%20Guide) installation guide

## Ensure the test runner is working as intended
In a command prompt, navigate to your Cypress folder and type in 
```
npx cypress open
```
The Cypress test runner will - after a while - pop up. Ensure that you see example files under the 'examples' folder and that you're able to execute Cypress by clicking on one of them, a new browser window should pop up with the message that the windows is being controlled by software for automated testing. The test-suite should then start running.

![Testrunner](https://i.imgur.com/4oWmoAY.png)

## Course information

This course has three tasks. For all three tasks you will create cypress tests for the the this webpage [https://jira-clone.mad.itera.no/project/board](https://jira-clone.mad.itera.no/project/board). This application is inspired by the issue tracking application jira. 

### Tasks Overview
The tasks are separated into three different parts. Each part has its own Readme file under the `__tasks__`.

👉 Tip: If you are stuck, there is a separate `__solutions__` folder. We recommend trying yourself or asking us for help before cheating!

**Task 1 goals:**
- You will create your first testcase and learn the basics of cypress.

**Task 2 goals:**
- This part has a section for you to read that explains some core concepts about test automation and cypress. You will aslo learn how to crate custom cypress commands. 

**Task 3 goals:**
- Learn about how to structure and organize multiple cypress tests. This task is the core of the course. 

**Completed all the parts and eager for more? 💪**
See the readme in the folder `ekstra_tasks` under `__tasks__`
