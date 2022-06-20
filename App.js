import React from 'react';
import {
  View,Text,Button,TextInput,StyleSheet,ImageBackground,TouchableOpacity, ImageBackgroundComponent
} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './components/Login'
import Create from './components/Create'
import Main from './components/Main'

class App extends React.Component {
  render(){
  return (
    <View style={{flex:1,}}>
    <ImageBackground source={require('./images/mainbg.jpg')} 
    style={{height:820,}}>
    <View style={{flex:0.6,marginTop:120,backgroundColor:'none',
    }}>
    <ImageBackground source={require('./images/logo.png')} 
    style={{width:200,height:140,marginTop:50,alignSelf:'center'}}></ImageBackground>
      <ImageBackground source={require('./images/appname2nobg.png')} 
    style={styless.bg} >
    </ImageBackground>
    <View style={{flex:0.93,backgroundColor:'gold',flexDirection:'row',
    justifyContent:'space-between',marginHorizontal:8,borderRadius:16,
    marginBottom:20}}>
    <TouchableOpacity
        style={{backgroundColor:'#fff',marginVertical:16,alignItems:'center',
        justifyContent:'space-around',padding:13,borderRadius:16,marginHorizontal:10,
        borderTopRightRadius:0,borderBottomRightRadius:0,flex:1,flexDirection:'row'
        }}
          onPress={() => {this.props.navigation.navigate("SignIn")}}  >
    <Icon name="arrow-circle-left" size={45} color="#FF4500"/>
          <Text style={{color:'#FF4500',fontSize:22,}}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{backgroundColor:'#1E90FF',marginVertical:16,alignItems:'center',
        justifyContent:'space-around',padding:13,borderRadius:16,marginHorizontal:10,
        borderTopLeftRadius:0,borderBottomLeftRadius:0,flex:1,flexDirection:'row'}}
       onPress={() => {this.props.navigation.navigate("SignUp")}} >
          <Text style={{color:'white',fontSize:22,}}>Sign Up</Text>
          <Icon name="arrow-circle-right" size={45} color="#ffffff
          "/>
        </TouchableOpacity>
        </View>
    </View>
    
    </ImageBackground>
    </View> 
  )
  }
  
}

const styless=StyleSheet.create({
  header:{
    fontSize:40,
    fontStyle:'italic',
    color:'navy',
  },
  bg:{
    width:200,
    height:55,
    alignSelf:'center',
    marginBottom:45,
  }
})

const AppNavigator = createStackNavigator({
  Home :{
    screen:App,
    navigationOptions:{
      headerShown:false,
      }
  },
  SignUp:{
    screen:Create,
    navigationOptions:{
      headerShown:false,
      }
  },
  SignIn:{
    screen:Login,
    navigationOptions:{
      headerShown:false,
      }
  },
  Main:{
    screen:Main,
    navigationOptions:{
      headerShown:false,
    }
  },
});  
export default createAppContainer(AppNavigator);

