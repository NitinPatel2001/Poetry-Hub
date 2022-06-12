$('#sub-btn').click((ev)=>{
    let title1 = $('#Input1').val()
    let body1 = $('#Input2').val()
    let id1 = window.localStorage.username
    $.post('./api/posts',{title1,body1,id1},(post)=>{
        if(post == 'need for post is not enough'){
            alert('need for post is not enough')
        }
    })
})