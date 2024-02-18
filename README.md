# ECommerce Backend Structure
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  </br>
  </br>
  </br>
  ## Description
  
  This application is meant for a manager at an internet retail company, who wants a backend for their e-commerce website that uses the latest technologies so that their company can compete with other e-commerce companies. This application was built using the ORM model to create tables that relate to each other using predefined relationships. In order to complete this project, which has no front end to test code with, Insomnia was used to test code functionality.
  </br>
  </br>
  </br>
  ## Table of Contents
  
- [ECommerce Backend Structure](#ecommerce-backend-structure)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  ## Installation
  
  In order to utilize this application, follow these steps:<br>
  1. Clone the repository to your local machine using the SSH key that you have linked to GitHub (for more information on this, please visit the <a href="[link](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)">GitHub documentation</a>).<br></br>
  2. Install the necessary languages and packages by running the command `npm install` in the terminal.</br></br>
  3. Create a .env file in the root directory of the repository and add the following code to the file (replace '...' with your information):<br></br>
  ```DB_NAME='your_database_name'``` <br></br>
  ```DB_USER='your_mysql_username'```<br></br>
  ```DB_PASSWORD='your_mysql_password'```<br></br>
  4. Run the command ```mysql -u root -p``` in the terminal to start the MySQL shell.<br></br>
  5. Enter your MySQL password when prompted.<br></br>
  6. Run the command ```source db/schema.sql``` to create the database.<br></br>
  7. Run the command ```quit``` to exit the MySQL shell.<br></br>
  8. Run the command ```npm run dev``` to seed the database with data and start the server.<br></br>
  </br>
  </br>
  </br>
  ## Usage
  There is no front end to test code with, so use Insomnia to test routes. In order to test the routes, follow these steps:</br></br>
  1. Open Insomnia and create a new request. As an example, we will try a 'get all products' route<br></br>
  2. Enter the URL of the route you would like to test in the URL bar. Try ```localhost:3010/api/products```<br></br>
  3. Select the type of request you would like to make from the dropdown menu. Try ```GET``` <br></br>
  4. Click the 'Send' button to send the request to the server.<br></br>
  5. View the response from the server in the 'Response' section of the Insomnia window.<br></br>
  ![Demo video of application running](img.png)
  </br>
  </br>
  </br>
  ## Credits
  
  - <a href="https://chat.openai.com/">ChatGPT 3.5</a>
  - <a href="https://github.com/features/copilot?ef_id=_k_CjwKCAiAq4KuBhA6EiwArMAw1FOutqMK0saZxH8FwReh32EgrB9jOkJA2Gi0O3-RqIINbuOsOHKHhxoCfKwQAvD_BwE_k_&OCID=AIDcmmc3fhtaow_SEM__k_CjwKCAiAq4KuBhA6EiwArMAw1FOutqMK0saZxH8FwReh32EgrB9jOkJA2Gi0O3-RqIINbuOsOHKHhxoCfKwQAvD_BwE_k_&gad_source=1&gclid=CjwKCAiAq4KuBhA6EiwArMAw1FOutqMK0saZxH8FwReh32EgrB9jOkJA2Gi0O3-RqIINbuOsOHKHhxoCfKwQAvD_BwE">Github CoPilot</a>
  - <a href="https://developer.mozilla.org/en-US/">MDN</a>
  - <a href="https://www.youtube.com/watch?v=geB_9Ib9YhY">Matt YouTube Walkthrough</a>
  - <a href="https://leewarrick.com/">Lee Warrick</a> UCONN Bootcamp Instructor
  - <a href="https://github.com/miacias">Mia Ciasullo</a> UCONN Bootcamp Instructor
  - <a href="https://github.com/samanthashleyrose">Samantha Rose</a> UCONN Bootcamp Student
  </br>
  </br>
  </br>
  ## Features
  
  nope
  </br>
  </br>
  </br>
  ## How to Contribute
  
  To contribute to this project, please contact the creator of this project via the contact information provided below.<br>Otherwise, feel free to fork the repository and make changes as you see fit. If you think the changes would benefit the project, please submit a pull request.
  </br>
  </br>
  </br>
  ## Tests
  
  N/A
  </br>
  </br>
  </br>
  ## License
  
  This project is licensed under the MIT LICENSE - see the <a href="https://opensource.org/licenses/MIT">MIT LICENSE</a> file on OpenSourceInitiative.org for details.
  </br>
  </br>
  </br>
  ## Questions
  
  For further questions, please connect with me at <a href="https://github.com/mighty-little-coder">mighty-little-coder</a>,<br>
  or contact me via email at <a href="email@email.email">email@email.email</a>.