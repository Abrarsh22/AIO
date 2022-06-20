import { useNavigation,useRoute } from '@react-navigation/native';
import React, { Component,useState,useRef } from 'react';
import { TextInput } from 'react-native';
import { SafeAreaView, StyleSheet, Image,FlatList, Text, View, Dimensions,TouchableOpacity,
route,navigation,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const {width,height}=Dimensions.get('window');
import { NavigationActions } from 'react-navigation';
let idi=1
export default class App extends Component {
  constructor() {
    super();
    this.textInput = React.createRef();
    this.state={
    data:[],
    }
  }
    
     
    renderItem=({navigation,item})=>{
        return(
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('DashboardNavigator')}>
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
    
      const display="http://10.0.2.2:80/api/displaysub.php";
      
      let idi=4;
        let datas = this.props.navigation.state.params;
        if(datas) {
          datas.name
      var data={
        id:datas.name
      };
      var headers={
        "Accept":'application/json',
        "Content-Type":'application/json'
    };
      fetch(display,
        {
          method:'POST',
          headers:headers,
          body:JSON.stringify(data)
      })
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
    }
    render(){
       return (
          
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
       )
      // console.warn(this.refs.myid.props.children)
   
     }
     componentDidUpdate() {
    
      const display="http://10.0.2.2:80/api/displaysub.php";
      
      let idi=4;
        let datas = this.props.navigation.state.params;
        if(datas) {
          datas.name
      var data={
        id:datas.name
      };
      var headers={
        "Accept":'application/json',
        "Content-Type":'application/json'
    };
      fetch(display,
        {
          method:'POST',
          headers:headers,
          body:JSON.stringify(data)
      })
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
    }
}



/*const Apsp=({navigation})=>{
  return (
    <Text onPress={()=>navigation.navigate('Dewq')}>Hello</Text>
  )
}*/