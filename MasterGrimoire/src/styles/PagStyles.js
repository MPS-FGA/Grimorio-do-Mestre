import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  //General
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee'
  },

  subContainer: {
    backgroundColor: '#eeeeee'
  },

  separator: {
    height:1,
    backgroundColor: '#423e3e'
  },

  picker: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#ffffff'
  },

  //Menu
  menuItem: {
    flexDirection:'row',
    padding: 50,
    alignItems:'center'
  },

  menuItemTitle: {
    fontSize: 22,
    color :'#000000',
    fontFamily: 'koho-bold',
  },

  menuIcon: {
    width: 50,
    height: 50
  },

  //Header
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

  //TabBar
  tabBar: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eeeeee'
  },

  tabBarText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'vecna-bold'
  },

  tabBarUnderline: {
    backgroundColor:'#423e3e'
  },

  //ReferenceCard
  referenceCardContainer: {
    flexDirection:'column',
    height: 250,
    borderColor: '#eeeeee',
    backgroundColor:'#dddddd',
    borderWidth: 10,

  },

  referenceCardTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc'
  },

  referenceCardInfoContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  referenceCardTitle: {
    flex: 0,
    fontFamily: 'vecna-bold',
    fontSize: 30,

  },

  referenceCardInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  referenceCardInfoTextBold: {
    fontFamily: 'koho-bold',
    fontSize: 20
  },

  referenceCardInfoText: {
    fontFamily: 'koho',
    fontSize: 18
  },


  referenceCardImage: {
    width: 50,
    height: 50,
  },

  referenceCardSeparator: {
    height:1,
  },


});
