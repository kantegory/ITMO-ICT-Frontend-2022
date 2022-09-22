import {ApiService} from "./ApiService.js";
import {fetchHandler} from "./utils.js";

const api = new ApiService()
const photos = await api.fetchRandomPhotos()

const renderAlbum = (photos) => {
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
        console.log(e)
        let author_link = e.user.links.html;
        let author_username = e.user.username;
        let unsplash_link = e.links.html;
        let img_link = e.links.download;
        let preview_link = e.urls.regular;

        const col = document.createElement('div')
        col.className = "col"
        const card = document.createElement('div')
        card.className = "card shadow-sm"
        const photo = document.createElement('a')
        photo.href = img_link
        const photo_img = document.createElement('img')
        photo_img.src = preview_link
        photo_img.alt = "photo"
        photo_img.className = "card-photo"



        photo.appendChild(photo_img)

        const card_body = document.createElement('div')
        card_body.className = "card-body"
        const inner_card_body = document.createElement('div')
        inner_card_body.className = "d-flex justify-content-between align-items-center"
        const like_button = document.createElement('button')
        like_button.type="button"
        like_button.className="btn btn-sm btn-outline-secondary"
        like_button.textContent="Like"

        const author_link_btn = document.createElement('a')
        author_link_btn.href = author_link
        const author_button = document.createElement('button')
        author_button.type="button"
        author_button.className="btn btn-link"
        author_button.textContent=author_username
        author_link_btn.appendChild(author_button)


        card_body.appendChild(inner_card_body)
        inner_card_body.appendChild(like_button)
        inner_card_body.appendChild(author_link_btn)



        card.appendChild(photo)
        card.appendChild(card_body)
        col.appendChild(card)
        row.appendChild(col)
    })
}


renderAlbum(photos)
