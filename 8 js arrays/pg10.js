[ "Dax", "Jahver", "Kandra" ].forEach(function (item, index, wholeArray) {
    console.log("Item: " + item);
    console.log("Index: " + index);
    console.log("Array: " + wholeArray);
});

var rect = [
    { length: 5, width: 3 },
    { length: 10, width: 4 },
    { length: 6, width: 6 },
    { length: 7, width: 2 },
    { length: 8, width: 5 }
];

var assignArea = function(rect) {
    rect.area = rect.length * rect.width;
};

var showInfo = function(rect) {
    console.log("Length: " + rect.length);
    console.log("Width: " + rect.width);
    console.log("Area: " + rect.area);
};

rect.forEach(function(rect) {
    assignArea(rect);
    showInfo(rect);
});

console.log(rect);