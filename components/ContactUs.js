import React,{Component} from 'react';
import {
  View,Text,StatusBar,ScrollView,Button,Dimensions,StyleSheet,TouchableOpacity,Image,
  ToastAndroid 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width,height}=Dimensions.get('window');
export default class App extends Component {
    render(){
        return(
            <View style={{backgroundColor:'#fff',height}}>
            <View style={{backgroundColor:'#FFE3FE',paddingVertical:20,margin:10,
            alignItems:'center'}}>
                <Text style={{textAlign:'center',marginBottom:3,
                fontSize:20,fontWeight:'bold'}}>Our Mission</Text>
                <View style={{borderWidth:2,borderRadius:10,borderColor:'maroon',width:'5%'}}></View>
                <Text style={{textAlign:'center',marginTop:10,
                letterSpacing:0.3}}>All In One Services is the solution to all your problems</Text>
            </View>
            <View style={{backgroundColor:'#FFE3FE',paddingVertical:20,margin:10,
            alignItems:'center'}}>
                <Text style={{textAlign:'center',marginBottom:3,
                fontSize:20,fontWeight:'bold'}}>Contact Us</Text>
                <View style={{borderWidth:2,borderRadius:10,borderColor:'maroon',width:'5%'}}></View>
                <View style={{alignItems:'flex-start',width:width-60}}>
                <Text style={{textAlign:'center',marginTop:10,
                letterSpacing:0.5}}>Email id:</Text>
                <Text style={{color:'#0C1845',textDecorationLine:'underline'
                ,letterSpacing:1}}>abrarshaikhs1234@gmail.com</Text>
                </View>
                <View style={{alignItems:'flex-start',width:width-60}}>
                <Text style={{textAlign:'center',marginTop:10,
                letterSpacing:0.5}}>Mobile No.:</Text>
                <Text style={{color:'#0C1845',textDecorationLine:'underline',
                letterSpacing:1}}>8779147253</Text>
                </View>
                <View style={{marginTop:10}}>
                    <TouchableOpacity style={{backgroundColor:'#25D366',width:width-60,paddingVertical:5}}>
                    <Text style={{color:'#fff',textAlign:'center',fontSize:20}}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#0088cc',width:width-60,paddingVertical:5
                    ,marginTop:10}}>
                    <Text style={{color:'#fff',textAlign:'center',fontSize:20}}>Telegram</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{backgroundColor:'#FFE3FE',paddingVertical:20,margin:10,
            alignItems:'center'}}>
                <Text style={{textAlign:'center',marginBottom:3,
                fontSize:20,fontWeight:'bold'}}>Our Address</Text>
                <View style={{borderWidth:2,borderRadius:10,borderColor:'maroon',width:'5%'}}></View>
                <Text style={{textAlign:'center',marginTop:10,
                letterSpacing:0.3,marginHorizontal:22}}>G:15,Room No.4,Jasmine Mill Road,Matunga Labour camp,
                Mumbai-400019</Text>
            </View>
            <View style={{backgroundColor:'#FFE3FE',paddingVertical:20,margin:10,
            alignItems:'center'}}>
                <Text style={{textAlign:'center',marginBottom:3,
                fontSize:20,fontWeight:'bold'}}>Follow Us</Text>
                <View style={{borderWidth:2,borderRadius:10,borderColor:'maroon',width:'5%'}}></View>
                <View style={{flexDirection:'row',backgroundColor:'none',width:width-65,
                justifyContent:'center',alignItems:'center',marginTop:10}}>
                    <View style={{backgroundColor:'#4267B2',marginHorizontal:5,
                    borderRadius:40,width:40,height:40,justifyContent:'center',alignItems:'center'
                    }}>
                        <Icon name="facebook" size={22} color="#fff"/>
                    </View>
                    <View style={{backgroundColor:'red',marginHorizontal:5,
                    borderRadius:40,width:40,height:40,justifyContent:'center',alignItems:'center'
                    }}>
                        <Icon name="instagram" size={22} color="#fff"/>
                    </View>
                    
                </View>               
            </View>
            </View>
        )
    }
}