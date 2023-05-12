import React, {Component} from 'react';
import {
  Text, 
  StyleSheet, 
  View,
} from 'react-native';

export default class DsVatTu extends React.Component {
  render() {
    const {stt, tenVatTu, soLuong, ghiChu} = this.props;
    return (
      
      <View style = {styles.container}>
        <View style ={{flexDirection: 'row', height: 40, borderColor: 'black', borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1}}>
            <View style ={{flex: 1, borderColor: 'black', borderRightWidth: 1, alignItems: 'center', justifyContent:'center'}}>
                <Text style = {styles.text}>{stt}</Text>
            </View>

            <View style ={{flex: 5, borderColor: 'black', borderRightWidth: 1, alignItems: 'center', justifyContent:'center'}}>
                <Text style = {styles.text}>{tenVatTu}</Text>
            </View>

            <View style ={{flex: 1.5, borderColor: 'black', borderRightWidth: 1, alignItems: 'center', justifyContent:'center'}}>
                <Text style = {styles.text}>{soLuong}</Text>
            </View>

            <View style ={{flex: 2.5, borderColor: 'black', alignItems: 'center', justifyContent:'center'}}>
                <Text style = {styles.text}>{ghiChu}</Text>
            </View>
            
        </View>
        

      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'gainsboro',
    marginHorizontal: 7,
  },
  text:{
    color: 'dimgray',
    fontSize: 13,
  }
});