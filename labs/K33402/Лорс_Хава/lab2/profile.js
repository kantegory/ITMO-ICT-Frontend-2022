async function setupUserProfile() {
    let token = localStorage.getItem('accessToken')
    let user_id = -1
    if (token !== null) {
        user_id = JSON.parse(localStorage.getItem('user')).id
    }

    
    let user_data = await loadUserData(user_id)
    document.getElementById('name').innerHTML = 'FIRST NAME: ' + user_data['name'] 
    document.getElementById('lastname').innerHTML = 'LAST NAME: ' + user_data['lastname']
    document.getElementById('email').innerHTML = 'EMAIL: ' + user_data['email']
    document.getElementById('birthday').innerHTML = 'BIRTHDAY: ' + user_data['birthday']


    if (user_data.hasOwnProperty('data')) {
        data.innerHTML = user_data['data']
    }

}
async function loadUserData(user_id) {
    return fetch(`http://localhost:3000/users/${user_id}`, {
        method: "GET"
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return null
        }
    }).catch(() => null)
}
setupUserProfile()


