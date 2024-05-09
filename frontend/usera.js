class App {
    constructor() {}

    async getUsers() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await data.json();

        return response;
    }

    generateUsersLinks(users) {
        for (const user of users) {
            const a = document.createElement("a");
            a.href = `users/${user.name.replace(" ", "-")}.html`;
            a.textContent = user.name;

            document.body.appendChild(a);
        }
    }
}

const application = new App();

application.getUsers().then((users) => application.generateUsersLinks(users));
