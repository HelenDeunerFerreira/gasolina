import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Input } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Escreva as iinformações para calcular o consumo de gasolina do seu carro</Text>
            <Input placeholder='Kilometragem' />
            <Input placeholder='Gasolina consumida' />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
