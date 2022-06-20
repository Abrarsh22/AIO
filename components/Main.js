import React,{Component} from 'react';
import {
  View,Text,ImageBackground,SafeAreaView,ScrollView,Image,TouchableOpacity,StyleSheet,
  Dimensions } from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import {createStackNavigator} from 'react-navigation-stack';
import DashBoardPage from './DashBoardPage'
import AllServices from './AllServices'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Demos from './Demos'
import Demosone  from './Demosone';
import  Profile  from './Profile';
import Todaysdeals from './Todaysdeals';

export default class App extends Component {  
    constructor(props){
        super(props);
        global.Na=this.props.navigation.state.params.name
    }
    render() {
        return (
            <>
            <AppContainer />
            </>
        )
    }  
}  
  
class WelcomeScreen extends Component {  
    static navigationOptions = {  
         title: 'About Us',  
         headerStyle:{borderBottomWidth:1},
        headerTitleStyle:{color:'#440A67',justifyContent:'flex-end',textAlign:'center',
    fontSize:20,fontWeight:'bold'},
        headerTintColor:'yellow' 
    };  
    render() {  
        return (  
            <AboutUs navigation={this.props.navigation}/>
        );  
    }  
}  

class DashboardScreen extends Component { 
    static navigationOptions = {  
        title: 'hello',
        headerTitleAlign:'left',
        headerStyle:{borderBottomWidth:2,backgroundColor:'#FFE3FE',borderBottomColor:'#440A67'},
       headerTitleStyle:{color:'#440A67',fontSize:20,fontWeight:'bold',marginLeft:10},
   headerTintColor:'yellow' ,
   }; 
    render(){
        
    return (
        <>
    <DashBoardPage navigation={this.props.navigation}/>
    </>
    )
    
    }

} 

class Demoswe extends Component { 
    static navigationOptions = {  
        title: 'Sub-Services',
        headerStyle:{borderBottomWidth:1,},
       headerTitleStyle:{color:'#440A67',justifyContent:'flex-end',textAlign:'center',
   fontSize:20,fontWeight:'bold',},
   headerTintColor:'yellow' ,
   }; 
    render(){
        const { navigation } = this.props;
    return (
    <Demos navigation={this.props.navigation}/>
    )
    }
}

class Demosweone extends Component { 
    static navigationOptions = {  
        title: 'Sub-Service',
        headerStyle:{borderBottomWidth:1},
       headerTitleStyle:{color:'#440A67',justifyContent:'flex-end',textAlign:'center',
   fontSize:20,fontWeight:'bold'},
   headerTintColor:'yellow' ,
   }; 
    render(){
    return (
    <Demosone navigation={this.props.navigation}/>
    )
    }
}


class Allcategories extends Component {  
    static navigationOptions = {  
         title: 'All Services', 
         headerStyle:{borderBottomWidth:1},
        headerTitleStyle:{color:'#440A67',justifyContent:'flex-end',textAlign:'center',
    fontSize:20,fontWeight:'bold',},
    headerTintColor:'yellow' 
    };  
  
    render() {  
        return (  
            <AllServices navigation={this.props.navigation}/>
        );  
    }  
} 

class ContactusScreen extends Component {  
    static navigationOptions = {  
         title: 'Contact Us', 
         headerStyle:{borderBottomWidth:1},
         headerTitleStyle:{color:'#440A67',justifyContent:'flex-end',textAlign:'center',
     fontSize:20,fontWeight:'bold'},
    headerTintColor:'yellow' 
    };  
  
    render() {  
        return (  
            <ContactUs/> 
        );  
    }  
} 

class TodaysdealScreen extends Component {  
    static navigationOptions = {  
         title: "Today's Deal", 
         headerStyle:{backgroundColor:'#FFE3FE',borderBottomColor:'#440A67',borderBottomWidth:1},
        headerTitleStyle:{color:'#440A67',justifyContent:'flex-end',textAlign:'center',
    fontSize:20,fontWeight:'bold'},
    headerTintColor:'yellow' 
    };  
  
    render() {  
        return (  
            <Todaysdeals/>  
        );  
    }  
} 

class RateScreen extends Component {  

