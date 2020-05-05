import styled from 'styled-components/native';

export const Header = styled.View`
  padding: 5% 2%;
`;

export const BackLink = styled.TouchableOpacity`
  width: 90px;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  color: black;
  font-weight: bold;
  margin-left: 10px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Card = styled.View`
  background-color: #fafafa;
  width: 95%;
  padding: 4%;
  margin-bottom: 5%;
`;

export const CardTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  border-bottom-width: 2px;
  border-bottom-color: #cccccc;
  padding: 15px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #05C167;
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
