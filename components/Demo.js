import React,{useState} from 'react';
import {
  View,Text,StatusBar,ScrollView,SafeAreaView,Dimensions,StyleSheet,TouchableOpacity,ImageBackground,Image,
  ToastAndroid 
} from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Homeservices from './Homeservices'
import Popularser from './Popularser'
import Icon from 'react-native-vector-icons/FontAwesome';

const App =( { navigation } )=> {
  
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
const {width,height}=Dimensions.get('window');
const setSliderPage = (event: any) => {

  const { currentPage } = sliderState;
  const { x } = event.nativeEvent.contentOffset;
  const indexOfNextScreen = Math.round(x / width);
  if (indexOfNextScreen !== currentPage) {
    setSliderState({
      ...sliderState,
      currentPage: indexOfNextScreen,
    });
  }
};

  
  const { currentPage: pageIndex } = sliderState;
return(
    <>
<StatusBar barStyle="dark-content" />
<SafeAreaView style={{ flex: 1,marginTop:10,}}>
<ScrollView
style={{ flex: 1,}}
  horizontal={true}
  scrollEventThrottle={1}
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
                      separatorWidth={1}
  snapToStart={true}
  onScroll={(event: any) => {
    setSliderPage(event);
  }}
>
  <View style={{width:width-10,justifyContent:'center',alignItems:'flex-start',}}>
  <View style={{width:width-65,left:5}}>
      <Image source={require('../images/men.jpg')} style={{width:width-5,height:155,resizeMode:'stretch'}}/>
  </View>
  </View>
  <View style={{width:width-10,justifyContent:'center',alignItems:'flex-start',}}>
  <View style={{width:width-65,left:5}}>
      <Image source={require('../images/men.jpg')} style={{width:width-5,height:155,resizeMode:'stretch'}}/>
  </View>
  </View>
  <View style={{width:width-10,justifyContent:'center',alignItems:'flex-start',}}>
  <View style={{width:width-65,left:0}}>
      <Image source={require('../images/men.jpg')} style={{width:width-5,height:155,resizeMode:'stretch'}}/>
  </View>
  </View>
</ScrollView>
<View style={styles.paginationWrapper}>
  {Array.from(Array(3).keys()).map((key, index) => (
    <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.4 }]} key={index} />
  ))}
</View>
</SafeAreaView>
<Popularser navigation={navigation}/>

<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Image source={require('../images/babybanner.jpg')} style={{width:width-5,height:235,resizeMode:'stretch'}}/>
</View>

<View style={{backgroundColor:'#45B7B7',marginTop:15,padding:10,padding:5}}>
<Text style={{textAlign:'center',fontSize:22,letterSpacing:1,textShadowColor:'#8B4C8C',textShadowRadius:10,color:'#fff',
textShadowOffset:{width:6,height:0,},borderBottomWidth:1
}} >Services Only at AJIO</Text>
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Image source={require('../images/mobileelectronis.jpg')} style={{width:width-5,height:235,resizeMode:'stretch',top:10}}/>
</View>
<StatusBar barStyle="dark-content" />
<SafeAreaView style={{ flex: 1,marginTop:25,}}>
<ScrollView
style={{ flex: 1,}}
  horizontal={true}
  scrollEventThrottle={1}
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
                      separatorWidth={1}
  snapToStart={true}
