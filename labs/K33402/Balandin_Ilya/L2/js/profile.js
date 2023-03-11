async function loadPage() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user){
        window.location.href = 'http://localhost:9999/front/L2/index.html'
    }
    document.getElementById('name').textContent = user['name']
    document.getElementById('surname').textContent = user['surname']
    document.getElementById('email').textContent = user['email']
    document.getElementById('position').textContent = user['position']
}


document.addEventListener('DOMContentLoaded', () => {
    loadPage()
})