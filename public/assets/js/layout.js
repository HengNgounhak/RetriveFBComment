window.fbAsyncInit = async function() {
    await axios.post('https://retrieve-fb-comment.herokuapp.com/appID').then((result) => {
        if (result.data) {
            // console.log(result.data)
            FB.init({
                appId: result.data,
                cookie: true,
                xfbml: true,
                version: 'v11.0'
            });
        }
    })

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
    // console.log(response)
    if (response.status === 'connected') {
        console.log('Logged in and authenticated');
        setElements(true);
        testAPI();
        // document.location.href = "/page";
    } else {
        console.log('Not authenticated');
        setElements(false);
    }
}


function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function setElements(isLogin) {
    if (isLogin) {
        document.getElementById("btnLogin").style.display = 'none';
        document.querySelector("#list > li").style.display = 'inline';
        document.getElementById("more").style.display = 'block';
        document.getElementById("usericon").style.display = 'block';

    } else {
        document.getElementById("btnLogin").style.display = 'block';
        document.getElementById("list").style.display = 'none';
        document.getElementById("more").style.display = 'none';
        document.getElementById("usericon").style.display = 'none';
    }
}

function logout() {
    FB.logout(function(respone) {
        // console.log(respone);
        if (respone) {
            axios.get('/logout');
            setElements(false);
            document.location.href = "/";
        }
    })
}

function testAPI() {
    FB.api('/me?fields=name,email,picture.type(large)', function(response) {
        // console.log(response);
        if (response && !response.error) {
            document.getElementById('username').innerText = response.name;
            document.getElementById('email').innerText = response.email;
            try {
                getUser(response.name, response.email);
            } catch (error) {
                //nothing
            }
        }
    })
}