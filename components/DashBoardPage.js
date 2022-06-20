import React,{Component} from 'react';
import { ImageBackground } from 'react-native';
import {
  View,Text,StatusBar,ScrollView,SafeAreaView,Dimensions,StyleSheet,TouchableOpacity,FlatList,Image,
  ToastAndroid 
} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Demo from './Demo'
import Demos from './Demos'
import Homeservices from './Homeservices'
const {width,height}=Dimensions.get('window');
export default class App extends Component {
  
  constructor() {
    super();
    this.state  = {
        data:[],
        sname:''
      };
    }
    submit=({navigation})=>{
      
    }
    renderItem=({item})=>{
      this.state.sname=item.name
        return(
          <TouchableOpacity  onPress={()=>this.props.navigation.navigate('DemosNavigatorone', {
            name: item.category_id})}>
            <View>
<View style={{width:(width/2)-80,height:130,backgroundColor:'#fff',borderWidth:0.5,borderColor:'#440A67',
borderRadius:10,margin:5,justifyContent:'center',marginTop:10,  
alignItems:'center'}}>
<Image source={{uri:item.image}} style={{width:width-300,height:90,resizeMode:'stretch',}}/> 
<View style={{width:width-290,backgroundColor:'#fff',height:25,
borderBottomLeftRadius:10,borderBottomRightRadius:10,justifyContent:'center',alignItems:'center'}}>
    <Text style={{textAlign:'center',fontSize:12,letterSpacing:1,fontWeight:'bold',
    color:'#000'}}>{item.name}</Text>
    </View>
    </View>
              </View>
              </TouchableOpacity>
        )

    }

  componentDidMount() {
    const display="http://10.0.2.2:80/api/mainservone.php";

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
      <SafeAreaView >
      <ScrollView>
                    <FlatList
                  horizontal={true}
                  initialNumToRender={4}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.data}
                renderItem={this.renderItem}              
                style={{width:width,height:'10%'}}
            />
            <Demo />
           
            </ScrollView>
        </SafeAreaView>

    )
  }
}

