import React from 'react';
import {
  View,Text,Button,TextInput,StyleSheet,ImageBackground,TouchableOpacity, ImageBackgroundComponent
} from 'react-native';
import  Icon from 'react-native-vector-icons/FontAwesome';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            mobile:"",
            mail:"",
            password:"",
        }
    }
    submit= () =>{
        //console.warn(this.state);
        this.setState({name:""});
        this.setState({mobile:""});
        this.setState({password:""});
        this.setState({mail:""});
        var name=this.state.name;
        var mobile=this.state.mobile;
        var password=this.state.password;
        var mail = this.state.mail;

        if(name.length==0 || mobile.length==0 || mobile.length!=10 || password.length==0
          || mail.length==0 ){
            alert("All Fields are Mandatory");
            this.props.navigation.navigate("SignIn");
        }
        else{
            var insertapiur="http://10.0.2.2:80/api/insertdata.php";
            var headers={
                "Accept":'application/json',
                "Content-Type":'application/json'
            };
            var data={
                name:name,
                mobile:mobile,
                password:password,
                mail:mail
            };
            fetch(insertapiur,
                {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify(data)
                }
                )
                .then((response)=>response.json())
                .then((response)=>
                {
                    alert(response[0].msg);
                    this.props.navigation.navigate("SignIn");
                })
                .catch((error)=>
                {
                    alert("Error"+error);
                    this.props.navigation.navigate("SignUp");
                }
                )
        }
    }
   
        render(){
            return(
                <View style={{flex:1}}>
                  <ImageBackground source={require('../images/creates.jpg')} 
                style={{height:820}} >
                <View style={{flex:0.05,flexDirection:'row',justifyContent:'flex-end',
                marginTop:20,}}>
                <View>
                  <Text onPress={() => {this.props.navigation.navigate("SignIn")}}
                   style={{fontSize:20,color:'#fff',letterSpacing:1,
                  paddingBottom:2}} >Sign In</Text>
                  </View>
                  <View>
                  <Text onPress={() => {this.props.navigation.navigate("SignUp")}}
                  style={{fontSize:20,color:'#fff',marginHorizontal:20,
                  letterSpacing:1,}}>Sign Up</Text>
                  <View style={{width:80,borderTopWidth:1,borderTopColor:'#fff'
                  ,marginHorizontal:20}}></View>
                  </View>
                  </View>
                <View style={{flex:0.3,flexDirection:'column',backgroundColor:'none',
                justifyContent:'center',alignItems:'center',width:220}}>
                <Text style={{fontSize:34,fontWeight:'bold',color:'#fff',
                letterSpacing:2}}>CREATE ACCOUNT</Text>
                </View>
                <View style={styles.containerss}>
                <View style={styles.search}>
                  <Icon style={{left:60,}} 
                  name="user" size={25} color="grey"/>
                  <TextInput style={styles.input} placeholder="UserName"
                    placeholderTextColor='grey' maxLength={14} 
                    defaultValue={this.state.name}
                    onChangeText={(name)=>{this.setState({name:name})}}
                />
                </View>
                <View style={styles.search}>
                  <Icon style={{left:60,}} 
                  name="phone" size={25} color="grey"/>
                  <TextInput style={styles.input} placeholder="Mobile Number"
                    placeholderTextColor='grey' keyboardType='numeric' maxLength={10}
                    onChangeText={(mobile)=>{this.setState({mobile:mobile})}}
                    defaultValue={this.state.mobile}

                  />
                </View>
                <View style={styles.search}>
                  <Icon style={{left:60,}} 
                  name="envelope" size={25} color="grey"/>
                  <TextInput style={styles.input} placeholder="Email-Id"
                    placeholderTextColor='grey' keyboardType="email-address" maxLength={28}
                    onChangeText={(mail)=>{this.setState({mail:mail})}}
                    defaultValue={this.state.mail}
                  />
                </View>
                <View style={styles.search}>
                  <Icon style={{left:60,}} 
                  name="key" size={25} color="grey"/>
                  <TextInput style={styles.input} placeholder="Password"
                    placeholderTextColor='grey' secureTextEntry={true} maxLength={8}
                    onChangeText={(password)=>{this.setState({password:password})}}
                    defaultValue={this.state.password}
                  />
                </View>
                <View style={{flex:1.5,flexDirection:'row',justifyContent:'space-around',
                backgroundColor:'none',padding:16,alignItems:'center',marginHorizontal:2
                }}>
               
                 <Text style={{fontSize:26,fontWeight:'900',color:'#fff'}}>Sign Up</Text>
                    <TouchableOpacity
                    style={{width:70,height:70,borderRadius:70/2,padding:18
                    ,alignItems:'center',backgroundColor:'tomato',overflow:'hidden',
                   }}
                    onPress={()=>{this.submit()}}>
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
      fontSize:18,
      textAlign:'center',
      borderRadius:40,
      marginHorizontal:5,
      color:'#000',
    },
    containerss:{
      marginTop:90,
      flex: 0.55,
    },
    
  })