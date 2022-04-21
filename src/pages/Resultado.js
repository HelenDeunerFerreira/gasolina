import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Resultado() {
    const [resultado, setResultado] = useState(" ");
    const [indicacao, setIndicacao] = useState(" ");

    const calculo = 13

    useEffect(() => {
        setResultado(calculo)

        const indicacaoDeConsumo = () => {
            if (resultado > 12) {
                setIndicacao('A')
            } else if (resultado < 12 && resultado > 10) {
                setIndicacao('B')
            } else if (resultado < 10 && resultado > 8) {
                setIndicacao('C')
            } else if (resultado < 8 && resultado > 4) {
                setIndicacao('D')
            } else {
                setIndicacao('E')
            }
        }

        indicacaoDeConsumo()
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Média de gasolina consumida: {resultado} Km/L</Text>
            <Text style={styles.titulo}>Indicação de consumo do veículo: {indicacao}</Text>
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
    titulo: {
        fontSize: 20,
        padding: 10,
        margin: 5
    }
});
