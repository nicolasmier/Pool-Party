import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { api, setToken } from './src/api';
import { PantallaPerfil, Perfil } from './src/PantallaPerfil';

// App nativa de socios — versión básica: login + ver/editar perfil (CU-05).
export default function App() {
  const [email, setEmail] = useState('socio@localsports.local');
  const [contrasena, setContrasena] = useState('socio1234');
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [error, setError] = useState('');

  async function entrar() {
    setError('');
    try {
      const res = await api<{ accessToken: string }>('/autenticacion/login', {
        method: 'POST',
        body: JSON.stringify({ email, contrasena }),
      });
      setToken(res.accessToken);
      const mio = await api<Perfil>('/perfil/mio');
      setPerfil(mio);
    } catch {
      setError('Credenciales inválidas o API no disponible');
    }
  }

  function salir() {
    setToken(null);
    setPerfil(null);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.brand}>LocalSports</Text>

        {perfil ? (
          <PantallaPerfil perfil={perfil} onPerfil={setPerfil} onSalir={salir} />
        ) : (
          <View style={styles.card}>
            <Text style={styles.h1}>Acceso socios</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              value={contrasena}
              onChangeText={setContrasena}
              placeholder="Contraseña"
              secureTextEntry
            />
            <Pressable style={styles.btn} onPress={entrar}>
              <Text style={styles.btnText}>Entrar</Text>
            </Pressable>
            {error ? <Text style={styles.error}>{error}</Text> : null}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0c7d73' },
  container: { padding: 24, gap: 24, flexGrow: 1, justifyContent: 'center' },
  brand: { color: '#fff', fontSize: 24, fontWeight: '800', textAlign: 'center' },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 24, gap: 12 },
  h1: { fontSize: 20, fontWeight: '700', color: '#14201e' },
  input: { borderWidth: 1, borderColor: '#dbe3e1', borderRadius: 10, padding: 12, fontSize: 15 },
  btn: { backgroundColor: '#0c7d73', borderRadius: 10, padding: 14, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '700' },
  error: { color: 'crimson' },
});
