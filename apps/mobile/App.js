import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';

import { Header, Footer } from '@/components';
import { LoginForm } from '@/containers';
import { server } from '@/mocks';

server();

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  }
});

export default function App() {
  return (
    <View style={styles.appWrapper}>
      <ScrollView>
        <Header />

        <LoginForm />

        <Footer />

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
