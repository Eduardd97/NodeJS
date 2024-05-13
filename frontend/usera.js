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

            const userContainer = document.createElement("div");
            userContainer.classList.add("user-container");

            this.generateRandomUserAvatar(userContainer);

            userContainer.appendChild(a);

            document.body.appendChild(userContainer);
        }
        const footer = document.createElement("footer");

        const copyrightsBox = document.createElement("div");
        copyrightsBox.classList.add("copyrights-box");
        const copyrightYear = document.createElement("span");
        copyrightYear.textContent = "2024-2025";
        const copyrightsIcon = document.createElement("img");
        copyrightsIcon.src = "./icons/copyright-icon.svg";

        copyrightsBox.appendChild(copyrightsIcon);
        copyrightsBox.appendChild(copyrightYear);

        const supportedKozeychukEduard = document.createElement("h3");
        supportedKozeychukEduard.textContent = "Kozeychuk Eduard";

        const supportedBystepItAcademy = document.createElement("h3");
        supportedBystepItAcademy.classList.add("supported-by-step-it-academy");
        supportedBystepItAcademy.textContent = "Step It Aacademy";

        footer.appendChild(copyrightsBox);
        footer.appendChild(supportedKozeychukEduard);
        footer.appendChild(supportedBystepItAcademy);

        document.body.appendChild(footer);
    }

    async generateRandomUserAvatar(userContainer) {
        const data = await fetch("http://127.0.0.1:5500/avatars.json").then((response) =>
            response.json()
        );

        const randomIndex = Math.floor(Math.random() * data.length);
        const userIcon = document.createElement("img");
        userIcon.src = data[randomIndex];

        userContainer.appendChild(userIcon);
    }
}

const application = new App();

application.getUsers().then((users) => application.generateUsersLinks(users));
application.generateRandomUserAvatar();
