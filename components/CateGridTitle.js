import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from '../constants/Colors';

const CateGridTitle = props => {

    let TchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version > 21) { TchableCmp = TouchableNativeFeedback; }

    return (
        <View style={styles.gridItem}>
            <TchableCmp style={{ flex: 1 }} onPress={props.onSelect} >
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.titles} numberOfLines={2} >{props.title}</Text>
                </View>
            </TchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {},
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        shadowColor: Colors.black,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        elevation: 10,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    titles: {
        fontFamily: 'open-s-b',
        fontSize: 20,
        textAlign: 'right',
    }
});

export default CateGridTitle;