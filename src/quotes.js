const quote = [
    {   id:1,
        text:'some randome text', 
        author: 'author name'
    },
    {
        id:1,
        text: 'asdasd',
        author: 'author name'
    },
    {
        id:2,
        text: 'asdasd',
        author: 'author name'
    },
    {
        id:3,
        text: 'asdasd',
        author: 'author name'
    },
    {
        id:4,
        text: 'asdasd',
        author: 'author name'
    },
    {
        id:5,
        text: 'asdasd',
        author: 'author name'
    },
    {
        id:6,
        text: 'asdasd',
        author: 'author name'
    }
];

var quoteLen = quote.length + 1;
var randomeNum = Math.floor(Math.random() * quoteLen);


var randomText = quote[randomeNum].text;
var randomAuthor = quote[randomeNum].author;

console.log(randomText);
console.log(randomAuthor);