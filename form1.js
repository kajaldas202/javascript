document.querySelector('#submit').addEventListener('submit', (e) => {
    e.preventDefault();

    const inputAll = document.querySelectorAll('.localData input')


    const username = inputAll[0].value;
    const name = inputAll[1].value;
    const email = inputAll[2].value;

    const users = {
        username: username,
        name: name,
        email: email
    }

    const box = JSON.parse(localStorage.getItem('userlist')) || []
    box.push(users)
    localStorage.setItem('userlist', JSON.stringify(box));

    show()

})

//delete operations
function trash(id) {
    if (confirm('do you want to delete this?')) {
        const user = JSON.parse(localStorage.getItem('userlist')) || []
        user.splice(id, 1)
        localStorage.setItem('userlist', JSON.stringify(user))

        show()
    }
}

