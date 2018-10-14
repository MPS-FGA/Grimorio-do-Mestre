import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FDFCFF'
  },

  subContainer: {
    backgroundColor: 'green'
  },



  contentCardTitle :{
    fontSize:40,
    fontWeight: 'bold',
    textAlign: "center",
    color :'black',
  },

  buttons: {
    flexDirection:'row',
    padding: 50,
    alignItems:'center'
  },

  content: {
    marginLeft: 10,
    fontSize: 20,
    color :'black',
    fontFamily: 'koho-bold'
  },

  contentCard: {
    marginTop:100,
    marginLeft: -210,
    fontSize: 20,
    color :'black'
  },

  separator: {
    height:1,
    backgroundColor: '#4B0077'
  },

  separatorCard: {
    marginTop:20,
    height:1,
    backgroundColor: '#4B0077'
  },

  picker: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffffff'
  },

  headerTitle: {
    fontSize: 30,
    fontFamily: 'vecna-bold'
  }

});
