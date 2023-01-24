import React from 'react';
import 'expo-dev-menu';
import { Pressable, SafeAreaView, TextInput, Text } from 'react-native';
import { styles } from './Styles.js';

export default function TextBox() {
  const [quote, onChangeQuote] = React.useState('');
  const [author, onChangeAuthor] = React.useState('');

    return (
    <SafeAreaView>  
      <Text style={styles.title}>quotely.</Text>
      <TextInput
        style={styles.quoteInput}
        onChangeText={onChangeQuote}
        value={quote}
        placeholder="quote"
        inputMode="text"
      />
      <TextInput
        style={styles.authorInput}
        onChangeText={onChangeAuthor}
        value={author}
        placeholder="author"
        inputMode="text"
      />
      <Pressable style={styles.pressable}>
        <Text style={styles.text}>Add Quote</Text>  
      </Pressable>
    </SafeAreaView>
  );
};