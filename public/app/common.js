$(() => {
    // $('#navbar').load('../components/navbar.html', before_start)
    // $('#footer').load('../components/footer.html')
    if(window.localStorage.username != 'null'){
        console.log("Normal null")
        $.get(`/api/login/${window.localStorage.username}`,(user)=>{
            if(user){
                $('#navbar').load('../components/navbar.html',before_start)
                $('#footer').load('../components/footer.html')
                $('#content').load('../components/allposts.html')
            }
            else{
                window.localStorage.username = null
                $('#content').load('../components/login.html')
            }
        })
    }
    else{
        $('#content').load('../components/login.html')
    }
})

function before_start() {
    $.get(`/api/login/${window.localStorage.username}`,(user)=>{
        if(user){
            $('#nav-username').text(user.username)   
        }
        else{
            window.localStorage.username = null
            $('#content').load('../components/login.html')
        }
    })
}

// function before_start() {
//     window.curr_user = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
//     if (!curr_user) {
//         $.post('/api/users', {}, (user) => {
//             if (user) {
//                 window.localStorage.user = JSON.stringify(user)
//                 curr_user = user
//                 $('#nav-username').text(curr_user.username)
//             }
//         })
//     }
//     else {
//         $('#nav-username').text(curr_user.username)
//     }
// }