>
  
  <View style={{flex:1,backgroundColor:'#D1F6C1',alignItems:'center',borderWidth:4,borderColor:'#8B4C8C',borderRightWidth:2,
borderBottomLeftRadius:20,borderBottomRightRadius:20,width:width-240,marginRight:10}}>
<Image source={require('../images/product-8.jpg')} style={{width:width-270,height:185,resizeMode:'stretch',
margin:5,borderRadius:60}}/> 
<View style={{width:width-245,backgroundColor:'#F5E6CA',paddingVertical:10,borderTopWidth:3,borderBottomLeftRadius:20,
borderBottomRightRadius:20}}>
    <Text style={{textAlign:'center',fontSize:20,letterSpacing:1.5,fontWeight:'bold',color:'#F54748'}}>Service-1</Text>
    </View>
  </View>
  <View style={{flex:1,backgroundColor:'#D1F6C1',alignItems:'center',borderWidth:4,borderColor:'#8B4C8C',borderRightWidth:2,
borderBottomLeftRadius:20,borderBottomRightRadius:20,width:width-240,marginRight:10}}>
<Image source={require('../images/product-6.jpg')} style={{width:width-270,height:185,resizeMode:'stretch',
margin:5,borderRadius:60}}/> 
<View style={{width:width-245,backgroundColor:'#F5E6CA',paddingVertical:10,borderTopWidth:3,borderBottomLeftRadius:20,
borderBottomRightRadius:20}}>
    <Text style={{textAlign:'center',fontSize:20,letterSpacing:1.5,fontWeight:'bold',color:'#F54748'}}>Service-2</Text>
    </View>
  </View>
  <View style={{flex:1,backgroundColor:'#D1F6C1',alignItems:'center',borderWidth:4,borderColor:'#8B4C8C',borderRightWidth:2,
borderBottomLeftRadius:20,borderBottomRightRadius:20,width:width-240,marginRight:10}}>
<Image source={require('../images/product-7.jpg')} style={{width:width-270,height:185,resizeMode:'stretch',
margin:5,borderRadius:60}}/> 
<View style={{width:width-245,backgroundColor:'#F5E6CA',paddingVertical:10,borderTopWidth:3,borderBottomLeftRadius:20,
borderBottomRightRadius:20}}>
    <Text style={{textAlign:'center',fontSize:20,letterSpacing:1.5,fontWeight:'bold',color:'#F54748'}}>Service-3</Text>
    </View>
  </View>
  <View style={{flex:1,backgroundColor:'#D1F6C1',alignItems:'center',borderWidth:4,borderColor:'#8B4C8C',borderRightWidth:2,
borderBottomLeftRadius:20,borderBottomRightRadius:20,width:width-240,marginRight:10}}>
<Image source={require('../images/product-5.jpg')} style={{width:width-270,height:185,resizeMode:'stretch',
margin:5,borderRadius:60}}/> 
<View style={{width:width-245,backgroundColor:'#F5E6CA',paddingVertical:10,borderTopWidth:3,borderBottomLeftRadius:20,
borderBottomRightRadius:20}}>
    <Text style={{textAlign:'center',fontSize:20,letterSpacing:1.5,fontWeight:'bold',color:'#F54748'}}>Service-4</Text>
    </View>
  </View>
</ScrollView>
</SafeAreaView>
</View>
<Homeservices navigation={navigation}/>
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Image source={require('../images/shoes.png')} style={{width:width-5,height:235,resizeMode:'stretch'}}/>
</View>

<View style={{flexDirection:'column',backgroundColor:'#780662',justifyContent:'center',alignItems:'center',top:15,marginBottom:15,
paddingVertical:10}}>
  <Text style={{color:'gold',fontSize:20,letterSpacing:1}}>AIO Cares</Text>
  <Text style={{marginHorizontal:10,color:'#E3F6F5',letterSpacing:1.3}}>WE DO NOT ASK FOR YOUR BANK ACCOUNT OR CARD DETAILS VERBALLY OR TELEPHONICALLY.DO NOT DIVULGE THESE TO FRAUDSTERS
  & IMPOSTERS CLAIMING TO BE CALLING ON OUR BEHALF</Text>
</View>
</>

  )
}
  
  
  export default App ;

  const styles=StyleSheet.create({
    
    paginationWrapper: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',

    },
    paginationDots: {
      height: 5,
      width: 30,
      borderRadius: 10 / 2,
      backgroundColor: '#FF41ED',
      marginLeft: 10,
    },
  });

 