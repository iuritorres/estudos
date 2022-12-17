import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 22,
        backgroundColor: '#820AD1',
        width: '100%',
        height: 160,
        marginBottom: 24,
        justifyContent: 'flex-start',
    },

    divIcons: {
        flexDirection: 'row',
    },

    headerIcons: {
        flexDirection: 'row',
        marginTop: 14,
        marginHorizontal: 6,
        width: 26,
        height: 26,
    },

    mainProfileImage: {
        width: 55,
        height: 55,
        borderRadius: 50,
        marginTop: 10,
    },
})

export default styles;