## Exercise description

First and second react exercise was built with React.js using JavaScript and styled by implementing CSS.

[First exercise](https://github.com/LigaV123/Frontend_Basics/tree/main/react_practice/first_react_app) is a simple application that allows you to add more smiley faces by clicking the button “Add new face”. 
They are then saved in an array using the useState hook. When clicking the button “Delete” right below the smiley face it gets deleted. 
When choosing the “Set Night” or “Set Day” button the useState hook then changes the value state(true/false). 
It makes it possible to switch between black and white box background color, text color and change the picture in the box top-right corner.

[Second exercise](https://github.com/LigaV123/Frontend_Basics/tree/main/react_practice/second_react_app) uses the useEffect hook to fetch data from the "Rick and Morty" API and update the component's state when the data is received. 
It has two arguments: a function and an array of dependencies. The dependency array is empty, which means this effect runs once when the component is initially rendered. 
While the data is being loaded, it displays the “Loading….” message. 
Once the data is successfully fetched the message is replaced with the actual content (some of the characters, their picture, name and status(alive, unknown, dead)).

## To Run Exercise
* Clone the repository
* In visual studio code terminal or command prompt: Navigate to the project directory using the following command: **cd repo-name**
  
* Install dependencies: Once you’re inside the project directory, run the following command to install the dependencies required for the project:
**npm install** (or just **npm i**)
This command will read the package.json file in the repository and download all of the dependencies listed there.

* Start the development server by running the following command: **npm run dev**

* In visual studio code terminal: Press **ctrl+click** on link provided in Local
  ![from_VS_terminal](https://github.com/LigaV123/Frontend_Basics/assets/138287614/9a003046-12d9-4744-8af1-891e83ed959e)

* In command prompt: Copy link provided in Local and paste it in your web browser.
  ![from_cmd](https://github.com/LigaV123/Frontend_Basics/assets/138287614/2ef7de81-0df6-4eaa-a63d-8de904328701)
