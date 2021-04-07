export {}
class Bookss {
    id: number;
    title: string;
    name: string;
    price: number;
    rating: number;
    details: string

    constructor({ id, title, name, price, rating, details }: { id: number; title: string; name: string; price: number; rating: number; details: string }) {
        this.id = id;
        this.title = title;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.details = details;
    }
}

class bookManager {
    //bookData: Bookss[] = [];
    displayAll(bookData) {
        //document.getElementById("tbdy").innerHTML="";
        let template1 = `
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>`;
        document.getElementById("tbdy").innerHTML = template1;

        for (let i = 0; i < bookData.length; i++) {
            if (bookData[i] != null) {
                let id1 = bookData[i].id;
                let title1 = bookData[i].title;
                let author1 = bookData[i].name;
                let price1 = bookData[i].price;
                let rating1 = bookData[i].rating;
                let des = bookData[i].details;
                let template = `
                    <tr>
                        <td>${id1}</td>
                        <td>${title1}</td>
                        <td>${author1}</td>
                        <td>${price1}</td>
                        <td>${rating1}</td>
                        <td>${des}</td>

                        <td> <button id="delete" onclick="delete1(${id1})"> delete</button></td>
                        
                    </tr>`;

                document.getElementById("tbdy").innerHTML += template;
            }
        }
    }
    searchById(bookData, searchValue) {
        let result:Bookss[]=[];

        for (let i = 0; i< bookData.length; i++) {
            if (bookData[i]!= null) {
                if (searchValue == bookData[i].id) {
                    result[i]=bookData[i];
                    console.log(bookData[i])
               }
            }
        }
        display(result)
     
    }

    searchByTitle(bookData, searchValue) {
       
        let result:Bookss[]=[];
        for (let i = 0;i< bookData.length; i++) {
            if (bookData[i]!= null)   {
               if(bookData[i].title.toLowerCase().includes(searchValue)){
                   
                result[i]=bookData[i];
         
            }
        }
       
    }
    display(result)
}

    searchByAuthor(bookData, searchValue) {
        let result:Bookss[]=[];

        for (let i = 0; i<bookData.length; i++) {
            if (bookData[i]!= null){ 
            if(bookData[i].name.toLowerCase().includes(searchValue)) {
                result[i]=bookData[i];
              
            }
        }
        }
        display(result)
    }

}







let bookData: Bookss[] = [{ id: 1, title: "Fire of wings", name: "kalam", price: 450, rating: 5, details: "motivation" },
{ id: 2, title: "TheLove", name: "someOne", price: 345, rating: 4, details: "Story of love" },
{ id: 3, title: "My truth", name: "indra Gandhi", price: 353, rating: 4, details: "truths" },
{ id: 4, title: "uk", name: "udhay", price: 330, rating: 4, details: "life story" },
{ id: 6, title: "300", name: "akil", price: 33, rating: 3, details: "war " }

]

let manager = new bookManager;

//updatelocalStorage(bookData);
manager.displayAll(getlocalStorageData());
//getlocalStorageData()


function option() {
    var selectedvalues = (<HTMLInputElement>document.getElementById("searchOptions")).value;
    return selectedvalues;
}
function searchByDetails() {

    var optionvalue = option();
    let searchValue = (<HTMLInputElement>document.getElementById('searchid')).value;
    let updatedBooks = getlocalStorageData();


    switch (optionvalue) {
        case "id":
            
            console.log("search by id")
            manager.searchById(updatedBooks, searchValue)
            break;
        case "title":
            manager.searchByTitle(updatedBooks, searchValue);
            break;
        case "author":
            manager.searchByAuthor(updatedBooks, searchValue);
            break;
    }

}
let ClickCount = 0;
function showall() {

    //let count = 0;
    // localStorage.setItem('count', JSON.stringify(count))
    // let clickCount = JSON.parse(window.localStorage.getItem("count"))

    //if (ClickCount == 0) {
    manager.displayAll(getlocalStorageData())
    // ClickCount++
    // console.log(ClickCount)
    //localStorage.setItem('count', JSON.stringify(count))

}
function add() {
    console.log("i am working (adding)")
    alert(`your book  added Successfully `)
    let newid = (<HTMLInputElement>document.getElementById("newid123")).value;
    let newtitle = (<HTMLInputElement>document.getElementById("newtitle")).value;
    let newauthor = (<HTMLInputElement>document.getElementById("newauthor")).value;
    let newprice = (<HTMLInputElement>document.getElementById("newprice")).value;
    let newRating = (<HTMLInputElement>document.getElementById("rating")).value;
    let newDescription = (<HTMLInputElement>document.getElementById("des")).value;

    var booklist = getlocalStorageData();
    booklist.push(new Bookss({ id: newid, title: newtitle, name: newauthor, price: 12, rating: 55, details: "ukk" }))
    //id shows error

    updatelocalStorage(booklist)
}

function updatelocalStorage(bookData) {
   // console.log("updated local storage")
    localStorage.setItem('item', JSON.stringify(bookData))
}

function getlocalStorageData() {
    //console.log("its local storage");
    return (JSON.parse(localStorage.getItem("item")));
}

 function delete1(id1) {


    alert(` id no :${id1} this book is deleted successfully`)
    let localbooks = getlocalStorageData();



    for (let i = 0; i < localbooks.length; i++) {
        if (localbooks[i] != null) {
            if (id1 == localbooks[i].id) {
               localbooks[i] = null;
              // localStorage.removeItem();
            }
        }
    }

    updatelocalStorage(localbooks);
    showall()
}

function clear1() {
    updatelocalStorage(bookData)
    showall()
}
function display(book:Bookss[]) {
    manager.displayAll(book)
    
}
