
document.addEventListener("DOMContentLoaded", function(event) {
    let Search = document.getElementById('search-button');
    let InputData =  document.querySelector('#search-box');
    let ApiUrl= 'https://www.googleapis.com/books/v1/volumes?q=';
    let SearchData;
    let item,author,publisher, bookImg,title,bookIsbn, pages,bookIsbn2,ida;
    let OutputList = document.getElementById('list-output');
    let placeholder = "Img/empty_book.jpg";



    Search.addEventListener("click", function check(){
        OutputList.innerHTML= '';
        SearchData= InputData.value;
        if(SearchData === null || SearchData === ""){
            alert("Nothing inserted")
            displayError();
        }else{
            fetch(ApiUrl+SearchData)
                .then((response) => response.json())
                .then(function (response){
                    console.log(response)
                    if(response.totalItems === 0){
                        alert("No Result From Api! .... try again ");
                    }else{
                        $("#title").animate({'margin-top': '5px'}, 1000)   //search box animation
                        $(".book-list").css("visibility", "visible");
                        displayResult(response)
                    }
                } );
        }
        $(Search).val("")  //cleaning Search box
    });
    function displayResult(res){
        for(let i=0 ; i< res.items.length; i+=2){
            item = res.items[i];
            ida= item.id;
            title = item.volumeInfo.title;
            author = item.volumeInfo.authors;
            publisher = item.volumeInfo.publisher;
            bookImg = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.smallThumbnail : placeholder ;
            pages = item.volumeInfo.pageCount;
            if (item.volumeInfo.industryIdentifiers && item.volumeInfo.industryIdentifiers[1] ){
                bookIsbn = item.volumeInfo.industryIdentifiers[1].identifier;
            }


            item2 = res.items[i+1];
            ida2=item2.id;
            title2 = item2.volumeInfo.title;
            author2 = item2.volumeInfo.authors;
            publisher2 = item2.volumeInfo.publisher;
            bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.smallThumbnail : placeholder ;
            pages2 = item2.volumeInfo.pageCount;
            if (item2.volumeInfo.industryIdentifiers && item2.volumeInfo.industryIdentifiers[1] ){
                bookIsbn2 = item2.volumeInfo.industryIdentifiers[1].identifier;
            }

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

            // console.log(ida);
            OutputList.innerHTML += '<div class="row mt-4">' +
                formatOutput(bookImg,title,author,publisher,bookIsbn,pages,ida)+
                formatOutput(bookImg2,title2,author2,publisher2,bookIsbn2,pages2,ida2)+
            '</div>';

        }
    }
    function formatOutput(bookImg, title, author, publisher,bookIsbn,pages,ida) {
        // console.log(title + ""+ author +" "+ publisher +" "+ bookLink+" "+ bookImg)
        let viewUrl = 'book.html?isbn='+bookIsbn; //constructing link for bookviewer
        let deatil = 'BookDetailPage.html?id='+ida;
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
               <p class="card-text">ID: ${ida}</p>
               <p class="card-text">Publisher: ${publisher}</p>
               <p class="card-text">Pages: ${pages}</p>
               <a href="${viewUrl}" class="btn btn-secondary w-10">Read Now</a>
               <a target="_blank" href="${deatil}" class="btn btn-secondary w-10">Description</a>
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
    // let params = new URLSearchParams(document.location.search);
    // let titleparams = params.get("title");
    // console.log(titleparams)
})

