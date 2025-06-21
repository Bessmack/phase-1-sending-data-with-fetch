function submitData(userName, userEmail) {
    const toSubmit = {
        name: userName,
        email: userEmail
    };

    const postUser = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(toSubmit)
    };

    return fetch("http://localhost:3000/users", postUser)
        .then(res => {
            return res.json();
        })
        .then(userInfo => {
            const span = document.createElement('span');
            span.textContent = userInfo.id;
            document.body.appendChild(span);
            console.log(userInfo);
        })
        .catch(error => {
            const p = document.createElement('p');
            p.textContent = error.message;
            document.body.appendChild(p);
            console.error(error);
        });
}
submitData("Brian Okuku", "brayo@gmail.com");
