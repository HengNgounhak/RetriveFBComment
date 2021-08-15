// import { logout } from './layout';

// axios.get('/getSession').then((result) => {
//     if (result.data) {
//         document.getElementById("btnLogin").style.display = 'none';
//         document.querySelector("#list > li").style.display = 'inline';
//         document.getElementById("more").style.display = 'block';
//         document.getElementById("usericon").style.display = 'block';
//         document.getElementById('username').innerText = result.data.username;
//         document.getElementById('email').innerText = result.data.email;
//     } else {
//         document.getElementById("btnLogin").style.display = 'block';
//         document.getElementById("list").style.display = 'none';
//         document.getElementById("more").style.display = 'none';
//         document.getElementById("usericon").style.display = 'none';
//     }
// }).catch((err) => {
//     console.log(err);
// })
// console.log(aaa);

// if (aaa) {
//     alert("hi")
// }

async function getUser(username, email) {
    await axios.post('https://localhost:3000/user', {
        username: username,
        email: email
    }).then((result) => {
        if (result.data) {
            document.location.href = "/page";
        }
    }).catch((e) => {
        console.log(e);
    })
}

// console.log(document.getElementsByClassName('_5h0o _8kto').innerText);