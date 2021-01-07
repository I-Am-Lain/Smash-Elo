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

export const tournamentSuccess = (tournament) => {
    return {
        type: 'TOURNAMENT_SUCCESS',
        tournament
    }
}