import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6317',
    }
})