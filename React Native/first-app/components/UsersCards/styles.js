import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    cardBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: '#820AD1',
        width: 330,
        height: 100,
    },

    profileImage: {
        marginRight: 14,
        width: 55,
        height: 55,
        borderStyle: 'solid',
        borderColor: 'aliceblue',
        borderWidth: 1,
        borderRadius: 50,
    },

    title: {
        marginBottom: -4,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'aliceblue',
    },
    subtitle: {
        color: 'lightgray',
    },
    
})

export default styles;