/* eslint-disable prettier/prettier */
import React, {  useState } from 'react';
import { View, StyleSheet, Image, FlatList  } from 'react-native';
import { ActivityIndicator, Button, Text, TextInput } from 'react-native-paper';
import { usePeople } from '../hooks/usePeople';
import { PeopleCard } from '../components/PeopleCard';
import { People } from '../interfaces/starWarsInterfaces';


export const HomeScreen = () => {

  const {  isLoading, data, pageNumber, increment, decrement } = usePeople();

  const [query, setQuery] = useState('');

  const [filteredData, setFilteredData] = useState<People[]>();


  const handleSearch = (queryText) => {

    if (queryText) {
      const formattedQuery = queryText.toLowerCase();

      setFilteredData(
        data?.data.results.filter(
          (person) => person.name.toLowerCase().includes(formattedQuery)
        )
      )
      setQuery(queryText);
    } else {
      setFilteredData(data?.data.results);
      setQuery(queryText);
    }

}


   if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
   }



  return (
    <View style={styles.container}>
        <Image
            source={require('../assets/starwars.jpg')}
            style={styles.logo}
          />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="Search"
          value={query}
          onChangeText={ (queryText) => handleSearch(queryText) }
          style={styles.input }
        />


          <FlatList
            data= { data?.data.results }
            renderItem= {({item}: any) =>  (
                <PeopleCard people={ item } />
            )}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={ false }
        />

        <View style={styles.controls}>

          <Button color="#F9D71C" disabled={!data?.data.previous} icon="arrow-left" mode="outlined" onPress={ decrement }>Prev.</Button>
          <Text style={styles.text}>{pageNumber}</Text>
          <Button color="#F9D71C" disabled={!data?.data.next}icon="arrow-right" mode="text" onPress={increment}>Next</Button>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: 'black',
      alignItems: 'center',
      padding: 10,
    },
    logo:{
      height: 200,
      width: 300,
      resizeMode: 'cover',
    },
    controls: {
      flexDirection: 'row',
      marginVertical: 10,
      width: 400,
      justifyContent: 'space-around',
  },
  text:{
      color: '#F9D71C',
      fontSize: 16,
    },
    input: {
      backgroundColor: '#fff',
      height: 50,
      width: 350,
      fontSize: 18,
      marginBottom: 10
  },
  loader: {
    flex: 1,
    justifyContent:'center',
    alignContent: 'center',
  }
});