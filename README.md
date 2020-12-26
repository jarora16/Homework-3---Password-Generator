# Homework-3---Password-Generator

Task:
This week’s homework requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. 
This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. 
It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

USER STORY:
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Acceptance Criteria:
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

MY STORY:
Prompt the user for the length of the password for the generator
Prompt the user if they want to include Uppercase letters, Yes or NO
  Create an if/else statement that is case-sensitive to see what the user enter
Prompt the user if they want to include numbers, YES or NO
  Create an if/else statement that is case-sensitive to see what the user enter
Prompt the user if they want to include special characters Yes or NO
  Create an if/else statement that is case-sensitive to see what the user entere

After recieving all the information from users, use to the random function to choose an uppercase letter and lower case letter. Also randomly choose a special character and number from the string initialized from the variable at the top of page.
Lastly, print out the password generated in the container for the user 

Deployment Link: https://jarora16.github.io/Homework-3---Password-Generator/


