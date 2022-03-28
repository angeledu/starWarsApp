/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';
import { HeaderBar } from '../components/Headerbar';
import { RootStackparams } from '../navigation/Navigation';

interface Props extends StackScreenProps <RootStackparams, 'DetailScreen'>{};

export const DetailScreen = ({route}: Props) => {

  const person = route.params;



  return (
    <View style={styles.container}>

       <HeaderBar title="Personaje" />
       <ImageBackground source={require('../assets/nasa.jpg')} resizeMode="cover" style={styles.image}>
            <Card style={styles.cardContainer}>
              <Card.Content style={styles.content}>
                <Title style={styles.titleStyle}>{person.name}</Title>
                <Text style={styles.text}>Birth Year: {person.birth_year}</Text>
                <Text style={styles.text}>Gender: {person.gender}</Text>
                <Text style={styles.text}>Mass: {person.mass}</Text>
                <Text style={styles.text}> Height: {person.height}</Text>
                <Text style={styles.text}>Eye Color: {person.eye_color}</Text>
                <Text style={styles.text}>Hair Color: {person.hair_color}</Text>

              </Card.Content>
            </Card>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  cardContainer: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  content: {
    alignItems: 'baseline',
    width: 300,
  },

  logo: {
    backgroundColor: '#4682B4',
    marginBottom: 30,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
  titleStyle: {
    color: '#4682B4',
    fontSize: 30,
  },

  text: {
    marginTop: 10,
    fontSize: 20,
  },
});