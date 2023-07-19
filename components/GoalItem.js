import { StyleSheet, View, Text } from "react-native";

function GoalItem (props){
return (
    <View style={styles.goalItem}>
    <Text style={styles.goalItemText}>{props.text}</Text>
    </View>
)
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        padding: 8,
      },
      goalItemText: {
        color: 'white'
      }
});