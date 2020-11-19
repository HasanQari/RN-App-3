// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

// import Colors from '../constants/Colors';

// const MealDetail = props => {

//    let TchableCmp = TouchableOpacity;
//    if (Platform.OS === 'android' && Platform.Version > 21) { TchableCmp = TouchableNativeFeedback; }

//    return (
//       <View style={styles.screen} >
//          <Text>{props.title}</Text>

//          <TchableCmp onPress={() => { }} >
//             {/* <View style={styles.titleContainer}><Text style={styles.title} numberOfLines={1} >{props.title}</Text></View> */}
//          </TchableCmp>
//       </View>
//    );

// }

// const styles = StyleSheet.create({
//    screen: {
//       flex: 1,
//    },
//    titleContainer: {},
//    title: {},
// });

// export default MealDetail;