import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AppIntroSlider from 'react-native-app-intro-slider';
import theme from '../utils/Styles';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
const Slides = [{ img: require('../assets/images/d1.png'), description: 'Consult only with a doctor you trust' }, { img: require('../assets/images/d2.png'), description: 'Get connect our Online Consultation' }, { img: require('../assets/images/d3.png'), description: 'Find a lot of specialist doctors in one place' },]


const { height, width } = Dimensions.get('screen')



const OnBoarding = ({ navigation }) => {
    const onSkip = () => {
        navigation.navigate('GetStarted')
    }

    return (

        <View style={styles.container}>

            <AppIntroSlider
                data={Slides}
                showPrevButton={false}
                showSkipButton={false}
                onDone={() => {
                    navigation.navigate('GetStarted')
                }}


                dotStyle={{ backgroundColor: '#199A8E', opacity: 0.2, height: 5, }}
                activeDotStyle={{ backgroundColor: '#199A8E', height: 5, width: 15 }}
                skipButton={{ backgroundColor: 'red' }}

                renderItem={({ item, index }) => {
                    return (

                        <View style={styles.container1}>
                            <View style={styles.skipButton}><Text style={styles.skipText} onPress={onSkip}>Skip</Text></View>
                            <View style={styles.imageView}>
                                <CustomImage
                                source={item.img}
                                resizeMode='contain'
                                width={width*0.9}
                                height={height*0.7}
                                />
                           
                            </View>
                            

                            <View style={styles.innerBox}>
                                <CustomText
                                title={item.description}
                                fontSize={20}
                                fontFamily={theme.fonts.inter}
                              
                               padding={10}
                                color='black'
                                />

                            </View>

                        </View>
                    )
                }}

                renderNextButton={() => {
                    return (
                        <View style={{ backgroundColor: '#199A8E', padding: 8, borderRadius: 20 }}>
                            <AntDesign name={'arrowright'} size={25} color={'white'} />
                        </View>
                    )
                }}
                renderDoneButton={() => {
                    return (
                        <View style={{ backgroundColor: '#199A8E', padding: 8, borderRadius: 20 }}>
                            <AntDesign name={'arrowright'} size={25} color={'white'} />
                        </View>
                    )
                }}
                renderPrevButton={() => {
                    return (
                        <View style={{ backgroundColor: '#199A8E', padding: 8, borderRadius: 20 }}>
                            <AntDesign name={'arrowleft'} size={25} color={'white'} />
                        </View>
                    )
                }}

            />
        </View>
    )
}

export default OnBoarding

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: 'red',
        paddingHorizontal:20
      
    },
    container1: {
        // justifyContent: 'center',
        flex: 1,
        alignItems:'center'
        //  backgroundColor: 'red',
        //justifyContent:'center'
        // backgroundColor:'blue'


    },
    skipButton: {
        alignSelf: 'flex-end',
        flex:0.1,
        // backgroundColor:'pink',
        justifyContent:'flex-end',
        
       

    },
    skipText: {
        fontSize: theme.fontSize.regular,
        fontWeight: '600'
    },
    imageView:{
        // backgroundColor:'green',
        flex:0.8,
    },
    docImage: {
       


    },
    innerBox: {
       flex:0.3,
        backgroundColor: '#F6F8FF',
       borderTopRightRadius:10,
       borderTopLeftRadius:10,
        width: width * 0.87,
        
        //bottom:65

    },
  


})


