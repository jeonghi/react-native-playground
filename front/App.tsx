/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <InputContainer />
      {/* <InputContainer /> */}
    </SafeAreaView>
    );
}

function InputContainer() {

  const [name, setName] = React.useState('');
  const handleNameChange = (text: string) => {
    console.log(text);
    setName(text);
  }

  return (
    <View style={styles.inputContainer}>
      <Text>이름</Text>
      <TextInput 
        style={styles.input} 
        value={name}
        onChangeText={handleNameChange}
        placeholder="입력해주세요" 
      />
      <Button title="버튼" onPress={() => console.log('버튼')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    backgroundColor: 'red',
    // margin: '10%',
    // marginHorizontal: 10,
    // marginVertical: 10,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
  },

  inputContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'yellow',
  }
});

export default App;
