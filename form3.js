document.querySelector('#submit').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputAll = document.querySelectorAll('.localData input');

    const username = inputAll[0].value;
    const email = inputAll[1].value;
    const mobile = inputAll[2].value;

    const users = {
        username: username,
        email: email,
        mobile: mobile
    };
 
    const box = JSON.parse(localStorage.getItem('userlist')) || [];
    box.push(users);
    localStorage.setItem('userlist', JSON.stringify(box));

    show();
});

function show() {
    const users = JSON.parse(localStorage.getItem('userlist')) || [];
    const tabledata = document.querySelector('#tabledata');
    let result = "";

    users.forEach((ele, index) => {
        result += `
        <tr>
            <td scope="row">${index + 1}</td>
            <td>${ele.username}</td>
            <td>${ele.email}</td>
            <td>${ele.mobile}</td>
            <td>
                <button class="btn btn-warning" onclick="trash(${index})">delete</button>
                <button class="btn btn-danger" onclick="update(${index})">edit</button>
            </td>
        </tr>
        `;
    });

    tabledata.innerHTML = result;
}
show()

// delete function call here
function trash(id){
    if(confirm('do you want to delete this?')){
        const user =JSON.parse(localStorage.getItem('userlist'))
        user.splice(id,1)
        localStorage.setItem('userlist',JSON.stringify(user))
        
        show()
    }
}

// update function call here
// function update(id){
//     document.querySelector('#update').style.display="block"
//     document.querySelector('#trash').style.display="none"
//     const user = JSON.parse(localStorage.getItem('userlist'))
//     const singleuser= user [id];
//     const inputAll=document.querySelectorAll('.localData input')
//     inputAll[0].value=singleuser.username
//     inputAll[1].value=singleuser.email
//     inputAll[2].value=singleuser.mobile
    // currentIndex = id;
//}

// function clearForm() {
//     const inputAll = document.querySelectorAll('.localData input');
//     inputAll[0].value = '';
//     inputAll[1].value = '';
//     inputAll[2].value = '';
// }

// function updateEntry() {
//     document.querySelector('#submit').dispatchEvent(new Event('submit'));
    
//     show()
// }



// document.querySelector('#update')
// .addEventListener('click',(e)=>{
//     const userlist=JSON.parse(localStorage.getItem('userlist'))
//     const inputAll=document.querySelectorAll('.localData input')
    
    
//     const username= inputAll[0].value;
//     const email= inputAll[1].value;
//     const mobile= inputAll[2].value;

//     const user={
//         username,
//         email,
//         mobile
//     }
//     userlist.splice(id,1,user)
//     console.log(userlist)
//     localStorage.setItem('userlist',JSON.stringify(userlist))

//     // window.location.reload()
//     show()
// })