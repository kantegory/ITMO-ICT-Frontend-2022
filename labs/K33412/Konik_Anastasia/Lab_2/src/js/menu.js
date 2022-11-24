document.addEventListener('DOMContentLoaded', () => {
    let token = localStorage.getItem('accessToken')
    console.log(token)
    if (token !== null) {
        let menu_items = document.getElementsByClassName("signinup_link")
        while (menu_items.length > 0) {
            menu_items.item(0).parentNode.removeChild(menu_items.item(0))
        }
    } else {
        let menu_items = document.getElementsByClassName("profile_link")
        while (menu_items.length > 0) {
            menu_items.item(0).parentNode.removeChild(menu_items.item(0))
        }
    }
})

