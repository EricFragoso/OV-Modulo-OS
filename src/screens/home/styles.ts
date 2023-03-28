import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DAECFA',
      
      alignItems: 'center',
    },

    header: {
      width: 392,
      height: 120,
      backgroundColor: '#459EE8',
      alignItems: 'center',
      paddingTop: 52
    },

    companyName: {
      fontWeight: 'bold',
      fontSize: 48
    },

    input: {
      marginTop: 116
    },

    inputText: {
      fontSize: 16,
      fontWeight: 'bold'
    },

    inputField: {
      marginTop: 8,
      marginBottom: 40,
      width: 240,
      height: 40,
      borderRadius: 5,
      backgroundColor: '#FFF',
      borderWidth: 1.5,
      borderColor: '#459EE8',
      color: '#000',
      paddingLeft: 8,
      fontSize: 16,
      
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 120,
      height: 60,
      backgroundColor: '#FFF',
      borderWidth: 1.5,
      borderColor: '#459EE8',
      borderRadius: 10,
    },

    buttonText: {
      color: '#2B3049',
      fontSize: 24
    }
  })