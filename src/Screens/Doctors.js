import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Button, TouchableOpacity, ScrollViewComponent } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Modal from 'react-native-modal'
import theme from '../utils/Styles'
import CustomText from '../Components/CustomText'
import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import CustomImage from '../Components/CustomImage'
const { height, width } = Dimensions.get('screen')

const Doctors = ({ navigation }) => {
    const data = [{ img: require('../assets/images/dr.png'), name: 'Dr. Marcus', desi: 'Chardiologist', rating: '4,7', dest: '800m away' }, { img: require('../assets/images/dr1.png'), name: 'Dr. Maria', desi: 'Psychologist', rating: '4,9', dest: '1,5km away' }, { img: require('../assets/images/dr2.png'), name: 'Dr. Gerty', desi: 'Orthopedist', rating: '4,8', dest: '2km away' }, { img: require('../assets/images/dr3.png'), name: 'Dr. Diandra', desi: 'Orthopedist', rating: '4,8', dest: '2km away' }, { img: require('../assets/images/dr4.png'), name: 'Dr. Stefi', desi: 'Orthopedist', rating: '4,8', dest: '2km away' },]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 0.2, alignItems: 'flex-start' }}>
                    <Ionicons name={"chevron-back"} size={30} color={theme.colors.black} style={{ paddingTop: 20, textAlign: 'left', }} onPress={() => navigation.navigate('Home')} />
                </View>
                <View style={{ flex: 0.6 }}>

                    <CustomText
                        title={"Find Doctor"}
                        color={theme.colors.black}
                        fontSize={theme.fontSize.regular}
                        fontFamily={theme.fonts.interSemi}
                        textAlign={'center'}
                        padding={20}
                    // backgroundColor='pink'
                    />
                </View>

            </View>




            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

                <View style={styles.searchBar}>
                    <View style={styles.iconView}>
                        <Octicons name={"search"} size={25} color={theme.colors.third} />
                    </View>
                    <View style={styles.saerchView}>
                        <CustomInput
                            placeholder='Search docto, drugs, articles'
                            padding={10}
                            color={theme.colors.third}


                        />
                    </View>
                </View>


                <View style={styles.HeadinText}>
                    <CustomText
                        title='Category'
                        fontFamily={theme.fonts.inter}
                        fontSize={theme.fontSize.regular}
                        color={theme.colors.black}
                    />
                </View>


                <View style={styles.services}>
                    <View>
                        <View style={styles.serviceIcon}>
                            <FontAwesome name={"stethoscope"} size={30} color={theme.colors.primary} />

                        </View>
                        <View>
                            <CustomText
                                title='General'
                                fontFamily={theme.fonts.interMedium}
                                fontSize={10}
                                textAlign='center'
                                marginTop={10}
                                marginBottom={10}

                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.serviceIcon}>
                            <MaterialCommunityIcons name={"lungs"} size={30} color={theme.colors.primary} />
                        </View>
                        <View>
                            <CustomText
                                title='Lungs'
                                fontFamily={theme.fonts.interMedium}
                                fontSize={10}
                                textAlign='center'
                                marginTop={10}
                                marginBottom={10}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.serviceIcon}>
                            <MaterialCommunityIcons name={"tooth-outline"} size={30} color={theme.colors.primary} />
                        </View>

                        <View>
                            <CustomText
                                title='Dentist'
                                fontFamily={theme.fonts.interMedium}
                                fontSize={10}
                                textAlign='center'
                                marginTop={10}
                                marginBottom={10}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.serviceIcon}>
                            <MaterialCommunityIcons name={"google-circles-extended"} size={30} color={theme.colors.primary} />
                        </View>
                        <View>
                            <CustomText
                                title='Psychiatrist'
                                fontFamily={theme.fonts.interMedium}
                                fontSize={10}
                                textAlign='center'
                                marginTop={10}
                                marginBottom={10}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.serviceIcon}>
                            <FontAwesome6 name={"virus-covid"} size={30} color={theme.colors.primary} />

                        </View>
                        <View>
                            <CustomText
                                title='Covid'
                                fontFamily={theme.fonts.interMedium}
                                fontSize={10}
                                textAlign='center'
                                marginTop={10}

                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.serviceIcon}>
                            <Fontisto name={"injection-syringe"} size={30} color={theme.colors.primary} />

                        </View>
                        <View>
                            <CustomText
                                title='Syrgen'
                                fontFamily={theme.fonts.interMedium}
                                fontSize={10}
                                textAlign='center'
                                marginTop={10}

                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.serviceIcon}>
                            <Fontisto name={"heartbeat"} size={30} color={theme.colors.primary} />

                        </View>
                        <View>
                            <CustomText
                                title='Cardiologist'
                                fontFamily={theme.fonts.interMedium}
                                fontSize={10}
                                textAlign='center'
                                marginTop={10}

                            />
                        </View>
                    </View>




                </View>


                <View style={styles.HeadinText}>
                    <CustomText
                        title='Recommended Doctors'
                        fontFamily={theme.fonts.inter}
                        fontSize={theme.fontSize.regular}
                        color={theme.colors.black}
                    />
                </View>

                <View style={styles.recDr}>
                    <View style={{ alignItems: 'flex-start', }}>
                        <CustomImage
                            source={require('../assets/images/dr.png')}

                            resizeMode='contain'
                            width={100}
                            height={100}
                            borderRadius={50}
                            marginTop={7}


                        />
                    </View>
                    <View style={{ paddingLeft: 10, }}>
                        <CustomText
                            title="Dr. Marcus Horizon"
                            color={theme.colors.black}
                            fontSize={theme.fontSize.smallHeading}
                            fontFamily={theme.fonts.interSemi}
                            marginTop={10}

                        />
                        <CustomText
                            title="Chardiologist"
                            color={theme.colors.third}
                            fontSize={12}
                            fontFamily={theme.fonts.interMedium}
                            marginBottom={1}
                        />
                        <View
                            style={{
                                borderBottomColor: 'gray',
                                marginTop: 10,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        ></View>
                        <View style={{ marginTop: 5, flexDirection: 'row' }}>
                            <Text style={styles.rating}>
                                <AntDesign name={"star"} size={13} color={theme.colors.primary} /> 4,7
                            </Text>
                            <Text style={styles.distance}>
                                <Ionicons name={"location-sharp"} size={13} color={theme.colors.third} />800m

                            </Text>
                        </View>
                    </View>

                </View>

                <View style={styles.HeadinText}>
                    <CustomText
                        title='Your Recent Doctors'
                        fontFamily={theme.fonts.inter}
                        fontSize={theme.fontSize.regular}
                        color={theme.colors.black}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <FlatList style={{}}
                        showsHorizontalScrollIndicator={false}
                        horizontal

                        data={data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {

                            return (
                                <TouchableOpacity >
                                    <View style={styles.listView}>
                                        <View style={{ alignItems: 'flex-start', flex: 1 }}>
                                            <CustomImage
                                                source={item.img}

                                                resizeMode='contain'
                                                width={70}
                                                height={70}
                                                borderRadius={35}


                                            />
                                        </View>
                                        <View style={{ padding: 5 }}>
                                            <CustomText
                                                title={item.name}
                                                color={theme.colors.black}
                                                fontSize={13}
                                                fontFamily={theme.fonts.interSemi}

                                            />


                                        </View>

                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>






            </ScrollView>
        </View>
    )
}

export default Doctors

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
        marginTop: 0,
        marginBottom: 0
    },
    searchBar: {
        flexDirection: 'row',
        borderRadius: 50,
        backgroundColor: theme.colors.inputColor,
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        // flex: 1
    },

    HeadinText: {
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 5
    },
    iconView: {
        flex: 0.12,
        alignItems: 'flex-end',
        paddingVertical: 10
    },
    saerchView: {
        flex: 0.88,
    },
    services: {
        // flex: 1,
        // backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',

        marginTop: 5,
        padding: 1,

    },
    serviceIcon: {
        padding: 15,
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 8,


    },
    recDr: {
        flex: 1,
        // width: 120,
        height: 140,
        borderWidth: 1,
        borderColor:theme.colors.borderColor,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 7,
        // justifyContent: 'center',
        // marginRight:10,
        // margin: 5,
        marginHorizontal: 5,
        marginVertical: 5,

        flexDirection: 'row',

    },


    listView: {
        flex: 1,
        // width: 120,
        height: 100,
        // borderWidth: 1,
        // borderColor: '#A1A8B0',
        borderRadius: 10,

        // justifyContent: 'center',
        marginRight: 10,
        marginTop: 10,
        alignItems: 'center'

    },


    rating: {
        marginTop: 5,
        padding: 5,
        borderRadius: 5,
        fontSize: 10,
        fontFamily: theme.fonts.interMedium,
        color: theme.colors.primary,
        backgroundColor: 'rgba(25, 154, 142, 0.1)'
    },
    distance: {
        marginTop: 5,
        padding: 5,
        borderRadius: 5,
        fontSize: 12,
        marginLeft: 15,
        fontFamily: theme.fonts.interMedium
    }
})