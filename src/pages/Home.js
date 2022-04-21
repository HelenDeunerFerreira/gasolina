import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Home({ navigation }) {
    const [kilometros, setKilometros] = useState(' ');
    const [litros, setLitros] = useState(' ');

    const verificacao = () => {
        const kmRodados = parseFloat(kilometros)
        const litrosConsumidos = parseFloat(litros)

        const calculo = kmRodados / litrosConsumidos

        if (calculo != String) {
            navigation.navigate('Resultado')
        } else {
            console.log('Dados inseridos inválidos, tente novamente')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Escreva as informações para calcular o consumo de gasolina do seu carro
            </Text>

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Quilometragem"
                onChangeText={(kilometros) => setKilometros(kilometros)}
                defaultValue={kilometros}
            />

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Gasolina consumida"
                onChangeText={(litros) => setLitros(litros)}
                defaultValue={litros}
            />

            <Button
                onPress={() => verificacao()}
                title="Calcular"
                color="#841030"
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 50,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#000",
        borderRadius: 15,
        borderWidth: 2,
        margin: 15,
        padding: 10,
        fontSize: 18,
    },
    titulo: {
        fontSize: 25,
        padding: 10,
        margin: 5
    }
});
