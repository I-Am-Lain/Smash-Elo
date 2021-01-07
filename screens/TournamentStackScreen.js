import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Tournaments from './Tournaments'

import Icon from 'react-native-vector-icons/Ionicons'

const TournamentStack = createStackNavigator()

import Card from './Card'

import { connect } from 'react-redux'

import { tournamentSuccess } from '../actions/'


class TournamentStackScreen extends React.Component {

    state = {
        myTournaments: {}
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


        // Begin Request to SmashGG
        try {
            this.timerID = setInterval(async () => {
                const resp = await fetch('https://api.smash.gg/gql/alpha', configRequest);
                const jsonResponse = await resp.json();
                    console.log(jsonResponse)

                    this.props.tournamentSuccess(jsonResponse);

                    // const tourneyNames = jsonResponse.tournaments.data.tournaments.nodes.map(node => {
                    //     return node.name
                    // });

                    this.setState({
                        myTournaments: jsonResponse
                    });

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
                    Object.keys(this.state.myTournaments).length !== 0 ?
                    this.state.myTournaments.data.tournaments.nodes.map(node => {
                        return (<TournamentStack.Screen key={node.name} name={node.name} component={Card} options={{
                            title: node.name,
                            headerLeft: () => (
                                <Icon.Button name='ios-menu' size={25}
                                backgroundColor='#1f65ff' onPress={() => this.props.navigation.openDrawer()}></Icon.Button>
                            )
                        }} />)
                    })
                    // console.log(this.props)
                    :
                    console.log('waiting.....')
                }



            </TournamentStack.Navigator>
    )}
}

export default connect(state => ({ tournaments: state.tournaments }), { tournamentSuccess })(TournamentStackScreen)