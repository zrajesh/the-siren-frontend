const INIT_STATE = {
    pageRightData: [
        {
            imageUrl: "https://miro.medium.com/max/700/1*Ej8WJLvjwuFntD9Kkc14jg.jpeg",
            title: "How to Use Async/Await in JavaScript",
            paraOne: "Understanding how to handle asynchronous code for the first time can be a bit daunting. Luckily I’m here to explain how it all works so that you can be better prepared when situations like this arise.",
            paraTwo: "Asynchronous is defined as two or more events that occur at different times. We can understand this a bit better by taking a look at the example below:",
            shortPara: "A dive into JavaScript’s powerful tool-",
            category: "Technology",
            date: "/ August 12 2021",
            item: 1
        },
        {
            imageUrl: "https://miro.medium.com/max/3200/1*i8-u-V8LTTbQwTeUwLI_BQ.gif",
            title: "concepts that every JavaScript Programmer must know.",
            paraOne: "This post covers some basic concepts in JavaScript. Every JavaScript programmer must know and master these.",
            paraTwo: "Prototype, Es6(class), IIFE, scope, closures, hoisting etc",
            shortPara: "This post covers some basic concepts-",
            category: "Technology",
            date: "/ August 12 2021",
            item: 2
        },
        {
            imageUrl: "https://miro.medium.com/max/8880/1*0OL08Z0XE7lqqQxVybL1Yg.png",
            title: "The Missing Introduction to React",
            paraOne: "React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.",
            paraTwo: "When React was first introduced, it fundamentally changed how JavaScript frameworks worked. While everyone else was pushing MVC, MVVM, etc, React chose to isolate view rendering from the model representation and introduce a completely new architecture to the JavaScript front-end ecosystem: Flux.",
            shortPara: "Why React is the Top UI Framework in the World?",
            category: "Technology",
            date: "/ August 12 2021",
            item: 3
        },
        {
            imageUrl: "https://miro.medium.com/max/2048/1*gF8oCkYNvktBbAAG-nxYrg.jpeg",
            title: "What is a Pure Function?",
            paraOne: "Pure functions are essential for a variety of purposes, including functional programming, reliable concurrency, and React+Redux apps. But what does “pure function” mean?",
            paraTwo: "A pure function is a function which: Given the same input, will always return the same output. Produces no side effects.",
            shortPara: "Pure functions are essential for a variety of-",
            category: "Technology",
            date: "/ August 12 2021",
            item: 4
        }
    ]
}

const technologyRightReducer = (state = INIT_STATE, action) => {
    return state;
}

export default technologyRightReducer;