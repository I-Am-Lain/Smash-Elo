import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Tournaments from './Tournaments'

import Icon from 'react-native-vector-icons/Ionicons'

const TournamentStack = createStackNavigator()

import Card from './Card'

import { connect } from 'react-redux'


class TournamentStackScreen extends React.Component {

    ////////////////////////////////////////// remove this
    state = {
        currentTournaments: []
    }

    componentDidMount(){
        
        const configRequest = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 808cf44b336f861b52a46ce3e9b6ff43'
            },
            body: JSON.stringify({
                query: 
                    `query {
                        tournaments(query: {
                            perPage: 10
                            page: 1
                            sortBy: "startAt asc"
                            filter: {
                                afterDate: 1641517200
                                videogameIds: [
                                    1386
                                ]
                            }
                        }) {
                            pageInfo {
                                total
                            } 
                            nodes {
                                id
                                name
                                slug
                                startAt
                                state
                                events{
                                    name
                                    numEntrants
                                    startAt
                                    state
                                }
                            }
                        }
                    }`
            })} 

        try {
            this.timerID = setInterval(async () => {
                const resp = await fetch('https://api.smash.gg/gql/alpha', configRequest);
                const jsonResponse = await resp.json();
                    // console.log(jsonResponse)
                const myTournamentData = await jsonResponse.data.tournaments.nodes.map(node => {
                    return node.name

                    // return {
                    //     stateOfMatch: set.state,
                    //     p1: set.slots[0].seed ? set.slots[0].seed.entrant.name : 'not matched yet',
                    //     p2: set.slots[1].seed ? set.slots[1].seed.entrant.name : 'not matched yet',
                    //     winnerId: set.winnerId
                    // }
                })

                ////////////////////////////////////////// remove this
                this.setState({
                    currentTournaments: myTournamentData
                })
                ////////////////////////////////////////// remove this
                console.log(this.state)

                }, 3000);
        }   
        catch(e) {
            console.log(e);
            }

    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }
        
    
    
    render(){
        return (

            <TournamentStack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#1f65ff'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>



                <TournamentStack.Screen name='Tournaments' component={Tournaments} options={{
                    title: 'Tournaments',
                    headerLeft: () => (
                        <Icon.Button name='ios-menu' size={25}
                        backgroundColor='#1f65ff' onPress={() => this.props.navigation.openDrawer()}></Icon.Button>
                    )
                }} />



                {
                    this.state.currentTournaments.map(title => {
                        return <TournamentStack.Screen key={title} name={title} component={Card} options={{
                            title: title,
                            headerLeft: () => (
                                <Icon.Button name='ios-menu' size={25}
                                backgroundColor='#1f65ff' onPress={() => this.props.navigation.openDrawer()}></Icon.Button>
                            )
                        }} />
                    })
                }



            </TournamentStack.Navigator>
    )}
}

export default connect()(TournamentStackScreen)