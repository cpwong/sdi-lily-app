import * as React from 'react'
import { useState } from 'react'
import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Checkbox } from 'react-native-paper';

import styles from '../styles/styles'

function Login() {
  const [checked, setChecked] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.container} behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }>
      <View style={{ flex: 3, justifyContent:'flex-start' }}>
        <Text style={[styles.h2, {paddingTop: 50}]}>Congrats!</Text>
        <Text style={[styles.text, {fontSize: 12, textAlign: 'left'}]}>You are all set now! Start the trial now.</Text>
      </View>
      <Image
        style={{ flex: 3, width: '100%' }}
        source={require('../assets/login.png')}
        resizeMode='contain'
      />
      <View style={{ flex: 3 }}>
        <TextInput 
          style={styles.input}
          placeholder='Your e-mail'
        />
        <TextInput 
          style={styles.input}
          placeholder='Your password'
        />
        <View style={styles.row}>
          <Checkbox
            style={{flex: 1}}
            status={ checked ? 'checked' : 'unchecked' }
            onPress={() => { setChecked(!checked) }}
          />
          <Text style={{flex: 1} }>Remember me?</Text>
          <Text style={{flex: 1, textAlign: 'right'}}>Forget password?</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('FaceID')}
        >
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Face ID</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Login')}
        >
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login