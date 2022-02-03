import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginHorizontal: 30,
        marginVertical: 60,
        backgroundColor: 'white',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    input: {
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 3,
        width: '80%',
        borderColor: '#d3d3d3',
        marginTop: 10
    },

    btn: {
        width: '48%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'black',
        borderColor: '#ff8c00',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },

    btn2: {
        width: '48%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'white',
        borderColor: 'black',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    }
});