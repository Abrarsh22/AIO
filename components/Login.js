import React from 'react';
import {
  View,Text,Button,TextInput,StyleSheet,ImageBackground,TouchableOpacity,
  ToastAndroid 
} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:'',

        }
    }

    search=()=>{
        var name=this.state.name;
        var password=this.state.password;

        if(name.length==0 || password.length==0 ){
            alert("All Fields are Mandatory");
            //this.props.navigation.navigate("SignIn");
        }else{
            var display="http://10.0.2.2:80/api/logins.php";
            var headers={
                "Accept":'application/json',
                "Content-Type":'application/json'
            };
            var data={
                name:name,
                password:password
            };

            fetch(display,
                {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify(data)
                }
            )
            .then((response)=>response.json())
            .then((response)=>
            {
                //alert(response[0].msg);
                this.setState({name:response[0].name});
                this.setState({password:response[0].password});
                ToastAndroid.showWithGravityAndOffset(response[0].msg +name,ToastAndroid.SHORT,ToastAndroid.CENTER,50,50);
                this.props.navigation.navigate("Main",{name: name});
            })
            .catch((error)=>{
                    alert("Error"+error);
                    this.props.navigation.navigate("SignIn");
            })
        }
    }
    render(){
    return(
        <View style={{flex:1}}>
          <ImageBackground source={require('../images/logins.jpg')} 
        style={{height:820}} >
        <View style={{flex:0.05,flexDirection:'row',justifyContent:'flex-end',
        marginTop:20,}}>
        <View>
          <Text onPress={() => {this.props.navigation.navigate("SignIn")}}
          style={{fontSize:20,color:'#fff',letterSpacing:1,
          paddingBottom:2}}>Sign In</Text>
          <View 
          style={{width:80,borderTopWidth:1,borderTopColor:'#fff'}}></View>
          </View>
          <View>
          <Text onPress={() => {this.props.navigation.navigate("SignUp")}}
          style={{fontSize:20,color:'#fff',marginHorizontal:20,
          letterSpacing:1,}}>Sign Up</Text>
          </View>
          </View>
        <View style={{flex:0.40,flexDirection:'column',backgroundColor:'none',
        justifyContent:'center',alignItems:'center',width:220}}>
        <Text style={{fontSize:34,fontWeight:'bold',color:'#fff',
        letterSpacing:2.5}}>WELCOME</Text>
        </View>
        <View style={styles.containersss}>
        <View style={styles.search}>
          <Icon style={{left:60,}} 
          name="user" size={25} color="grey"/>
          <TextInput style={styles.input} placeholder="UserName"
            placeholderTextColor='grey' defaultValue={this.state.name}
            onChangeText={(name)=>{this.setState({name:name})}}
          />
        </View>
        <View style={styles.search}>
          <Icon style={{left:60,}} 
          name="key" size={25} color="grey"/>
          <TextInput style={styles.input} placeholder="Password"
            placeholderTextColor='grey' secureTextEntry={true}
            onChangeText={(password)=>{this.setState({password:password})}}
                    defaultValue={this.state.password}
                    
          />
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',
        backgroundColor:'none',padding:16,alignItems:'center',marginHorizontal:2
        }}>
        <Text style={{fontSize:26,fontWeight:'900',color:'tomato'}}>
              Sign in</Text>
            <TouchableOpacity
            style={{width:70,height:70,borderRadius:70/2,padding:18
            ,alignItems:'center',backgroundColor:'tomato',overflow:'hidden',
            }}
            onPress={()=>{this.search()}}>
            <Icon name="arrow-right" size={34} color="white"/>
            </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
        </View>
      )
}
}

export default App;

const styles=StyleSheet.create({
    search:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
    
    },
    input:{
      flex:1,
      borderBottomWidth:1.5,
      borderColor:'grey',
      fontSize:22,
      textAlign:'center',
      borderRadius:40,
      marginHorizontal:5,
      color:'#000',
    },
    containersss:{
      marginTop:80,
      flex: 0.4,
    },
    
    
  })
  