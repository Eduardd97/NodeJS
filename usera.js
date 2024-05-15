class App {
    constructor() {}

    async getUsers() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await data.json();

        return response;
    }

    async getPosts() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await data.json();

        return response;
    }

    generateUsersLinks(users) {
        for (const user of users) {
            const a = document.createElement("a");
            a.href = `frontend/users/${user.name.replace(" ", "-")}.html`;
            a.textContent = user.name;

            const userContainer = document.createElement("div");
            userContainer.classList.add("user-container");

            this.generateRandomUserAvatar(userContainer);

            userContainer.appendChild(a);

            document.body.appendChild(userContainer);
        }

        const title = document.createElement("h2");
        title.classList.add("post-title");
        title.textContent = "Posts";

        document.body.appendChild(title);
    }

    generatePostLinks(posts) {
        const borderStylePostBox = document.createElement("div");
        borderStylePostBox.classList.add("border-style-post-box");
        const postBox = document.createElement("div");
        postBox.classList.add("post-box");

        borderStylePostBox.appendChild(postBox);

        for (const post of posts) {
            const aPost = document.createElement("a");
            aPost.href = `frontend/post/${post.title.replace(" ", "-")}.html`;
            aPost.textContent = post.title.toUpperCase();

            const postContainer = document.createElement("div");
            postContainer.classList.add("post-container");

            postContainer.appendChild(aPost);

            postBox.appendChild(postContainer);
            document.body.appendChild(borderStylePostBox);
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
        const data = await fetch("./avatars.json").then((response) =>
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
setTimeout(() => {
    application
        .getPosts()
        .then((posts) => application.generatePostLinks(posts));
}, 1000);
