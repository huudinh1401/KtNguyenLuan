import React, {Component} from 'react';
import {
  Text, 
  StyleSheet, 
  View, 
  ImageBackground, 
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { Icon } from '@rneui/themed'


import YeuCauSuaChua from '../components/yeuCauSuaChua';
import VatTu from '../components/vatTuYeuCau';
import RanhRoi from '../components/chuaCoViec';
import DsVatTu from '../components/dsVatTu';
import NhapYeuCauVatTu from '../components/nhapYeuCauVT';



const url = 'http://192.168.1.70/DataKyThuatNL/YeuCauSuaChua.php';
const UID = 6;

export default class MainScreen extends React.Component {
  componentDidMount() {
    this.getYeuCau()
  }
  constructor(props) {
    super(props);
    this.state = {
      tenKT: '',
      arrYeuCau: [],
      tenKH: '', sdt: '',
      diaChi: '', ndYeuCau: '', status: '0',
      isGuiYeuCau: true,
      stt: 1, tenVatTu: 'chua biet', soLuong: 0, ghiChu: 'chua biet',
    }
  }
  _onPressButton = () => {
    Alert.alert(
      'Thông báo!','Bạn đã thật sự hoàn thành công việc?',
      [
        { text: 'Vẫn chưa!', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Đã hoàn thành!', onPress: () => {console.log('Ok Pressed') }},
      ],
    )
  }
  
  async getYeuCau() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ arrYeuCau: json});
      const {arrYeuCau}=this.state;
      for (var i = 0; i < arrYeuCau.length; i++)
      {
        if (arrYeuCau[i].UserID == UID){
          this.setState({tenKT: arrYeuCau[i].UserName});
          this.setState({status: arrYeuCau[i].Status});
          this.setState({tenKH: arrYeuCau[i].TenKH});
          this.setState({sdt: arrYeuCau[i].SDT});
          this.setState({diaChi: arrYeuCau[i].DiaChi});
          this.setState({ndYeuCau: arrYeuCau[i].NoiDungYC});
          break;
        }
      }
    } catch (error) {
      console.log(error);
    } 
  }

  render() {
    const {tenKH, tenKT, sdt, diaChi, ndYeuCau} = this.state;
    const {stt, tenVatTu, soLuong, ghiChu} = this.state;
    return (
      <SafeAreaView style = {{flex: 1}}>
        <ImageBackground source={require('../images/HinhNenHome.jpeg')} style = {styles.image}>
          <StatusBar barStyle={'light-content'}/>
          
          <View style = {{ backgroundColor: '#fff' ,height: 50, marginTop: 5, marginHorizontal: 35, borderRadius: 10, alignItems: 'center',flexDirection: 'row', marginBottom: 5}}>
              <View style={{flex: 1, paddingLeft:3}}>
                <Image style = {{width:40, height:40, marginLeft: 2}} source={require('../images/logoNL.jpg')} />
              </View>
              <View style = {{alignItems: 'center', flex: 8}}>
                <Text style = {{ fontSize: 16, fontWeight: 'bold', color: '#CC0000'}}>
                  {tenKT}
                </Text>
              </View>
              <View style={{flex:1, marginRight: 2}}>
                <Icon
                  name='notifications'
                  type='ionicon'
                  color='#517fa4'
                />
              </View>
            </View>
          <ScrollView >
          <KeyboardAvoidingView
            style = {{flex: 1}}
            behavior='position'
          >
            {
              this.state.status === '0' ? (<RanhRoi/>) :
              (<>
                <YeuCauSuaChua tenKT= {tenKT} tenKH ={tenKH} sdt={sdt} diaChi={diaChi} ndYeuCau={ndYeuCau}/>
                  
                  {
                    this.state.isGuiYeuCau ? (<>
                      <VatTu/>
                      <DsVatTu stt={stt} tenVatTu={tenVatTu} soLuong={soLuong} ghiChu={ghiChu}/>
                      <NhapYeuCauVatTu/>
                      <View style={{alignItems: 'center', marginBottom: 20}}>
                        <TouchableOpacity
                              style={{backgroundColor:'#33CC33', padding: 15, borderRadius: 5, marginTop: 20}}
                              onPress={ () => this._onPressButton()}
                        >
                          <Text style={{color:'#ffff', fontSize: 18, fontWeight: 'bold'}}>Hoàn thành công việc</Text>
                        </TouchableOpacity>
                      </View>
                    </>):
                    (<>
                      <VatTu/>
                      <NhapYeuCauVatTu/> 
                      <View style={{alignItems: 'center', marginBottom: 20}}>
                        <TouchableOpacity
                              style={{backgroundColor:'#33CC33', padding: 15, borderRadius: 5, marginTop: 20}}
                              onPress={ () => this._onPressButton()}
                        >
                          <Text style={{color:'#ffff', fontSize: 18, fontWeight: 'bold'}}>Hoàn thành công việc</Text>
                        </TouchableOpacity>
                      </View>
                    </>
                    )}  
                </>)}
                </KeyboardAvoidingView>
          </ScrollView>
          
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    flex: 1,
    resizeMode: "cover",
    flexDirection: 'column',
  },
  
});