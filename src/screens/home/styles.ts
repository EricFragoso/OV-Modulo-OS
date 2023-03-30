import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAECFA',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 8
  },

  header: {
    width: '100%',
    height: 120,
    backgroundColor: '#459EE8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 36
  },

  input: {
    marginTop: 116
  },

  inputText: {
    fontSize: 20,
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
    fontSize: 20,

  },


})