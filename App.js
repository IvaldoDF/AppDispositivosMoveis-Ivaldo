import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.avatar}>
        <Ionicons name="person-outline" size={75} color="#000" />
      </View>

      <Text style={styles.loginTitle}>Login</Text>
      <TextInput style={styles.input} />

      <Text style={styles.loginTitle}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Contatos')}
      >
        <Text style={styles.loginButtonText}>LOGAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Usuario')}
      >
        <Text style={styles.registerButtonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

function ContatosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.homeButton}>
          <Ionicons name="home" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Lista de Contatos</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.contact}
        onPress={() => navigation.navigate('AlterarContato')}
      >
        <View style={styles.contactAvatar}>
          <Ionicons name="person-outline" size={35} color="#f5eded" />
        </View>
        <View>
          <Text style={styles.contactName}>Marcos Andrade</Text>
          <Text style={styles.contactPhone}>81 988553424</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.contact}
        onPress={() => navigation.navigate('AlterarContato')}
      >
        <View style={styles.contactAvatar}>
          <Ionicons name="person-outline" size={35} color="#f5eded" />
        </View>
        <View>
          <Text style={styles.contactName}>Patrícia Tavares</Text>
          <Text style={styles.contactPhone}>81 998765332</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.contact}
        onPress={() => navigation.navigate('AlterarContato')}
      >
        <View style={styles.contactAvatar}>
          <Ionicons name="person-outline" size={35} color="#f5eded" />
        </View>
        <View>
          <Text style={styles.contactName}>Rodrigo Antunes</Text>
          <Text style={styles.contactPhone}>81 987765525</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function CadastroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cadastroHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        <Text style={styles.cadastroHeaderTitle}>Contato</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.homeButtonHeader}>
          <Ionicons name="home" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.cadastroInput} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.cadastroInput} keyboardType="email-address" />

        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.cadastroInput} keyboardType="phone-pad" />

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate('Contatos')}
        >
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AlterarContatoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cadastroHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        <Text style={styles.cadastroHeaderTitle}>Contato</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.homeButtonHeader}>
          <Ionicons name="home" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.cadastroInput} defaultValue="Marco Andrade" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.cadastroInput} defaultValue="mand@gmail.com" keyboardType="email-address" />

        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.cadastroInput} defaultValue="81 988553424" keyboardType="phone-pad" />

        <TouchableOpacity
          style={styles.alterButton}
          onPress={() => navigation.navigate('Contatos')}
        >
          <Text style={styles.saveButtonText}>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => navigation.navigate('Contatos')}
        >
          <Text style={styles.saveButtonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function UsuarioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cadastroHeader}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        <Text style={styles.cadastroHeaderTitle}>Cadastro</Text>

        <View style={styles.headerSpace} />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.cadastroInput} />

        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.cadastroInput} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.cadastroInput} keyboardType="email-address" />

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.cadastroInput} secureTextEntry />

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.browserOuterContainer}>
      <View style={styles.appFrame}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Contatos" component={ContatosScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="Usuario" component={UsuarioScreen} />
            <Stack.Screen name="AlterarContato" component={AlterarContatoScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  browserOuterContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appFrame: {
    width: 390,
    height: 720,
    borderWidth: 5, // Borda externa mais grossa
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 35,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },
  loginTitle: {
    fontSize: 15,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 4,
  },
  loginButton: {
    height: 50,
    backgroundColor: '#1976d2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  registerButton: {
    height: 50,
    backgroundColor: '#fa0e0e',
    borderWidth: 1,
    borderColor: '#d21919',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  header: {
    height: 120,
    backgroundColor: '#3f6fe8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  homeButton: {
    padding: 5,
  },
  homeButtonHeader: {
    padding: 5,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  addButton: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  contact: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  contactAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3f8dcc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  contactPhone: {
    fontSize: 16,
    color: '#666',
  },
  cadastroHeader: {
    height: 120,
    backgroundColor: '#3f6fe8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    color: '#3f6df6',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: -4,
  },
  cadastroHeaderTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSpace: {
    width: 40,
  },
  form: {
    paddingHorizontal: 35,
    paddingTop: 30,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  cadastroInput: {
    height: 45,
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  saveButton: {
    height: 50,
    backgroundColor: '#3f6fe8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alterButton: {
    height: 50,
    backgroundColor: '#3f6fe8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  deleteButton: {
    height: 50,
    backgroundColor: '#ff2b23',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});