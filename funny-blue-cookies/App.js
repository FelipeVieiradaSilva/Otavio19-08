import { Text, SafeAreaView, StyleSheet, Button, Alert, TextInput, Image, ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Seja bem vindo a UVV!
      </Text>
      <Card>
        <AssetExample />
      </Card>
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        backgroundColor: 'white',
        color: 'deepskyblue'
      }}
      defaultValue= "Email:"
      />
       <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        backgroundColor: 'white',
        color: 'deepskyblue'
      }}
      defaultValue= "Senha:"
      />
      <Button
      title="Entrar"
      color='black'
      />
      <Text style={styles.f}>
      Não tenho login
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gold'
  },
  f:{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7B68EE'
  }
});
