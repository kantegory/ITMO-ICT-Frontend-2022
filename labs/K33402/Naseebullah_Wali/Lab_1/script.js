
document.addEventListener("DOMContentLoaded", function(event) {
    let search = document.getElementById('search-button');
    let inputData =  document.querySelector('#search-box');
    const API_URL= 'https://www.googleapis.com/books/v1/volumes?q=';
    let searchData;
    const notFound= "Not Available";
    let outputList = document.getElementById('list-output');
    let placeHolder = "Img/empty_book.jpg";



    search.addEventListener("click", function check(){
        outputList.innerHTML= '';
        searchData= inputData.value;
        if(searchData === null || searchData === ""){
            alert("Nothing inserted")
            displayError();
        }else{
            fetch(API_URL+searchData)
                .then((response) => response.json())
                .then(function (response){
                    console.log(response)
                    if(response.total === 0){
                        alert("No Result From Api! .... try again ");
                    }else{
                        $("#title").animate({'margin-top': '5px'}, 1000)   //search box animation
                        $(".book-list").css("visibility", "visible");
                        displayResult(response)
                    }
                } );
        }
        $(search).val("")  //cleaning search box
    });
    function displayResult(res){
        for(let i=0 ; i< res.items.length; i+=2){
            item = res.items[i];
            searchData= {
                id_1: item.id,
                title: item.volumeInfo.title || notFound,
                author: item.volumeInfo.authors || notFound,
                publisher: item.volumeInfo.publisher || notFound,
                bookImg: (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.smallThumbnail : placeHolder,
                pages: item.volumeInfo.pageCount || notFound,
                bookIsbn: item.volumeInfo.industryIdentifiers && item.volumeInfo.industryIdentifiers[1] ? item.volumeInfo.industryIdentifiers[1].identifier : notFound,
            }
            item2 = res.items[i+1];
            let searchData_2={
                id_2: item2.id || notFound,
                title2: item2.volumeInfo.title || notFound,
                author2: item2.volumeInfo.authors || notFound,
                publisher2: item2.volumeInfo.publisher || notFound,
                bookImg2: (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.smallThumbnail : placeHolder,
                pages2: item2.volumeInfo.pageCount || notFound,
                bookIsbn2: item2.volumeInfo.industryIdentifiers && item2.volumeInfo.industryIdentifiers[1] ? bookIsbn2 = item2.volumeInfo.industryIdentifiers[1].identifier : notFound,
            }

            outputList.innerHTML += '<div class="row mt-4">' +
                formatOutput(searchData.bookImg,searchData.title,searchData.author,searchData.publisher,
                    searchData.bookIsbn,searchData.pages,searchData.id_1)+
                formatOutput(searchData_2.bookImg2,searchData_2.title2,searchData_2.author2,searchData_2.publisher2,
                    searchData_2.bookIsbn2,searchData_2.pages2,searchData_2.id_2)+
            '</div>';

        }
    }
    function formatOutput(bookImg, title, author, publisher,bookIsbn,pages,ida) {
        let viewURL = 'book.html?isbn='+bookIsbn; //constructing link for bookviewer
        let info = 'bookDetailPage.html?id='+ida;
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
<!--               <p class="card-text">ID: ${ida}</p>-->
               <p class="card-text">Publisher: ${publisher}</p>
               <p class="card-text">Pages: ${pages}</p>
               <a href="${viewURL}" class="btn btn-secondary w-10">Read Now</a>
               <a target="_blank" href="${info}" class="btn btn-secondary w-10">Description</a>
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

