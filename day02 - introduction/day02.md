Exercises: 

What is React?
React is a javascript library based in components.
What is a library?
A library is a group of functions who offer interfaces users.
What is a single page application?
A single page application is a web applications who executes all of content in a single page.
What is a component ?
A component is a reusable piece of code on a web page.
What is the latest version of React?
The lastest version of React is v18.0.0
What is DOM?
DOM is a Document Object Model, using in a web.
What is React Virtual DOM?
React Virtual DOM is a programming concept where a virtual representation is kept in memory and is synchronized with the DOM.
What does a web application or a website(composed of) have?
A web application or a website are composed with many components.


Exercises: Why React?
Why did you chose to use react?

    You should choose react because it offers:
    -fast
    -modular
    -scalable
    -flexible
    -big community and popular
    -open source
    -high job opportunity
What measures do you use to know popularity ?
    -React was create for Facebook
    -You can use Github to know popularity
What is more popular, React or Vue ?
    -React is more popular.


Exercises: JSX

What is an HTML element?
    A HTML element is a piece of code executed in an .html 
How to write a self closing HTML element?
    -You must use a <>
What is an HTML attribute? Write some of them
    -An html attribute is a values that allow modificates html elements.
What is JSX?
    -JSX is an extension of javascript sintaxis. Its used in react.
What is babel?
    -Babel is a javascript library, used with React-
What is a transpiler?
    -A transpiler is a special type of compiler. Traduce from a one language to another.


Exercises: JSX Elements
What is a JSX element?
    -A JSX element is a abtraction who allows write HTML sintaxis in a javascript code.
Write your name in a JSX element and store it in a name variable
    const name = <h1> Tomás </h1>
Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
    const user = <div>
        <h1>{name}</h1>
        <p>Country: Mercedes</p>
        <p>Title : React developer </p>        
        <p>Gender : male</p>        
        <p>email : vazquezt2018@gmail.com</p>
        <p>Phone: +5492324681817</p>
    </div>
Write a footer JSX element
    const footer = <footer><p>Copyright: 2022</p></footer>



Exercises: Inline Style
Create a style object for the main JSX
    const mainStyle = {
        backgroundColor : #222,
    }
Create a style object for the footer and app JSX
    const footerStyle = {
        fontSize: 14px,
    }

    const appStyle = {
        backgroundColor: white,
        color: black,
        textAlign: center,
    }
Add more styles to the JSX elements

    const headerStyle = {
        textAlign: center,
        fontSize: 18px,
    }


Exercises: Internal Styles
Apply different styles to your JSX elements (realized)