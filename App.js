import React from 'react';
import 'expo-dev-menu';
import { Pressable, 
         SafeAreaView, 
         TextInput, 
         Text, 
         View, 
         FlatList } from 'react-native';
import { styles } from './Styles.js';

export default function TextBox() {
  const data = new Array();

  const [quote, onChangeQuote] = React.useState('');
  const [author, onChangeAuthor] = React.useState('');
  const [quoteList, setQuoteList] = React.useState(data);

  console.log("typeof data: " + (typeof data));
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
         onPress={ () => { setQuoteList(data.push({"author": author, "quote": quote})); 
                           console.log(data)} } >
          <Text style={styles.buttonText}>Add Quote</Text>  
        </Pressable>
      </View> 
      <FlatList
        keyExtractor = {item => item.author}
        data={quoteList}
        renderItem={(item) => (
          <Text style={styles.quoteText}>"{item["quote"]}" -{item["author"]}</Text>
        )}
      />
    </SafeAreaView>
  );
};