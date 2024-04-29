import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Modal from 'react-native-modal'
import theme from '../utils/Styles'
import CustomText from '../Components/CustomText'
import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import CustomImage from '../Components/CustomImage'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Home = () => {
    const data = [{ img: require('../assets/images/dr.png'), name: 'Dr. Marcus Marcus', desi: 'Chardiologist', rating: '4,7', dest: '800m away' }, { img: require('../assets/images/dr1.png'), name: 'Dr. Maria Elena', desi: 'Psychologist', rating: '4,9', dest: '1,5km away' }, { img: require('../assets/images/dr2.png'), name: 'Dr. Gerty Cori', desi: 'Orthopedist', rating: '4,8', dest: '2km away' }, { img: require('../assets/images/dr3.png'), name: 'Dr. Diandra', desi: 'Orthopedist', rating: '4,8', dest: '2km away' },{ img: require('../assets/images/dr4.png'), name: 'Dr. Stefi Jessi', desi: 'Orthopedist', rating: '4,8', dest: '2km away' },  ]

    return (
        <View style={styles.container}>


            <View style={styles.header}>

                <View style={styles.heading}>
                    <CustomText
                        title={"Find your desire\nhealth solution"}
                        fontSize={theme.fontSize.mediumHeading}
                        fontFamily={theme.fonts.bold}
                        color={theme.colors.black}
                    />
                </View>
                <View style={styles.bellIcon}>
                    <TouchableOpacity><Octicons name={"bell"} size={25} color={theme.colors.black} style={styles.bell} /></TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputView}>
                <View style={styles.emailIconView}>
                    <Octicons name={"search"} size={25} color={theme.colors.placeholder} />
                </View>
                <View style={styles.textInputView}>
                    <CustomInput
                        placeholder={'Search doctor, drugs, articles'}
                        //borderWidth={1}
                        fontSize={theme.fontSize.small}
                    />
                </View>
            </View>

            <View style={styles.services}>
                <TouchableOpacity onPress={() => navigation.navigate('Doctors')}>
                    <View>
                        <View style={styles.serviceIcon}>
                            <FontAwesome name={"stethoscope"} size={30} color={theme.colors.primary} />

                        </View>
                        <View>
                            <CustomText
                                title='Doctor'
                                fontFamily={theme.fonts.interRegular}
                                fontSize={theme.fontSize.small}
                                textAlign='center'
                                marginTop={10}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Doctors')}>
                    <View>
                        <View style={styles.serviceIcon}>
                        <MaterialCommunityIcons name={"pill"} size={30} color={theme.colors.primary} />

                        </View>
                        <View>
                            <CustomText
                                title='Pharmacy'
                                fontFamily={theme.fonts.interRegular}
                                fontSize={theme.fontSize.small}
                                textAlign='center'
                                marginTop={10}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Doctors')}>
                    <View>
                        <View style={styles.serviceIcon}>
                        <FontAwesome5 name={"hospital"} size={30} color={theme.colors.primary} />

                        </View>
                        <View>
                            <CustomText
                                title='Hospital'
                                fontFamily={theme.fonts.interRegular}
                                fontSize={theme.fontSize.small}
                                textAlign='center'
                                marginTop={10}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Doctors')}>
                    <View>
                        <View style={styles.serviceIcon}>
                            <MaterialCommunityIcons name={"ambulance"} size={30} color={theme.colors.primary} />
                        </View>
                        <View>
                            <CustomText
                                title='Ambulance'
                                fontFamily={theme.fonts.interRegular}
                                fontSize={theme.fontSize.small}
                                textAlign='center'
                                marginTop={10}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>



            <View style={styles.learnMoreView}>
          <View style={styles.learn}>
            <CustomText
              title={"Early protection for\nyour family health"}
              fontFamily={theme.fonts.interSemi}
              fontSize={theme.fontSize.smallHeading}
              color={theme.colors.black}
              textAlign='left'
              marginTop={10}
              left={5}
              top={10}

            />
             <CustomButton
                       title="Learn more"
                        paddingVertical={10}
                        
                        textAlign='center'
                        backgroundColor={theme.colors.primary}
                        color={theme.colors.white}
                      fontSize={theme.fontSize.smallregular}
                      fontFamily={theme.fonts.interMedium}
                        borderRadius={50}
                        marginTop={30}
                        width={120}
                   
                    // borderWidth={1}
                    />
          </View>
          <View style={styles.iamgeView}>
            <CustomImage
              source={require('../assets/images/dr0.png')}
              width={150}
              height={150}
              resizeMode='contain'
              padding={80}
              right={25}
            />
          </View>
        </View>

        <View style={styles.topDoctors}>
          <CustomText
            title={"Top Doctor"}
            color={theme.colors.black}
            fontSize={theme.fontSize.regular}
            fontFamily={theme.fonts.interSemi}
            textAlign={'left'}
            padding={15}
          // backgroundColor='pink'
          />
          <CustomText
            title={"See all"}
            color={theme.colors.primary}
            fontSize={theme.fontSize.small}
            fontFamily={theme.fonts.inter}
            textAlign={'left'}
            padding={15}
            // backgroundColor='pink'
            onPress={() => navigation.navigate('TopDoctors')}
          />
        </View>
        <FlatList style={{}}
          horizontal

          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {

            return (
              <TouchableOpacity>
                <View style={styles.listView}>
                  <View style={{ alignItems: 'center', }}>
                    <CustomImage
                      source={item.img}

                      resizeMode='contain'
                      width={80}
                      height={80}
                      borderRadius={50}
                      marginBottom={5}
                      marginTop={5}
                    />
                  </View>
                  <View>
                    <CustomText
                      title={item.name}
                      color={theme.colors.black}
                      fontSize={theme.fontSize.inter}
                      fontFamily={theme.fonts.interSemi}
                      numberOfLines={1}

                    />
                    <CustomText
                      title={item.desi}
                      color={theme.colors.third}
                      fontSize={9}
                      fontFamily={theme.fonts.interMedium}
                      marginBottom={1}
                    />
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 5, }}>
                    <Text style={styles.rating}>
                      <AntDesign name={"star"} size={10} color={theme.colors.primary} /> {item.rating}
                    </Text>
                    <Text style={styles.distance}>
                      <Ionicons name={"location-sharp"} size={10} color={theme.colors.third} />{item.dest}

                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />


        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: theme.colors.bgColor

    },
    header: {
        // flex: 0.15,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        marginBottom:25
    },
    bell:{
        paddingTop:15
    },
    inputView: {
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        backgroundColor: theme.colors.inputColor,
        flexDirection: 'row',
        borderRadius: 20,
        marginBottom: 15
    },
    emailIconView: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5

    },

    textInputView: {
        // backgroundColor:'blue',
        flex: 0.85
    },
    services: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconView: {
        padding: 20
    },
    serviceIcon: {
        padding: 15,
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        alignItems: 'center'


    },
    learnMoreView: {
      backgroundColor: '#E8F3F1',
      borderRadius: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
  
  
    },
    learn: {
      alignItems: 'left',
      flex: 0.65,
      paddingLeft: 7
    },
    iamgeView: {
      paddingTop: 10,
      flex: 0.35,
      paddingRight:5,
      // alignItems:'flex-end',
      // backgroundColor:'red',
      justifyContent: 'flex-end'
    },
  
    topDoctors: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
  
    },
    listView: {
      width: 120,
      height: 170,
      borderWidth: 1,
      borderColor: '#A1A8B0',
      borderRadius: 10,
      padding: 10,
      justifyContent: 'center',
      marginRight: 10,
    },
    rating: {
      padding: 4,
      borderRadius: 5,
      fontSize: 8,
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