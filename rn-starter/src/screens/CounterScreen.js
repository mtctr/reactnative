import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const reducer = (state, action) => {
	switch (action.type) {
		case "Increase":
			return { ...state, count: state.counter + action.payload };
		case "Decrease":
			return { ...state, count: state.counter - action.payload };
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	const { count } = state;
	return (
		<View>
			<Button
				title="Increase"
				onPress={() => dispatch({ type: "Increase", payload: 1 })}
			/>
			<Button
				title="Decrease"
				onPress={() => dispatch({ type: "Decrease", payload: 1 })}
			/>
			<Text>Current Count: {count}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
