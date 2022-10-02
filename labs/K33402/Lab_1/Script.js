

$(document).ready(function (){
    let Search = document.getElementById('search-button');
    let InputData =  document.getElementById('search-box');
    let BookList = document.getElementsByClassName('book-list');
    let ApiUrl= 'https://www.googleapis.com/books/v1/volumes?q=';
    let SearchData;
    let item,author,publisher, booklink, bookImg,title,bookIsbn;
    let OutputList = document.getElementById('list-output');
    let placeholder = "Img/empty_book.jpg";


    $(Search).click(function check(){
        // InputData.style.backgroundColor='red';
        OutputList.innerHTML= '';
        SearchData= $(InputData).val();

        if(SearchData === null || SearchData === ""){
            console.log("Nothing inserted")
            displayError();
        }else{
            $.ajax({
                url: ApiUrl + SearchData,
                dataType: "json",
                success: function (response){
                    console.table(response)
                    if(response.totalItems === 0){
                        alert("No Result From Api! .... try agian ");
                    }else{
                        $("#title").animate({'margin-top': '5px'}, 1000)   //search box animation
                        $(".book-list").css("visibility", "visible");
                        displayResult(response)
                    }
                },
                error: function (){
                    alert("Something Wrong in Ajax")

                }
            });
        }
        $(Search).val("")  //cleaning Search box

        // alert(SearchData)
        // console.log(BookList+InputData.value);
    });
    function displayResult(res){
        for(let i=0 ; i< res.items.length; i+=2){
            item = res.items[i];
            title = item.volumeInfo.title;
            author = item.volumeInfo.authors;
            publisher = item.volumeInfo.publisher;
            bookImg = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeholder ;
            bookIsbn = item.volumeInfo.industryIdentifiers[1].identifier

            item2 = res.items[i+1];
            title2 = item2.volumeInfo.title;
            author2 = item2.volumeInfo.authors;
            publisher2 = item2.volumeInfo.publisher;
            bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : placeholder ;
            bookIsbn2 = item2.volumeInfo.industryIdentifiers.identifier

            OutputList.innerHTML += '<div class="row mt-4">' +
                formatOutput(bookImg,title,author,publisher,bookIsbn)+
                formatOutput(bookImg2,title2,author2,publisher2,bookIsbn2)+
            '</div>';

        }
    }
    // function formatOutput(bookImg, title, author, publisher){
    //     let htmlcard = '<div class="col-6"> ' +
    //         '        <div class="row no-gutters">\n' +
    //         '            <div class="col-4">\n' +
    //         '                <img src="${bookImg}" class="card-image" alt="Not found">\n' +
    //         '            </div>\n' +
    //         '            <div class="col-8">\n' +
    //         '                <div class="card-body">\n' +
    //         '                    <h5 class="card-title">\n' +
    //         '                        ${title}\n' +
    //         '                    </h5>\n' +
    //         '                    <p class="card-text">\n' +
    //         '                        Author: ${Author}\n' +
    //         '                    </p>\n' +
    //         '                    <p class="card-text">\n' +
    //         '                        Publisher: ${publicher}\n' +
    //         '                    </p>\n' +
    //         '                </div>\n' +
    //         '            </div>\n' +
    //         '        </div>\n' +
    //         '    </div>'
    //     return htmlcard;
    // }
    function formatOutput(bookImg, title, author, publisher, bookIsbn) {
        // console.log(title + ""+ author +" "+ publisher +" "+ bookLink+" "+ bookImg)
        let viewUrl = 'book.html?isbn='+bookIsbn; //constructing link for bookviewer
        let htmlCard = `<div class="col-6">
       <div class="card" style="">
         <div class="row">
           <div class="col-md-4">
             <img src="${bookImg}" class="card-img" alt="...">
           </div>
           <div class="col-md-6">
             <div class="card-body">
               <h5 class="card-title">${title}</h5>
               <p class="card-text">Author: ${author}</p>
               <p class="card-text">Publisher: ${publisher}</p>
               <a href="${viewUrl}" class="btn btn-secondary w-10">Read Now</a>
             </div>
           </div>
         </div>
       </div>
     </div>`
        return htmlCard;
    }
    function displayError() {
        alert("search term can not be empty!")
    }
})





// Search.onclick= check();
