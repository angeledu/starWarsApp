/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';


export const HeaderSearch = () => {

  const [query, setQuery] = useState('');


  const handleSearch = (queryText) => {

    const formattedQuery = queryText.toLowerCase();
    setQuery(queryText);
}

  return (
    <View
        style={ styles.container }
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="Search"
          value={query}
          onChangeText={ (queryText) => handleSearch(queryText) }
          style={styles.input }
        />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 6,
        marginVertical: 10,
        borderRadius: 10,
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    }
});