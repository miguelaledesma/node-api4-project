

const initialUsers = () => ([
    {username: 'Miguel', password: "#######"}, 
    {username: 'Tony', password: "#######"}
])

let users = initialUsers();

const findAll = () => {
    return Promise.resolve(users)
}


const addUser = ({username, password}) => {
    const newUser = {username, password}; 
    users.push(newUser); 
    return Promise.resolve(newUser); 
}

module.exports = {
    findAll, 
    addUser
}