const data = [
  {
    Topic: "CSS",
    Question:
      "Which of the following would be a good, reusable class name for a warning alert in your CSS?",
    Correct_answer: ".warning-alert",
    Incorrect_answers: [".red-alert", ".a", ".red alert"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
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
    Topic: "CSS",
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
    Topic: "CSS",
    Question: "What does BEM stand for in CSS?",
    Correct_answer: "Block Element Modifier",
    Incorrect_answers: ["Block Event Module", "Body Exercise Mass"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "Which of the following selectors do not belong to the BEM style?",
    Correct_answer: ".nav .nav__listItem .btn--orange {}",
    Incorrect_answers: [".btn {}", ".btn__price {}", ".btn--orange {}"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: "How do you declare a CSS variable for colour blue?",
    Correct_answer: "--blue: #1e90ff;",
    Incorrect_answers: ["blue: #1e90ff;", "-blue: #1e90ff;", "blue-:#1e90ff;"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: "How would you create a CSS variable with global scope?",
    Correct_answer: "Declare the CSS variables within the :root selector",
    Incorrect_answers: [
      "Declare the CSS variable within a class",
      "Declare the CSS variable at the top of the file",
      "Declare the CSS variable with no selector",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: "When would you use flexbox?",
    Correct_answer:
      "To align content or items along 1 dimension i.e horizontally or vertically",
    Incorrect_answers: [
      "Align content both horizontally and vertically",
      "Flexbox is a predecessor to grid so is rarely used",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
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
    Topic: "Javascript",
    Question: "What type of scoping describes const and let?",
    Correct_answer: "Block scope",
    Incorrect_answers: ["Function scope", "Globally scope", "Peri scope"],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "What does it mean use 'semantic' language?",
    Correct_answer:
      "Language that relates to the meaning of the word such as good variable names",
    Incorrect_answers: [
      "use language that first comes to mind",
      "Use any language provided the code functions correctly",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "What type of scoping describes var?",
    Correct_answer: "Function scope",
    Incorrect_answers: ["Block scope", "Globally scope", "Peri scope"],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question:
      "What variable declerations can be used for variables with global scope?",
    Correct_answer: "var, let and const because the decleration is irrevelant",
    Incorrect_answers: [
      "None, global scope varibles do not need a decleration",
      "var only, block and scope are function scoped",
      "All variables have global scope",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "When is it useful to use an array?",
    Correct_answer: "To store a collection of things and the order is relevant",
    Incorrect_answers: [
      "When an object cannot hold your data",
      "When you have a large piece of text",
      "To store a collection of things and the order is irrelevant",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "What does the fetch function return?",
    Correct_answer: "A promise",
    Incorrect_answers: ["data requested from the API", "An object", "An array"],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "What does querySelector use to select things from the DOM?",
    Correct_answer: "A valid css selector",
    Incorrect_answers: ["A set of keys", "An object", "Only IDs"],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
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
    Topic: "Javascript",
    Question: "Select the odd one out, why is it so?",
    Correct_answer: "Fat arrow functions",
    Incorrect_answers: ["Callbacks", "Promises", "Async/Await"],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "What is the difference between async and await?",
    Correct_answer:
      "async: function that returns a promise, await: blocks the execution of code until the promise is resolved or rejected",
    Incorrect_answers: [
      "await: returns a promise, async: blocks the execution of code until the promise is resolved or rejected",
      "async: function that returns a promise, await: wait for promise is resolved or rejected but does not block the execution of code",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "How is error handling handled in async/await and promises?",
    Correct_answer:
      "async/await use try()/catch(), promises use then()/catch()",
    Incorrect_answers: [
      "Both methods use try()/catch()",
      "The error handling method is irrelevant, both will work",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "What type is yielded from querySelectorAll() and childNodes()",
    Correct_answer: "Nodelist",
    Incorrect_answers: ["HTML Collection", "Array"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: "In which circumstance would semantic HTML not be useful",
    Correct_answer:
      "Applying additional styling to built in elements such as <li> and <textarea>",
    Incorrect_answers: [
      "Accessibility purposes",
      "Ease of communication",
      "Reinforce meaning of content on a web page rather than appearence",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "What is the difference between let and const?",
    Correct_answer: "You cannot reassign a const, you can reassign a let",
    Incorrect_answers: [
      "You cannot assign a let, but you can assign a const",
      "You cannot reassign either, but you can change a let to a const",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
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
    Topic: "Node & Express",
    Question: "Which of these is NOT an HTTP method?",
    Correct_answer: "SAVE",
    Incorrect_answers: ["PUT", "GET", "DELETE,"],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
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
    Topic: "Node & Express",
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
    Topic: "Node & Express",
    Question: `In the following URL what are the query parameters?
      www.randomurl.com/path/filename?id=123&option=456`,
    Correct_answer: "id and option",
    Incorrect_answers: [
      "path and filename",
      "path",
      "There are no query parameters",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
    Question: "How do you get the body of a POST, PUT, or PATCH request?",
    Correct_answer: "req.body",
    Incorrect_answers: ["res.body", "req.query", "req.params.body"],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
    Question: "What is an API?",
    Correct_answer:
      "A piece of technology that allows two different systems to talk to each other e.g. routes that connect to a database.",
    Incorrect_answers: [
      "A piece of technology that can store data e.g. a Database",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
    Question:
      "Which of the following is not a characteristic of a RESTful API?",
    Correct_answer: "Only uses XML for exchanging data",
    Incorrect_answers: [
      "Uses HTTP requests to access and use data",
      "Stateless - does not save any client data on the server",
      "Supports data formats such as JSON, XML, form-data",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
    Question:
      "Which of the following is not a characteristic of a RESTful API?",
    Correct_answer: "Only uses XML for exchanging data",
    Incorrect_answers: [
      "Uses HTTP requests to access and use data",
      "Stateless - does not save any client data on the server",
      "Supports data formats such as JSON, XML, form-data",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
    Question:
      "There is no difference between REST and RESTful, REST is a set of contraints and RESTful refers to the API adhering to it",
    Correct_answer: "True",
    Incorrect_answers: ["False"],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
    Question:
      'What HTTP status codes would we consider a "good" response that show our request was successful?',
    Correct_answer: "200s",
    Incorrect_answers: ["100s", "200s", "300s", "400s"],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
    Question: "How does the dotenv package work?",
    Correct_answer:
      "It loads environment variables from a .env file into process.env, complying to reccomendations in 12 factor app",
    Incorrect_answers: [
      "Ensures our environment variables are not pushed to git",
      "It automatically detects where what applications need our environment variables and provides them",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
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
    Topic: "Node & Express",
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
    Topic: "Node & Express",
    Question:
      "When reading documentation, what do command prefixed with '$' mean?",
    Correct_answer: "Run the code in the terminal without the $",
    Incorrect_answers: [
      "Run the code in the terminal with the $",
      "Add the code to the top of your file",
      "Add the code to a script in package.json",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
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
    Topic: "Testing",
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
    Topic: "Testing",
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
    Topic: "Testing",
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
    Topic: "Testing",
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
    Topic: "Testing",
    Question: "What is integration testing?",
    Correct_answer: "Testing individual units of a program combined as a group",
    Incorrect_answers: [
      "Testing the whole user journey of an application",
      "Testing whether the front end of an application can talk to a server",
      "Testing whether the people in your tech team can get along with each other",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Testing",
    Question:
      "Which of the following types of tests are usually the cheapest and most efficient to run?",
    Correct_answer: "Unit tests",
    Incorrect_answers: ["Integration tests", "Acceptance tests", "UI tests"],
    Type: "MCQ",
  },
  {
    Topic: "Testing",
    Question:
      "How do you tell Jest that your file contains tests it needs to run? ",
    Correct_answer: "Ending your file in .test.js",
    Incorrect_answers: [
      "Importing Jest at the top of your file",
      "Calling const test = new Jest() before your test statements",
      "$ npm jest <filename>",
    ],
    Type: "MCQ",
  },

  {
    Topic: "React",
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
    Topic: "React",
    Question:
      "In the reduce method's callback function, what is the role of the accumulator?",
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
    Topic: "React",
    Question:
      "Fill in the blank: In order to specify the conditions when a useEffect should be triggered, you need to add a ______ array as the second argument. ",
    Correct_answer: "dependency",
    Incorrect_answers: ["callback", "state", "behavior", "cleanup"],
    Type: "MCQ",
  },
  {
    Topic: "React",
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
    Topic: "Testing",
    Question: "Unit tests should be?",
    Correct_answer: "Small and maintainable tests that test one thing well",
    Incorrect_answers: ["Tests that test lots of functionality in one go"],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
    Question: "How do we initialise a Node module?",
    Correct_answer: "npm init",
    Incorrect_answers: ["node start", "git init", "npm start"],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
    Question: "What is created for us when we initialise a Node module?",
    Correct_answer: "A package.json file",
    Incorrect_answers: ["A git folder", "A link to npm", "A node file"],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
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
    Topic: "Node & Express",
    Question: "How do we run a file called index.js with Node?",
    Correct_answer: "$ node index.js",
    Incorrect_answers: ["Open index.js with the browser", "$ npm run index.js"],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
    Question: "How do we export something (X) as the default export of a file?",
    Correct_answer: "export default X",
    Incorrect_answers: ["export please X", "export now X"],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
    Question: "In what circumstance can we use export default",
    Correct_answer: "Exporting only one value",
    Incorrect_answers: [
      "In all situations",
      "export default is commonJS so is not used in es6 modules",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Databases",
    Question: "What does npx do?",
    Correct_answer:
      "It will download and run a package temporarily without adding it to package.json,",
    Incorrect_answers: [
      "It's an abbreviation to install the express module",
      "It installs the express version of a node module",
      'Stands for "Not Package eXpress" and will remove express from an npm project.',
    ],
    Type: "MCQ",
  },
  {
    Topic: "Databases",
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
    Topic: "Databases",
    Question: "What is a 'pool' in the pg module?",
    Correct_answer: "The reccomended method to connect to the database",
    Incorrect_answers: [
      "The only way we can make queries to our database",
      "The database",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Databases",
    Question: "Why is the difference between client and pool?",
    Correct_answer:
      "Client is one connection to the database, pool consist of several independant clients",
    Incorrect_answers: [
      "They are the same and can be used interchangibly",
      "client is better at managing traffic peaks allowing your database to scale effectively whereas pool is not reccomended for scaling",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Databases",
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
    Topic: "Databases",
    Question:
      "Why do we use prepared statements via parameterized queries ($1, $2 etc) when sending SQL queries in our Node servers to our database?",
    Correct_answer:
      "So queries can be sanitised to avoid SQL injection attacks",
    Incorrect_answers: [
      "So that our statements can be more modular and we can use variables",
      "It is the standard format for cloud platforms such as heroku",
      "Allows for more readable code",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Databases",
    Question: "What is difference between SQL and PostgreSQL?",
    Correct_answer:
      "PostgreSQL is an advanced object-relational database that extendeds the subset of SQL standards including different transactions, foreign keys and subqueries",
    Incorrect_answers: [
      "PostgreSQL is a more up-to-date version of SQL",
      "There is little to no difference",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Databases",
    Question:
      "Which of the following correctly describes a relational database?",
    Correct_answer:
      "A collection of data items with pre-defined relationships between them, stored in a set of tables",
    Incorrect_answers: [
      "A database organized around objects rather than actions, and data rather than logic.",
      "A databsase very efficient in analyzing large size unstructured data",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Architecture",
    Question: "What is the 12 Factor App?",
    Correct_answer:
      "Process, philosophy, and 'rules' to follow when structuring and architecting an app",
    Incorrect_answers: [
      "12 key environment variables to include for security in your app",
      "12 different ways to run CRUD actions when responding to requests in an Express server",
      "12 factors that must be taken into account when build software-as-a-service-app",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
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
    Topic: "Javascript",
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
    Topic: "React",
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
    Topic: "React",
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
    Topic: "React",
    Question:
      "What command do you use in the terminal to start a React app that has been initialised with create-react-app?",
    Correct_answer: "npm run",
    Incorrect_answers: ["npm i react", "npm start", "npx create-react-app"],
    Type: "MCQ",
  },
  {
    Topic: "React",
    Question: "Fill in the blank: A ____ component manages its own state.",
    Correct_answer: "Smart",
    Incorrect_answers: ["Handy", "Advanced", "Primitive", "Dumb"],
    Type: "MCQ",
  },
  {
    Topic: "React",
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
    Topic: "Javascript",
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
    Topic: "React",
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
    Topic: "Javascript",
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
    Topic: "Javascript",
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
    Topic: "Node & Express",
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
    Topic: "Node & Express",
    Question:
      'If you define your path with a placeholder, e.g. "/:thing", Express helps by recognising this and putting the value and key into which object of the req?',
    Correct_answer: "params",
    Incorrect_answers: ["response", "request", "searchTerm"],
    Type: "MCQ",
  },
  {
    Topic: "Node & Express",
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
    Topic: "Node & Express",
    Question: "Select the correct format of a JSON object below",
    Correct_answer: `'{"name":"John", "age":30, "car":null}'`,
    Incorrect_answers: [
      `'{name:"John", age:30, car:null}'`,
      `'{"name":"John", "age":"30", "car":"null"}'`,
    ],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "Inside which HTML element do we put the JavaScript??",
    Correct_answer: "<script>",
    Incorrect_answers: ["<javascript>", "<style>", "<scripting>"],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
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
    Topic: "Javascript",
    Question: "The external JavaScript file must contain the <script> tag.",
    Correct_answer: "False",
    Incorrect_answers: ["True"],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "How do you create a function called myFunction in JavaScript?",
    Correct_answer: "function myFunction()",
    Incorrect_answers: ["function:myFunction()", "function = myFunction()"],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
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
    Topic: "Javascript",
    Question: "How to write an IF statement in JavaScript??",
    Correct_answer: "if (i === 5) {}",
    Incorrect_answers: [
      "if i === 5 { }",
      "if (i == 5) then",
      "if (i === 5) then",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
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
    Topic: "Javascript",
    Question: "Select the correct syntax to initialise the for loop",
    Correct_answer: "for (let i=0; i< 5; i++) { }",
    Incorrect_answers: [
      "for (let i=0, i< 5, i++) { }",
      "for (i=0 to i< 5; i++) { }",
      "for i=0; i++, { }",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
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
    Topic: "Javascript",
    Question: "How do you declare a JS variable?",
    Correct_answer: "var variableName",
    Incorrect_answers: ["variable variableName", "variableName"],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "Select the statement that returns 'dog'",
    Correct_answer: "true && 1 && 'dog'",
    Incorrect_answers: ["'dog' && 0 && 'dog'", "'dog' && 1", "1 && ['dog']"],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
    Question: "Select the non-falsy value",
    Correct_answer: "'0'",
    Incorrect_answers: ["null", "NaN", "false", "-0", "0"],
    Type: "MCQ",
  },
  {
    Topic: "Javascript",
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
    Topic: "Javascript",
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
    Topic: "Javascript",
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
    Topic: "Docker",
    Question: "Which of the following is not in a Docker container?",
    Correct_answer: "Docker image",
    Incorrect_answers: ["Versions", "runtime", "system libraries and settings"],
    Type: "MCQ",
  },
  {
    Topic: "Docker",
    Question: "What is the 'blueprint' of a container called?",
    Correct_answer: "Image",
    Incorrect_answers: ["Repository", "Blueprint", "Alogirthm", "Recipe"],
    Type: "MCQ",
  },
  {
    Topic: "Docker",
    Question:
      "Containers make it harder to maintain software because can't use APIs to communicate with the software inside of a container?",
    Correct_answer: "Image",
    Incorrect_answers: ["Repository", "Blueprint", "Alogirthm", "Recipe"],
    Type: "MCQ",
  },
  {
    Topic: "Docker",
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
    Topic: "Security",
    Question:
      "What is the difference between authentication and authorisation?",
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
    Topic: "Security",
    Question:
      "What is the most common way to authenticate users on the internet?",
    Correct_answer: "Passwords",
    Incorrect_answers: ["Fingerprints", "Retina Scans", "Written Signatures"],
    Type: "MCQ",
  },
  {
    Topic: "Security",
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
    Topic: "TypeScript",
    Question: "Which of the following is not true of typescript?",
    Correct_answer: "TypeScript is dymanically typed",
    Incorrect_answers: [
      "TypeScript makes larger codebases easier to maintain and shareable across developers and teams",
      "A strongly typed programming language that builds on JavaScript",
      "All Javascript code is valid TypeScript code",
    ],
    Type: "MCQ",
  },
  {
    Topic: "TypeScript",
    Question:
      "We must always explicitly include type annotations in our TypeScript code as TypeScript has no ability to infer types.",
    Correct_answer: "False",
    Incorrect_answers: ["False"],
    Type: "MCQ",
  },
  {
    Topic: "Architecture",
    Question: "What is a notable disadvantage to using microservices?",
    Correct_answer: "All of the above",
    Incorrect_answers: [
      "There is the potential for too much granularity.",
      "Complex testing is required.",
      "Latency issues can occur during heavy use.",
    ],
    Type: "MCQ",
  },
];

export default data;
