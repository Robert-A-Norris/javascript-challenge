// from data.js
var tableData = data;

// YOUR CODE HERE!



var tbody = d3.select("tbody")

//Create loop to iterte through each row
for (var row1 of tableData) {
    
    var row = tbody.append("tr");
row.append("td").text(row1['datetime']);
row.append("td").text(row1['city']);
row.append("td").text(row1['state']);
row.append("td").text(row1['country']);
row.append("td").text(row1['shape']);
row.append("td").text(row1['durationMinutes']);
row.append("td").text(row1['comments']);
}

/// vizualize one row of data before creating loop
// var row1 = data[0]
// console.log(row1)


// var row = tbody.append("tr");
// row.append("td").text(row1['datetime']);
// row.append("td").text(row1['city']);
// row.append("td").text(row1['state']);
// row.append("td").text(row1['country']);
// row.append("td").text(row1['shape']);
// row.append("td").text(row1['durationMinutes']);
// row.append("td").text(row1['comments']);

///Function to search through datetime column 

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

//Event handler
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(datetime);

    var filteredData = tableData.filter(datetime => data.datetime === inputValue);
    
    // Print the value to the console
    console.log(filteredData);
    
    // Set the span tag in the h1 element to the text
    // that was entered in the form
    d3.select("h1>span").text(inputValue);
    }