    static navigationOptions = {  
         title: "Rate Screen", 
         headerStyle:{backgroundColor:'#FFE3FE',borderBottomColor:'#440A67',borderBottomWidth:1},
        headerTitleStyle:{color:'#440A67',justifyContent:'flex-end',textAlign:'center',
    fontSize:20,fontWeight:'bold'},
    headerTintColor:'yellow' 
    };  
  
    render() {  
        return (  
            <View><Text>
                Rate Us
            </Text></View>
        );  
    }  
} 

class ShareScreen extends Component {  
    static navigationOptions = {  
         title: "Share Screen", 
         headerStyle:{backgroundColor:'#FFE3FE',borderBottomColor:'#440A67',borderBottomWidth:1},
        headerTitleStyle:{color:'#440A67',justifyContent:'flex-end',textAlign:'center',
    fontSize:20,fontWeight:'bold'},
    headerTintColor:'yellow' 
    };  
  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Today's Deals</Text>  
            </View>  
        );  
    }  
} 

class Hidden extends React.Component {
    render() {
      return (
          <View style={{backgroundColor:'red',width:390,top:-15,position:'absolute'}}>
              <Text></Text>
          </View>
      );
    }
  }
  class Hidden1 extends React.Component {
    render() {
      return (
          <View style={{backgroundColor:'white',width:390,top:0,position:'absolute'}}>
              <Text></Text>
          </View>
      );
    }
  }
  class ProfileScreen extends Component {  
    static navigationOptions = {  
        title: 'All-In-One-Services', 
        headerStyle:{borderBottomWidth:1},
       headerTitleStyle:{color:'#440A67',justifyContent:'flex-end',textAlign:'center',
   fontSize:20,fontWeight:'bold',},
   headerTintColor:'yellow' 
   };   
  
    render() {  
        return (  
                <Profile navigation={this.props.navigation}
                    name={global.Na}
                />  
        );  
    }  
}
const tabBarlisteners =({navigation,route})=>({
    tabPress:()=>navigation.navigate(route.name)
})
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Dashboards: { screen: DashboardScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'home'}/>  
                    </View>
                    ),

            },
            listeners:{tabBarlisteners}  
        },  
        Allcateg: { screen: Allcategories,  
            navigationOptions:{  
                tabBarLabel:null, 
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'user-circle'}/>  
                    </View>),    
            }  
        },
        Profiles: { screen: ProfileScreen,  
            navigationOptions:({navigation})=>({  
                tabBarLabel:'Profiles',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'user'}/>  
                    </View>),   
                tabBarOnPress: () => {
                    navigation.navigate('Profiles',{name:global.Na})
                }, 
            }),
        },  
    },  
    {  
      initialRouteName: "Dashboards",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },
      listeners:{tabBarlisteners}
    },  
);

const DashboardStackNavigator = createStackNavigator(  
    {  
        1 : TabNavigator
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerTitle:'',
            headerRight: (  
                <Icon  
                    style={{ paddingLeft: 10,marginHorizontal:20 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="bars"  
                    size={33}  
                    color='#93329E'
                /> 
            ),
            headerLeft:(
               
          <View style={{flexDirection:'column',width:400}}>          
          <ImageBackground source={require('../images/logo.png')}
                style={{width:100,height:80,alignSelf:'center',paddingVertical:20}}></ImageBackground>
                </View>
            ),
        };  
        }  
    },
);  
  
