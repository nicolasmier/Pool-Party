import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { api, subirFoto, mediaUrl } from './api';

export interface Perfil {
  nombre: string;
  apellidos: string;
  telefono?: string | null;
  direccion?: string | null;
  fotoUrl?: string | null;
  usuario: { email: string; roles: string[] };
}

// CU-05: ver y editar el perfil propio, con foto opcional.
export function PantallaPerfil({
  perfil,
  onPerfil,
  onSalir,
}: {
  perfil: Perfil;
  onPerfil: (p: Perfil) => void;
  onSalir: () => void;
}) {
  const [editando, setEditando] = useState(false);
  const [nombre, setNombre] = useState(perfil.nombre);
  const [apellidos, setApellidos] = useState(perfil.apellidos);
  const [telefono, setTelefono] = useState(perfil.telefono ?? '');
  const [direccion, setDireccion] = useState(perfil.direccion ?? '');
  const [guardando, setGuardando] = useState(false);

  async function guardar() {
    setGuardando(true);
    try {
      const actualizado = await api<Perfil>('/perfil/mio', {
        method: 'PATCH',
        body: JSON.stringify({ nombre, apellidos, telefono, direccion }),
      });
      onPerfil({ ...perfil, ...actualizado });
      setEditando(false);
    } catch {
      Alert.alert('Error', 'No se pudo guardar el perfil');
    } finally {
      setGuardando(false);
    }
  }

  async function cambiarFoto() {
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permiso.granted) {
      Alert.alert('Permiso necesario', 'Habilita el acceso a tus fotos para cambiar la imagen.');
      return;
    }
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (res.canceled) return;
    try {
      const actualizado = await subirFoto<Perfil>(res.assets[0].uri);
      onPerfil({ ...perfil, fotoUrl: actualizado.fotoUrl });
    } catch {
      Alert.alert('Error', 'No se pudo subir la foto');
    }
  }

  const foto = mediaUrl(perfil.fotoUrl);

  return (
    <View style={styles.card}>
      <Pressable style={styles.avatarWrap} onPress={cambiarFoto}>
        {foto ? (
          <Image source={{ uri: foto }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.avatarVacio]}>
            <Text style={styles.avatarInicial}>{perfil.nombre.charAt(0).toUpperCase()}</Text>
          </View>
        )}
        <Text style={styles.avatarAccion}>Cambiar foto</Text>
      </Pressable>

      {editando ? (
        <>
          <Campo label="Nombre" value={nombre} onChange={setNombre} />
          <Campo label="Apellidos" value={apellidos} onChange={setApellidos} />
          <Campo label="Teléfono" value={telefono} onChange={setTelefono} keyboard="phone-pad" />
          <Campo label="Dirección" value={direccion} onChange={setDireccion} />
          <Pressable style={styles.btn} onPress={guardar} disabled={guardando}>
            <Text style={styles.btnText}>{guardando ? 'Guardando…' : 'Guardar'}</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnGhost]} onPress={() => setEditando(false)}>
            <Text style={styles.btnGhostText}>Cancelar</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text style={styles.h1}>
            {perfil.nombre} {perfil.apellidos}
          </Text>
          <Text style={styles.muted}>{perfil.usuario.email}</Text>
          <Text style={styles.muted}>Rol: {perfil.usuario.roles.join(', ')}</Text>
          {perfil.telefono ? <Text style={styles.muted}>Tel: {perfil.telefono}</Text> : null}
          {perfil.direccion ? <Text style={styles.muted}>{perfil.direccion}</Text> : null}
          <Pressable style={styles.btn} onPress={() => setEditando(true)}>
            <Text style={styles.btnText}>Editar perfil</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnGhost]} onPress={onSalir}>
            <Text style={styles.btnGhostText}>Cerrar sesión</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

function Campo({
  label,
  value,
  onChange,
  keyboard,
}: {
  label: string;
  value: string;
  onChange: (t: string) => void;
  keyboard?: 'phone-pad';
}) {
  return (
    <View style={{ gap: 4 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} value={value} onChangeText={onChange} keyboardType={keyboard} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 24, gap: 12 },
  avatarWrap: { alignItems: 'center', gap: 6, marginBottom: 6 },
  avatar: { width: 96, height: 96, borderRadius: 48 },
  avatarVacio: { backgroundColor: '#0c7d73', alignItems: 'center', justifyContent: 'center' },
  avatarInicial: { color: '#fff', fontSize: 40, fontWeight: '800' },
  avatarAccion: { color: '#0c7d73', fontWeight: '600', fontSize: 13 },
  h1: { fontSize: 20, fontWeight: '700', color: '#14201e' },
  muted: { color: '#5b6b68' },
  label: { color: '#5b6b68', fontSize: 12, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#dbe3e1', borderRadius: 10, padding: 12, fontSize: 15 },
  btn: { backgroundColor: '#0c7d73', borderRadius: 10, padding: 14, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '700' },
  btnGhost: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#dbe3e1' },
  btnGhostText: { color: '#5b6b68', fontWeight: '600' },
});
