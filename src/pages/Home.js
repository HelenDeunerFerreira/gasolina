import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({ navigation }) {
    const [kilometros, setKilometros] = useState('');
    const [litros, setLitros] = useState('');

    const verificacao = async () => {
        function convert_to_float(str) {
            var floatValue = +(str);
            return floatValue;
        }

        let kmRodados = convert_to_float(kilometros)
        let gasolinaConsumida = convert_to_float(litros)

        setKilometros(kmRodados)
        setLitros(gasolinaConsumida)

        const calculo = kmRodados / gasolinaConsumida

        if (calculo != String) {
            navigation.navigate('Resultado')
        } else {
            console.log('Dados inseridos inválidos, tente novamente')
        }

        const calculoString = String(calculo)

        await AsyncStorage.setItem(
            "@Home",
            calculoString
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Escreva as informações para calcular o consumo de gasolina do seu carro
            </Text>

            <Text style={styles.texto}>Quilômetros rodados</Text>
            <TextInput
                placeholder="km"
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(kilometros) => setKilometros(String(kilometros))}
                defaultValue={String(kilometros)}
            />

            <Text style={styles.texto}>Gasolina consumida</Text>
            <TextInput
                placeholder="L"
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(litros) => setLitros(String(litros))}
                defaultValue={String(litros)}
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

        fontSize: 18,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#000",

        borderRadius: 15,
        borderWidth: 2,
        margin: 15,
        padding: 10,
    },
    titulo: {
        fontSize: 25,
        padding: 10,
        margin: 5
    },
    texto: {
        fontSize: 17
    }
});