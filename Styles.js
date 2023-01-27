import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: 'pink',
        height: "100%",
    },
    title: {
      alignSelf: 'center',
      fontSize: 30,
      fontFamily: 'Verdana',
      top: 20,
      color: 'black'
    },
    quoteInput: { 
      height: 75,
      margin: 12,
      padding: 10,
      borderRadius: 15,
      top: 50,
      backgroundColor: "lightblue",
    },
    authorInput: {
      height: 75,
      margin: 12,
      padding: 10,
      borderRadius: 15,
      width: "65%",
      top: 50,
      backgroundColor: "yellow",
    },
    pressable: {
      backgroundColor: 'lightgreen',
      alignSelf: 'flex-end',
      top: -50,
      justifyContent: 'center',
      width: "25%",
      padding: 10,
      borderRadius: 15,
      height: 75,
      margin: 12,

    },
    buttonText: {
      color: "black",
      textAlign: 'center',
    },
    quoteText: {
      alignSelf: 'center',
      fontSize: 16,
      top: 20,
    },
  });