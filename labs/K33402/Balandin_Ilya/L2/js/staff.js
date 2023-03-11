function getRow({email, name, surname, position, id}) {
    let result = `<tr>
            <th scope="row">${id}</th>
            <td>${name}</td>
            <td>${surname}</td>
            <td>${position}</td>
            <td>${email}</td>`
    if (JSON.parse(localStorage.getItem('user')).position === 'moderator') {
        result += `<td>
<button class="btn btn-primary" onclick="fillStaffModal('${name}', '${surname}', '${id}')" > Edit

</button>
            
            </td>`
    }
    result += `</tr>`
    return result
}

async function loadStaff(event) {
    const response = await fetch('http://localhost:3000/users', {
        method: "GET", headers: {'Content-Type': 'application/json'}
    })

    const users = await response.json()
    for (const user of users) {
        document.getElementById('staffTable').innerHTML += getRow(user)
    }
}

function fillStaffModal(name, surname, id) {
    document.getElementById('editModalLabel').textContent = `${name} ${surname}`
    document.getElementById('staffIdModal').textContent = id
}

async function dismissModal() {
    const id = document.getElementById('staffIdModal').textContent
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE", headers: {'Content-Type': 'application/json'}
    })
    const responseJSON = await response.json()
    window.location.reload()
}

async function saveModal() {
    const id = document.getElementById('staffIdModal').textContent
    const data = {}
    data['position'] = document.getElementById('positionModal').value
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)
    })
    const responseJSON = await response.json()
    window.location.reload()
}

document.addEventListener('DOMContentLoaded', () => {
    loadStaff()
})