const fs = require("fs");

async function generateUsersPages() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await data.json();

    response.forEach((user) => {
        const { name, email, phone, website } = user;

        const fileName = `frontend/users/${name.replace(" ", "-")}.html`;
        const content = `
            <div>
                <h2>${name}</h2>
                <p>${email}</p>
                <p>${phone}</p>
                <p>${website}</p>
            </div>
        `;

        fs.appendFile(fileName, content, (err) => console.log(err));
    });
}

generateUsersPages();