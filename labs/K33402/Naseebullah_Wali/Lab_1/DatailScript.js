document.addEventListener("DOMContentLoaded", function(event) {
    let Url_api= 'https://www.googleapis.com/books/v1/volumes?q='
    let author,title,publisher,bookIsbn,Img_link, page,language,description;
    let output = document.getElementById('Output-js')
    let params = new URLSearchParams(document.location.search);
    let UrlID = params.get("id");



    fetch(Url_api+UrlID)
        .then((response) => response.json())
        .then(function (data){
            console.log(data)
          display_data(data);
        } );
    function display_data(data){
        for (let i=0; i <data.items.length; i++){
            let Item = data.items[i].volumeInfo;
            title = Item.title;
            author = Item.authors;
            publisher = Item.publisher;
            Img_link = (Item.imageLinks) ? Item.imageLinks.smallThumbnail : "NOt Aviable";
            page = Item.pageCount;
            language = Item.language;
            description = Item.description;
            if (Item.industryIdentifiers && Item.industryIdentifiers[1] ){
                bookIsbn = Item.industryIdentifiers[1].identifier;
            }
            // console.log(title,author,publisher,page,language,description);

        }
        let arr2 = [publisher,language,author,description,bookIsbn];
        for(let j=0; j< arr2.length; j++){
            if(arr2[j]===undefined){
                arr2[j] = "Not avaiable"
            }
        }
        publisher = arr2[0];
        language = arr2[1];
        author = arr2[2];
        description= arr2[3];
        bookIsbn= arr2[4];
        output.innerHTML += '<div class= "row">' +
            card_design(title,author,publisher,Img_link,page,language,description,bookIsbn) + '<hr>' +
            '</div>';
    }



    function card_design(title,author,publisher,Img_link,page,language,description,bookIsbn){
        let viewUrl = 'book.html?isbn='+bookIsbn; //constructing link for book viewer
        let tempalate=  `<section class="container-fluid">
                <div class="row">
                    <div class="col-md-4 ">
                        <img src="${Img_link}" alt="Not found" class="img-fluid img-thumbnail ml-5" width="70%" height="auto">
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
