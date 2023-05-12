import React, {Component} from 'react';
import {
  Text, 
  StyleSheet, 
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

export default class YeuCauSuaChua extends React.Component {
  render() {
    const {tenKT, tenKH, sdt, diaChi, ndYeuCau} = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style = {styles.container}>
        <View style={{alignItems:'center', marginVertical: 5, paddingTop: 5}}>
          <Text style={{color:'blue', fontSize: 18, fontWeight: 'bold'}}>
            Công việc được giao
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style ={{flex: 1, padding: 7}}>
              <Text style = {styles.title}>Tên khách hàng:  </Text>
                  <View style = {styles.viewText}>
                      <Text style = {styles.text}>{tenKH}  </Text>
                  </View>
              
              <Text style = {styles.title}>Số điện Thoại:  </Text>
                  <View style = {styles.viewText}>
                      <Text style = {styles.text}>{sdt}  </Text>
                  </View>

              <Text style = {styles.title}>Địa chỉ:  </Text>
                  <View style = {styles.viewText}>
                      <Text style = {styles.text}>{diaChi}  </Text>
                  </View>
          </View>

          <View style ={{flex: 1, paddingRight: 5, paddingTop: 7}}>
              <Text style = {styles.title}>Kỹ thuật thực hiện:  </Text>
                  <View style = {styles.viewText}>
                      <Text style = {styles.text}>{tenKT}  </Text>
                  </View>
              <Text style = {styles.title}>Nội dung yêu cầu:  </Text>
                  <View style = {styles.viewText}>
                      <Text style = {styles.text}>{ndYeuCau}  </Text>
                  </View>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'snow',
    marginTop: 5,
    marginHorizontal: 7,
    borderRadius: 5
  },
  title:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
  },
  text:{
    color: 'black',
    fontSize: 14,
  },
  viewText:{
    paddingVertical: 7,
  },
  
});