import React from 'react';
import 'expo-dev-menu';
import { Pressable, 
         SafeAreaView, 
         TextInput, 
         Text, 
         View, 
         FlatList } from 'react-native';
import { styles } from './Styles.js';

const data = []; // i fucking hate javascript scoping

export default function TextBox() {
  const [quoteString, onChangeQuote] = React.useState('');
  const [authorString, onChangeAuthor] = React.useState('');
  const [quoteList, setQuoteList] = React.useState([]);
  const [quoteListUID, setQuoteListUID] = React.useState(0);

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
         onPress={ () => { setQuoteList([...data, { id: quoteListUID, author: authorString, quote: quoteString }]);
                           setQuoteListUID(quoteListUID + 1);
                           } } >
          <Text style={styles.buttonText}>Add Quote</Text>  
        </Pressable>
      </View> 
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={quoteList}
          renderItem={({ item }) => 
            <Text style={styles.quoteText}>"{item.quote}" -{item.author}</Text>}
          extraData={quoteList} // enables rerendering of the flatlist when this state is modified
        />
      </View>
    </SafeAreaView>
  );
};