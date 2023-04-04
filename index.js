let dbUsers = [
    
    {
    username: "rAJ",
     password: "12345",
     name: "RAJ",
    email: "b022110211@student.utem.edu.my"
    },
    {
    username: "rAJI",
    password: "123",
    name: "RAJI",
    email: "RAJI@student.utem.edu.my" 
    },
    {
    username: "KEASH",
    password: "1234",
    name: "KEASHWINRAJ",
    email: "KEASHWINRAJ@student.utem.edu.my"
    }
]

function login(reqUsername, reqPassword) {
    let matchUser =dbUsers.find(user => user.username == reqUsername)

    if(!matchUser) return "User not found!"
    if(matchUser.password ==reqPassword) {
        return matchUser
    } else {
        return "Invalid password"
    } 
}

function register (reqUsername, reqPassword, reqName, reqEmail) {
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail,
    })

}



// try to login 

console.log(login("rAJ", "12345"))

console.log(login("utem", "password"))

register("utem", "54321", "fkekk", "fkekk@gmai.com")
console.log(login("utem", "54321"))