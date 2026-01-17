const authProvider = {
    login: ({ username, password }) => {
        console.log(username);
        // Map 'email' to the key your backend expects
        return fetch("https://sachadigi.com/limanplatform/auth/admin/login", {
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
                return Promise.resolve();
            });
    },

    logout: () => {
        localStorage.removeItem("token");
        return Promise.resolve();
    },

    checkAuth: () =>
        localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),

    checkError: () => Promise.resolve(),

    getPermissions: () => Promise.resolve(),
};

export default authProvider;
