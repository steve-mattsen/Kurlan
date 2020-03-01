import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View,ScrollView, Picker, Image, FlatList, StatusBar,ImageBackground,TouchableHighlight, Platform} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

var personas = [
	{
		id: 0,
		name: 'Assistant',
		icon: 'https://giantbomb1.cbsistatic.com/uploads/scale_small/9/96986/2147981-edi_robot_body_me3.png',
		
	},{
		id: 1,
		name: 'Guy',
		icon: 'https://static.tvtropes.org/pmwiki/pub/images/AverageMan1.jpg',
	},{
		id: 2,
		name: 'Eeyore',
		icon: 'https://laurensheil.files.wordpress.com/2014/08/eeyore.jpg',
	},{
		id: 3,
		name: 'Chicken with no head',
		icon: 'http://rs1329.pbsrc.com/albums/w558/PRev1BV/Chook_zpsljk9l2pr.jpg~c200',
	},{
		id: 4,
		name: 'Inner Child',
		icon: 'https://cdn.tinybuddha.com/wp-content/uploads/2016/08/Inner-child.png',
	},{
		id: 5,
		name: 'Inner Parent',
		icon: 'https://findicons.com/files/icons/1024/dress_it_profession/128/dad_avatar.png',
	}
];

var messages = [
	{
		id: 0,
		persona: 0,
		message: "Good morning. How are you doing today?",
	},{
		id: 1,
		persona: 1,
		message: "I'm depressed and stressed.",
	},{
		id:0,
		persona: 0,
		message: "Why's that?",
	},{
		id: 2,
		persona: 3,
		message: "I have to do like 10 major things today.",
	},{
		id: 3,
		persona: 2,
		message: "There's so much to do that I just break down and don't do anything.",
	},{
		id: 4,
		persona: 4,
		message: "I just want to have fun all day and not do work.",
	},{
		id: 5,
		persona: 5,
		message: "Maybe I can just take out the trash and see how I feel.",
	}
];

var selectedPersona = 1;

export default function App() {
  return (
    <View style={styles.container}>
		<StatusBar hidden={false} backgroundColor="#f00" translucent={true}/>
		<SideBar />
		<TopBar />
		<MessageContainer />
		<BottomBar />
		<KeyboardSpacer />
    </View>
  );
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
				<Text style={styles.channelTitle}>#general</Text>
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
				data={messages}
				renderItem={({item}) => <Message persona={item.persona}>{item.message}</Message>}
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
			<View style={[styles.message, styleMix]}>
				<Image source={{uri: p.icon }} style={[styles.messageIcon, styleMix]} />
				<View style={[styles.messageTextContainer, styleMix]}>
					<Text style={[styles.messageUserName, styleMix]}>{p.name}</Text>
					<Text style={[styles.messageText, styleMix]}>{this.props.children}</Text>
				</View>
			</View>
		);
	}
}

class BottomBar extends Component {
	render() {
		return (
			<View style={styles.bottomBar}>
				<PersonaSelect />
				<TextInput style={styles.chatBox} placeholder="Type message here...."/>
				<ImageBackground style={styIcn} imageStyle={styIcnImage} source={require('./assets/upload.png')}/>
			</View>
		);
	}
}

class PersonaSelect extends Component {
	render() {
		return (
			<TouchableHighlight onPress={this.addMessage} >
				<Image style={styles.selectedPersonaIcon}
					source={{uri: personas[selectedPersona].icon}}
					/>
			</TouchableHighlight>
		);
	}
	//<View style={styles.selectedPersona}>
	//<Text style={styles.selectedPersonaUsername}> {personas[selectedPersona].name} </Text>
	//<Text style={[styIcn, styles.selectedPersonaArrow]}> &#9660; </Text>
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
		fontStyle: 'italic',
		fontWeight: '200',
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
