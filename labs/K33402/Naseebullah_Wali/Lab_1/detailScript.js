document.addEventListener("DOMContentLoaded", function(event) {

    let API_data;
    // let author,title,publisher,bookIsbn,Img_link, page,language,description;
    let output = document.getElementById('Output-js')
    let params = new URLSearchParams(document.location.search);
    let urlID = params.get("id");
    const URL_API= 'https://www.googleapis.com/books/v1/volumes?q='+ urlID;



    fetch(URL_API)
        .then((response) => response.json())
        .then(function (data){
            console.log(data)
          display_data(data);
        } );
    function display_data(data){
        for (let i=0; i <data.items.length; i++){
            let Item = data.items[i].volumeInfo;
            API_data= {
                title: Item.title || "Not Available",
                author: Item.authors || "Not Available",
                publisher: Item.publisher || "Not Available",
                imgLink: (Item.imageLinks) ? Item.imageLinks.smallThumbnail : "NOt Available",
                page: Item.pageCount || "Not Available",
                language: Item.language || "Not Available",
                description: Item.description || "Not Available",
                bookIsbn: Item.industryIdentifiers && Item.industryIdentifiers[1] ? bookIsbn = Item.industryIdentifiers[1].identifier : "Not Available"

            }
        }

        output.innerHTML += '<div class= "row">' +
            cardDesign(API_data) + '<hr>' +
            '</div>';
    }


    function cardDesign(data){
        let viewUrl = 'book.html?isbn='+data.bookIsbn; //constructing link for book viewer
        return `<section class="container-fluid">
                <div class="row">
                    <div class="col-md-4 ">
                        <img src="${data.imgLink}" alt="Not found" class="img-fluid img-thumbnail ml-5" width="70%" height="auto">
                    </div>
                    <div class="col-md-8">
            <p>
            <span class="font-weight-bold">Title:</span> ${data.title}</p>
            <p><span class="font-weight-bold">Author:</span> ${data.author}</p>
            <p><span class="font-weight-bold">Page:</span> ${data.page}</p>
            <p><span class="font-weight-bold">Language:</span> ${data.language}</p>
            <p><span class="font-weight-bold">Publisher: </span> ${data.publisher}</p>
            <p class="text-wrap mr-5"><span class="font-weight-bold">Description:</span> ${data.description}</p>
            <a href="${viewUrl}" class="btn btn-secondary w-10 mb-5">Read Now</a>
            <a href="index.html" class="btn btn-secondary w-10 mb-5">Back to Search</a>
                    </div>
                </div>
            </section>`;

    }
});

