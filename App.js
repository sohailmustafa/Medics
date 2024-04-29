import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Splash from './src/Screens/Splash'
import OnBoarding from './src/Screens/OnBoarding'
import GetStarted from './src/Screens/GetStarted'
import Login from './src/Screens/Login'
import SignUp from './src/Screens/SignUp'
import Home from './src/Screens/Home'
import TopDoctors from './src/Screens/TopDoctors'
import Doctors from './src/Screens/Doctors'
import DoctorDetails from './src/Screens/DoctorDetails'
import Maps from './src/Screens/Maps'



// import BottomNavigator from './Navigation/BottomNavigator'

const Stack = createNativeStackNavigator()
const App = () => {

  //<!-------Navigation--------!>
  // const [splash, showSplash] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     showSplash(false)
  //   }, 3000)
  // }, [])

  return (
    // <Doctors/>
    // <Home/>
    <Maps/>
      // <Rough/>
    // <GetStarted/> 
    //  <Login/>
    // <SignUp/>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
    //     {splash ?
    //       <Stack.Screen name='Splash' component={Splash} />
    //       :
    //       <>

    //         <Stack.Screen name='OnBoarding' component={OnBoarding} />
    //         <Stack.Screen name='GetStarted' component={GetStarted} />
    //         <Stack.Screen name='Login' component={Login} />
    //         <Stack.Screen name='SignUp' component={SignUp} />
    //         <Stack.Screen name='Home' component={Home} />
           
    //         <Stack.Screen name='TopDoctors' component={TopDoctors} />
    //         <Stack.Screen name='Doctors' component={Doctors} />
    //         <Stack.Screen name='DoctorDetails' component={DoctorDetails} />


    //       </>
    //     }
    //   </Stack.Navigator>
    // </NavigationContainer>

  


  )
}

export default App

const styles = StyleSheet.create({})




// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Splash from './src/Screens/Splash'
// import OnBoarding from './src/Screens/OnBoarding'
// import GetStarted from './src/Screens/GetStarted'
// import Login from './src/Screens/Login'
// import SignUp from './src/Screens/SignUp'
// import Home from './src/Screens/Home'
// import TopDoctors from './src/Screens/TopDoctors'
// import DoctorDetails from './src/Screens/DoctorDetails'
// import Doctors from './src/Screens/Doctors'

// const App = () => {
//   return (
//     <Doctors/>
//     // <DoctorDetails/>
//     // <TopDoctors/>
//     // <Home/>
//     // <SignUp/>
//     // <Login/>
//     // <GetStarted/>
//     // <Splash/>
//     // <OnBoarding/>
//   )
// }

// export default App

// const styles = StyleSheet.create({})