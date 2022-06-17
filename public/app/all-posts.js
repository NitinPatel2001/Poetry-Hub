async function getallposts() {
    $.get('/api/posts', (posts) => {
        for (let p of posts) {
            $.get(`/api/login/${p.user}`, (user) => {
                if (user) {
                    $('#all-posts').append(`
                    <div class="col-sm-6 col-md-4 p-2">
                        <div class="card ml-auto mr-auto" style="width: 18rem; height: 25rem">
                            <div class="card-body">
                                <h5 class="card-title">${p.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${user.username}</h6>      
                                <p class="card-text">${p.body.substr(0, 200)}
                                <a id="readmore" data-component="${p._id}" href="#">...read more</a></p>
                                <a data-component="${p._id}" href="#" class="card-link cardlinker">like</a>
                                <a data-component="${p._id}" href="#" class="card-link cardlinker">comment</a>
                            </div>
                        </div>
                    </div>
                `)
                }
                else {
                    window.localStorage.username = null
                    $('#content').load('../components/login.html')
                }
            })
        }
    })
}



$('#all-posts').on('click', '#readmore', function (ev) {
    let id = $(ev.target).attr('data-component')
    $('#content').load('../components/post.html')
    $.get(`/api/posts/user/${id}`, (posts) => {
        if (posts) {
            $.get(`/api/login/${posts.user}`, (user) => {
                if (user) {
                    $('#post').append(`
                        <div id="post-title" class="row">
                            <div class="col">
                                <h1 class="text-center">${posts.title}</h1>
                            </div>
                        </div>
                        <div  class="row">
                            <div class="col">
                                <h3 class="text-center">Author : ${user.username}</h3>
                            </div>
                        </div>
                        <div id="post-content" class="row">
                            <div class="col">
                                <p class="text-center">${posts.body}</p>
                            </div>
                        </div>
                `)
                }
                else {
                    $('#content').load('../components/allposts.html')
                }
            })
        }
        else {
            $('#content').load('../components/allposts.html')
        }
    })

})