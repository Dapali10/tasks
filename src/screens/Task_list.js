import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground } from "react-native"

import today_Image from '../../assets/imgs/today.jpg'

export default class Task_list extends Component{
    render(){
        retur(
            <View style={styles.conteiner}>
                <ImageBackground source={today_Image} style={styles.background}>

                </ImageBackground>
                <View style={styles.taskList }>
                    <Text>Lista de Tarefas</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1
    },
    background:{
        flex: 3
    },
    taskList:{
        flex: 7
    }
})