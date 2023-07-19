import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem (props){
return (
    <View style={styles.goalItem}>
    <Pressable  android_ripple={{ color: '#928181'}} onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
    <Text style={styles.goalItemText}>{props.text}</Text>
    </Pressable>
    </View>
)
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
      },
      pressedItem: {
        opacity: 0.5
      },
      goalItemText: {
        color: 'white',
        padding: 8
      }
});