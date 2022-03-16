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
    Question: "What do we use pseudo elements?",
    Correct_answer:
      "Apply CSS to the specific parts of an elements or a newly inserted content e.g ::before, ::after",
    Incorrect_answers: [
      "Apply css based on the state of an element e.g :hover, :focus",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: "How does specificity work in CSS?",
    Correct_answer:
      "It adds points based on selectors you have used and decides the order of precedence when more than one selector is applied to an element",
    Incorrect_answers: [
      "It adds all selectors and divides by 100",
      "Specificity refers to how precise ",
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
      "What variable declarations can be used for variables with global scope?",
    Correct_answer: "var, let and const because the declaration is irrelevant",
    Incorrect_answers: [
      "None, global scope variables do not need a declaration",
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
  // {
  //   Topic: "Javascript",
  //   Question: "What type is yielded from querySelectorAll() and childNodes()",
  //   Correct_answer: "Nodelist",
  //   Incorrect_answers: ["HTML Collection", "Array"],
  //   Type: "MCQ",
  // },
  {
    Topic: "CSS",
    Question: "In which circumstance would semantic HTML not be useful",
    Correct_answer:
      "Applying additional styling to built in elements such as <li> and <textarea>",
    Incorrect_answers: [
      "Accessibility purposes",
      "Ease of communication",
      "Reinforce meaning of content on a web page rather than appearance",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "Which of the following positioning properties removes the component from the normal document flow?",
    Correct_answer: "Absolute",
    Incorrect_answers: ["Static", "Sticky", "Relative"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: "By default, how are HTML elements positioned?",
    Correct_answer: "Static",
    Incorrect_answers: ["Fixed", "Absolute", "Relative"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "What two positioning properties does the position sticky toggle between?",
    Correct_answer: "Relative and Fixed",
    Incorrect_answers: [
      "Fixed and Absolute",
      "Absolute and Static",
      "Relative and Absolute",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "What four properties describe the CSS box model if working outwards from the HTML element?",
    Correct_answer: "Content, Padding, Border, Margin",
    Incorrect_answers: [
      "Content, Margin, Border, Padding",
      "Content, Border, Padding, Margin",
      "Padding, Content, Margin, Border",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "What statement below best describes the padding of an HTML element?",
    Correct_answer: "Clears an area around the content",
    Incorrect_answers: [
      "Where text and images appear",
      "Clears an area around the border",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "Which of the following correctly selects an element with a title attribute containing the word flower?",
    Correct_answer: "[title~='flower']",
    Incorrect_answers: [
      "[title='flower']",
      "[title|='flower']",
      "[class^='top']",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "Select the html tag below that will take up the full width available?",
    Correct_answer: "p",
    Incorrect_answers: ["span", "img", "a"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: "Which of the following is not a valid combinator selector?",
    Correct_answer: "Parent e.g div < p",
    Incorrect_answers: [
      "Descendant e.g div p",
      "Child e.g div > p",
      "Adjacent e.g div + p",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: "Which of the following best describes a Block-level Element?",
    Correct_answer:
      "starts on a new line and takes up the full width available",
    Incorrect_answers: [
      "does not start on a new line and only takes up as much width as necessary",
      "starts on a new line and only takes up as much width as necessary",
      "does not start on a new line and takes up the full width available",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "If an element should not be seen by the user but take up the same space as if it were there, what property should be used?",
    Correct_answer: "visibility:hidden",
    Incorrect_answers: ["display: none", "display: hidden", "visibility: none"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "Which of the following properties is not a characteristic of the default flex display?",
    Correct_answer: "flex-wrap:wrap",
    Incorrect_answers: [
      "Items stretch to fit the size of the cross axis",
      "flex-basis: auto",
      "items display in a row",
      "items start from the edge of the main axis",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "Which of the following properties will result in both a horizontal flex-direction and a multi-line flex container?",
    Correct_answer: "flex-flow: row wrap;",
    Incorrect_answers: [
      "flex-flow: column nowrap;",
      "display:flex",
      "display:flex and flex-direction: column",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: "Which description best describes the term flex-basis",
    Correct_answer:
      "defines the size of the an item in terms of the space it leaves as available space",
    Incorrect_answers: [
      "defines the ability for an item to grow along the main axis",
      "defines the ability for an item to shrink along the main axis",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "Select the value that cannot be assigned to the align-items property.",
    Correct_answer: "space-between",
    Incorrect_answers: ["Stretch", "flex-start", "flex-end", "center"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "Which justify-content value results in items having a half-size space on either end?",
    Correct_answer: "space-around",
    Incorrect_answers: ["center", "space-evenly", "space-between"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "Select the media query that applies the mobile first approach by selecting a larger screen",
    Correct_answer: "@media only screen and (min-width: 768px) { })",
    Incorrect_answers: [
      "@media only screen and (max-width: 768px) { })",
      "@media only screen and (max-width: 1200px) { })",
    ],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "Which of the units below do not scale relative to anything else i.e. are considered to always be the same size",
    Correct_answer: "px",
    Incorrect_answers: ["em", "rem", "vh", "lh"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: "Which unit below is not calculated relative to the parent",
    Correct_answer: "rem",
    Incorrect_answers: ["em", "%"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: "Which value is not an argument for the RGB function",
    Correct_answer: "lightness",
    Incorrect_answers: ["opacity", "red", "green", "blue"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question:
      "If a font-size value of 1.3 was placed on both a parent (<ol>) and child (<li>), which of the following units would result in the child being visibly larger than the parent?)",
    Correct_answer: "em",
    Incorrect_answers: ["rem", "px"],
    Type: "MCQ",
  },
  {
    Topic: "CSS",
    Question: `Which best describes the layout of a grid from the properties listed below:
      .wrapper {
        display: grid;
        grid-template-columns: repeat(5, 1fr 2fr);
      }`,
    Correct_answer: "A pattern of 1fr track and a 2fr track repeated 5 times",
    Incorrect_answers: [
      "A total of 5 tracks with a alternating pattern of 1fr and 2fr",
      "5 1fr tracks followed by 5 2fr tracks",
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
    Topic: "Node",
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
    Topic: "Node",
    Question: "Which of these is NOT an HTTP method?",
    Correct_answer: "SAVE",
    Incorrect_answers: ["PUT", "GET", "DELETE,"],
    Type: "MCQ",
  },
  {
    Topic: "Node",
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
    Topic: "Node",
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
    Topic: "Node",
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
    Topic: "Node",
    Question: "How do you get the body of a POST, PUT, or PATCH request?",
    Correct_answer: "req.body",
    Incorrect_answers: ["res.body", "req.query", "req.params.body"],
    Type: "MCQ",
  },
  {
    Topic: "Node",
    Question: "What is an API?",
    Correct_answer:
      "A piece of technology that allows two different systems to talk to each other e.g. routes that connect to a database.",
    Incorrect_answers: [
      "A piece of technology that can store data e.g. a Database",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node",
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
    Topic: "Node",
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
    Topic: "Node",
    Question:
      "There is no difference between REST and RESTful, REST is a set of constraints and RESTful refers to the API adhering to it",
    Correct_answer: "True",
    Incorrect_answers: ["False"],
    Type: "MCQ",
  },
  {
    Topic: "Node",
    Question:
      'What HTTP status codes would we consider a "good" response that show our request was successful?',
    Correct_answer: "200s",
    Incorrect_answers: ["100s", "300s", "400s"],
    Type: "MCQ",
  },
  {
    Topic: "Node",
    Question: "How does the dotenv package work?",
    Correct_answer:
      "It loads environment variables from a .env file into process.env, complying to recommendations in 12 factor app",
    Incorrect_answers: [
      "Ensures our environment variables are not pushed to git",
      "It automatically detects where what applications need our environment variables and provides them",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node",
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
    Topic: "Node",
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
    Topic: "Node",
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
    Topic: "Node",
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
    Question: "What is unit testing?",
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
    Question: "Which of these describes a finite state machine?",
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
    Topic: "JavaScript",
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
    Topic: "Node",
    Question: "How do we initialize a Node module?",
    Correct_answer: "npm init",
    Incorrect_answers: ["node start", "git init", "npm start"],
    Type: "MCQ",
  },
  {
    Topic: "Node",
    Question: "What is created for us when we initialize a Node module?",
    Correct_answer: "A package.json file",
    Incorrect_answers: ["A git folder", "A link to npm", "A node file"],
    Type: "MCQ",
  },
  {
    Topic: "Node",
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
    Topic: "Node",
    Question: "How do we run a file called index.js with Node?",
    Correct_answer: "$ node index.js",
    Incorrect_answers: ["Open index.js with the browser", "$ npm run index.js"],
    Type: "MCQ",
  },
  {
    Topic: "Node",
    Question: "How do we export something (X) as the default export of a file?",
    Correct_answer: "export default X",
    Incorrect_answers: ["export please X", "export now X"],
    Type: "MCQ",
  },
  {
    Topic: "Node",
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
    Correct_answer: "The recommended method to connect to the database",
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
      "Client is one connection to the database, pool consist of several independent clients",
    Incorrect_answers: [
      "They are the same and can be used interchangeably",
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
      "So queries can be sanitized to avoid SQL injection attacks",
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
      "PostgreSQL is an advanced object-relational database that extends the subset of SQL standards including different transactions, foreign keys and subqueries",
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
      "A database very efficient in analyzing large size unstructured data",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Architecture",
    Question: "What is the 12 Factor App?",
    Correct_answer:
      "Process, philosophy, and 'rules' to follow when structuring and designing an app",
    Incorrect_answers: [
      "12 key environment variables to include for security in your app",
      "12 different ways to run CRUD actions when responding to requests in an Express server",
      "12 factors that must be taken into account when build software-as-a-service-app",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node",
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
      "What command do you use in the terminal to start a React app that has been initialized with create-react-app?",
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
    Topic: "Node",
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
    Topic: "Node",
    Question:
      'If you define your path with a placeholder, e.g. "/:thing", Express helps by recognizing this and putting the value and key into which object of the req?',
    Correct_answer: "params",
    Incorrect_answers: ["response", "request", "searchTerm"],
    Type: "MCQ",
  },
  {
    Topic: "Node",
    Question: "What does res.json() do in Express?",
    Correct_answer: "Stringifies what's passed to it and sends it as a JSON",
    Incorrect_answers: [
      "Parses whatever JSON is passed to it",
      "Checks if the request is correctly formatted as a JSON",
      "Parses what's passed to it and sends it as a normal object",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Node",
    Question: "Select the correct format of a JSON object below",
    Correct_answer: `{"name":"John", "age":30, "car":null}`,
    Incorrect_answers: [
      `{name:"John", age:30, car:null}`,
      `{'name':'John', 'age':30, 'car':null}`,
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
    Question: "In which scenarios would you use a while loop and a for loop?",
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
    Question: "Select the correct syntax to initialize the for loop",
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
    Incorrect_answers: ["Repository", "Blueprint", "Algorithm", "Recipe"],
    Type: "MCQ",
  },
  {
    Topic: "Docker",
    Question:
      "Containers make it harder to maintain software because can't use APIs to communicate with the software inside of a container?",
    Correct_answer: "Image",
    Incorrect_answers: ["Repository", "Blueprint", "Algorithm", "Recipe"],
    Type: "MCQ",
  },
  {
    Topic: "Docker",
    Question: "Which of the following statements regarding Docker are true?",
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
      "What is the difference between authentication and authorization?",
    Correct_answer:
      "Authentication checks who a user is; authorization checks whether a user has permission to do something.",
    Incorrect_answers: [
      "Authentication checks how much money a user has; authorization allows them to complete a purchase",
      "Authentication re-routes the users IP address backwards; authorization re-routes their IP address forwards.",
      "Authentication checks where a user is; authorization checks why they are there.",
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
    Question:
      "Which of the following does not describe a JWT (JSON Web Token)?",
    Correct_answer: "JWT cannot be processed on other platforms such as mobile",
    Incorrect_answers: [
      "A long set of characters that begins with ey",
      "Standard used to share security information between two parties",
      "Easy to work with as JSON parsers are common in most programming languages",
    ],
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
    Topic: "Security",
    Question:
      "cookies and sessions are used to store user information for authentication and user preferences purposes?",
    Correct_answer: "True",
    Incorrect_answers: ["False"],
    Type: "MCQ",
  },
  {
    Topic: "Security",
    Question: "Difference between a cookie and a session?",
    Correct_answer:
      "Session is on the server side and cookie on the client side",
    Incorrect_answers: [
      "Session can store textual information only but cookie can store text and objects",
      "Session is on the client side and cookie on the server side",
      "They are terms used interchangeably but both do the same thing - store user information",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Security",
    Question: "What is OAuth?",
    Correct_answer:
      "Open standard for access delegation for example accessing websites using google/github without exchanging a password",
    Incorrect_answers: [
      "A library used to help developers add authentication/authorization to their applications ",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Security",
    Question:
      "OAuth Scopes are bundles of permissions asked for by the client when requesting a token",
    Correct_answer: "True",
    Incorrect_answers: ["False"],
    Type: "MCQ",
  },
  {
    Topic: "TypeScript",
    Question: "Which of the following is not true of typescript?",
    Correct_answer: "TypeScript is dynamically typed",
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
    Incorrect_answers: ["True"],
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
  {
    Topic: "TypeScript",
    Question: "Which of the following is not a feature provided by TypeScript?",
    Correct_answer: "Set",
    Incorrect_answers: ["Interfaces", "Enums", "Compiler (TSC)"],
    Type: "MCQ",
  },
  {
    Topic: "TypeScript",
    Question: "Which of the following describes an enum?",
    Correct_answer:
      "Defines a set of named constants, making it easier to document intent or create a set of distinct cases",
    Incorrect_answers: [
      "Describes how an object would look like",
      "Compiles TS into JS which can then be executed in any JavaScript engine like the browser",
      "fixed length arrays that can have different types of data",
    ],
    Type: "MCQ",
  },
  {
    Topic: "TypeScript",
    Question:
      "Which of the following would you use to combine two or more data types in TS?",
    Correct_answer: "Union",
    Incorrect_answers: ["Enum", "Tuple", "Interface"],
    Type: "MCQ",
  },
  {
    Topic: "TypeScript",
    Question: "Typescript can only be used on the client",
    Correct_answer: "False",
    Incorrect_answers: ["True"],
    Type: "MCQ",
  },
  {
    Topic: "TypeScript",
    Question:
      "Browsers and Node.js offer direct support for TS files, running them automatically and seamlessly without the need for transpilation",
    Correct_answer: "False",
    Incorrect_answers: ["True"],
    Type: "MCQ",
  },
  {
    Topic: "TypeScript",
    Question:
      "What is the difference between Type Aliases and Type Interfaces?",
    Correct_answer:
      "A type cannot be re-opened to add new properties vs an interface which is always extendable",
    Incorrect_answers: [
      "You can choose between them freely",
      "An interface cannot be re-opened to add new properties vs a type which is always extendable",
    ],
    Type: "MCQ",
  },
  {
    Topic: "TypeScript",
    Question: "Where is the type for anonymous functions declared?",
    Correct_answer:
      "Contextual typing occurs so no type declaration is required",
    Incorrect_answers: [
      "After the argument declaration in (), as with normal functions e.g. names.forEach((s): string => {console.log(s.toUppercase())",
      "At the end of the function e.g. names.forEach((s) => {console.log(s.toUppercase()): string",
    ],
    Type: "MCQ",
  },
  {
    Topic: "TypeScript",
    Question: "What is a Type Alias?",
    Correct_answer:
      "A name for any type so we can use the same type more than once and refer to it by a single name",
    Incorrect_answers: [
      "Another way to name an object type",
      "A method used to combine two or more data types in TS",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Databases",
    Question:
      "Which of the following is not an advantage of DBMS (database management systems)?",
    Correct_answer: "It provides a single user interface.",
    Incorrect_answers: [
      "Validates the data entered and provide restrictions on unauthorized access",
      "Data is stored in a structured way and hence redundancy is controlled",
      "Provides backup and recovery of the data",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Databases",
    Question:
      "Which of the following is a description of the one-to-many relationship in a database?",
    Correct_answer:
      "The primary key table contains only one record that relates to none, one or many records in the related table",
    Incorrect_answers: [
      "Each primary key relates to only one or no record in the related table",
      "Each record in both the tables can relate to many numbers of records in another table.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Databases",
    Question:
      "Which of the following is not a negative result of redundant data?",
    Correct_answer:
      "Provide continued operations or services in the event of data corruption or data loss",
    Incorrect_answers: [
      "Wastage of the storage space",
      "Integrity of the DB is destroyed",
      "duplicated data is present at multiple locations",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question:
      "Select the statement that incorrectly describes the difference between Agile and Scrum",
    Correct_answer:
      "Agile and Scrum are both process companies use to help deliver value to their customers and so can be substituted for each other.",
    Incorrect_answers: [
      "Agile has more flexibility for change whereas Scrum,has less.",
      "Agile is a methodology used for software/project management whereas Scrum is a form of Agile that describes the process and its steps.",
      "Agile tasks tend to be handled and managed bu the project head whereas Scrum tasks are addressed and handled by entire team members.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question:
      "Which of the following best describes the agile methodology scrum?",
    Correct_answer:
      "Relies on incremental development. Hypotheses are established, tested and reflected upon with necessary adjustments made",
    Incorrect_answers: [
      "Focus on process efficiency for optimum results in customer value by minimizing waste and maximizing value",
      "Projects generally managed through a board or table to help members keep an eye on workflow",
      "Agile tasks tend to be handled and managed by the project head whereas Scrum tasks are addressed and handled by entire team members.",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question:
      "Which of the following do not belong to the Principles of Agile Testing?",
    Correct_answer: "Strong documentation",
    Incorrect_answers: ["Continuous Feedback", "Test-Driven", "Clean Code"],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question: "What is meant by the term velocity in Agile?",
    Correct_answer:
      "Measure of how much work (story points) an agile development team can successfully complete in a given time period",
    Incorrect_answers: [
      "Estimate of the total amount of engineering time available for a given sprint.",
      "Team's committed value of the number of points the team intends to deliver in a sprint",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question:
      "Which of the following is not likely to be addressed at a Daily Stand-Up?",
    Correct_answer: "Solve a problem or challenge",
    Incorrect_answers: [
      "Problems of the team",
      "Ensure a better understanding of goals",
      "To know what was done yesterday and the plan for today",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question: "What is iterative development?",
    Correct_answer:
      "Process where software development cycles (sprint and releases) are repeated until the final product is obtained",
    Incorrect_answers: [
      "Process where development works are sliced into increments and after testing, integrated so they work as a whole",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question:
      "Select the property that does not belong to the traditional waterfall approach",
    Correct_answer:
      "Collaborate with customers in each and every step throughout the process.",
    Incorrect_answers: [
      "Focus on upfront planning, giving importance to cost, scope and time",
      "Testers and developers work separately",
      "More suitable for small or less complex projects",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question: "Select the advantage of adopting the agile process",
    Correct_answer: "Adapt well with changing requirements",
    Incorrect_answers: [
      "Costly as compared to other development methodologies",
      "Risk of ever-lasting project",
      "Difficult to scale large projects",
      "More time and energy requirements from individuals",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question: "Which of the following is not a scrum impediment?",
    Correct_answer: "A blocker",
    Incorrect_answers: [
      "Lack of management supportive system",
      "Missing resources",
      "Lack of skill or knowledge",
    ],
    Type: "MCQ",
  },
  {
    Topic: "Agile",
    Question: "What are burn-up and burn-down charts",
    Correct_answer:
      "Burn-up chart illustrates the amount of work completed in a project whereas burn-down charts depicts the work remaining",
    Incorrect_answers: [
      "Burn-down chart illustrates the amount of work completed in a project whereas burn-up charts depicts the work remaining",
      "Burn-up illustrates the members of the team who are overperforming and the burn-down depicts members who are underperforming",
      "These charts do not exist",
    ],
    Type: "MCQ",
  },
];
export default data;
