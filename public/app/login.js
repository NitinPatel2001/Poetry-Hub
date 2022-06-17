$('#login-submit').click(()=>{
    const email1 = $('#login-email').val()
    const pass1 = $('#login-pass').val() 
    $.post('/api/login/check',{email1,pass1},(user)=>{
        if(user){
            window.localStorage.username = user._id
            $('#navbar').load('../components/navbar.html',before_start)
            $('#footer').load('../components/footer.html')
            $('#content').load('../components/allposts.html')
        }
        else{
            alert("INVALID EMAIL OR PASSWORD")
        }
    })
})

function before_start() {
    $.get(`/api/login/${window.localStorage.username}`,(user)=>{
        if(user){
            $('#nav-username').text(user.username)   
        }
        else{
            window.localStorage.username = null
            $('#navbar').load('../components/title.html')
            $('#content').load('../components/login.html')
            $('#footer').load('../components/footer.html')
        }
    })
}

$('#signup-submit').click(()=>{
    $('#content').load('../components/signup.html')
    $('#footer').load('../components/footer.html')
})