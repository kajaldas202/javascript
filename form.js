document.querySelector('#submit').addEventListener('submit',(e)=>{
    e.preventDefault();

    const inputAll=document.querySelectorAll('.localData input');

    const username=inputAll[0].value;
    const name=inputAll[1].value;
    const email=inputAll[2].value;

    const user = {
        username:username,
        name:name,
        mobile:mobile
    }

    const box=JSON.parse(localStorage.getItem('userlist'))||[];
    box.push(users);
    localStorage.setItem('userlist',JSON.stringify(box));

    show()
})

function show(){
    const user = JSON.parse(localStorage.getItem('userlist'))||[]
    const tabledata=document.querySelector('#tabledata');
    let result="";

    users.forEach((ele, index)=>{
        result +=`
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
    tabledata.innerHTML=result;
}
show()

function trash(id){
    if(confirm('do you want to delete?')){
        const user = JSON.parse(localStorage.getItem('userlist'))||[]
        user.splice(id,1)
        localStorage.setItem('userlist',JSON.stringify(user))

        show()
    }
}