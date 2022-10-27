document.addEventListener("DOMContentLoaded", function(event) {

    let API_data,bookIsbn;
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


            // console.log(title,author,publisher,page,language,description);
        }
        // let undefinedProblemArray = [API_data.publisher,API_data.language,
        //     API_data.author,API_data.description];
        //
        // const result = undefinedProblemArray.map((item)=> item || "Not Available")
        // console.log(result)
        // API_data.publisher = result[0];
        // API_data.language = result[1];
        // API_data.author = result[2];
        // API_data.description= result[3];

        output.innerHTML += '<div class= "row">' +
            cardDesign(API_data.title,API_data.author,API_data.publisher,API_data.imgLink,
                API_data.page,API_data.language,API_data.description,API_data.bookIsbn) + '<hr>' +
            '</div>';
    }



    function cardDesign(title,author,publisher,imgLink,page,language,description,bookIsbn){
        let viewUrl = 'book.html?isbn='+bookIsbn; //constructing link for book viewer
        return `<section class="container-fluid">
                <div class="row">
                    <div class="col-md-4 ">
                        <img src="${imgLink}" alt="Not found" class="img-fluid img-thumbnail ml-5" width="70%" height="auto">
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
            </section>`;

    }
});
