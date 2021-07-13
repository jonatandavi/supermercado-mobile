import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 0,
        paddingTop: 40
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff8c00',
        paddingTop: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    arrowTopBar: {
        width: '10%',
        paddingLeft: 10
    },
    nomeTopBar: {
        width: '30%',
        paddingLeft: 10
    },
    cidadeTopBar: {
        width: '60%'
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    infoHeader:{
        paddingVertical: 15,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },

    btnsHeader:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnHeader:{
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        marginHorizontal: 6,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 8
    },

    filtros:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnFiltro:{
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width:'40%',
        backgroundColor: '#f0f0f0',
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
        marginLeft: 19,
        marginRight: 10
    }
})