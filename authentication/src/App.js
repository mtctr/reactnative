import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
	componentDidMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyA0lRhZEuaJLA6ohgCkaWfTLz3GsuwLqIQ",
			authDomain: "auth-ff324.firebaseapp.com",
			databaseURL: "https://auth-ff324.firebaseio.com",
			projectId: "auth-ff324",
			storageBucket: "",
			messagingSenderId: "597783999280",
			appId: "1:597783999280:web:01a3f457b3b7d2f6"
		});
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
