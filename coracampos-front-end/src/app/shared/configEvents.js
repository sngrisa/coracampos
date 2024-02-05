let search = select('search');
on('click', '.navbar-toggle-box', function (e) {
    e.preventDefault()
    search.classList.add('box-collapse-open')
    search.classList.remove('box-collapse-closed')
})

on('click', '.close-box-collapse', function (e) {
    e.preventDefault()
    search.classList.remove('box-collapse-open')
    search.classList.add('box-collapse-closed')
})