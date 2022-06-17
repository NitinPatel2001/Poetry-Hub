$(() => {
    // $('#navbar').load('../components/navbar.html', before_start)
    // $('#footer').load('../components/footer.html')
    if (window.localStorage.username != null && window.localStorage.username.length == 24) {
        $.get(`/api/login/${window.localStorage.username}`, (user) => {
            if (user) {
                $('#navbar').load('../components/navbar.html', before_start)
                $('#footer').load('../components/footer.html')
                $('#content').load('../components/allposts.html')
            }
            else {
                window.localStorage.username = null
                $('#navbar').load('../components/title.html')
                $('#content').load('../components/login.html')
                $('#footer').load('../components/footer.html')
            }
        })
    }
    else {
        $('#navbar').load('../components/title.html')
        $('#content').load('../components/login.html')
        $('#footer').load('../components/footer.html')
    }
})

function before_start() {
    $.get(`/api/login/${window.localStorage.username}`, (user) => {
        if (user) {
            $('#nav-username').text(user.username)
        }
        else {
            window.localStorage.username = null
            $('#navbar').load('../components/title.html')
            $('#content').load('../components/login.html')
            $('#footer').load('../components/footer.html')
        }
    })
}

// $(window).on('beforeunload',function(){
//    window.localStorage.username
// });