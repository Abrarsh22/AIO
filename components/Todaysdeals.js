import React, { Component,useState } from 'react';
import { SafeAreaView, StyleSheet, Image,FlatList, Text, View, Dimensions,TouchableOpacity,
TouchableWithoutFeedback,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const {width,height}=Dimensions.get('window');
import { NavigationActions } from 'react-navigation';

export default class App extends Component {
  
    constructor() {
      super();
      this.state  = {
          data:[],
        };
      }
  
      renderItem=({navigation,item})=>{
          return(
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('DemosNavigator', {
              name: item.category_id,})} >
              <View>
  <View style={{width:(width/2)-10,height:(height/2)-150,backgroundColor:'#fff',borderWidth:0.8,borderColor:'#440A67',
  borderRadius:0,margin:5,justifyContent:'center',
  alignItems:'center'}}>
  <Image source={{uri:item.image}} style={{width:width/2-20,height:height/3.5,resizeMode:'stretch',
  opacity:0.9}}/> 
  <View style={{width:width/2-20,backgroundColor:'none',height:height/2-100,position:'absolute',
  borderBottomLeftRadius:10,borderBottomRightRadius:10,justifyContent:'center',alignItems:'center'}}>
      <Text style={{textAlign:'center',fontSize:18,letterSpacing:1,fontWeight:'bold',
      color:'#fff',backgroundColor:'#d64161',width:width/2-25,rotation:-20,padding:5,
      opacity:0.99 }} >{item.name}</Text>
      </View>
      </View>
                </View>
                </TouchableOpacity>
          )
      }
    
    componentDidMount() {
      const display="http://10.0.2.2:80/api/mainser.php";
  
      fetch(display)
      .then((response)=>response.json())
      .then((responses)=>
      {   
          this.setState({
              data:responses,
          })
          
      })
      .catch((error)=>{
              alert("Error"+error);
      })
    }
    render(){
      //console.warn(this.state.data[0]);
     //console.warn({datas})
     
      return ( 
        <SafeAreaView
          style={{justifyContent:'center',backgroundColor:'#fff',alignItems:'center',
          flexDirection:'row',flexWrap:'wrap'}} >
               <FlatList
                  data={this.state.data}
                  renderItem={this.renderItem}
                  contentContainerStyle={{justifyContent:'flex-end',alignItems:'flex-start'}}
                  numColumns={2}
              />
              </SafeAreaView>
      )
      
  
    }
  }