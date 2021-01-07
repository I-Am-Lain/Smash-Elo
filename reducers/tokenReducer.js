const tokenReducer = (state=null, action) => {
    switch(action.type){

        case 'LOGIN_SUCCESS':
            return action.token

        case 'LOGOUT_USER':
            return null

        default: return {...state}
    }
}

export default tokenReducer