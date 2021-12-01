export const onSignUp = (user) => {
    return fetch("https://todo-mvc-api-typeorm.herokuapp.com/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => response.json())
        .catch((error) => console.log(error))
}
export const onSignIn = (user) => {
    return fetch("https://todo-mvc-api-typeorm.herokuapp.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => response.json())
        .catch((message) => console.log(message))
}
export const onSignOut = (next) => {
    if (typeof window != "undefined") {
        localStorage.removeItem("user");
        next();
    }
}
export const authenticate = (data, next) => {
    console.log("auth", data);
    if (typeof window != "undefined") {
        localStorage.setItem("user", JSON.stringify(data));
        next();
    }
}
export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
    } else {
        return false;
    }
};