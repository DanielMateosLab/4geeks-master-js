const areValidCredentials = (name, pwd) => {
    return name.length > 3 && pwd.length >= 8
}