
document.addEventListener("DOMContentLoaded", function(event) {
// $(document).ready(function (){
    let Search = document.getElementById('search-button');
    let InputData =  document.getElementById('search-box');
    // let BookList = document.getElementsByClassName('book-list');
    let ApiUrl= 'https://www.googleapis.com/books/v1/volumes?q=';
    let SearchData;
    let item,author,publisher, bookImg,title,bookIsbn, pages,bookIsbn2;
    let OutputList = document.getElementById('list-output');
    let placeholder = "Img/empty_book.jpg";

    Search.addEventListener("click", function check(){
    // $(Search).click(function check(){
        // InputData.style.backgroundColor='red';
        OutputList.innerHTML= '';
        SearchData= $(InputData).val();

        if(SearchData === null || SearchData === ""){
            alert("Nothing inserted")
            displayError();
        }else{
            fetch(ApiUrl+SearchData)
                .then((response) => response.json())
                .then(function (response){
                    console.log(response)


                    if(response.totalItems === 0){
                        alert("No Result From Api! .... try agian ");
                    }else{
                        $("#title").animate({'margin-top': '5px'}, 1000)   //search box animation
                        $(".book-list").css("visibility", "visible");
                        displayResult(response)
                    }
                } );
            // $.ajax({
            //     url: ApiUrl + SearchData,
            //     dataType: "json",
            //     success: function (response){
            //         // console.table(response)
            //         if(response.totalItems === 0){
            //             alert("No Result From Api! .... try agian ");
            //         }else{
            //             $("#title").animate({'margin-top': '5px'}, 1000)   //search box animation
            //             $(".book-list").css("visibility", "visible");
            //             displayResult(response)
            //         }
            //     },
            //     error: function (){
            //         alert("Something Wrong in Ajax")
            //
            //     }
            // });
        }
        $(Search).val("")  //cleaning Search box

        // alert(SearchData)
        // console.log(BookList+InputData.value);
    });
    function displayResult(res){
        for(let i=0 ; i< res.items.length; i+=2){

            // console.log(bookIsbn)
            item = res.items[i];
            title = item.volumeInfo.title;
            author = item.volumeInfo.authors;
            publisher = item.volumeInfo.publisher;

            if (item.volumeInfo.industryIdentifiers && item.volumeInfo.industryIdentifiers[1] ){
                bookIsbn = item.volumeInfo.industryIdentifiers[1].identifier;
            }
            // bookIsbn = item.volumeInfo.industryIdentifiers[0].identifier;
            bookImg = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.smallThumbnail : placeholder ;
            pages = item.volumeInfo.pageCount;


            item2 = res.items[i+1];
            title2 = item2.volumeInfo.title;
            author2 = item2.volumeInfo.authors;
            publisher2 = item2.volumeInfo.publisher;

            if (item2.volumeInfo.industryIdentifiers && item2.volumeInfo.industryIdentifiers[1] ){
                bookIsbn2 = item2.volumeInfo.industryIdentifiers[1].identifier;
            }
            // bookIsbn2 = item2.volumeInfo.industryIdentifiers[0].identifier;
            bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.smallThumbnail : placeholder ;
            pages2 = item2.volumeInfo.pageCount;

            let arr = [publisher,publisher2,author,author2,pages,pages2];
            for(let i=0; i< arr.length; i++){
                if(arr[i]===undefined){
                    arr[i] = "Not avaiable"
                }

            }
            publisher = arr[0];
            publisher2 = arr[1];
            author = arr[2];
            author2= arr[3];
            pages= arr[4];
            pages2= arr[5];

            // if(publisher=== undefined ) {
            //     publisher = "Publisher is not avaiable"
            // }
            // if (author === undefined ){
            //     author = "Author is not avaiable";
            // }

            OutputList.innerHTML += '<div class="row mt-4">' +
                formatOutput(bookImg,title,author,publisher,bookIsbn,pages)+
                formatOutput(bookImg2,title2,author2,publisher2,bookIsbn2,pages2)+
            '</div>';

        }
    }
    function formatOutput(bookImg, title, author, publisher,bookIsbn,pages) {
        // console.log(title + ""+ author +" "+ publisher +" "+ bookLink+" "+ bookImg)
        let viewUrl = 'book.html?isbn='+bookIsbn; //constructing link for bookviewer
        let htmlCard = `<div class="col-6">
       <div class="card" style="">
         <div class="row">
           <div class="col-md-4">
             <img src="${bookImg}" class="card-img-top" alt="...">
           </div>
           <div class="col-md-6">
             <div class="card-body">
               <h5 class="card-title">${title}</h5>
               <p class="card-text">Author: ${author}</p>
               <p class="card-text">Publisher: ${publisher}</p>
               <p class="card-text">Pages: ${pages}</p>
               <a href="${viewUrl}" class="btn btn-secondary w-10">Read Now</a>
               <a href="BookDetailPage.html" class="btn btn-secondary w-10">Description</a>
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

