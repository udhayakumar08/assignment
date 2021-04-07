"use strict";
//exports.__esModule = true;
var Bookss = /** @class */ (function () {
    function Bookss(_a) {
        var id = _a.id, title = _a.title, name = _a.name, price = _a.price, rating = _a.rating, details = _a.details;
        this.id = id;
        this.title = title;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.details = details;
    }
    return Bookss;
}());
var bookManager = /** @class */ (function () {
    function bookManager() {
    }
    //bookData: Bookss[] = [];
    bookManager.prototype.displayAll = function (bookData) {
        //document.getElementById("tbdy").innerHTML="";
        var template1 = "\n        <tr>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n        </tr>";
        document.getElementById("tbdy").innerHTML = template1;
        for (var i = 0; i < bookData.length; i++) {
            if (bookData[i] != null) {
                var id1 = bookData[i].id;
                var title1 = bookData[i].title;
                var author1 = bookData[i].name;
                var price1 = bookData[i].price;
                var rating1 = bookData[i].rating;
                var des = bookData[i].details;
                var template = "\n                    <tr>\n                        <td>" + id1 + "</td>\n                        <td>" + title1 + "</td>\n                        <td>" + author1 + "</td>\n                        <td>" + price1 + "</td>\n                        <td>" + rating1 + "</td>\n                        <td>" + des + "</td>\n\n                        <td> <button id=\"delete\" onclick=\"delete1(" + id1 + ")\"> delete</button></td>\n                        \n                    </tr>";
                document.getElementById("tbdy").innerHTML += template;
            }
        }
    };
    bookManager.prototype.searchById = function (bookData, searchValue) {
        var result = [];
        for (var i = 0; i < bookData.length; i++) {
            if (bookData[i] != null) {
                if (searchValue == bookData[i].id) {
                    result[i] = bookData[i];
                    console.log(bookData[i]);
                }
            }
        }
        display(result);
    };
    bookManager.prototype.searchByTitle = function (bookData, searchValue) {
        var result = [];
        for (var i = 0; i < bookData.length; i++) {
            if (bookData[i] != null) {
                if (bookData[i].title.toLowerCase().includes(searchValue)) {
                    result[i] = bookData[i];
                }
            }
        }
        display(result);
    };
    bookManager.prototype.searchByAuthor = function (bookData, searchValue) {
        var result = [];
        for (var i = 0; i < bookData.length; i++) {
            if (bookData[i] != null) {
                if (bookData[i].name.toLowerCase().includes(searchValue)) {
                    result[i] = bookData[i];
                }
            }
        }
        display(result);
    };
    return bookManager;
}());
var bookData = [{ id: 1, title: "Fire of wings", name: "kalam", price: 450, rating: 5, details: "motivation" },
    { id: 2, title: "TheLove", name: "someOne", price: 345, rating: 4, details: "Story of love" },
    { id: 3, title: "My truth", name: "indra Gandhi", price: 353, rating: 4, details: "truths" },
    { id: 4, title: "uk", name: "udhay", price: 330, rating: 4, details: "life story" },
    { id: 6, title: "300", name: "akil", price: 33, rating: 3, details: "war " }
];
var manager = new bookManager;
//updatelocalStorage(bookData);
manager.displayAll(getlocalStorageData());
//getlocalStorageData()
function option() {
    var selectedvalues = document.getElementById("searchOptions").value;
    return selectedvalues;
}
function searchByDetails() {
    var optionvalue = option();
    var searchValue = document.getElementById('searchid').value;
    var updatedBooks = getlocalStorageData();
    switch (optionvalue) {
        case "id":
            console.log("search by id");
            manager.searchById(updatedBooks, searchValue);
            break;
        case "title":
            manager.searchByTitle(updatedBooks, searchValue);
            break;
        case "author":
            manager.searchByAuthor(updatedBooks, searchValue);
            break;
    }
}
var ClickCount = 0;
function showall() {
    //let count = 0;
    // localStorage.setItem('count', JSON.stringify(count))
    // let clickCount = JSON.parse(window.localStorage.getItem("count"))
    //if (ClickCount == 0) {
    manager.displayAll(getlocalStorageData());
    // ClickCount++
    // console.log(ClickCount)
    //localStorage.setItem('count', JSON.stringify(count))
}
function add() {
    console.log("i am working (adding)");
    alert("your book  added Successfully ");
    var newid = document.getElementById("newid123").value;
    var newtitle = document.getElementById("newtitle").value;
    var newauthor = document.getElementById("newauthor").value;
    var newprice = document.getElementById("newprice").value;
    var newRating = document.getElementById("rating").value;
    var newDescription = document.getElementById("des").value;
    var booklist = getlocalStorageData();
    booklist.push(new Bookss({ id: newid, title: newtitle, name: newauthor, price: 12, rating: 55, details: "ukk" }));
    //id shows error
    updatelocalStorage(booklist);
}
function updatelocalStorage(bookData) {
    // console.log("updated local storage")
    localStorage.setItem('item', JSON.stringify(bookData));
}
function getlocalStorageData() {
    //console.log("its local storage");
    return (JSON.parse(localStorage.getItem("item")));
}
function delete1(id1) {
    alert(" id no :" + id1 + " this book is deleted successfully");
    var localbooks = getlocalStorageData();
    for (var i = 0; i < localbooks.length; i++) {
        if (localbooks[i] != null) {
            if (id1 == localbooks[i].id) {
                localbooks[i] = null;
                // localStorage.removeItem();
            }
        }
    }
    updatelocalStorage(localbooks);
    showall();
}
function clear1() {
    updatelocalStorage(bookData);
    showall();
}
function display(book) {
    manager.displayAll(book);
}
