import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View,ScrollView, Picker, Image, FlatList, StatusBar,ImageBackground,TouchableHighlight, Platform} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

var personas = [
	{
		id: 0,
		name: 'Assistant',
		icon: require('./assets/personas/assistant.png'),
	},{
		id: 1,
		name: 'Guy',
		icon: require('./assets/personas/guy.png'),
	},{
		id: 2,
		name: 'Sad Donkey',
		icon: require('./assets/personas/sadDonkey.png'),
	},{
		id: 3,
		name: 'Chicken with no head',
		icon: require('./assets/personas/chicken.png'),
	},{
		id: 4,
		name: 'Inner Child',
		icon: require('./assets/personas/innerChild.png'),
	},{
		id: 5,
		name: 'Inner Parent',
		icon: require('./assets/personas/father.png'),
	}
];

var messages = [
	{
		key: 0,
		persona: 0,
		text: "Good morning. How are you doing today?",
	},{
		key: 1,
		persona: 1,
		text: "I'm depressed and stressed.",
	},{
		key: 2,
		persona: 0,
		text: "Why's that?",
	},{
		key: 3,
		persona: 3,
		text: "I have to do like 10 major things today.",
	},{
		key: 4,
		persona: 2,
		text: "There's so much to do that I just break down and don't do anything.",
	},{
		key: 5,
		persona: 4,
		text: "I just want to have fun all day and not do work.",
	},{
		key: 6,
		persona: 5,
		text: "Maybe I can just take out the trash and see how I feel.",
	}
];

var app = null;
export default class App extends Component {
	constructor(props) {
		super(props);
		app = this;
		this.state = Object.assign({}, {
			channel: '#general',
			personas: personas,
			messages: messages,
		});
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
				<BottomBar personas={this.state.personas}/>
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
				<ImageBackground style={styIcn} imageStyle={styIcnImage} source={require('./assets/hamburger.png')}/>
				<Text style={styles.channelTitle}>{this.props.channel}</Text>
				<ImageBackground style={[styIcn, styIcnMid]} imageStyle={styIcnImage} source={require('./assets/star.png')}/>
				<ImageBackground style={[styIcn, styIcnMid]} imageStyle={styIcnImage} source={require('./assets/search.png')}/>
				<ImageBackground style={styIcn} imageStyle={styIcnImage} source={require('./assets/actionButton.png')}/>
			</View>
		)
	}
}

class MessageContainer extends Component {
	render() {
		return (
			<FlatList style={styles.messageContainer} 
				data={this.props.messages}
				renderItem={({item}) => <Message persona={item.persona}>{item.text}</Message>}
				keyExtractor={(item) => item.key.toString()}
				/>
		);
	}
}

