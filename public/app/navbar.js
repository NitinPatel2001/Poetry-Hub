let navlinks = $('.navbar-nav .nav-link')

navlinks.click((ev)=>{
    const components_url = `../components/${$(ev.target).attr('data-component')}.html`
    $('#content').load(components_url)
})

$('#SignOut').click(()=>{
    window.localStorage.username = null
    location.reload()
})