const API_URL = "https://sachadigi.com/limanplatform/auth/admin/login";

const authProvider = {
    login: ({ username, password }) => {
        return fetch(`${API_URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then(res => {
                if (!res.ok) throw new Error("Invalid credentials");
                return res.json();
            })
            .then(data => {
                localStorage.setItem("token", data.token);
                localStorage.setItem("comp", data.admin.company);
                localStorage.setItem("adminInfo", JSON.stringify(data.admin)); // FIX: stringify this!
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

    // ADD THIS METHOD
    getIdentity: () => {
        const adminInfo = localStorage.getItem("adminInfo");
        if (adminInfo) {
            return Promise.resolve({ admin: JSON.parse(adminInfo)});
        }
        return Promise.reject(new Error("No identity found"));
    },
};

export default authProvider;