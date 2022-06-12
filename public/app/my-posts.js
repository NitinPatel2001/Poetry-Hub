function getallpostsbyid() {
    id1 = window.localStorage.username
    let link = `/api/posts/${id1}`
    $.get(link, (posts) => {
        for (let p of posts) {
            $.get(`/api/login/${p.user}`,(user)=>{
                if(user){
                    $('#all-posts').append(`
                    <div class="col-sm-6 col-md-4 p-2">
                        <div class="card ml-auto mr-auto" style="width: 18rem; height: 25rem">
                            <div class="card-body">
                            <h5 class="card-title">${p.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${user.username}</h6>      
                            <p class="card-text">${p.body.substr(0, 200)}
                            <a href="#">...read more</a></p>
                            <a href="#" class="card-link">like</a>
                            <a href="#" class="card-link">comment</a>
                            </div>
                        </div>
                    </div>
                `)
                }
                else{
                    window.localStorage.username = null
                    $('#content').load('../components/login.html')
                }
            })
        }
    })
}