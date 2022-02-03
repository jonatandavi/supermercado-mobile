import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    txtWelcome: {
        fontSize: 23,
        fontWeight: '500',
        paddingBottom: 10,
    },
    btnMercado: {
        alignItems: "center",
        backgroundColor: "#ff8c00",
        width: '70%',
        paddingTop: 15,
        paddingBottom: 15,
        //paddingHorizontal: 40,
        borderColor: '#000000',
        borderRadius: 5,
        borderWidth: 1
    },
    btnConsumidor: {
        alignItems: "center",
        backgroundColor: "#000000",
        width: '70%',
        paddingTop: 15,
        paddingBottom: 15,
        //paddingHorizontal: 40,
        borderColor: '#000000',
        borderRadius: 5,
        borderWidth: 1
    },
    txtBtn: {
        fontSize: 18,
        fontWeight: '400',
        color: 'white'
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'stretch'
    },
    txtLogin: {
        fontSize: 15,
    },
    inpLogin: {
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 30,
        borderRadius: 3,
        width: 260,
        borderColor: '#d3d3d3',
        marginTop: 10
    },

    btnsLogin: {
        width: '80%',
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    btnEntrar: {
        width: '40%',
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
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
    btnCadastrar: {
        width: '40%',
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 4,

        /*shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,*/

        elevation: 2,
    }
});