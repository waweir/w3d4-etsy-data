// #1
// using the reduce function like we walked through in class to find the average
var total = items.reduce(function(previous, current) {
    return {price: previous.price + current.price}
}, {price: 0})
var avgPrice = (total.price/items.length)
console.log('The average price is $' + Math.round(avgPrice * 100)/100)

// #2
// using filter to find the items with a price between $14 and $18 and logging the result with some text before
var items14To18 = items.filter(function(item) {
    if ((item.price > 14) && (item.price < 18)) {
        return item
    }
})
console.log('Items that cost between $14.00 USD and $18.00 USD:\n', items14To18)

// #3
// using find to search for 'GBP' within each currency_code value and returing the title and price of the item that meets that criteria
var currencyCode = items.find(function(item) {
    if (item.currency_code.includes('GBP')) {
        console.log(item.title + ' costs £' + item.price)
    }
})

// #4
// using find to search within the materials values to find 'wood' and pushing the title of each of those items into a new array. outside of the function, using .join to split each item in the array with a line break and printing out the result
// originally, I just used console.log within the function to print out the title of each item that met the criteria. I switched to pushing to a new array and then using .join so the result would be one larger console.log instead of a console.log for each item
var woodenItemsList = []
var woodenItems = items.find(function(item) {
    if(item.materials.includes('wood')) {
        woodenItemsList.push(item.title)
    }
})
woodenItemsList = woodenItemsList.join('\n')
console.log(woodenItemsList)

// #5
// first, using .join to separate the materials list within each item by a line break
// then finding all items with a list of materials greater than or equal to 8 and pushing the item title, length and materials (list separated by the .join method higher up in the function) with some text into the new array created outside of the function
// using .join on the new array to split the items with two line breaks
// originally, I just used console.log within the function to print out the title of each item that met the criteria. I switched to pushing to a new array and then using .join so the result would be one larger console.log instead of a console.log for each title
var eightMaterialsList = []
var eightMaterials = items.find(function(item) {
    var materials = item.materials.join('\n')
    if(item.materials.length >= 8) {
        eightMaterialsList.push(item.title + ' has ' + (item.materials).length + ' materials: \n' + materials)
    }
})
eightMaterialsList = eightMaterialsList.join('\n\n')
console.log(eightMaterialsList)

// #6
// using the forEach method here instead of find since I am pushing into a new array created outside of the function. I'm realizing that I could have done this or used filter with the previous functions since I changed those to push things into an array instead of returning.
// using an if statement to find the 'i_did' value in the who_made values and pushing each item title into a new array
// logging the lengths of the array plus the text at the end
var makers = []
var whoMade = items.forEach(function(item) {
    if(item.who_made === 'i_did') {
        makers.push(item.title)
    }
})
console.log(makers.length + ' were made by their sellers')







//
