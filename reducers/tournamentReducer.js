const tournamentReducer = (state=[], action) => {
    switch(action.type){

        case 'TOURNAMENT_SUCCESS':
            return {...action.tournament}


        default: return {...state}
    }
}

export default tournamentReducer