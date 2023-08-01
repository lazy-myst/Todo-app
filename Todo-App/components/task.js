import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.leftSide}>
                <Image
                    style={styles.editLogo}
                    source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/omr/edit-272.png' }}
                />
                <View style={styles.divider}></View>
                <Text style={styles.taskText}>{props.text}</Text>
            </View>
            <TouchableOpacity>
                <Image
                    style={styles.deleteLogo}
                    source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/rice-reading-applet/delete-307.png' }}
                />
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    taskText: {
        fontSize: 17,
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    editLogo: {
        height: 15,
        width: 15,
        marginRight: 10,
    },
    deleteLogo: {
        height: 20,
        width: 20,
        marginRight: 5,
    },
    divider: {
        padding: 1,
        height: 20,
        backgroundColor: 'black',
        marginRight: 10,
        opacity: 0.5
    }

});

export default Task;