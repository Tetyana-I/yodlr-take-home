const userlist = document.querySelector('#userlist');

function showUserList(arr) {
    for (let i=0; i<arr.length; i++) {
       let user = document.createElement("li");
       user.innerHTML = `
        <dl class="row">
            <dt class="col-sm-6 lead">${arr[i].firstName} ${arr[i].lastName}</dt>
            <dd class="col-sm-3">${arr[i].email}</dd>
            <dd class="col-sm-3">${arr[i].state}</dd>
        </dl>
        `
       user.className = "list-group-item";
       userlist.append(user);
    }
}

async function getUserList() {
    try {
        let res = await axios.get('http://localhost:3000/users');
        showUserList(res.data);
    }
    catch(err) {
        console.log("Couldn't get users", err);
    }
}

getUserList();