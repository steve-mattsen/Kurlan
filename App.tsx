import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View,ScrollView, Picker, Image, FlatList, StatusBar,ImageBackground,TouchableHighlight, Platform} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

var s = require('./Styles.tsx');

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
				<StatusBar hidden={false} backgroundColor={s.colors.main[0]} translucent={true}/>
				<SideBar />
				<TopBar
					currentChannel={this.state.currentChannel}
					channels={this.state.channels}
				/>
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
	constructor(props) {
		super(props);
		this.chan = this.props.channels[this.props.currentChannel];
	}
	render() {
		return (
			<View style={s.topbar}>
				<ImageBackground style={s.menButton} imageStyle={s.menButImage} source={require('./assets/hamburger.png')}/>
				<Text style={s.chnTitle}>{this.chan.title}</Text>
				<ImageBackground style={s.staButton} imageStyle={s.staButImage} source={require('./assets/star.png')}/>
				<ImageBackground style={s.seaButton} imageStyle={s.seaButImage} source={require('./assets/search.png')}/>
				<ImageBackground style={s.actButton} imageStyle={s.actButImage} source={require('./assets/actionButton.png')}/>
			</View>
		)
	}
}

class MessageContainer extends Component {
	render() {
		return (
			<FlatList style={s.mesContainer}
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
		return (
			<View style={p.id == 0 ? s.ast.message : s.message}>
				<Image source={p.icon} style={s.mesIcon} />
				<View style={p.id == 0 ? s.mesTexContainer : s.mesTexContainer}>
					<Text style={p.id == 0 ? s.ast.mesPersona : s.mesPersona}>{p.name}</Text>
					<Text style={p.id == 0 ? s.ast.mesText : s.mesText}>{this.props.children}</Text>
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
			<View style={s.botbar}>
				<TouchableHighlight
					onPress={() => this.selectPersona(this.props.persona)}
					underlayColor={s.colors.main[15]}
					style={s.perSelect}
				>
					<Image style={s.perSelIcon}
						source={this.props.personas[this.state.selectedPersona].icon}
					/>
				</TouchableHighlight>
				<TextInput
					style={s.chtBox}
					ref={input => { this.textInput = input }}
					placeholder="Type message here...."
					onSubmitEditing={() => {
						this.sendMessage()
					}}
					blurOnSubmit={false}
				/>
				<ImageBackground style={s.uplButton} imageStyle={s.uplButImage} source={require('./assets/upload.png')}/>
				<TouchableHighlight
					onPress={() => {
						this.sendMessage();
						this.textInput.focus();
					}}
					underlayColor={s.colors.main[15]}
					style={s.senMessage}
				>
					<ImageBackground
						style={s.senMesButton}
						imageStyle={s.senMesButImage}
						source={require('./assets/send.png')}
					/>
				</TouchableHighlight>
			</View>
		);
	}
}