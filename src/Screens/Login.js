import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Modal from 'react-native-modal'
import theme from '../utils/Styles'
import CustomText from '../Components/CustomText'
import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import CustomImage from '../Components/CustomImage'


const Login = ( {navigation}) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <View style={styles.container}>


            <View style={styles.header}>
                <View style={styles.backIcon}>
                    <TouchableOpacity onPress={()=>navigation.navigate('GetStarted')}><Ionicons name={"chevron-back"} size={30} color={theme.colors.black} style={styles.back} /></TouchableOpacity>
                </View>
                <View style={styles.LoginHeading}>
                    <CustomText
                        title='Login'
                        fontSize={theme.fontSize.subHeading}
                        fontFamily={theme.fonts.bold}
                        color={theme.colors.black}
                        textAlign='center'

                    />
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.inputView}>
                    <View style={styles.emailIconView}>
                        <MaterialCommunityIcons name={"email-outline"} size={25} color={theme.colors.placeholder} />
                    </View>
                    <View style={styles.textInputView}>
                        <CustomInput
                            placeholder={'Enter Your Email'}
                            //borderWidth={1}
                            fontSize={theme.fontSize.regular}

                        />
                    </View>
                </View>
                <View style={styles.inputView}>
                    <View style={styles.emailIconView}>
                        <Feather name={"lock"} size={25} color={theme.colors.placeholder} />
                    </View>
                    <View style={styles.textInputView}>
                        <CustomInput
                            placeholder={'Enter Your Password'}
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            fontSize={theme.fontSize.regular}

                        />
                    </View>
                    <View style={styles.eyeIconView}>
                        <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} style={styles.eyeIcon} onPress={togglePasswordVisibility} />

                    </View>
                </View>


                <View style={styles.forgetText}>
                    <CustomText
                        title='Forget Password?'
                        color={theme.colors.placeholder}
                        fontFamily={theme.fonts.interMedium}
                        fontSize={theme.fontSize.mediumregular}
                    />

                </View>
                <View>
                    <CustomButton
                        title='login'
                        paddingVertical={14}
                        textAlign='center'
                        backgroundColor={theme.colors.primary}
                        color={theme.colors.white}
                        fontSize={theme.fontSize.regular}
                        fontFamily={theme.fonts.interSemi}
                        borderRadius={50}
                        marginTop={30}
                        onPress={toggleModal}
                    // borderWidth={1}
                    />
                </View>
                <View style={styles.accountView}>
                    <CustomText
                        title="Don't have an account?"
                        color={theme.colors.placeholder}
                        fontFamily={theme.fonts.interMedium}
                        fontSize={theme.fontSize.mediumregular}
                        textAlign='center'
                    />
                    <CustomText
                        title=" Sign Up"
                        color={theme.colors.primary}
                        fontFamily={theme.fonts.interMedium}
                        fontSize={theme.fontSize.mediumregular}
                        textAlign='center'
                    />

                </View>
                <View style={styles.orView}>
                    <CustomText
                        title='-----------------'
                        color={theme.colors.placeholder}
                        fontFamily={theme.fonts.interMedium}
                        fontSize={theme.fontSize.mediumregular}
                        textAlign='center'
                    />
                    <CustomText
                        title="OR"
                        color={theme.colors.placeholder}
                        fontFamily={theme.fonts.interMedium}
                        fontSize={theme.fontSize.mediumregular}
                        textAlign='center'
                    />
                    <CustomText
                        title='-----------------'
                        color={theme.colors.placeholder}
                        fontFamily={theme.fonts.interMedium}
                        fontSize={theme.fontSize.mediumregular}
                        textAlign='center'
                    />

                </View>
            
                    <TouchableOpacity style={styles.imageButton}>

                        <View style={{ flex: 0.5, paddingLeft: 10 }}>
                            <CustomImage

                                source={require('../assets/images/google.png')}
                                alignCenter={'center'}
                                height={30}
                                width={30}
                                resizeMode={'contain'}
                            />
                        </View>
                        <View style={{}}>
                            <CustomText
                                title={"Sign in with Google"}
                                color={theme.colors.black}
                                fontSize={theme.fontSize.regular}
                                fontFamily={theme.fonts.interSemi}
                                textAlign={'left'}


                            />
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imageButton}>

                        <View style={{ flex: 0.5, paddingLeft: 10 }}>
                            <CustomImage

                                source={require('../assets/images/apple.png')}
                                alignCenter={'center'}
                                height={30}
                                width={30}
                                resizeMode={'contain'}
                            />
                        </View>
                        <View style={{}}>
                            <CustomText
                                title={"Sign in with Apple"}
                                color={theme.colors.black}
                                fontSize={theme.fontSize.regular}
                                fontFamily={theme.fonts.interSemi}
                                textAlign={'left'}


                            />
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imageButton}>

                        <View style={{ flex: 0.5, paddingLeft: 10 }}>
                            <CustomImage

                                source={require('../assets/images/facebook.png')}
                                alignCenter={'center'}
                                height={30}
                                width={30}
                                resizeMode={'contain'}
                            />
                        </View>
                        <View style={{}}>
                            <CustomText
                                title={"Sign in with Facebook"}
                                color={theme.colors.black}
                                fontSize={theme.fontSize.regular}
                                fontFamily={theme.fonts.interSemi}
                                textAlign={'left'}


                            />
                        </View>

                    </TouchableOpacity>
          
            </View>

            <View>
                <Modal isVisible={isModalVisible} onRequestClose={() => setModalVisible(false)} transparent>
                    <View style={styles.modal}>
                        <View style={styles.checkView}>
                            <Feather name={"check"} size={50} style={styles.checkIcon} />
                        </View>
                        <Text style={styles.modelTitle}>Yeay! Welcome Back</Text>
                        <Text onPress={toggleModal} style={styles.modeldes}>Once again you login successfully into medidoc app</Text>

                        
                    <View>
                    <CustomButton
                       title="Go to home"
                        paddingVertical={14}
                        paddingHorizontal={50}
                        textAlign='center'
                        backgroundColor={theme.colors.primary}
                        color={theme.colors.white}
                        fontSize={theme.fontSize.regular}
                        fontFamily={theme.fonts.interSemi}
                        borderRadius={50}
                        marginTop={30}
                        onPress={toggleModal}
                    // borderWidth={1}
                    />
                    </View>

                    </View>
                </Modal>
                </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: theme.colors.white

    },
    header: {
        marginBottom:25,

        flexDirection: 'row'

    },
    backIcon: {
        flex: 0.15,
        // backgroundColor: 'green',

        paddingVertical: 20,
    },
    back: {

    },
    LoginHeading: {
        flex: 0.68,
        // backgroundColor: 'pink',
        paddingHorizontal: 20,
        paddingVertical: 20,

    },
    body: {
        flex: 0.85,
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
        flex: 0.7
    },
    eyeIconView: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5
    },
    forgetText: {
        alignItems: 'flex-end'
    },
    accountView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,

    },

    orView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        justifyContent: 'space-evenly',
        marginBottom: 30
    },
    imageButton: {
 
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        padding: 12,
        borderRadius: 50,
        marginVertical: 10,
        borderWidth:1,
        borderColor:theme.colors.borderColor
    },
    imageButtonText: {

    },
    modal: {
        flex: 0.5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
    },
    checkView: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#DDE4F2'

    },

    checkIcon: {
        textAlign: 'center',
        color: theme.colors.primary
    },
    modelTitle: {
        fontFamily: theme.fonts.inter,
        fontSize: theme.fontSize.mediumHeading,
        color: theme.colors.black,
        marginTop: 15
    },
    modeldes: {
        fontFamily: theme.fonts.interRegular,
        fontSize: theme.fontSize.mediumregular,
        color: theme.colors.third,
        textAlign: 'center',
        padding: 10
    },

})