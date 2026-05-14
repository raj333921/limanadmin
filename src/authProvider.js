//const API_URL= "http://localhost:3000/limanplatform/auth/admin/login";
const API_URL = "https://sachadigi.com/limanplatform/auth/admin/login";
const authProvider = {
    login: ({ username, password }) => {
        console.log(username);
        // Map 'email' to the key your backend expects
        return fetch(`${API_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }), // Use email here
        })
            .then(res => {
                if (!res.ok) throw new Error("Invalid credentials");
                return res.json();
            })
            .then(data => {
                localStorage.setItem("token", data.token);
                localStorage.setItem("comp", data.admin.company);
                localStorage.setItem("adminInfo", data.admin);
                return Promise.resolve();
            });
    },

    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("comp");
        localStorage.removeItem("adminInfo");
        return Promise.resolve();
    },

    checkAuth: () =>
        localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),

    checkError: () => Promise.resolve(),

    getPermissions: () => Promise.resolve(),
};

export default authProvider;
