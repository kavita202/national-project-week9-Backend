const data = [
  {
    Topic: "frontend",
    Question: "How do you declare a CSS variable for colour blue?",
    Correct_answer: "--blue: #1e90ff;",
    Incorrect_answers: ["blue: #1e90ff;" , "-blue: #1e90ff;",  "blue-:#1e90ff;"]
  },
  {
    Topic: "frontend",
    Question: "How would you create a CSS variable with global scope ?",
    Correct_answer: "Declare the CSS variables within the :root selector",
    Incorrect_answers: [ "Declare the CSS variable within a class", "Use any CSS selector"]
  },
  {
    Topic: "frontend",
    Question: "When would you use flexbox ?",
    Correct_answer: "To align content or items along 1 dimension i.e horizontally or vertically",
    Incorrect_answers: [ "Align content both horizontally and vertically", "To be cool and appreciated in the dev community"]
  },
  {
    Topic: "frontend",
    Question: "What is a callback function?",
    Correct_answer: "A function passed as an argument to another function, so that it can be called later",
    Incorrect_answers: [ "Something never to be trifled with"," A way of keeping track of variables", "A function you define with a fat arrow"]
  },
  {
    Topic: "frontend",
    Question: "What type of scoping describes const and let?",
    Correct_answer: "Block scope",
    Incorrect_answers: [ "Function scope"," Globally scope", "Peri scope"]
  },
  {
    Topic: "frontend",
    Question: "What type of scoping describes var?",
    Correct_answer: "Function scope",
    Incorrect_answers: [ "Block scope","Globally scope", "Peri scope"]
  },
  {
    Topic: "frontend",
    Question: "When is it useful to use an array to represent something?",
    Correct_answer: "When you have a bunch of properties",
    Incorrect_answers: [ "When you can't think of anything else", "When you have a large piece of text", "When you have a collection of things, and the order matters"]
  },
  {
    Topic: "frontend",
    Question: "What does the fetch function return?",
    Correct_answer: "A promise",
    Incorrect_answers: [ "A ball you threw", "An object", "An array"]
  },
  {
    Topic: "frontend",
    Question: "What does querySelector use to select things from the DOM?",
    Correct_answer: "A valid css selector",
    Incorrect_answers: [ "A set of keys", "An object", "Only IDs"]
  },
  {
    Topic: "frontend",
    Question: "We have selected a button, and pointed to it with a variable called button. How do we add a listener so that when the button is clicked, we run the doSomething function?",
    Correct_answer: "button.addEventListener(\"onClick\", doSomething());",
    Incorrect_answers: [ "button.addEventListener(\"click\"", "doSomething());, button.addEventListener(\"click\", doSomething);", "button.addEventListener(\"onClick\", doSomething);"]
  },
  {
    Topic: "frontend",
    Question: "How would you describe the relationship between async/await?",
    Correct_answer: "To use await, you need to be inside an async function",
    Incorrect_answers: [ "When using async, you can add await to make sure it happens", "When using await, you can concatenate async to make sure it happens", "Inside an await function, you always use async"]
  },
  {
    Topic: "frontend",
    Question: "When thinking about semantic HTML:",
    Correct_answer: "Look up if there's a tag which serves the purpose you are looking for, and if there is use that",
    Incorrect_answers: [ "Memorise all HTML tags and use them all", "Use divs for everything", "Don't use tags"]
  },
  {
    Topic: "frontend",
    Question: "What is the difference between let and const?",
    Correct_answer: "You cannot reassign a const, you can reassign a let",
    Incorrect_answers: ["Const is the name of Chris' pet goldfish" ,"You cannot assign a let, but you can assign a const", "You cannot reassign either, but you can change a let to a const"]
  }
 ]


export default data