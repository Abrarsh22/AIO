import { useNavigation } from '@react-navigation/native';
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
          <TouchableOpacity  onPress={()=>navigation.navigate('DemosNavigator', {
            name: item.category_id,})} >
           <View style={{flex:1,marginTop:10,justifyContent:'center',alignItems:'center',marginHorizontal:2,
           flexDirection:'column'}}>
<View style={{flex:1,backgroundColor:'#B4AEE8',alignItems:'center',borderWidth:4,
borderColor:'#FF41ED',borderBottomLeftRadius:20,borderBottomRightRadius:20,marginRight:1,}}>
<Image source={{uri:item.image}} style={{width:width-220,height:175,resizeMode:'stretch',
margin:0}}/> 
<View style={{width:width-220,backgroundColor:'#440A67',paddingVertical:10,borderTopWidth:3,borderBottomLeftRadius:18,
borderBottomRightRadius:18}}>
    <Text style={{textAlign:'center',fontSize:20,letterSpacing:1.5,fontWeight:'bold',color:'#FFF'}}>{item.name}</Text>
    </View>
    </View>
    </View>
              </TouchableOpacity>
        )
    }
  
  componentDidMount() {
    const display="http://10.0.2.2:80/api/homepro.php";

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
    return (
      <View style={{backgroundColor:'#FFE3FE',alignSelf:'center'}}> 
      <View style={{backgroundColor:'#FFE3FE',borderWidth:3,borderColor:'#440A67',marginHorizontal:1,top:5,
      borderRadius:5,paddingVertical:5}}>
  <Text style={{fontSize:20,letterSpacing:0.5,fontWeight:'900',left:5,textTransform:'uppercase',
  textAlign:'center',color:'#000'}}>Home-Realted Services</Text>
</View>
      <View
        style={{justifyContent:'center',backgroundColor:'#fff',alignItems:'flex-start',
        flexDirection:'row',top:10,marginBottom:15}} >
           <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                numColumns={2}
            />
            </View>
            </View>
    )
    

  }
}
