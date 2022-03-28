/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title  } from 'react-native-paper';
import { People } from '../interfaces/starWarsInterfaces';

interface Props {
    people: People;
}

const windowWidth = Dimensions.get('window').width;

export const PeopleCard = ( { people }:Props) => {


    const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
    onPress={ () => navigation.navigate('DetailScreen', people) }
    activeOpacity={0.8}
    style={ styles.prueba}
    >
        <Card>
          <Card.Content>
            <Title>{people.name}</Title>
          </Card.Content>
          { <Card.Cover source={require('../assets/StarCard.jpg')} /> }
        </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    prueba: {
      width: windowWidth,
      paddingBottom: 20,
    }
});