import React,{Component} from 'react';
import {
  View,Text,Button,SafeAreaView,ScrollView,Image,TouchableOpacity,StyleSheet,
  Dimensions 
} from 'react-native';
import Login from './Login'
import Create from './Create'
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Main from './Main.js'
import { ViewPropTypes } from 'react-native';

class SliderView extends Component{
  render(){
    const datas="abrar"
    const closedDrawer = () => {
      this.props.navigation.closeDrawer();
    }
    const home = () =>{
        this.props.navigation.navigate('Welcome');
        this.props.navigation.closeDrawer();   
    }
    return(
        
      <SafeAreaView style={{flex:3,flexDirection:'column',}}>
      <View style={{backgroundColor:'none',height:55,flexDirection:'row',
      justifyContent:'center',}}>
      <View style={{flex:0.6,flexDirection:'row',justifyContent:'flex-end',
      alignItems:'center',backgroundColor:'none',marginHorizontal:10}}>
          <Icon name="user-circle" size={30} color='#000' style={{backgroundColor:'transparent',
          alignContent:'center',textAlign:'center',}}/>
          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',
      alignItems:'center',backgroundColor:'none',marginRight:10}}>
          <Text style={{textAlign:'center',color:'#000',fontSize:25,
          fontStyle:'italic'}}>Hello,<Text style={{textTransform:'uppercase'}}>datas.name</Text></Text>
          <Icon name="times" size={25} color='#000'
          onPress={()=>closedDrawer()}
      />
          </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',
          alignItems:'center'}}>
              <TouchableOpacity style={{flex:0.25,backgroundColor:'none',
              }}>
                  <Text style={{color:'#1E90FF',fontSize:20,textAlign:'center',
                  marginVertical:5,fontWeight:'bold',textDecorationLine:'underline'}}>LOGOUT</Text>
              </TouchableOpacity>
          </View>
          <View style={{borderTopWidth:0,borderWidth:2,borderColor:'#000',marginTop:0,
          borderBottomStartRadius:1000,borderBottomEndRadius:1000,height:15,margin:10,
          borderBottomRadius:30}}></View>
      <ScrollView style={{backgroundColor:'none',margin:10,alignContent:'center',
      flex:1,flexDirection:'column',borderWidth:2,borderColor:'#440A67',borderBottomRadius:20}}>
          <DrawerItems {...this.props}
          activeTintColor='red'
                  inactiveTintColor='green'
                  activeBackgroundColor='#B4AEE8'
                  labelStyle={{color:'#000',fontSize:18,marginVertical:18,letterSpacing:0.5,
                  fontWeight:'900'}}
                  itemStyle={{
                          borderBottomWidth:1.5,borderBottomColor:'#93329E',
                  }}
                  />
      </ScrollView>  
      <Text style={{textAlign:'center',color:'blue',fontSize:18,fontStyle:'italic',
      letterSpacing:1}}>Need Help...?</Text>
      </SafeAreaView>
           )
                }
                }

SliderView.propTypes={navigation:ViewPropTypes.object};

export default SliderView;