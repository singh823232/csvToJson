const express = require("express")
const app = express()
const port = 8000;
let csvToJson = require("convert-csv-to-json");

let books = 'data/books.csv';
let bookoutput = 'books.json';

let authors = 'data/authors.csv';
let authoroutput = 'authors.json';

let magazines = 'data/magazines.csv';
let magazineoutput = 'magazines.json';


const bookData = require('./books.json');
const magazineData = require('./magazines.json');

app.get("/", (req, res) => {
    // csvToJson.generateJsonFileFromCsv(books, bookoutput);
    // csvToJson.generateJsonFileFromCsv(authors, authoroutput);
    // csvToJson.generateJsonFileFromCsv(magazines, magazineoutput);



    for (var i = 0; i < bookData.length; i++) {
        if (bookData[i].isbn == "5554-5545-4518") {
            //return restaurants[i].restaurant.name;
            const bookName = bookData[i].title;
            console.log(bookName)
        }
    }

    for (var i = 0; i < bookData.length; i++) {
        if (bookData[i].isbn == "5554-5545-4518") {
            //return restaurants[i].restaurant.name;
            const bookName = bookData[i].title;
            console.log(bookName)
        }
    }

    let flag = true;
    const books = bookData.find(item => {
        if (item.isbn == "5554-5545-4518") {
            flag = false;
            console.log(item.title);
        }
    })
    if (flag) console.log('Not found');

    //console.log(bookName);

    // for (var i = 0; i < bookData.length; i++) {
    //     const { title, isbn, authors, description } = bookData[i];
    //     const oneBookData = {
    //         Title: title,
    //         Author: toString(authors),
    //         Description: description
    //     }
    //     console.log(oneBookData);
    // }


    // for (var i = 0; i < magazineData.length; i++) {
    //     const { title, isbn, authors, publishedAt } = magazineData[i];
    //     const oneMagazineData = {
    //         Title: title,
    //         Author: authors,
    //         PublishedAt: publishedAt
    //     }
    //     console.log(oneMagazineData);
    // }

    res.send("Success");
});


// app.post("/isbn", (req, res) => {
//     return bookData.find(item => {
//         return item.bookData.isbn == "5554-5545-4518"
//     })
// })

app.post("/printBookByMail", async (req, res) => {
    try {
        const Mail = { email: req.body.email }
        for (var i = 0; i < bookData.length; i++) {
            if (bookData[i].authors == Mail) {
                console.log(bookData[i].title)
            }
        }

    } catch (error) {

    }
})



app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})