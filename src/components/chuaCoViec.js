import React, {Component} from 'react';
import {
  Text, 
  StyleSheet, 
  View,
  Image,
} from 'react-native';

export default class RanhRoi extends React.Component {
  render() {
    
    return (
      <View style = {styles.container}>
        <Text style={{fontSize: 24, color: '#006600'}}>Bạn hiện chưa có việc!</Text>
        <Text style={{fontSize:18, color:'#0033FF'}}>Hãy thư giãn!</Text>
        <View style = {{paddingTop: 10}}>
            <Image style = {{width: 100, height: 115}} source={require('../images/coffee.webp')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'snow',
    marginTop: 10,
    marginHorizontal: 7,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
});