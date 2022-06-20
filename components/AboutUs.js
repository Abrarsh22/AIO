import React,{useState} from 'react';
import {
  View,Text,Button,TextInput,Image,ScrollView,TouchableOpacity, StatusBar,SafeAreaView, Dimensions, StyleSheet
} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native'

  const App =({navigation})=> {
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
<SafeAreaView style={{ flex: 1,}}>
<ScrollView
style={{ flex: 0.5 }}
  horizontal={true}
  scrollEventThrottle={16}
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
                      separatorWidth={2}
    contentContainerStyle={{justifyContent:'center',alignItems:'center',backgroundColor:'#F1F1F1'}}
  onScroll={(event: any) => {
    setSliderPage(event);
  }}
>
  <View style={{width,height,justifyContent:'flex-start',alignItems:'center',}}>
    <View style={{backgroundColor:'orange',marginHorizontal:20,marginTop:80,
    borderRadius:20,padding:15,borderStartColor:'#000',borderStartWidth:10,}}>
        <Text style={{fontSize:20,color:'#fff',letterSpacing:1,}}><Text style={{fontSize:40}}>``</Text><Text style={{fontWeight:'bold',fontStyle:'italic'}}>Hello! Abrar</Text>, Welcome to  <Text style={{fontWeight:'bold',}}>'ALL-IN-
        ONE-SERVICES'</Text>.As we know in our day to day to life we need services for instance <Text style={{fontWeight:'bold',fontSize:22}}>'If there is a problem of Electricity and need an Electrician','If we need a Plumber'
        'If we need some stuffs like Fruits,Vegetables,etc','if we want cakes and crackers to clebrate the birthday of our loved ones'</Text>;then for all this we need to go out,which might be very time consuming and risky in this pandemic.</Text> 
    </View>
    <Text style={{fontSize:20,position:'absolute',textDecorationLine:'underline'
    ,bottom:150,right:40,padding:10,width:130,textAlign:'center',color:'purple',fontWeight:'bold',
    borderRadius:10,letterSpacing:1}}
    onPress={()=>navigation.navigate('Dashboard') }>
          SKIP
        </Text>  
  </View>
  <View style={{width,height,justifyContent:'center',alignItems:'center',}}>
  <View style={{backgroundColor:'tomato',marginHorizontal:20,
    borderRadius:20,padding:15,borderStartColor:'#000',borderStartWidth:10,}}>
        <Text style={{fontSize:20,color:'#fff',letterSpacing:1}}><Text style={{fontSize:40}}>`` </Text>So for all this 
        problems we have one solution and that is A-I-O Services.Here you can get anything you want within some time with the best service.
        </Text> 
 </View>
 <Text style={{fontSize:20,position:'absolute',textDecorationLine:'underline'
    ,bottom:150,right:40,padding:10,width:130,textAlign:'center',color:'purple',fontWeight:'bold',
    borderRadius:10,letterSpacing:1}}
    onPress={()=>navigation.navigate('Dashboard')}>
          SKIP
        </Text> 
  </View>
  <View style={{width,height,justifyContent:'center',alignItems:'center',}}>
  <View style={{backgroundColor:'dodgerblue',marginHorizontal:20,
    borderRadius:20,padding:20,borderStartColor:'#000',borderStartWidth:10,}}>
        <Text style={{fontSize:20,color:'#fff',letterSpacing:1}}><Text style={{fontSize:40}}>`` </Text>You just wish a service and A-I-O will fulfil it.
        </Text>
    </View>    
    <Text style={{fontSize:20,backgroundColor:'purple',position:'absolute'
    ,bottom:150,right:40,padding:10,width:130,textAlign:'center',color:'#fff',
    borderRadius:10}}
    onPress={()=>navigation.navigate('Dashboard')}>
          START
        </Text>       
</View>
</ScrollView>
<View style={styles.paginationWrapper}>
  {Array.from(Array(3).keys()).map((key, index) => (
    <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.5 }]} key={index} />
  ))}
</View>
</SafeAreaView>
</>
  )
}

export default App;

const styles=StyleSheet.create({
    
  paginationWrapper: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 50 ,
    backgroundColor: '#0C1845',
    marginLeft: 10,
  },
});
