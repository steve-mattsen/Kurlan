import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View,ScrollView, Picker, Image, FlatList, StatusBar,ImageBackground,TouchableHighlight, Platform} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

var styles = StyleSheet.create(require('./Styles.tsx'));

var app = null;
export default class App extends Component {
	constructor(props) {
		super(props);
		app = this;
		this.state = require('./DefaultState.tsx');
	}
	addMessage(persona, message) {
		this.setState((prev) => {
			var nm = prev.messages.slice();
			nm.push({
				key: nm.length,
				persona: persona,
				text: message,
			});
			return { messages: nm }
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar hidden={false} backgroundColor="#f00" translucent={true}/>
				<SideBar />
				<TopBar channel={this.state.channel}/>
				<MessageContainer messages={this.state.messages} personas={this.state.personas}/>
				<BottomBar messages={this.state.messages} personas={this.state.personas}/>
				<KeyboardSpacer />
			</View>
		);
	}
}

class SideBar extends Component {
	render() {
		return (
			<View style={styles.sideBar}>
			</View>
		);
	}
}

class TopBar extends Component {
	render() {
		return (
			<View style={styles.topBar}>
				<ImageBackground style={styles.styIcn} imageStyle={styles.styIcnImage} source={require('./assets/hamburger.png')}/>
				<Text style={styles.channelTitle}>{this.props.channel}</Text>
				<ImageBackground style={[styles.styIcn, styles.styIcnMid]} imageStyle={styles.styIcnImage} source={require('./assets/star.png')}/>
				<ImageBackground style={[styles.styIcn, styles.styIcnMid]} imageStyle={styles.styIcnImage} source={require('./assets/search.png')}/>
				<ImageBackground style={styles.styIcn} imageStyle={styles.styIcnImage} source={require('./assets/actionButton.png')}/>
			</View>
		)
	}
}

class MessageContainer extends Component {
	render() {
		return (
			<FlatList style={styles.messageContainer} 
				data={this.props.messages}
				renderItem={({item}) => <Message persona={this.props.personas[item.persona]}>{item.text}</Message>}
				keyExtractor={(item) => item.key.toString()}
				/>
		);
	}
}

class Message extends Component {
	render() {
		let p = this.props.persona;
		var styleMix = [];
		return (
			<View style={p.id == 0 ? styles.messageAssistant : styles.message}>
				<Image source={p.icon} style={styles.messageIcon} />
				<View style={p.id == 0 ? styles.messageTextContainerAssistant : styles.messageTextContainer}>
					<Text style={p.id == 0 ? styles.messageUserNameAssistant : styles.messageUserName}>{p.name}</Text>
					<Text style={p.id == 0 ? styles.messageTextAssistant: styles.messageText}>{this.props.children}</Text>
				</View>
			</View>
		);
	}
}

class BottomBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPersona: 1,
		}
	}
	selectPersona(persona) {
		var current = this.state.selectedPersona;
		current++;
		if (current >= this.props.personas.length) {
			current = 1;
		}
		this.setState((prev) => ({selectedPersona: current}));
	}
	sendMessage() {
		var message = '';
		if (Platform.OS == 'web') {
			message = this.textInput._node.value;
		} else {
			message = this.textInput._lastNativeText;
		}
		if (message == '') {
			return false;
		}
		app.addMessage(this.state.selectedPersona, message);
		this.textInput.clear();
	}
	render() {
		return (
			<View style={styles.bottomBar}>
				<TouchableHighlight
					onPress={() => this.selectPersona(this.props.persona)}
					underlayColor="white"
					style={styles.personaSelect}
				>
					<Image style={styles.selectedPersonaIcon}
						source={this.props.personas[this.state.selectedPersona].icon}
					/>
				</TouchableHighlight>
				<TextInput
					style={styles.chatBox}
					ref={input => { this.textInput = input }}
					placeholder="Type message here...."
					onSubmitEditing={() => {
						this.sendMessage()
					}}
					blurOnSubmit={false}
				/>
				<ImageBackground style={[{display: 'none'}, styles.styIcn]} imageStyle={styles.styIcnImage} source={require('./assets/upload.png')}/>
				<TouchableHighlight
					onPress={() => {
						this.sendMessage();
						this.textInput.focus();
					}}
					underlayColor="white"
					style={styles.sendMessage}
				>
					<ImageBackground
						style={styles.styIcn}
						imageStyle={styles.styIcnImage}
						source={require('./assets/send.png')}
					/>
				</TouchableHighlight>
			</View>
		);
	}
}