import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  subContainer: {
    backgroundColor: 'white',
  },

  buttons: {
    flexDirection:'row',
    padding: 50,
    alignItems:'center'
  },

  content: {
    marginLeft: 10,
    fontSize: 20,
    color :'#000000',
    fontFamily: 'koho-bold',
  },

  contentCard: {
    marginTop:100,
    marginLeft: -210,
    fontSize: 20,
    color :'#000000'
  },

  contentCardTitle :{
    fontSize:40,
    fontWeight: 'bold',
    textAlign: 'center',
    color :'#000000',
  },

  separator: {
    height:1,
    backgroundColor: '#423e3e'
  },

  separatorCard: {
    marginTop:20,
    height:1,
    backgroundColor: '#423e3e'
  },

  picker: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#ffffff'
  },

  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#000000',
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
  },

  menuLogos: {
    width: 50,
    height: 50
  },

  tabBar: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },

  tabBarText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'vecna-bold'
  },

  tabBarUnderline: {
    backgroundColor:'#423e3e'
  }

});
