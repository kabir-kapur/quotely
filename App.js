import React from 'react';
import 'expo-dev-menu';
import { Pressable, 
         SafeAreaView, 
         TextInput, 
         Text, 
         View, 
         FlatList } from 'react-native';
import { styles } from './Styles.js';

const data = [];

export default function TextBox() {
  const [quoteString, onChangeQuote] = React.useState('');
  const [authorString, onChangeAuthor] = React.useState('');
  const [quoteList, setQuoteList] = React.useState([]);

    return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <Text style={styles.title}>muhfuckin quote app.</Text>
        <TextInput
          style={styles.quoteInput}
          onChangeText={onChangeQuote}
          placeholder="quote"
          inputMode="text"
        />
        <TextInput
          style={styles.authorInput}
          onChangeText={onChangeAuthor}
          placeholder="author"
          inputMode="text"
        />
        <Pressable 
         style={styles.pressable} 
         onPress={ () => { data.push({author: authorString, quote: quoteString});
                           setQuoteList(data);
                           console.log(quoteList) 
                           console.log(data)} } >
          <Text style={styles.buttonText}>Add Quote</Text>  
        </Pressable>
      </View> 
      <FlatList
        keyExtractor = {item => item.author}
        data={quoteList}
        renderItem={(item) => (
          <Text style={styles.quoteText}>"{item.quote}" -{item.author}</Text>
        )}
      />
    </SafeAreaView>
  );
};