import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Button, TouchableOpacity, ScrollViewComponent } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import theme from '../utils/Styles'
import CustomText from '../Components/CustomText'
import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import CustomImage from '../Components/CustomImage'
const { height, width } = Dimensions.get('screen')

const TopDoctors = ({navigation}) => {
    const data = [{ img: require('../assets/images/dr.png'), name: 'Dr. Marcus Marcus', desi: 'Chardiologist', rating: '4,7', dest: '800m away' }, { img: require('../assets/images/dr1.png'), name: 'Dr. Maria Elena', desi: 'Psychologist', rating: '4,9', dest: '1,5km away' }, { img: require('../assets/images/dr2.png'), name: 'Dr. Gerty Cori', desi: 'Orthopedist', rating: '4,8', dest: '2km away' }, { img: require('../assets/images/dr3.png'), name: 'Dr. Diandra', desi: 'Orthopedist', rating: '4,8', dest: '2km away' },{ img: require('../assets/images/dr4.png'), name: 'Dr. Stefi Jessi', desi: 'Orthopedist', rating: '4,8', dest: '2km away' },{ img: require('../assets/images/dr.png'), name: 'Dr. Marcus Marcus', desi: 'Chardiologist', rating: '4,7', dest: '800m away' }, { img: require('../assets/images/dr1.png'), name: 'Dr. Maria Elena', desi: 'Psychologist', rating: '4,9', dest: '1,5km away' }, { img: require('../assets/images/dr2.png'), name: 'Dr. Gerty Cori', desi: 'Orthopedist', rating: '4,8', dest: '2km away' }, { img: require('../assets/images/dr3.png'), name: 'Dr. Diandra', desi: 'Orthopedist', rating: '4,8', dest: '2km away' },{ img: require('../assets/images/dr4.png'), name: 'Dr. Stefi Jessi', desi: 'Orthopedist', rating: '4,8', dest: '2km away' },  ]

  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <View style={{ flex: 0.2, alignItems:'flex-start' }}>
        <Ionicons name={"chevron-back"} size={30} color={theme.colors.black} style={{ paddingTop: 20, textAlign: 'left', }} onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={{ flex: 0.6 }}>
        
        <CustomText
          title={"Top Doctor"}
          color={theme.colors.black}
          fontSize={theme.fontSize.regular}
          fontFamily={theme.fonts.interSemi}
          textAlign={'center'}
          padding={20}
        // backgroundColor='pink'
        />
      </View>
      <View style={{ flex: 0.2, alignItems:'flex-end' }}>
        <MaterialCommunityIcons name={"dots-vertical"} size={30} color={theme.colors.black} style={{ paddingTop: 20, textAlign: 'left', }}  />
      </View>
    </View>




    <View style={{flex:1}}>
    <FlatList 
         

          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {

            return (
             <TouchableOpacity onPress={()=>navigation.navigate('DoctorDetails' , {
              img:item.img,
              name:item.name,
              desi:item.desi,
              rating:item.rating,
              distance:item.dest
              
            })}>
               <View style={styles.listView}>
                <View style={{ alignItems: 'flex-start', }}>
                  <CustomImage
                    source={item.img}

                    resizeMode='contain'
                    width={111}
                    height={111}
                    borderRadius={10}
                   
                    
                  />
                </View>
                <View style={{paddingLeft:20}}>
                  <CustomText
                    title={item.name}
                    color={theme.colors.black}
                    fontSize={theme.fontSize.smallHeading}
                    fontFamily={theme.fonts.interSemi}

                  />
                  <CustomText
                    title={item.desi}
                    color={theme.colors.third}
                    fontSize={12}
                    fontFamily={theme.fonts.interMedium}
                    marginBottom={1}
                  />
                   <View style={{  marginTop: 5, }}>
                  <Text style={styles.rating}>
                    <AntDesign name={"star"} size={13} color={theme.colors.primary} /> {item.rating}
                  </Text>
                  <Text style={styles.distance}>
                    <Ionicons name={"location-sharp"} size={13} color={theme.colors.third} />{item.dest}

                  </Text>
                </View>
                </View>
               
              </View>
             </TouchableOpacity>
            );
          }}
        />
    </View>
    </View>
  )
}

export default TopDoctors

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        // backgroundColor: theme.colors.secondary
      },
      header: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        // flex: 1
        marginTop: 10,
        marginBottom: 0
      },
      
  listView: {
    flex:1,
    // width: 120,
     height: 125,
    borderWidth: 1,
    borderColor: '#A1A8B0',
    borderRadius: 10,
    padding: 6,
    // justifyContent: 'center',
    // marginRight:10,
    marginTop:15,
   
     flexDirection:'row'
  },
  rating: {
    padding: 4,
    width:50,
    borderRadius: 5,
    fontSize: 12,
    fontFamily: theme.fonts.interMedium,
    color: theme.colors.primary,
    backgroundColor: 'rgba(25, 154, 142, 0.1)'
  },
  distance: {
    padding: 4,
    borderRadius: 5,
    fontSize: 8,
    fontFamily: theme.fonts.interMedium
  }
})