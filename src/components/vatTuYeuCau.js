import React, {Component} from 'react';
import {
  Text, 
  StyleSheet, 
  View,
} from 'react-native';

export default class VatTu extends React.Component {
  render() {
    
    return (
      
        <View style = {styles.container}>
          <View style={{alignItems:'center', paddingVertical: 10}}>
            <Text style={{color:'blue', fontSize: 18, fontWeight: 'bold'}}>
              Danh sách vật tư yêu cầu
            </Text>
          </View>
          <View style ={{flexDirection: 'row', height: 40, borderColor: 'black', borderWidth: 1}}>
              <View style ={{flex: 1, borderColor: 'black', borderRightWidth: 1, alignItems: 'center', justifyContent:'center'}}>
                  <Text style = {styles.text}>STT</Text>
              </View>

              <View style ={{flex: 5, borderColor: 'black', borderRightWidth: 1, alignItems: 'center', justifyContent:'center'}}>
                  <Text style = {styles.text}>Tên vật tư</Text>
              </View>

              <View style ={{flex: 1.5, borderColor: 'black', borderRightWidth: 1, alignItems: 'center', justifyContent:'center'}}>
                  <Text style = {styles.text}>Số lượng</Text>
              </View>

              <View style ={{flex: 2.5, borderColor: 'black', alignItems: 'center', justifyContent:'center'}}>
                  <Text style = {styles.text}>Ghi chú</Text>
              </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'snow',
    marginTop: 5,
    marginHorizontal: 7,
    borderTopLeftRadius: 5,
    borderTopRightRadius:5,
  },
  text:{
    color: 'black',
    fontSize: 13,
  }
});