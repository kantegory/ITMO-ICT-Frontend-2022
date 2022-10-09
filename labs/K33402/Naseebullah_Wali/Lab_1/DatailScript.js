document.addEventListener("DOMContentLoaded", function(event) {
    let urlapi= 'https://www.googleapis.com/books/v1/volumes?q='
    let author,title,publisher,bookIsdn,imglink, page,language,description;
    let output = document.getElementById('Output-js')
    let inputdata= $("#search-box").val;


    fetch(urlapi+inputdata)
        .then((response) => response.json())
        .then(function (data){
            console.log(data)
          display_data(data);
        } );
    function display_data(data){
        for (let i=0; i <data.items.length; i++){
            item1 = data.items[i];
            title = item1.volumeInfo.title;
            author = item1.volumeInfo.authors;
            publisher = item1.volumeInfo.publisher;
            imglink = (item1.volumeInfo.imageLinks) ? item1.volumeInfo.imageLinks.smallThumbnail : "NOt Aviable";
            page = item1.volumeInfo.pageCount;
            language = item1.volumeInfo.language;
            description = item1.volumeInfo.description;
            if (item1.volumeInfo.industryIdentifiers && item1.volumeInfo.industryIdentifiers[1] ){
                bookIsbn = item1.volumeInfo.industryIdentifiers[1].identifier;
            }
            // console.log(title,author,publisher,page,language,description);

        }
        let arr2 = [publisher,language,author,description,bookIsdn];
        for(let j=0; j< arr2.length; j++){
            if(arr2[j]===undefined){
                arr2[j] = "Not avaiable"
            }

        }
        publisher = arr2[0];
        language = arr2[1];
        author = arr2[2];
        description= arr2[3];
        bookIsdn= arr2[4];
        output.innerHTML += '<div class= "row">' +
            card_design(title,author,publisher,imglink,page,language,description,bookIsdn) + '<hr>' +
            '</div>';
    }



    function card_design(title,author,publisher,imglink,page,language,description,bookIsbn){
        let viewUrl = 'book.html?isbn='+bookIsbn; //constructing link for bookviewer
        let tempalate=  `<section class="container-fluid">
                <div class="row">
                    <div class="col-md-4 ">
                        <img src="${imglink}" alt="Not found" class="img-fluid img-thumbnail ml-5" width="70%" height="auto">
                    </div>
                    <div class="col-md-8">
            <p>
            <span class="font-weight-bold">Title:</span> ${title}</p>
            <p><span class="font-weight-bold">Author:</span> ${author}</p>
            <p><span class="font-weight-bold">Page:</span> ${page}</p>
            <p><span class="font-weight-bold">Language:</span> ${language}</p>
            <p><span class="font-weight-bold">Publisher: </span> ${publisher}</p>
            <p class="text-wrap mr-5"><span class="font-weight-bold">Description:</span> ${description}</p>
            <a href="${viewUrl}" class="btn btn-secondary w-10 mb-5">Read Now</a>
            <a href="index.html" class="btn btn-secondary w-10 mb-5">Back to Search</a>
                    </div>
                </div>
            </section>`
        return tempalate;

    }
});
