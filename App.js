import React from 'react';
import 'expo-dev-menu';
import { Pressable, SafeAreaView, TextInput, Text, Button, View } from 'react-native';
import { styles } from './Styles.js';
import { setOnPressTrue } from './Functions.js';

export default function TextBox() {
  const [quote, onChangeQuote] = React.useState('');
  const [author, onChangeAuthor] = React.useState('');
  const [updatePair, onButtonPressed] = React.useState(false);

    return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <Text style={styles.title}>muhfuckin quote app.</Text>
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
        <Pressable 
         style={styles.pressable} 
         onPress={ () => { (!updatePair ? onButtonPressed(true) : ""); updatedQuote = quote; updatedAuthor = author; } }
        >
          <Text style={styles.buttonText}>Add Quote</Text>  
        </Pressable>
      </View> 
      <View>
        { updatePair && <Text style={styles.quoteText}>"{updatedQuote}" -{updatedAuthor}</Text> }
      </View>
    </SafeAreaView>
  );
};