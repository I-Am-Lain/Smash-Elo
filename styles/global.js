import { StyleSheet } from 'react-native'


export const global = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 50,
        alignItems: 'center'
    },
    titleText: {
        fontFamily: 'xanhmono-regular',
        fontSize: 24,
        color: '#333'
    },
    button: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 2, // Android
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
})