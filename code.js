// Create a function that sorts a numbered list in descending order
// Note that for names of variables and functions we followe the lower Camel Case naming convention

function sortUniqueNumberedList(numberedList) {
    
    // First we check that the list is not emptied, otherwise we return the empty array
    if (numberedList.length === 0)
    return numberedList;

    // Now we sort the list (in descending order) using in-built methods in JS
    arr = numberedList.sort(function (a,b) { return b - a; });

    return arr;
}

// Check to see if the sorting function works
console.log(sortUniqueNumberedList([1,2,3,4,5]))