$('#signup-submit').click(()=>{
    const username1 = $('#username').val()
    const email1 = $('#signup-email').val()
    const pass1 = $('#signup-pass').val()
    $.post('/api/login',{email1,pass1,username1},(user)=>{
        if(user == 'need of user details Not enough'){
            alert('need of user details Not enough')
        }
        else{
            location.reload()
            alert('Congratulations: Account Created')
        }
    })
})