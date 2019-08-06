import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner, CardSection } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
	state = { loggedIn: null };
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

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
