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

const DoctorDetails = ({ route, navigation }) => {
  const { img, name, desi, rating, distance, otherParam } = route.params;
  const data = [{ day: 'Fri', date: '18' }, { day: 'Sat', date: '19' }, { day: 'Sun', date: '20' }, { day: 'Mon', date: '21' }, { day: 'Tue', date: '22' }, { day: 'Wed', date: '23' }, { day: 'Thr', date: '24' }, { day: 'Fri', date: '25' }, { day: 'Sat', date: '26' }, { day: 'Sun', date: '27' }, { day: 'Mon', date: '28' }, { day: 'Tue', date: '29' }]
  const data2 = [{time:'09:00 AM'},{time:'10:00 AM'},{time:'11:00 AM'},{time:'01:00 PM'},{time:'02:00 PM'},{time:'03:00 PM'},{time:'04:00 PM'},{time:'07:00 PM'},{time:'08:00 PM'}]
  const [isPressed, setIsPressed] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 0.2, alignItems: 'flex-start' }}>
          <Ionicons name={"chevron-back"} size={30} color={theme.colors.black} style={{ paddingTop: 20, textAlign: 'left', }} onPress={() => navigation.navigate('TopDoctors')} />
        </View>
        <View style={{ flex: 0.6 }}>

          <CustomText
            title={"Doctor Detail"}
            color={theme.colors.black}
            fontSize={theme.fontSize.regular}
            fontFamily={theme.fonts.interSemi}
            textAlign={'center'}
            padding={20}
          // backgroundColor='pink'
          />
        </View>
        <View style={{ flex: 0.2, alignItems: 'flex-end' }}>
          <MaterialCommunityIcons name={"dots-vertical"} size={30} color={theme.colors.black} style={{ paddingTop: 20, textAlign: 'left', }} />
        </View>
      </View>

      <View style={styles.listView}>
        <View style={{ alignItems: 'flex-start', }}>
          <CustomImage
            source={img}

            resizeMode='contain'
            width={111}
            height={111}
            borderRadius={10}


          />
        </View>
        <View style={{ paddingLeft: 20 }}>
          <CustomText
            title={name}
            color={theme.colors.black}
            fontSize={theme.fontSize.smallHeading}
            fontFamily={theme.fonts.interSemi}

          />
          <CustomText
            title={desi}
            color={theme.colors.third}
            fontSize={12}
            fontFamily={theme.fonts.interMedium}
            marginBottom={1}
          />
          <View style={{ marginTop: 5, }}>
            <Text style={styles.rating}>
              <AntDesign name={"star"} size={13} color={theme.colors.primary} /> {rating}
            </Text>
            <Text style={styles.distance}>
              <Ionicons name={"location-sharp"} size={13} color={theme.colors.third} />{distance}

            </Text>
          </View>
        </View>

      </View>


      <View style={styles.HeadingText}>
        <CustomText
          title='About'
          fontFamily={theme.fonts.inter}
          fontSize={theme.fontSize.regular}
          color={theme.colors.black}
        />
      </View>
      <View style={styles.about}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam... Read more</Text>
      </View>


      <View style={{}}>
        <FlatList style={{}}
          showsHorizontalScrollIndicator={false}
          horizontal

          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const isSelected = selectedItem === item.date;
            return (
              <TouchableOpacity style={{
                padding: 10,
                borderWidth: 1,
                borderColor: '#A1A8B0',
                borderRadius: 15,
                padding: 7,

                marginTop: 20,
                marginRight: 5,
                backgroundColor: isSelected ? theme.colors.primary : 'transparent',


              }}
                activeOpacity={0.7}
                underlayColor={theme.colors.primary}
                onPress={() => setSelectedItem(item.date)}
              >
                <View >

                  <View style={{ padding: 5, alignItems: 'center', }}>
                    <CustomText
                      title={item.day}
                      color={isSelected ? theme.colors.white : theme.colors.black}
                      fontSize={10}
                      fontFamily={theme.fonts.interRegular}

                    />
                    <CustomText
                      title={item.date}
                      color={isSelected ? theme.colors.white : theme.colors.black}
                      fontSize={18}
                      fontFamily={theme.fonts.interSemi}

                    />


                  </View>

                </View>
              </TouchableOpacity>
              
            );
          }}
        />
      </View>

      <View
              style={{
                borderBottomColor: 'gray',
                marginTop: 20,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />


<View style={{marginTop:5}}>
        <FlatList style={{}}
          showsHorizontalScrollIndicator={false}
          numColumns={3}

          data={data2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const isSelected = isPressed === item.time;
            return (
              <View style={{flex:1}}>
              <TouchableOpacity style={{
                padding: 7,
                borderWidth: 1,
                borderColor: '#A1A8B0',
                borderRadius: 15,
               
               
               
                marginTop: 15,
                marginRight: 5,
                backgroundColor: isSelected ? theme.colors.primary : 'transparent',
                // width:110

              }}
                activeOpacity={0.7}
                underlayColor={theme.colors.primary}
                onPress={() => setIsPressed(item.time)}
              >
                <View style={{}}>

                  <View style={{ padding: 5, alignItems: 'center', }}>
                    <CustomText
                      title={item.time}
                      color={isSelected ? theme.colors.white : theme.colors.black}
                      fontSize={10}
                      fontFamily={theme.fonts.interRegular}

                    />
                   


                  </View>

                </View>
              </TouchableOpacity>
              </View>
              
            );
          }}
        />
      </View>
    </View>
    
  )
}

export default DoctorDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.secondary
  },
  header: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    // flex: 1
    marginTop: 10,
    marginBottom: 0
  },

  listView: {

    // width: 120,
    height: 125,
    // borderWidth: 1,
    // borderColor: '#A1A8B0',
    borderRadius: 10,
    padding: 7,
    // justifyContent: 'center',
    // marginRight:10,
    marginTop: 15,
    // backgroundColor:'red',


    flexDirection: 'row'
  },
  dateList: {

    padding: 10,
    borderWidth: 1,
    borderColor: '#A1A8B0',
    borderRadius: 15,
    padding: 7,
    marginTop: 10,
    marginRight: 5,
    backgroundColor: 'red',


    flexDirection: 'row'
  },
  rating: {
    padding: 4,
    width: 50,
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
  },
  HeadingText: {
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 5
  },
  about: {
    paddingHorizontal: 15,
    marginTop: 5,
    marginBottom: 5,


  },
  date: {
    paddingHorizontal: 15,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: theme.colors.last,
    padding: 10,



  }
})