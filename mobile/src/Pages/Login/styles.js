import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Image = styled.Image`
  flex: 1;
  width: 50;
  height: 50;
`;

export const Card = styled.View`
  background-color: #fafafa;
  width: 95%;
  margin-top: 10%;
  padding: 4%;
  margin-bottom: 5%;
`;

export const CardTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  border-bottom-width: 2px;
  border-bottom-color: #05C167;
  padding: 15px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #000;
  width: 95%;
  align-items: center;
  padding: 12px;
`;

export const TextButton = styled.Text`
  color: white;
`;

export const CreateAccount = styled.TouchableOpacity`
  color: #fafa;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #05C167;
  margin-top: 15px;
`;