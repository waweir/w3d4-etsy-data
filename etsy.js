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
// I understand why the find method was not being used correctly in this function and the next one. I think I realized that I could have switched out the method to be filter or forEach when I finished the homework yesterday, but didn't change it then because it was still displaying the correct answer.
// I changed this function to use the filter method and return the items that include 'wood' in the materials list
// Then, I used the map function to return just the title of the items within the array.  The console.log joins the items in the array with a line break.
var woodenItems = items.filter(function(item) {
    if (item.materials.includes('wood')) {
        return item
    }
})
woodenItems = woodenItems.map(function(item) {
    return item.title
})
console.log(woodenItems.join('\n'))

// #5
// Used the same process as #4 with the execption of adding in the materials variable in the map function.  I added this so I could join the array of materials with a line break and return that value in the final string. I joined the final array with two line breaks in the console.log
var eightMaterials = items.filter(function(item) {
    if(item.materials.length >= 8) {
        return item
    }
})
eightMaterials = eightMaterials.map(function(item) {
    var materials = item.materials.join('\n')
    return (item.title + ' has ' + (item.materials).length + ' materials: \n' + materials)
})
console.log(eightMaterials.join('\n\n'))

// #6
// I found the ... syntax while looking at the reduce documentation on MDN. I searched for the meaning of ... and found that it is called spread syntax. If I understand correctly, spread works like a combination of push and splice (depending on where/how spread syntax is applied within a function). In this case, I only want the spread syntax on previous because that is the item I want to push into a new array. Since current becomes previous with the next loop of the function, there isn't a need to push both previous and current into the new array within the same loop.  I also don't need to specify the .who_made on previous because current finds the correct item for me and previous just pushes it into the new array, I don't need to reassign that to the .who_made key.
// Within the reduce function, after the previous and current calls and push into a new array, I call the filter function on that new array to only return things that include the 'i_did' value.
// I then log the length of of the new filtered array whoMade and concatenate a string after to present the correct text
var whoMade = items.reduce(function(previous, current) {
    return ([...previous, current.who_made]).filter(function(item) {
        return item.includes('i_did')
    })
}, [])
console.log(whoMade.length + ' were made by their sellers')
