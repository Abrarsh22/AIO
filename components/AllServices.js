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
          <TouchableOpacity  onPress={()=>this.props.navigation.navigate('DemosNavigator', {
            name: item.category_id,})} >
            <View>
<View style={{width:(width/2)-80,height:130,backgroundColor:'#fff',borderWidth:0.5,borderColor:'#440A67',
borderRadius:10,margin:5,justifyContent:'center',
alignItems:'center'}}>
<Image source={{uri:item.image}} style={{width:width-300,height:90,resizeMode:'stretch',}}/> 
<View style={{width:width-290,backgroundColor:'#fff',height:25,
borderBottomLeftRadius:10,borderBottomRightRadius:10,justifyContent:'center',alignItems:'center'}}>
    <Text style={{textAlign:'center',fontSize:12,letterSpacing:1,fontWeight:'bold',
    color:'#000' }} >{item.name}</Text>
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
      <View style={{backgroundColor:'#FFE3FE'}}> 
      <Text style={{fontSize:20,alignSelf:'center',
        fontWeight:'bold',padding:10,letterSpacing:0.6,paddingHorizontal:23}}> ALL SERVICES</Text>
        <View style={{borderTopWidth:0.5,marginBottom:5}}></View>
      <SafeAreaView
        style={{justifyContent:'center',backgroundColor:'#fff',alignItems:'center',
        flexDirection:'row',flexWrap:'wrap'}} >
           <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
                numColumns={3}
            />
            </SafeAreaView>
            </View>
    )
    

  }
}

/*const Apsp=({navigation})=>{
  return (
    <Text onPress={()=>navigation.navigate('Dewq')}>Hello</Text>
  )
}*/