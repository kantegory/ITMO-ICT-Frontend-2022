class BookApi {
    constructor(instance) {
        this.API = instance
    }

    getBooksForRoom = async (data) => {
        return this.API({
            url: '/api/all_book/?room=' + data
        })
    }

    createBook = async (data) => {
        return this.API({
            method: 'POST',
            url: '/api/create_book/',
            data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(function (error) {
            if (error.toJSON().message){
                alert("Неверный данные")
            }
        });
    };

    deleteBook = async (data) => {
        return this.API({
            method: 'DELETE',
            url: '/api/delete_book/' + data
        })
    }

}

export default BookApi
