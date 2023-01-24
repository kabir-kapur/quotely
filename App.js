import React from 'react';
import 'expo-dev-menu';
import { Pressable, SafeAreaView, TextInput, Text } from 'react-native';
import { styles } from './Styles.js';

export default function TextBox() {
  const [number, onChangeNumber] = React.useState('');

    return (
    <SafeAreaView>  
      <TextInput
        style={styles.quoteInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="quote"
        inputMode="text"
      />
      <TextInput
        style={styles.authorInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="author"
        inputMode="text"
      />
      <Pressable style={styles.pressable}>
        <Text style={styles.text}>Add Quote</Text>  
      </Pressable>
    </SafeAreaView>
  );
};