class Message extends Component {
	render() {
		let p = personas[this.props.persona];
		var styleMix = [];
		if (p.id == 0) {
			styleMix.push(styles.messageAssistant);
		}
		return (
			<View style={[styles.message]}>
				<Image source={p.icon} style={[styles.messageIcon]} />
				<View style={[styles.messageTextContainer]}>
					<Text style={[styles.messageUserName, styleMix]}>{p.name}</Text>
					<Text style={[styles.messageText, styleMix]}>{this.props.children}</Text>
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
	handleSubmit(event) {
		app.addMessage(this.state.selectedPersona, event.nativeEvent.text);
		this.setState((prev) => ({
			messageText: '',
		}));
		this.textInput.clear();
	}
	render() {
		return (
			<View style={styles.bottomBar}>
				<TouchableHighlight
					onPress={() => this.selectPersona(this.props.persona)}
					underlayColor="white"
					style={{borderRadius: styConst.borderRadius}}
				>
					<Image style={styles.selectedPersonaIcon}
						source={this.props.personas[this.state.selectedPersona].icon}
					/>
				</TouchableHighlight>
				<TextInput
					style={styles.chatBox}
					ref={input => { this.textInput = input }}
					placeholder="Type message here...."
					onSubmitEditing={(e) => this.handleSubmit(e)}
					blurOnSubmit={false}
				/>
				<ImageBackground style={styIcn} imageStyle={styIcnImage} source={require('./assets/upload.png')}/>
			</View>
		);
	}
}

const styConst = {
	fontSize: 16,
	padding: 5,
	borderRadius: 5,
	statusBarHeight: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
}

const styClr = {
	light: '#ccc',
	lightMid: '#999',
	mid: '#666',
	darkMid: '#333',
	dark: '#000',
};

const styIcn = {
	width: 40,
	height: 40,
	backgroundColor: styClr.lightMid,
	borderRadius: styConst.borderRadius,
	borderWidth: 0,
	borderColor: styClr.lightMid,
};

const styIcnMid = {
	marginLeft: styConst.padding,
};

const styIcnImage = {
	width: styIcn.width - styConst.padding * 2,
	height: styIcn.height - styConst.padding * 2,
	marginLeft: styConst.padding,
	marginTop: styConst.padding,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	sideBar: {
		display: 'none',
		flex: 1,
		top: 0,
		left: -200,
		bottom: 0,
		width: 200,
		zIndex: 1,
		backgroundColor: styClr.mid,
		padding: styConst.padding,
	},
	topBar: {
		backgroundColor: styClr.mid,
		flexDirection: 'row-reverse',
		padding: styConst.padding,
		paddingTop: styConst.padding + styConst.statusBarHeight,
	},
	channelTitle: {
		flex: 1,
		fontSize: styConst.fontSize,
		paddingHorizontal: styConst.padding,
		paddingTop: styConst.padding,
		fontWeight: 'bold',
		color: styClr.light,
	},
	menuButton: {
	},
	searchButton: {
		padding: 10,
		marginLeft: styConst.padding,
		marginRight: styConst.padding,
	},
	messageContainer: {
		backgroundColor: styClr.darkMid,
		flexDirection: 'column-reverse',
	},
	message: {
		flexDirection: 'row',
		padding: styConst.padding,
	},
	messageIcon: {
		width: styIcn.width,
		height: styIcn.height,
		borderRadius: 100,
		marginRight: styConst.padding,
	},
	messageUserName: {
		fontSize: styConst.fontSize,
		paddingLeft: styConst.padding,
		color: styClr.light,
		fontWeight: 'bold',
		flex: 1,
	},
	messageText: {
		flex: 1,
		fontSize: styConst.fontSize,
		paddingLeft: styConst.padding,
		color: styClr.light,
		//fontWeight: 'light',
		flexWrap: 'wrap'
	},
	messageTextContainer: {
		marginTop: styConst.padding * -0.4,
		paddingBottom: styConst.padding,
		flex: 1,
	},
	messageAssistant: {
		backgroundColor: styClr.mid,
	},
	messageAssistantText: {
		fontStyle: 'italic',
		fontWeight: '200',
		color: "white",
	},
	bottomBar: {
		flexDirection: 'row',
		padding: styConst.padding,
		backgroundColor: styClr.mid,
	},
	selectedPersona: {
		flexDirection: 'row',
		borderRadius: styConst.borderRadius,
		backgroundColor: styClr.light,
		padding: styConst.padding,
	},
	selectedPersonaIcon: {
		//borderRadius: '100%',
		//borderColor: styClr.light,
		width: styIcn.width,
		height: styIcn.height,
		borderRadius: styIcn.borderRadius,
	},
	selectedPersonaUsername: {
		fontSize: styConst.fontSize,
	},
	selectedPersonaArrow: {
		backgroundColor: 'transparent',
	},
	chatBox: {
		flex: 1,
		marginLeft: 10,
		marginRight: 10,
		padding: styConst.padding,
		paddingBottom: 0,
		paddingTop: 0,
		fontSize: styConst.fontSize,
		color: "white",
	},
	upload: {
	},
	send: {
		
	}
});
