export const loginSuccess = ({ user, token }) => {
    return {
        type: 'LOGIN_SUCCESS',
        user,
        token
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    }
}

// export const createTodo = (todo) => {
//     return {
//         type: 'CREATE_TODO',
//         todo
//     }
// }

// export const deleteUser = (id) => {
//     return {
//         type: 'DELETE_USER',
//         id
//     }
// }