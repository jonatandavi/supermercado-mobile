import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },

  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingVertical: 20
  },
  botaoMenu: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#d3d3d3',
    alignContent: 'center'
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtMenuCol: {
    color: '#ff8c00'
  },
  txtMenuPre: {
    color: '#000000'
  },
  modalText: {
    fontFamily: 'Helvetica',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  modalInput: {
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 30,
    borderRadius: 3,
    width: 230,
    borderColor: '#d3d3d3'
  },
  modalButton: {
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#808080',
    borderRadius: 8,
    borderWidth: 1,
    width: '40%',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})