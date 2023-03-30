if (localStorage.accessToken) {
    document.getElementById('navProfile').innerHTML = `
            <a class="text-decoration-none ms-3 own--text-accent-2 h3" href="profile.html" >
                <svg width="30" height="30" fill="currentColor">
                    <title>Profile page</title>
                    <use xlink:href="res/sprite.svg#profileicon">
                </svg> <span class="h6">Profile</span>
            </a>`
} else {
    document.getElementById('navProfile').innerHTML = `
            <a class="text-decoration-none ms-3 own--text-accent-2 h3" href="login.html">
                <svg width="30" height="30" fill="currentColor" class="fw-bold">
                     <title>Login page</title>
                    <use xlink:href="res/sprite.svg#dooricon"></use></svg> <span class="h6">Login</span>
            </a>`
}