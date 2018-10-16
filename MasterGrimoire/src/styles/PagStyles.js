import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  subContainer: {
    backgroundColor: 'green',
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
    fontFamily: 'koho-bold',
  },

  contentCard: {
    marginTop:100,
    marginLeft: -210,
    fontSize: 20,
    color :'black'
  },

  contentCardTitle :{
    fontSize:40,
    fontWeight: 'bold',
    textAlign: 'center',
    color :'black',
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
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#ffffff'
  },

  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    height: 50
  },

  headerBackContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems:'center',
    width: 50,
  },

  headerLogoContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems:'flex-end',
    width: 70,
  },

  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  headerTitle: {
    fontSize: 30,
    fontFamily: 'vecna-bold',
    color: 'white',
    marginLeft: -70
  },

  headerImage: {
    width: 20,
    height: 20,
  },

  headerLogo: {
    width: 45,
    height: 45,
  }


});
