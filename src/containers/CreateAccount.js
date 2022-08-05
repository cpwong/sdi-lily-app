import * as React from 'react'
import { ImageBackground, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';

import styles from '../styles/styles'

function CreateAccount({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }>
      <ImageBackground
        style={{ flex: 3, width: '100%' }}
        source={require('../assets/create-account.png')}
        resizeMode='contain'
      >
        <Text style={[styles.h2, {paddingTop: 50}]}>Create Account</Text>
      </ImageBackground>
      <View 
        style={{ flex: 4, justifyContent: 'center' }}>
        <TextInput 
          style={styles.input}
          placeholder='Your user name'
        />
        <TextInput 
          style={styles.input}
          placeholder='Your e-mail'
        />
        <TextInput 
          style={styles.input}
          placeholder='Your mobile'
        />
        <TextInput 
          style={styles.input}
          placeholder='Enter your pasword'
        />
        <TextInput 
          style={styles.input}
          placeholder='Confirm password'
        />
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
        
      </KeyboardAvoidingView>
  )
}

export default CreateAccount