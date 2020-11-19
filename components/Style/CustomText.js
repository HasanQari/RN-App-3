import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomText = props => {
    return <Text style={styles.Text}>{props.children}</Text>
};

const styles = StyleSheet.create({
    Text: {
        fontFamily: 'open-s'
    }
});

export default CustomText;