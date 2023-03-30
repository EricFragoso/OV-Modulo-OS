import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";

import { Card } from "../../components/card";
import React from "react";

export function ListOS() {

    const ListaOS = [
        { numberOS: 1, company: 'Empresa 1', name: 'Demandante 1' },
        { numberOS: 2, company: 'Empresa 2', name: 'Demandante 2' },
        { numberOS: 3, company: 'Empresa 3', name: 'Demandante 3' },
        { numberOS: 4, company: 'Empresa 4', name: 'Demandante 4' },
        { numberOS: 5, company: 'Empresa 5', name: 'Demandante 5' },
        { numberOS: 6, company: 'Empresa 6', name: 'Demandante 6' },
    ]
    function handleShowOSDetail(numberOS: number) {
        return (
            console.log(`Chamando Detalhamento da OS ${numberOS} `)
        )
    }

    return (
        <View
            style={styles.container}
        >
            <View style={styles.header}>
                <Text
                    style={styles.headerText}>
                    Lista de OS
                </Text>
            </View>

            <View style={styles.listContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {
                        ListaOS.map(listaOS => (
                            <Card
                                key={listaOS.numberOS}
                                numberOS={listaOS.numberOS}
                                company={listaOS.company}
                                name={listaOS.name}
                                callFunc={() => handleShowOSDetail(listaOS.numberOS)}
                            ></Card>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}