const WelcomeStackNavigator = createStackNavigator(  
    {  
        WelcomeNavigator: WelcomeScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerRight: (  
                    <Icon  
                        style={{ paddingLeft: 10,marginHorizontal:20 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="bars"  
                        size={33}  
                        color="#93329E"
                    />  
                )  , 
                headerLeft: (
                    <View style={{flexDirection:'column',width:400}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Dashboards')}>       
                    <ImageBackground source={require('../images/logo.png')}
                          style={{width:100,height:60,alignSelf:'flex-start',
                          marginLeft:10}}></ImageBackground>
                          </TouchableOpacity>
                          </View>
                )
            };  
        }  
    }  
);

const DemosStack = createStackNavigator(  
    {  
        DemosNavigator: Demoswe  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerRight: (  
                    <Icon  
                        style={{ paddingLeft: 10,marginHorizontal:20 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="bars"  
                        size={33}  
                        color="#93329E"
                    />  
                )  , 
                headerLeft: (
                    <View style={{flexDirection:'column',width:400}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Allcateg')}>       
                    <ImageBackground source={require('../images/leftarrow.png')}
                          style={{width:40,height:40,alignSelf:'flex-start',
                          marginLeft:10}}></ImageBackground>
                          </TouchableOpacity>
                          </View>
                )
            };  
        }  
    }  
);
const DemosStackone = createStackNavigator(  
    {  
        DemosNavigatorone: Demosweone  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerRight: (  
                    <Icon  
                        style={{ paddingLeft: 10,marginHorizontal:20 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="bars"  
                        size={33}  
                        color="#93329E"
                    />  
                )  , 
                headerLeft: (
                    <View style={{flexDirection:'column',width:400}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Dashboards')}>       
                    <ImageBackground source={require('../images/leftarrow.png')}
                          style={{width:40,height:40,alignSelf:'flex-start',
                          marginLeft:10}}></ImageBackground>
                          </TouchableOpacity>
                          </View>
                )
            };  
        }  
    }  
);

const Allcategoriesstack = createStackNavigator(  
    {  
        Allcat: Allcategories  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerRight: (  
                    <Icon  
                        style={{ paddingLeft: 10,marginHorizontal:20 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="bars"  
                        size={33}  
                        color="#93329E"
                    />  
                )  ,
                headerLeft:(
                    <View></View>
                )
            };  
        }  
    }  
);

const ContactUsStack = createStackNavigator(  
    {  
        Contact: ContactusScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerRight: (  
                    <Icon  
                        style={{ paddingLeft: 10,marginHorizontal:20 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="bars"  
                        size={33}  
                        color="#93329E"
                    />  
                )  ,
                headerLeft:(
                    <View></View> 
                )
            };  
        }  
    }  
);


const TodaysdealStack = createStackNavigator(  
    {  
        Today: TodaysdealScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerRight: (  
                    <Icon  
                        style={{ paddingLeft: 10,marginHorizontal:20 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="bars"  
                        size={33}  
                        color="#93329E"
                    />  
                )  ,
                headerLeft:(
               
                    <View style={{flexDirection:'column',width:400}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Dashboards')}>       
                    <ImageBackground source={require('../images/logo.png')}
                          style={{width:100,height:60,alignSelf:'flex-start',paddingVertical:20,
                          marginLeft:10}}></ImageBackground>
                          </TouchableOpacity>
                          </View>
                      ),
            };  
        }  
    }  
);

const RateStack = createStackNavigator(  
    {  
        Rate: RateScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerRight: (  
                    <Icon  
                        style={{ paddingLeft: 10,marginHorizontal:20 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="bars"  
                        size={33}  
                        color="#93329E"
                    />  
                )  ,
                headerLeft:(
                    <Image 
                        source={require('../images/leftarrow1.png')}
                        style={{flex:1,width:35,height:90,resizeMode:'contain',
                        marginHorizontal:20}}
                    />
                )
            };  
        }  
    }  
);

const ShareStack = createStackNavigator(  
    {  
        Share: ShareScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerRight: (  
                    <Icon  
                        style={{ paddingLeft: 10,marginHorizontal:20 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="bars"  
                        size={33}  
                        color="#93329E"
                    />  
                )  ,
                headerLeft:(
                    <Image 
                    source={require('../images/leftarrow1.png')}
                    style={{flex:1,width:35,height:90,resizeMode:'contain',
                    marginHorizontal:20}}
                />
                )
            };  
        }  
    }  
);

const ProfileStack = createStackNavigator(  
    {  
        Prof: ProfileScreen 
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerRight: (  
                    <Icon  
                        style={{ paddingLeft: 10,marginHorizontal:20 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="bars"  
                        size={33}  
                        color="#93329E"
                    />  
                )  ,
                headerLeft:(
                    <Image 
                    source={require('../images/leftarrow1.png')}
                    style={{flex:1,width:35,height:90,resizeMode:'contain',
                    marginHorizontal:20}}
                />
                )
            };  
        }  
    }  
);

const SideMenu = props=>{
    
    const closedDrawer = () => {
        props.navigation.closeDrawer();
      }
      const home = () =>{
          props.navigation.navigate('Dashboards');
          props.navigation.closeDrawer();   
      }
      const profile = () =>{
        props.navigation.navigate('Profiles',{name:global.Na});
        props.navigation.closeDrawer();   
    }
      //console.warn(this.state.uname)
   
      return(
          
    <SafeAreaView style={{flex:3,flexDirection:'column',}}>
    <View style={{backgroundColor:'none',height:55,flexDirection:'row',
    justifyContent:'center',}}>
    <TouchableOpacity onPress={()=>home()}>
    <Icon name="home" size={40} color='purple' style={{backgroundColor:'transparent',
        alignContent:'center',textAlign:'center',margin:10}}/>
        </TouchableOpacity>
    <View style={{flex:0.30,flexDirection:'row',justifyContent:'flex-end',
    alignItems:'center',backgroundColor:'none',marginHorizontal:10}}>
        <Icon name="user-circle" size={30} color='#000' style={{backgroundColor:'transparent',
        alignContent:'center',textAlign:'center',}}/>
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',
    alignItems:'center',backgroundColor:'none',marginRight:10}}>
        
        <TouchableOpacity onPress={()=>profile()}>
        <Text style={{textAlign:'center',color:'#000',fontSize:25,
        fontStyle:'italic'}}>Hello,<Text style={{textTransform:'uppercase'}}>{global.Na}</Text></Text>
        </TouchableOpacity>
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
        <DrawerItems {...props}
        activeTintColor='red'
                inactiveTintColor='green'
                activeBackgroundColor='#B4AEE8'
                labelStyle={{color:'#000',fontSize:18,marginVertical:18,letterSpacing:0.5,
                fontWeight:'900',}}
                itemStyle={{
                        borderBottomWidth:1.5,borderBottomColor:'#93329E',top:-10
                }}
                />
    </ScrollView>  
    <Text style={{textAlign:'center',color:'blue',fontSize:18,fontStyle:'italic',
    letterSpacing:1}}>Need Help...?</Text>
    </SafeAreaView>
      ) 
};

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {  
        screen: DashboardStackNavigator  ,
        navigationOptions:{
            drawerLabel:()=><Hidden/>,
    }
},
   
Today: {  
    screen: TodaysdealStack  ,
    navigationOptions:{
        drawerLabel:'Todays Deals',
        drawerIcon:({tintColor})=>(
            <Icon name="list-alt" size={24} color='#000'/>
        ),
        
}
},
    Welcome: {  
        screen: WelcomeStackNavigator  ,
        navigationOptions:{
            drawerLabel:'About Us',
            drawerIcon:({tintColor})=>(
                <Icon name="users" size={25} color='#000'/>
            ),
    }
    },
    Contact: {  
        screen: ContactUsStack  ,
        navigationOptions:{
            drawerLabel:'Contact Us',
            drawerIcon:({tintColor})=>(
                <Icon name="id-card" size={24} color='#000'/>
            ),
            
    }
    },
    Rate: {  
        screen: RateStack  ,
        navigationOptions:{
            drawerLabel:'Rate App',
            drawerIcon:({tintColor})=>(
                <Icon name="star" size={24} color='#000'/>
            ),
            
    }
    },
    Share: {  
        screen: ShareStack  ,
        navigationOptions:{
            drawerLabel:'Share App',
            drawerIcon:({tintColor})=>(
                <Icon name="share-alt" size={24} color='#000'/>
            ),
            
    }
    },
     

Dewq: {  
    screen: DemosStack ,
    navigationOptions: {
        drawerLabel: <Hidden1/>,
    },
},


Dewqone: {  
    screen: DemosStackone ,
    navigationOptions: {
        drawerLabel: <Hidden1/>,
    },
},
    
  
},{
    drawerPosition:'right',
    contentComponent: (props) => <SideMenu {...props} /> ,
    drawerWidth:Dimensions.get('window').width,
    drawerBackgroundColor:'#fff',
    edgeWidth:0
},
);  
  
const AppSwitchNavigator = createSwitchNavigator({ 
    Dashboard: { screen: AppDrawerNavigator },  
    Welcome: { screen: WelcomeScreen },  
    Allcateg:{screen:Allcategories},
    Conta:{screen:ContactusScreen},
    Todays:{screen:TodaysdealScreen},
    Rates:{screen:RateScreen},
    Shares:{screen:ShareScreen},
    Dem:{screen:Demoswe},
  Pro:{screen:ProfileScreen}
});
const AppContainer = createAppContainer(AppSwitchNavigator);
const AppContainers=createAppContainer(TabNavigator);  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    }  
});  