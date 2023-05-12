import React, {Component} from 'react';
import {
  Text, 
  StyleSheet, 
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert
} from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import Feather from 'react-native-vector-icons/Feather'
Feather.loadFont()

const url = 'http://192.168.1.70/DataKyThuatNL/DanhSachVatTu.php';

export default class NhapYeuCauVatTu extends React.Component {
  

  componentDidMount() {
    this.getArrVatTu()
    if (this.state.SoLuong!='')
    {
      this.setState({isButton: true})
    }
  }
  constructor(props) {
	
    super(props);
    this.state = {
      tenVT:'',
      SoLuong:'',
      GhiChu:'',
      arrVatTu:[],
      key:'',
      selectItem: '',
      loading: false,
    }
  }
  async getArrVatTu() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ arrVatTu: json });
    } catch (error) {
      console.log(error);
    } 
  }
  _onPressButton = () => {
    if (this.state.tenVT =='') {
      Alert.alert(
        'Thông báo', 'Bạn chưa nhập tên vật tư',
        [
          { text: 'Quay lại', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        ]
      )
    }
    else if (this.state.SoLuong =='') {
      Alert.alert(
        'Thông báo', 'Bạn chưa nhập số lượng vật tư \n(có thể nhập 0)',
        [
          { text: 'Quay lại', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        ]
      )
    }
    else {
      Alert.alert(
        'Bạn muốn yêu cầu vật tư', this.state.tenVT + '\nSố lượng: ' + this.state.SoLuong,
        [
          { text: 'Huỷ bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: () => {console.log('Ok Pressed') }},
        ]
      )
    }
  }
  _onClearPress = () => {
    this.setState({ tenVT: '' });
  }
  render() {
    return (
      
        <View style = {styles.container}>
          <View style={{alignItems:'center', paddingVertical: 5}}>
            <Text style={{color:'blue', fontSize: 18, fontWeight: 'bold'}}>
              Nhập vật tư bạn cần dùng
            </Text>
          </View>
              <View style={[
                {flex: 7, paddingHorizontal: 5},
                Platform.select({ ios: { zIndex: 10 }, android: { zIndex: 10 } }),
                ]}>
                  <Text style ={styles.text}>Tên vật tư</Text>

                  <AutocompleteDropdown
                    loading={this.state.loading}
                    debounce={300}
                    //onChangeText={tenVT => this.setState({ tenVT })}
                    onSelectItem={item => {
                      item && this.setState({tenVT: item.title})
                    }}
                    onClear={()=>this._onClearPress()}
                    dataSet={this.state.arrVatTu}
                    textInputProps={{
                      placeholder: 'Nhập tên vật tư...', placeholderTextColor:'grey',
                      autoCorrect: false, autoCapitalize: 'none',
                      style: {color: 'black', paddingLeft: 4, fontSize: 14},
                    }}
                    inputContainerStyle={{
                      marginTop: 5, backgroundColor: '#fff', height: 35,
                      alignItems:'center', borderColor: 'grey', 
                      borderWidth: 1, borderRadius: 0
                    }}
                    suggestionsListContainerStyle={{backgroundColor: 'silver'}}
                    renderItem={(item, text) => <Text style={{padding: 10 }}>{item.title}</Text>}
                    ChevronIconComponent={<Feather name="chevron-down" size={20} color="grey" />}
                    ClearIconComponent={<Feather name="x-circle" size={18} color="grey" />}
                  />
              </View>
         
                <View>
              <View style={{flex: 3, padding: 5, marginTop: 10}}>
                  <Text style ={styles.text}>Số lượng</Text>
                  <TextInput
                      style ={{borderColor: 'grey', borderWidth: 1, padding: 5, marginTop: 10, height: 35, width: 110}}
                      placeholder='Nhập số lượng'
                      placeholderTextColor={'grey'}
                      keyboardType='numeric'
                      autoCorrect={false}
                      onChangeText={SoLuong => this.setState({ SoLuong })}
                      value={this.state.SoLuong}
                  />
              </View>
          

              <View style={{marginTop: 10, marginHorizontal: 5}}>
                  <Text style ={styles.text}>Ghi chú</Text>
                  <TextInput
                      style ={{borderColor: 'grey', borderWidth: 1, height: 60, padding: 5, marginTop: 5, fontSize: 15}}
                      placeholder='Nhập ghi chú...'
                      placeholderTextColor={'grey'}
                      multiline
                      numberOfLines={4}
                      maxLength={400}
                      autoCorrect={false}
                      onChangeText={GhiChu => this.setState({ GhiChu })}
                      value={this.state.GhiChu}
                  />
              </View>
              <View style={{alignItems:'center', marginTop: 20}}>
                  <TouchableOpacity
                      style={{backgroundColor: '#0099FF', padding: 10, borderRadius: 5}}
                      onPress={ () => this._onPressButton()}
                  >
                      <Text style={{color:'#ffff', fontSize: 15, fontWeight: 'bold'}}>Gửi yêu cầu xuất vật tư</Text>
                  </TouchableOpacity>
              </View>
            </View>
          
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
    marginTop: 5,
    marginHorizontal: 7,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  text:{
    color: 'black',
    fontSize: 15,
    fontWeight:'bold'
  }
});