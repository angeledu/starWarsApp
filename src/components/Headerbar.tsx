/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import {Appbar, Text} from 'react-native-paper';


export const HeaderBar = ({ title }: any) => {

  const navigation = useNavigation<any>();

    const backAction = () => {
      navigation.pop();
    }


  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction color="#F9D71C" onPress={backAction} />
      <Appbar.Content
        title={<Text style={styles.title}>{title}</Text>}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  title:{
    color: 'white',
  }
});
