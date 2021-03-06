import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'apsl-react-native-button';

export default class QuestIndex extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#1aa3ff'
    }
  }
  componentDidMount(){
    this.props.screenProps.handleQuestData()
  }
  render() {
    let questData = this.props.screenProps.questData
    return (
     <ScrollView style={styles.wholeScreen}>
       <View style={styles.container}>
         <Text style={styles.title}>
           Your Created Quests
         </Text>
         <FlatList
           data={questData}
           renderItem={({item}) =>
           <View style={styles.listItems}>
             <Text style={styles.listText}
               onPress={() => this.props.navigation.navigate("QuestShow", {questId: item.id})}
               key={item.id}>
               <Text style={styles.listTitleItem}> {item.title}</Text>
               {"\n"}
               Quest Code: {item.gameKey}
             </Text>
             <View style={styles.right}>
               <Icon name="angle-right"
                 size={30} color='#A33E6E'
                 onPress={() => this.props.navigation.navigate("QuestShow", {questId: item.id})}/>
             </View>
           </View>
         }/>
         <View style={styles.buttonContainer}>
           <Button style={styles.button} onPress={() => this.props.navigation.navigate("QuestCreation")}>
             <Text style={styles.buttonText}>
               MAKE A NEW QUEST
             </Text>
           </Button>
           <Button style={styles.button} onPress={() => this.props.navigation.navigate("MainMenu")}>
             <Text style={styles.buttonText}>
               HOME
             </Text>
           </Button>
         </View>
       </View>
     </ScrollView>
   );
 }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F25F5C',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  buttonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
 wholeScreen: {
   backgroundColor: '#1aa3ff',
   flex: 3
 },
 container: {
   marginTop: 20,
   paddingRight: 10,
   paddingLeft: 10,
   paddingBottom: 5
 },
 title: {
   color: 'azure',
   fontWeight: 'bold',
   fontSize: 30,
   textAlign: 'center',
   paddingBottom: 25,
 },
 listTitleItem: {
   fontWeight: 'bold',
   marginBottom: 4,
   fontSize: 16,
   paddingLeft: 5
 },
 listText: {
   color: '#6F706F',
   paddingLeft: 5
 },
 listItems: {
   backgroundColor: 'azure',
   paddingTop: 10,
   paddingBottom: 10,
   borderColor: '#E6E6E6',
   borderWidth: 1,
   paddingLeft: 5,
   flexDirection: 'row',
   flex: 1,
   justifyContent: 'space-between'
 },
 right: {
   paddingRight: 10
 }
});
