import {ApiService} from "./ApiService.js";

if(!localStorage.getItem('likes')){
    localStorage.setItem('likes', [])
}

const api = new ApiService()
export let photos = await api.fetchRandomPhotos()

export const likes = () => {
    let data = localStorage.getItem('likes')
    if(data){
        return JSON.parse(data)
    }else{
        return []
    }
}

export const handleLike = (photo) => {
    let data = likes()
    if(!data.find(e => e.id === photo.id)){
        data.push(photo)
        localStorage.setItem('likes', JSON.stringify(data))
    }
}

export const removeLike = (photo) => {
    localStorage.setItem('likes', JSON.stringify((likes().filter(e => e.id !== photo.id))))
    clearAlbum()
    renderAlbum(likes(), removeButton)
}

export const searchBar = () =>{
    const search = document.querySelector('[type="search"]')
    search.addEventListener('keypress', async (e)=>{
        if(e.key==='Enter'){
            await queryFilter(e.target.value.toLowerCase())
        }
    })
}


export const queryFilter = async (filter) => {
    photos = await api.fetchPhotosByQuery(filter)
    clearAlbum()
    renderAlbum(photos, likeButton)
}


export const renderFilters = () => {
    const filters = ["Architecture", "Nature", "Cars", "Fashion", "People", "Animals", "Arts & Culture", "Food & Drinks", "Street Photography"]
    const filtersField = document.getElementsByClassName("categories_filter")
    filters.forEach(filter => {
        const btn = document.createElement('button')
        btn.className = "btn btn-dark"
        btn.textContent = filter
        btn.addEventListener("click", async () => {
            await queryFilter(filter.toLowerCase())
        })
        filtersField[0].appendChild(btn)
    })
}

export const clearAlbum = () => {
    const album = document.getElementById('album')
    while (album.firstChild) {
        album.firstChild.remove();
    }
}

export const likeButton = (photo) => {
    const like_button = document.createElement('button')
    like_button.type="button"
    like_button.className="btn btn-sm btn-outline-secondary"
    like_button.textContent="Like"
    like_button.onclick = handleLike.bind(null, photo)
    return like_button
}

export const removeButton = (photo) => {
    const removeButton = document.createElement('button')
    removeButton.type="button"
    removeButton.className="btn btn-sm btn-outline-secondary"
    removeButton.textContent="Remove"
    removeButton.onclick = removeLike.bind(null, photo)
    return removeButton
}

export const viewPhotoModal = (photo) => {


    const modal = document.querySelector(".myModal")
    modal.style.display = "flex";

    const content = document.createElement("div")
    content.className="myContent"

    const img = document.createElement("img")
    img.src=photo.urls.regular;
    img.className="content"


    const download = document.createElement("a")
    download.href=photo.links.download
    download.className="rounded-0 rounded-bottom btn btn-primary"
    download.textContent = "Download"

    window.onclick = function(event) {
        if (event.target === content || event.target === modal) {
            modal.style.display = "none";
            while (modal.firstChild) {
                modal.firstChild.remove();
            }
        }

    }

    modal.appendChild(content)
    content.appendChild(img)
    content.appendChild(download)

}

export const renderAlbum = (photos, actionButton) => {
    const album = document.getElementById('album')
    const album_div = document.createElement('div')
    album_div.className = "album bg-light"
    const container = document.createElement('div')
    container.className = "container"
    const row = document.createElement('div')
    row.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"

    album.appendChild(album_div)
    album_div.appendChild(container)
    container.appendChild(row)

    photos.forEach(e=>{
        let author_link = e.user.links.html;
        let author_username = e.user.username;
        let preview_link = e.urls.regular;

        const col = document.createElement('div')
        col.className = "col"
        const card = document.createElement('div')
        card.className = "card shadow-sm"
        const photo_img = document.createElement('img')
        photo_img.src = preview_link
        photo_img.alt = "photo"
        photo_img.className = "card-photo"
        photo_img.addEventListener("click", ()=>{
            viewPhotoModal(e)
        })

        const card_body = document.createElement('div')
        card_body.className = "card-body"
        const inner_card_body = document.createElement('div')
        inner_card_body.className = "d-flex justify-content-between align-items-center"
        const author_link_btn = document.createElement('a')
        author_link_btn.href = author_link
        const author_button = document.createElement('button')
        author_button.type="button"
        author_button.className="btn btn-link"
        author_button.textContent=author_username
        author_link_btn.appendChild(author_button)


        card_body.appendChild(inner_card_body)
        inner_card_body.appendChild(actionButton(e))
        inner_card_body.appendChild(author_link_btn)

        card.appendChild(photo_img)
        card.appendChild(card_body)
        col.appendChild(card)
        row.appendChild(col)
    })

    return album
}
