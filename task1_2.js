//TASK 1.2Write a program which should do the following:
//Read the content of csvfile from./csvdirectory.
//Use the csvtojsonpackage (https://github.com/Keyang/node-csvtojson) to convert csvfile to jsonobject.
//Write the csvfile content to a new txtfile.Use the following format: https://epa.ms/nodejs19-hw1-ex2.
//Do not load all the content of the csvfile into RAM via stream (read/write file content line by line).
//In case of read/write errors, log them in the console.
//The program should be started via npm script using nodemon(i.e. npm run task2).

const csvFilePath='./csv/Pets-Main View.csv'
const csv=require('csvtojson')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


csv()
.fromFile(csvFilePath)
.then(jsonObj =>{ 
    const csvWriter = createCsvWriter({
        path: 'csv/newPETS.csv',
        header: [
            {id: 'name', title: 'Name'},
            {id: 'Image', title: 'Image'},
            {id: 'DOB', title: 'DOB'},
            {id: 'Animal', title: 'Animal'},
            {id: 'Sex', title: 'Sex'},
            {id: 'Vet Visits', title: 'Vet Visits'},
            {id: 'Medications', title: 'Medications'},
            {id: 'Notes', title: 'Notes'},
        ]
    })
    csvWriter.writeRecords(jsonObj)
    .then(() => {
        console.log('...Done');
    });

})
.catch(err => console.log(err))




