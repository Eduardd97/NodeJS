const fs = require("fs");

async function generateUsersPages() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await data.json();

    response.forEach(async (user) => {
        const {
            id,
            name,
            email,
            phone,
            website,
            username,
            company = { name, catchPhrase, bs },
        } = user;

        const fileName = `frontend/users/${name.replace(" ", "-")}.html`;

        const userIcon = await generateRandomUserAvatar();

        const responsePosts = await generateUserPosts();
        const postsContent = responsePosts
            .map((post) => {
                const { userId, title, body } = post;

                let titlePost = "";
                let postBody = "";

                if (userId === id) {
                    titlePost = title;
                    postBody = body;
                } else {
                    const error = "У пользователя нету постов";
                    return ``;
                }

                return `
             <div>
                <h3>${
                    titlePost.charAt(0).toUpperCase() + titlePost.slice(1)
                }</h3>
                <span>${postBody}</span>
            </div>`;
            })
            .join("");

        const content = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${name}</title>
                <link rel="stylesheet" href="./users.css">
                <link rel="stylesheet" href="./user-rsponsive.css">
            </head>
            <body>
                <header>
                    <h1>${name}</h1>
                </header>
                <div class="user-info-box">

                    <img src="${userIcon}" />
                    <div class="user-data-info">
                        <div class="user-info">
                            <h2>${username}</h2>
                            <p>${email}</p>
                            <p>${phone}</p>
                            <p>${website}</p>
                        </div>

                        <section>
                            <h2>Compani</h2>
                            <span>Compani name: <h3>${company.name}</h3></span>
                            <span>Phrase describing the company:<h4>${
                                company.catchPhrase
                            }</h4></span>
                            <span>Hhort description: ${company.bs.toUpperCase()}</span>
                        </section>
                    </div>
                </div>

                <div>
                    <h2 class="users-post-title">Posts</h2>
                </div>

                <div class="posts">
                    ${postsContent}
                </div>
            </body>
        `;

        fs.writeFile(fileName, content, (err) => console.log(err));
    });

    return response;
}

generateUsersPages();

async function generateRandomUserAvatar() {
    const data = await fetch("http://127.0.0.1:5500/avatars.json")
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error loading avatar:", error);
            return error;
        });

    const randomIndex = Math.floor(Math.random() * data.length);
    const userIcon = data[randomIndex];

    return userIcon;
}

async function generateUserPosts() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();

    response.forEach(async (post) => {
        const { userId, title, body } = post;
        const fileTitle = `frontend/post/${title.replace(" ", "-")}.html`;

        const content = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./post.css">
        </head>
        <body>
            <div>
                <span>${title.toUpperCase()}</span>
                <p>${body.charAt(0).toUpperCase() + body.slice(1)}</p>
            </div>
        </body>
        `;

        fs.writeFile(fileTitle, content, (err) => console.log(err));
    });

    return response;
}
