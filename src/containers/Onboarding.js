import * as React from 'react'
import { Button, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper'
import image1 from './../assets/onboarding-welcome.png'
import image2 from './../assets/onboarding-explore.png'
import image3 from '../assets/onboarding-plan-and-save.png'
import image4 from '../assets/onboarding-learn-about.png'

const styles = require('../styles/styles')
const { height, width } = Dimensions.get('window')
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

function Onboarding({navigation}) {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} 
        showsButtons={true}
        loop={false} 
        activeDot={ <View 
          style={{
            backgroundColor: '#6F9452',
            width: 24,
            height: 8,
            borderRadius: 4,
            margin: 3,
          }} />
        }
      >
        <View style={styles.slide1}>
          <ImageBackground 
            source={image1}
            resizeMode='cover'
            style={{ flex: 1, justifyContent: 'center', width: width }}
          >
            <Text style={styles.title}>Walk With Us</Text>
            <Text style={styles.subTitle}>{loremIpsum}</Text>
            <Text style={[styles.h5, {color: '#fff'}]}>{`Swipe right to start →`}</Text>
          </ImageBackground>
        </View>
        <View style={styles.slide2}>
          <Image 
            source={image2}
            resizeMode='contain'
            style={{ flex: 1, width: '100%' }}
          />
          <Text style={styles.h3}>Explore</Text>
          <Text style={styles.text}>{loremIpsum}</Text>
        </View>
        <View style={styles.slide3}>
          <Image 
            source={image3}
            resizeMode='contain'
            style={{ flex: 1, width: '100%' }}
          />
          <Text style={styles.h3}>Plan and Save</Text>
          <Text style={styles.text}>{loremIpsum}</Text>
        </View>
        <View style={styles.slide4}>
          <Image 
            source={image4}
            resizeMode='contain'
            style={{ flex: 1, width: '100%' }}
          />
          <Text style={styles.h3}>Learn About</Text>
          <Text style={styles.text}>{loremIpsum}</Text>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('CreateAccount')}
            >
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </View>
       
  )
}


export default Onboarding