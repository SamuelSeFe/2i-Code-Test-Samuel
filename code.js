// Create a function that sorts a numbered list in descending order
// Note that for names of variables and functions we followe the lower Camel Case naming convention

function sortUniqueNumberedList(numberedList) {
    
    // First we check that the list is not emptied, otherwise we return the empty array
    if (numberedList.length === 0)
    return numberedList;

    // Now we sort the list (in descending order) using in-built methods in JS
    let array = numberedList.sort(function (a,b) { return b - a; });

  // We create a new list to add our unique numbers (we already add the first from our numbered list as this number will never be a duplicate itslef)  
  let sortedList = [array[0]];
    
  // Now we can loop through each element in our sorted list of numbers starting from index 1
    for (let i = 1; i < array.length; i++) {

        // We can now compare through the loop any unique elements and add them to our new sortedList
        if (array[i-1] !== array[i]) {
            sortedList.push(array[i]);
        }
    }

    return sortedList;
}

// Check to see if the sorting function works
console.log(sortUniqueNumberedList([45, 28, 39, 60, 85, 93, 24, 45, 60, 85, 24]))
console.log(sortUniqueNumberedList(['54', '82', '93', '6', '58', '39', '42', '54', '6', '58', '42']))