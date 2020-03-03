import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View,ScrollView, Picker, Image, FlatList, StatusBar,ImageBackground,TouchableHighlight, Platform} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

var s = StyleSheet.create(require('./Styles.tsx'));

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
			<View style={s.container}>
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
			<View style={s.sideBar}>
			</View>
		);
	}
}

class TopBar extends Component {
	render() {
		return (
			<View style={s.topBar}>
				<ImageBackground style={s.styIcn} imageStyle={s.styIcnImage} source={require('./assets/hamburger.png')}/>
				<Text style={s.channelTitle}>{this.props.channel}</Text>
				<ImageBackground style={[s.styIcn, s.styIcnMid]} imageStyle={s.styIcnImage} source={require('./assets/star.png')}/>
				<ImageBackground style={[s.styIcn, s.styIcnMid]} imageStyle={s.styIcnImage} source={require('./assets/search.png')}/>
				<ImageBackground style={s.styIcn} imageStyle={s.styIcnImage} source={require('./assets/actionButton.png')}/>
			</View>
		)
	}
}

class MessageContainer extends Component {
	render() {
		return (
			<FlatList style={s.messageContainer}
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
			<View style={p.id == 0 ? s.messageAssistant : s.message}>
				<Image source={p.icon} style={s.messageIcon} />
				<View style={p.id == 0 ? s.messageTextContainerAssistant : s.messageTextContainer}>
					<Text style={p.id == 0 ? s.messageUserNameAssistant : s.messageUserName}>{p.name}</Text>
					<Text style={p.id == 0 ? s.messageTextAssistant: s.messageText}>{this.props.children}</Text>
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
			<View style={s.bottomBar}>
				<TouchableHighlight
					onPress={() => this.selectPersona(this.props.persona)}
					underlayColor="white"
					style={s.personaSelect}
				>
					<Image style={s.selectedPersonaIcon}
						source={this.props.personas[this.state.selectedPersona].icon}
					/>
				</TouchableHighlight>
				<TextInput
					style={s.chatBox}
					ref={input => { this.textInput = input }}
					placeholder="Type message here...."
					onSubmitEditing={() => {
						this.sendMessage()
					}}
					blurOnSubmit={false}
				/>
				<ImageBackground style={[{display: 'none'}, s.styIcn]} imageStyle={s.styIcnImage} source={require('./assets/upload.png')}/>
				<TouchableHighlight
					onPress={() => {
						this.sendMessage();
						this.textInput.focus();
					}}
					underlayColor="white"
					style={s.sendMessage}
				>
					<ImageBackground
						style={s.styIcn}
						imageStyle={s.styIcnImage}
						source={require('./assets/send.png')}
					/>
				</TouchableHighlight>
			</View>
		);
	}
}