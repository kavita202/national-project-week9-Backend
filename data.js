const data = [
  {
    Topic: "frontend",
    Question:
      "Which of the following would be a good, reusable class name for a warning alert in your CSS?",
    Correct_answer: ".warning-alert",
    Incorrect_answers: [".red-alert", ".a", ".red alert"],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "How does specificity work in CSS?",
    Correct_answer:
      "It adds points based on selectors you have used and decides the order of precedence when more than one selector is applied to an element",
    Incorrect_answers: [
      "It adds all selectors and divides by 100",
      "Specificity doesn't exist in CSS",
      "It allows you to use JavaScript to target and change specific CSS attributes",
    ],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "What is the lighthouse audit tool used for?",
    Correct_answer:
      "To audit an webpage and have data that will enable you to make improvements by highlighting accessibility, performance, etc.",
    Incorrect_answers: [
      "Powerful flashing lamp that is built to warn mariners of dangerous shallows and perilous rocky coasts",
      "Lighting up areas of your code where you can improve your syntax",
    ],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "What does BEM stand for in CSS?",
    Correct_answer: "Block Element Modifier",
    Incorrect_answers: ["Block Event Module", "Body Exercise Mass"],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "How do you declare a CSS variable for colour blue?",
    Correct_answer: "--blue: #1e90ff;",
    Incorrect_answers: ["blue: #1e90ff;", "-blue: #1e90ff;", "blue-:#1e90ff;"],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "How would you create a CSS variable with global scope ?",
    Correct_answer: "Declare the CSS variables within the :root selector",
    Incorrect_answers: [
      "Declare the CSS variable within a class",
      "Use any CSS selector",
    ],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "When would you use flexbox ?",
    Correct_answer:
      "To align content or items along 1 dimension i.e horizontally or vertically",
    Incorrect_answers: [
      "Align content both horizontally and vertically",
      "To be cool and appreciated in the dev community",
    ],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "What is a callback function?",
    Correct_answer:
      "A function passed as an argument to another function, so that it can be called later",
    Incorrect_answers: [
      "Something never to be trifled with",
      "A way of keeping track of variables",
      "A function you define with a fat arrow",
    ],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "What type of scoping describes const and let?",
    Correct_answer: "Block scope",
    Incorrect_answers: ["Function scope", "Globally scope", "Peri scope"],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "What type of scoping describes var?",
    Correct_answer: "Function scope",
    Incorrect_answers: ["Block scope", "Globally scope", "Peri scope"],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "When is it useful to use an array to represent something?",
    Correct_answer:
      "When you have a collection of things, and the order matters",
    Incorrect_answers: [
      "When you can't think of anything else",
      "When you have a large piece of text",
      "When you have a bunch of properties",
    ],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "What does the fetch function return?",
    Correct_answer: "A promise",
    Incorrect_answers: ["A ball you threw", "An object", "An array"],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "What does querySelector use to select things from the DOM?",
    Correct_answer: "A valid css selector",
    Incorrect_answers: ["A set of keys", "An object", "Only IDs"],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question:
      "We have selected a button, and pointed to it with a variable called button. How do we add a listener so that when the button is clicked, we run the doSomething function?",
    Correct_answer: 'button.addEventListener("click", doSomething);',
    Incorrect_answers: [
      'button.addEventListener("click", doSomething());',
      'button.addEventListener("onClick", doSomething());',
      'button.addEventListener("onClick", doSomething);',
    ],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "How would you describe the relationship between async/await?",
    Correct_answer: "To use await, you need to be inside an async function",
    Incorrect_answers: [
      "When using async, you can add await to make sure it happens",
      "When using await, you can concatenate async to make sure it happens",
      "Inside an await function, you always use async",
    ],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "When thinking about semantic HTML:",
    Correct_answer:
      "Look up if there's a tag which serves the purpose you are looking for, and if there is use that",
    Incorrect_answers: [
      "Memorise all HTML tags and use them all",
      "Use divs for everything",
      "Don't use tags",
    ],
    Type: "MCQ",
  },
  {
    Topic: "frontend",
    Question: "What is the difference between let and const?",
    Correct_answer: "You cannot reassign a const, you can reassign a let",
    Incorrect_answers: [
      "Const is the name of Chris' pet goldfish",
      "You cannot assign a let, but you can assign a const",
      "You cannot reassign either, but you can change a let to a const",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "What is REST?",
    Correct_answer:
      "An architectural standard informing how APIs are structured",
    Incorrect_answers: [
      "A programming language",
      "What you should do at least for 5 minutes every hour",
      "A Javascript framework for writing APIs",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "Which of these is NOT an HTTP method?",
    Correct_answer: "SAVE",
    Incorrect_answers: ["PUT", "GET", "DELETE,"],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "What's the difference between a PUT and a PATCH request",
    Correct_answer:
      "PUT should replace the whole item; PATCH should replace a bit of it.",
    Incorrect_answers: [
      "PUT should put the item in the database; PATCH should patch it in.",
      "PATCH should remove the item; PUT should put a new one in.",
      "PATCH should replace the whole item; PUT should replace a bit of it.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question:
      "Which of these is the correct syntax for a simple get route in an express app with an id param?",
    Correct_answer:
      "app.get('/user/:id', function(req, res) { res.send('hello world') })",
    Incorrect_answers: [
      "app.get('/user/:id', function(req, res) { req.send('hello world') })",
      "app.get('/user/&id', function(res, req) { res.send('hello world') })",
      "app('/user/:id', function(req, res) { req.send('hello world') })",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "How do you get the body of a POST, PUT, or PATCH request?",
    Correct_answer: "req.body",
    Incorrect_answers: ["res.body", "req.query", "req.params.body"],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "What does REST stand for?",
    Correct_answer: "Representational State Transfer",
    Incorrect_answers: [
      "Rapid Status Tester",
      "Reticulated Snake Tamer",
      "Random Sandwich Taster",
      "Ridiculed Sloth Toenails",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question:
      'What HTTP status codes would we consider a "good" response that show our request was successful?',
    Correct_answer: "200s",
    Incorrect_answers: ["100s", "200s", "300s", "400s"],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question:
      "What's the difference between installing a Node package with a --save-dev flag and just installing as normal?",
    Correct_answer:
      "You can use it while you develop your application as a dev dependency, but it won't be there in production.",
    Incorrect_answers: [
      "You can change the contents of the Node package before you require it.",
      "It ensures you're installing the latest version.",
      "It saves the Node package along with installing it.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "What do req and res stand for in our Express handlers?",
    Correct_answer: "Request and response",
    Incorrect_answers: [
      "Requirements and response",
      "Request and result",
      "Require and result",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "What is the purpose of middleware?",
    Correct_answer:
      "It lets you run code before the requests received by the server hit an endpoint.",
    Incorrect_answers: [
      'It protects the server by screening out requests without the content-type header of "application/json".',
      "It is specifically to handle requests you haven't got an endpoint for.",
      "It runs code exactly halfway through any of the functions you write in the file.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "testing",
    Question: "Which of the following describes TDD?",
    Correct_answer:
      "Is an Agile software development methodology in which an application is documented and designed around the behavior a user expects to experience when interacting with it.",
    Incorrect_answers: [
      "Is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time and, when releasing the software, without doing so manually",
      "Is a software development practice that focuses on creating unit test cases before developing the actual code",
      "Is a principle aimed at reducing repetition of software patterns, replacing it with abstractions or using data normalization to avoid redundancy",
    ],
    Type: "MCQ",
  },
  {
    Topic: "testing",
    Question: "Which of the following is a common TDD approach?",
    Correct_answer: "Red, Green, Refactor",
    Incorrect_answers: [
      "Red, Amber, Green",
      "Ready, steady go",
      "Pass, Fail, Refactor",
    ],
    Type: "MCQ",
  },
  {
    Topic: "testing",
    Question:
      "Why do you need to use .toEqual instead of .toBe with objects and arrays? ",
    Correct_answer:
      ".toBe checks exact equality, while .toEqual checks if each field of an object or array is the same.",
    Incorrect_answers: [
      ".toBe doesn't check equality.",
      "Convention; they both do the same thing.",
      ".toEqual tests if any errors are thrown when the function is called.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "testing",
    Question: "What is unit testing? ",
    Correct_answer:
      "When you test a function or method in isolation in code to ensure it's giving the desired outcome.",
    Incorrect_answers: [
      'Making sure everyone in your immediate team (your "unit") knows how your code is being tested.',
      "The regular tests completed during the retrospective after an agile sprint.",
      'If a test is testing too much code, we describe it as an "absolute unit"',
    ],
    Type: "MCQ",
  },
  {
    Topic: "testing",
    Question: "What is integration testing? ",
    Correct_answer: "Testing individual units of a program combined as a group",
    Incorrect_answers: [
      "Testing the whole user journey of an application",
      "Testing whether the front end of an application can talk to a server",
      "Testing whether the people in your tech team can get along with each other",
    ],
    Type: "MCQ",
  },
  {
    Topic: "testing",
    Question:
      "Which of the following types of tests are usually the cheapest and most efficient to run? ",
    Correct_answer: "Unit tests",
    Incorrect_answers: ["Integration tests", "Acceptance tests", "UI tests"],
    Type: "MCQ",
  },
  {
    Topic: "testing",
    Question:
      "How do you tell Jest that your file contains tests it needs to run? ",
    Correct_answer: "Ending your file in .test.js",
    Incorrect_answers: [
      "Importing Jest at the top of your file",
      "Calling const test = new Jest() before your test statements",
      "It just knows by magic!",
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_advanced ",
    Question: "Which of these describes a finite state machine? ",
    Correct_answer:
      "A system where only particular, specified inputs cause only particular, specified changes in state.",
    Incorrect_answers: [
      "A system where any input causes only particular, specified changes in state.",
      "A system where any inputs cause any changes in state.",
      "A system where only particular, specified inputs cause any changes in state.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_advanced",
    Question:
      "In the reduce method's callback function, what is the role of the accumulator? ",
    Correct_answer:
      "Holds the previously returned value of the callback function after each iteration and is ultimately returned from .reduce after it's finished iterating through the array",
    Incorrect_answers: [
      "Holds the initial value",
      "Is undefined until .reduce is finished iterating through the array",
      "Holds the current value of the array as the function iterates over each item",
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_advanced",
    Question:
      "Fill in the blank: In order to specify the conditions when a useEffect should be triggered, you need to add a ______ array as the second argument. ",
    Correct_answer: "dependency",
    Incorrect_answers: ["callback", "state", "behavior", "cleanup"],
    Type: "MCQ",
  },
  {
    Topic: "react_advanced",
    Question: "Select the benefit that does not arise from using react hooks",
    Correct_answer: "They take up less memory",
    Incorrect_answers: [
      "They abstract away complicated logic making it more readable",
      "Make logic more testable",
      "Make logic more reusable",
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_advanced",
    Question:
      'Fill in the blank to add a test id of "submit-button" to this JSX button component: <button ____="submit-button" /> ',
    Correct_answer: "data-testid",
    Incorrect_answers: ["data", "testid", "testid-data", "id"],
    Type: "MCQ",
  },
  {
    Topic: "react_advanced",
    Question: "Unit tests should be ?",
    Correct_answer: "Small and maintainable tests that test one thing well",
    Incorrect_answers: ["Tests that test lots of functionality in one go"],
    Type: "MCQ",
  },
  {
    Topic: "react_advanced",
    Question:
      "How would you simulate clicking on an element stored in a variable called myButton using fireEvent? ",
    Correct_answer: "fireEvent.click(myButton)",
    Incorrect_answers: [
      "click(myButton)",
      "myButton.fireEvent(click)",
      "fireEvent(myButton)",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "How do we initialise a Node module?",
    Correct_answer: "npm init",
    Incorrect_answers: ["node start", "git init", "npm start"],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "What is created for us when we initialise a Node module?",
    Correct_answer: "A package.json file",
    Incorrect_answers: ["A git folder", "A link to npm", "A node file"],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "What is the package.json for?",
    Correct_answer:
      "It holds all the information about a Node module, including a list of dependencies",
    Incorrect_answers: [
      "It has all of the error logs so that it is easy to debug",
      "It contains all the logic in a Node application",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "How do we run a file called index.js with Node?",
    Correct_answer: "Type node index.js into the command line",
    Incorrect_answers: [
      "Open index.js with the browser",
      "Type start index.js into the command line",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "How do we export something (X) as the default export of a file?",
    Correct_answer: "export default X",
    Incorrect_answers: ["export please X", "export now X"],
    Type: "MCQ",
  },
  {
    Topic: "database",
    Question: "What does npx do?",
    Correct_answer:
      "It will download and run a package temporarily without adding it to package.json,",
    Incorrect_answers: [
      "It's an abbreviation to install the express module",
      "It installs a random npm module",
      'Stands for "Not Package eXpress" and will remove express from an npm project.',
    ],
    Type: "MCQ",
  },
  {
    Topic: "database",
    Question: "How do you run a custom script from a package.json?",
    Correct_answer: "npm run scriptName",
    Incorrect_answers: [
      "node run scriptName",
      "npm scriptName",
      "node scriptName",
    ],
    Type: "MCQ",
  },
  {
    Topic: "database",
    Question: "What is a 'pool' in the pg module?",
    Correct_answer: "The active connection to the database",
    Incorrect_answers: [
      "The way we import npm packages",
      "A big communal bath",
      "The database",
    ],
    Type: "MCQ",
  },
  {
    Topic: "database",
    Question:
      "Why do we use prepared statements via parameterized queries when sending SQL queries in our Node servers to our database?",
    Correct_answer:
      "So queries can be sanitised to avoid SQL injection attacks",
    Incorrect_answers: [
      "So that our statements can be more modular and we can use variables",
      "So that it's in the correct format for a cloud database like Heroku Postgres to accept",
      "Convention to make the code more readable,",
    ],
    Type: "MCQ",
  },
  {
    Topic: "database",
    Question: "What is the 12 Factor App?",
    Correct_answer:
      "Process, philosophy, and 'rules' to follow when structuring and architecting an app",
    Incorrect_answers: [
      "12 key environment variables to include for security in your app",
      "12 different ways to run CRUD actions when responding to requests in an Express server",
      "Reminder to ensure that your version of Node is v12 or later",
      "Always do at least 12 squats before your day of coding,",
    ],
    Type: "MCQ",
  },
  {
    Topic: "database",
    Question:
      "Why do we need to be specific about versions with dependencies in our software?",
    Correct_answer:
      "Different versions of dependencies may not work in the same way, so we need to specify the version that works with our software",
    Incorrect_answers: [
      "NPM is a risky way to add dependencies",
      "We should avoid using dependencies wherever possible",
      "Different versions of dependencies may not work in the same way, so we need to specify the version that works with our software",
      "We have to know the version of our dependencies in order to add their node_modules to .gitignore,",
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_basics",
    Question:
      "Which of these is a correct example of an ES6 module import you'd use when importing a component called ComponentName?",
    Correct_answer: 'import ComponentName from "./ComponentName"',
    Incorrect_answers: [
      "import module ComponentName",
      "module.import ComponentName",
      'import default "./ComponentName"',
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_basics",
    Question: "Select the correct rule when using react hooks",
    Correct_answer: "Only call hooks from within react functions",
    Incorrect_answers: [
      "Only use custom hooks in your app component",
      "Do not use built-in react hooks within your own custom hooks",
      "There must be at least one hook in your react application",
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_basics",
    Question:
      "What do we type into the terminal to create a new React app called demo?",
    Correct_answer: "npx create-react-app demo",
    Incorrect_answers: [
      "npm create-react-app demo",
      "npm i demo --create-react-app",
      "npm start react --demo",
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_basics",
    Question:
      "What command do you use in the terminal to start a React app that has been initialised with create-react-app?",
    Correct_answer: "npm run",
    Incorrect_answers: ["npm i react", "npm start", "npx create-react-app"],
    Type: "MCQ",
  },
  {
    Topic: "react_basics",
    Question: "Fill in the blank: A ____ component manages its own state.",
    Correct_answer: "Smart",
    Incorrect_answers: ["Handy", "Advanced", "Primitive", "Dumb"],
    Type: "MCQ",
  },
  {
    Topic: "react_basics",
    Question:
      "Which of these is valid syntax to create a state that starts as an empty string?",
    Correct_answer: 'const [state, setState] = useState("")',
    Incorrect_answers: [
      'const {state, setState} = useState("")',
      'const [state, setState] = useState ""',
      'const [state setState] = useState("")',
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_basics",
    Question:
      "Which of these is a correct ES6 module export you would use when exporting a component as a default export at the bottom of its file?",
    Correct_answer: "export default ComponentName",
    Incorrect_answers: [
      "export default {ComponentName}",
      "module.exports = ComponentName",
      "export ComponentName",
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_basics",
    Question:
      "What do we mean when we say to be immutable when we're working with arrays and objects?",
    Correct_answer:
      "Instead of changing the original array or object, making a shallow copy with any changes to the object or array's contents (via spreading/slicing)",
    Incorrect_answers: [
      "Changing the original copy of the object or array to ensure consistency across the application",
      "Making sure to update every array and object in your code at once",
      "Making sure not to mutate the array or object into either one of the X-Men or a Teenage Mutant Ninja Turtle",
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_basics",
    Question:
      "How would you use the spread operator to spread the contents of an array called pets into a new array called newPets?",
    Correct_answer: "const newPets = [...pets]",
    Incorrect_answers: [
      "const newPets = ...pets",
      "const newPets = [pets]",
      "const newPets = pets",
    ],
    Type: "MCQ",
  },
  {
    Topic: "react_basics",
    Question:
      "How would you slice an array called pets so that your slice contains the first three items in the array?",
    Correct_answer: "pets.slice(0,3)",
    Incorrect_answers: [
      "pets.slice(3)",
      "pets.slice(1,3)",
      "pets.slice(0, 2)",
      "pets.slice(pets[2])",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "How do you install Express in your Node project?",
    Correct_answer: "npm i express",
    Incorrect_answers: [
      "node express",
      "package.json.push('express')",
      "npm start express",
    ],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question:
      'If you define your path with a placeholder, e.g. "/:thing", Express helps by recognising this and putting the value and key into which object of the req?',
    Correct_answer: "params",
    Incorrect_answers: ["response", "request", "searchTerm"],
    Type: "MCQ",
  },
  {
    Topic: "backend",
    Question: "What does res.json() do in Express?",
    Correct_answer: "Stringifies what's passed to it and sends it as a JSON",
    Incorrect_answers: [
      "Parses whatever JSON is passed to it",
      "Checks if the request is correctly formatted as a JSON",
      "Parses what's passed to it and sends it as a normal object",
      "Summons JSON Statham to fix your code",
    ],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "Inside which HTML element do we put the JavaScript??",
    Correct_answer: "<script>",
    Incorrect_answers: ["<javascript>", "<style>", "<scripting>"],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    Correct_answer: "<script src='xxx.js'>",
    Incorrect_answers: [
      "<script source='xxx.js'>",
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
    ],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "The external JavaScript file must contain the <script> tag.",
    Correct_answer: "False",
    Incorrect_answers: ["True"],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "How do you create a function called myFunction in JavaScript?",
    Correct_answer: "function myFunction()",
    Incorrect_answers: ["function:myFunction()", "function = myFunction()"],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "How do you call a function named 'myFunction'?",
    Correct_answer: "myFunction()",
    Incorrect_answers: [
      "myFunction",
      "call myFunction()",
      "You dont need to call it",
    ],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "How to write an IF statement in JavaScript??",
    Correct_answer: "if (i === 5) {}",
    Incorrect_answers: [
      "if i === 5 {}",
      "if (i == 5) then",
      "if (i === 5) then",
    ],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "In which scenarious would you use a while loop and a for loop?",
    Correct_answer:
      "for loop: know how many times the loop should run, while loop: loop should break break based on a condition",
    Incorrect_answers: [
      "while loop: know how many times the loop should run, for loop: loop should break based on a condition",
      "It does not matter, the only difference is the syntax",
      "while loop: when you want it to run at least once regardless of the first condition, for loop: know how many times the loop should run",
    ],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "Select the correct syntax to initialise the for loop",
    Correct_answer: "for (let i=0; i< 5; i++) {}",
    Incorrect_answers: [
      "for (let i=0, i< 5, i++) {}",
      "for (i=0 to i< 5; i++) {}",
      "for i=0; i++, {}",
    ],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "What is the correct way to write a JavaScript array?",
    Correct_answer: "['red', 'green', 'blue']",
    Incorrect_answers: [
      "['1: red', '2: green', '3: blue']",
      "'red', 'green', 'blue'",
      "['{0=red}', '{1=green}', '{3=blue}']",
    ],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "How do you declare a JS variable?",
    Correct_answer: "var variableName",
    Incorrect_answers: ["variable variableName", "variableName"],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "Select the statement that returns 'dog'",
    Correct_answer: "true && 1 && 'dog'",
    Incorrect_answers: ["'dog' && 0 && 'dog'", "'dog' && 1", "1 && ['dog']"],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "Select the non-falsy value",
    Correct_answer: "'0'",
    Incorrect_answers: ["null", "NaN", "false", "-0", "0"],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question:
      "What is the difference, if any between type coercion and type conversion",
    Correct_answer:
      "coercion is implicit and conversion can be either implicit or explicit",
    Incorrect_answers: [
      "There is no difference",
      "conversion is explicit and coercion is implicit",
      "conversion is implicit and coercion can be either implicit or explicit",
    ],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "Select the incorrect statement",
    Correct_answer: "The runtime of recursive functions is linear ",
    Incorrect_answers: [
      "Recursion is when a function calls itself ",
      "If there is nothing to stop a recursive function, it will continue to call itself forever",
      "Recursive functions are asynchronous",
    ],
    Type: "MCQ",
  },
  {
    Topic: "javascript",
    Question: "What does Scope involve?",
    Correct_answer:
      "The accessibility of different variables, including depending on whether they are global or local.",
    Incorrect_answers: [
      "The type of information that you can put into a variable.",
      "The different titles that you can call different functions.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "computer_science",
    Question: "Which of the following is not in a Docker container?",
    Correct_answer: "Docker image",
    Incorrect_answers: ["Versions", "runtime", "system libraries and settings"],
    Type: "MCQ",
  },
  {
    Topic: "computer_science",
    Question: "What is the 'blueprint' of a container called?",
    Correct_answer: "Image",
    Incorrect_answers: ["Repository", "Blueprint", "Alogirthm", "Recipe"],
    Type: "MCQ",
  },
  {
    Topic: "computer_science",
    Question:
      "Containers make it harder to maintain software because can't use APIs to communicate with the software inside of a container?",
    Correct_answer: "Image",
    Incorrect_answers: ["Repository", "Blueprint", "Alogirthm", "Recipe"],
    Type: "MCQ",
  },
  {
    Topic: "computer_science",
    Question: "Which of the following statements reagrding Docker are true?",
    Correct_answer:
      "Containers are scalable - you can spin up new nodes/instances if and when you need them.",
    Incorrect_answers: [
      "Containers make it harder to maintain software - you can't use APIs to communicate with the software inside of a container.",
      "Docker containers are the same as virtual machines.",
      "Docker containers are applicable in every situation and are the only way to containerize code.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question:
      "CWhat is the difference between authentication and authorisation?",
    Correct_answer:
      "Authentication checks who a user is; authorisation checks whether a user has permission to do something.",
    Incorrect_answers: [
      "Authentication checks how much money a user has; authorisation allows them to complete a purchase",
      "Authentication re-routes the users IP address backwards; authorisation re-routes their IP address forwards.",
      "Authentication checks where a user is; authorisation checks why they are there.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question:
      "What is the most common way to authenticate users on the internet?",
    Correct_answer: "Passwords",
    Incorrect_answers: ["Fingerprints", "Retina Scans", "Written Signatures"],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question: "Which is the best type of code for sharing within a team?",
    Correct_answer: "Code with low cognitive load",
    Incorrect_answers: [
      "Complex, but computationally efficient",
      "Tall and narrow code",
      "Short and wide code",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question: "Which of these things should be avoided",
    Correct_answer: "Save a plain text password.",
    Incorrect_answers: [
      "Save an encrypted password.",
      "Save environment variables.",
      "Savour the taste of delicious encryption foodstuffs.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question: "Which of these things should be avoided",
    Correct_answer:
      "Comparing a branch with the another branch, with a view to merging the branch into the other branch.",
    Incorrect_answers: [
      "Comparing one branch with another branch and deciding which branch to keep.",
      "Asking for permission to clone a GitHub repository and make change.",
      "Asking for permission to fork a GitHub repository.",
    ],
    Type: "MCQ",
  },
];
// const newdata = data.map((obj) => (obj = { ...obj, Type: "MCQ" }));
// console.log(newdata);

export default data;
