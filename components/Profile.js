import React, { Component,useState } from 'react';
import { ScrollView, StyleSheet, Image,ImageBackground, Text, View, Dimensions,TouchableOpacity,
TouchableWithoutFeedback,Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component{
  constructor(props){
      super(props);
        this.state={
            data:[],
            }
        global.Name=this.props.navigation.state.params.name
        }
    componentDidMount() {
        const display="http://10.0.2.2:80/api/profile.php";
      var data={
        name:global.Name
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
    render(){
        //let data =this.props.navigation.state.params;
        return(
            <View>
            <ScrollView>
            <View style={{backgroundColor:'#FFE3FE',borderColor:'#000'}}>
            <Text style={{fontSize:20,fontWeight:'bold',padding:10,letterSpacing:0.6,paddingHorizontal:23}}> My Account</Text>  
            <View style={{borderTopWidth:0.5,}}>
            <TouchableOpacity onPress={()=>alert("hello")}
            style={{alignSelf:'flex-end',marginRight:20}}>
                    <Text style={{color:'navy',fontSize:17,letterSpacing:0.5,fontWeight:'bold'}}>Edit</Text>
                </TouchableOpacity>
                <View style={{backgroundColor:'#FFE3FE',paddingHorizontal:5,paddingVertical:15,
                flexDirection:'row',marginHorizontal:1,
                marginVertical:1}}>
                <ImageBackground source={require('../images/circle-cropped.png')}
                style={{width:100,height:100}}>
                </ImageBackground>
                <View style={{flexDirection:'column',flex:1,marginHorizontal:15,
                justifyContent:'center',}}>
                <Text style={{fontSize:15,fontWeight:'900',letterSpacing:1,paddingVertical:2,
                textTransform:'capitalize'}}>{this.state.data[0] && this.state.data[0]['name']}</Text>
                <Text style={{fontSize:15,fontWeight:'900',letterSpacing:1,paddingVertical:2}}>
                {this.state.data[0] && this.state.data[0]['mail']}</Text>
                <Text style={{fontSize:15,fontWeight:'900',letterSpacing:1,paddingVertical:2}}>
                {this.state.data[0] && this.state.data[0]['mobile']}</Text>
                </View>
                </View>
            </View>
            </View>
            <View style={{marginTop:10,}}>
                <TouchableOpacity style={{backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row',
                justifyContent:'space-between',paddingHorizontal:1,marginRight:15,
                borderBottomWidth:3,borderBottomColor:'#f0efef'}}>
                    <Text style={{fontSize:17,padding:10,letterSpacing:0.5,fontFamily:'Times New Roman',
                    fontWeight:'900'}}>My Services</Text>  
                    <Icon name="chevron-right" size={16} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row',
                justifyContent:'space-between',paddingHorizontal:1,marginRight:15,borderBottomWidth:1,
                borderBottomColor:'#f0efef'}}>
                    <Text style={{fontSize:17,padding:10,letterSpacing:0.5}}>Customer Care</Text>  
                    <Icon name="chevron-right" size={16} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row',
                justifyContent:'space-between',paddingHorizontal:1,marginRight:15,borderBottomWidth:1,
                borderBottomColor:'#f0efef'}}>
                    <Text style={{fontSize:17,padding:10,letterSpacing:0.5}}>Addresses</Text>  
                    <Icon name="chevron-right" size={16} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row',
                justifyContent:'space-between',paddingHorizontal:1,marginRight:15,borderBottomWidth:12,
                borderBottomColor:'#f0efef'}}>
                    <Text style={{fontSize:17,padding:10,letterSpacing:0.5}}>Notifications</Text>  
                    <Icon name="chevron-right" size={16} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row',
                justifyContent:'space-between',paddingHorizontal:1,marginRight:15,borderBottomWidth:1,
                borderBottomColor:'#f0efef'}}>
                    <Text style={{fontSize:17,padding:10,letterSpacing:0.5}}>Terms & Conditions</Text>  
                    <Icon name="chevron-right" size={16} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row',
                justifyContent:'space-between',paddingHorizontal:1,marginRight:15,borderBottomWidth:1,
                borderBottomColor:'#f0efef'}}>
                    <Text style={{fontSize:17,padding:10,letterSpacing:0.5}}>Privacy Policy</Text>  
                    <Icon name="chevron-right" size={16} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row',
                justifyContent:'space-between',paddingHorizontal:1,marginRight:15,borderBottomWidth:1,
                borderBottomColor:'#f0efef'}}>
                    <Text style={{fontSize:17,padding:10,letterSpacing:0.5}}>Who We Are</Text>  
                    <Icon name="chevron-right" size={16} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row',
                justifyContent:'space-between',paddingHorizontal:1,marginRight:15,borderBottomWidth:1,
                borderBottomColor:'#f0efef'}}>
                    <Text style={{fontSize:17,padding:10,letterSpacing:0.5}}>Terms of Sale</Text>  
                    <Icon name="chevron-right" size={16} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row',
                justifyContent:'space-between',paddingHorizontal:1,marginRight:15,borderBottomWidth:1,
                borderBottomColor:'#f0efef'}}>
                    <Text style={{fontSize:17,padding:10,letterSpacing:0.5}}>Trust Pay Policy</Text>  
                    <Icon name="chevron-right" size={16} color='#000'/>
                </TouchableOpacity>
                </View>
                <View style={{marginTop:20,alignItems:'center'}}>
                    <TouchableOpacity style={{borderWidth:2,padding:10,paddingHorizontal:80,
                    borderRadius:10,borderColor:'#440A67'}}>
                        <Text style={{fontFamily:'Times New Roman',fontSize:16,letterSpacing:1
                        ,color:'#440A67'}}>LOG OUT</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}

style=StyleSheet.create({
    
})