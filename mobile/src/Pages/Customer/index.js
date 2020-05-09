import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { 
  Container, 
  CustomerContainer, 
  Label, 
  CustomerInfo, 
  LogoutButton, 
  Text 
} from './styles';
import { PageTitle } from '../../globalStyles';
import HeaderBack from '../../Components/HeaderBack';

import { AuthContext } from '../../Routes';

const api = require('../../services/api');

export default function Customer({ navigation }) {

  const { signOut } = React.useContext(AuthContext);
  
  const [customerInfo, setCustomerInfo] = React.useState('');
  async function loadCustomerInformations() {
    try {
      const response = await api.get('/informations', {
        headers: {
          authorization: await AsyncStorage.getItem('userToken') 
        }
      })
      console.log('caiu no me', );
    } catch (err) {

      console.log('caiu noe', err);
    }
  }
  
  React.useEffect(() => {
    loadCustomerInformations();
  }, []);

  return (
    <>
    <HeaderBack navigate={navigation} />
    <Container>
      <PageTitle>Your informations</PageTitle>

      <CustomerContainer>
        <Label>Name</Label>
        <CustomerInfo></CustomerInfo>

        <Label>Email</Label>
        <CustomerInfo>joaovitor@gmail.com</CustomerInfo>

        <Label>Address</Label>
        <CustomerInfo>Rua honório de lima, 2290</CustomerInfo>

        <Label>District</Label>
        <CustomerInfo>Aeroporto 3</CustomerInfo>
      </CustomerContainer>
    </Container>

    <LogoutButton onPress={() => signOut()}>
      <Text>Logout</Text>
    </LogoutButton>
    </>
  )
}