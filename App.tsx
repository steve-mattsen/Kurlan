import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, View,ScrollView, Picker, Image, FlatList } from 'react-native';

var personas = [
	{
		id: 0,
		name: 'Self',
		icon: 'https://cdn.discordapp.com/avatars/217086119156776960/0d7ca52f55294538231d391a7ab93095.png?size=64',
	},
	{
		id: 1,
		name: 'Eeyore',
		icon: 'https://laurensheil.files.wordpress.com/2014/08/eeyore.jpg',
	},
	{
		id: 2,
		name: 'Chicken with no head',
		icon: 'http://rs1329.pbsrc.com/albums/w558/PRev1BV/Chook_zpsljk9l2pr.jpg~c200',
	},
	{
		id: 3,
		name: 'Inner Child',
		icon: 'https://cdn.tinybuddha.com/wp-content/uploads/2016/08/Inner-child.png',
	}
];

var messages = [
	{
		id: 0,
		persona: 0,
		message: "How's everyone doing?",
	},{
		id: 1,
		persona: 1,
		message: "I'm depressed.",
	},{
		id: 2,
		persona: 2,
		message: "There's so much we have to do and we're not doing any of it.",
	},{
		id: 3,
		persona: 3,
		message: "Let's make videos games all day forever!",
	},
];

var selectedPersona = 0;

export default function App() {
  return (
    <View style={styles.container}>
		<SideBar />
		<TopBar />
		<MessageContainer />
		<BottomBar />
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
				<Image style={[styIcn, styles.menuButton]} source={require('./assets/hamburger.png')} />
				<Text style={styles.channelTitle}>#general</Text>
				<Image style={[styIcn, styles.starButton]} source={require('./assets/star.png')} />
				<Image style={[styIcn, styles.searchButton]} source={require('./assets/search.png')} />
				<Image style={[styIcn, styles.actionButton]} source={require('./assets/actionButton.png')} />
			</View>
		)
	}
}

class MessageContainer extends Component {
	render() {
		return (
			<FlatList style={styles.messageContainer} 
				data={messages}
				renderItem={({item}) => <Message user={item.persona}>{item.message}</Message>}
				/>
		);
	}
}

class Message extends Component {
	render() {
		this.p = personas[this.user];
		return (
			<View style={styles.message}>
				<Image source={{uri: personas[this.props.user].icon }} style={styles.messageIcon} />
				<View style={styles.messageTextContainer}>
					<Text style={styles.messageUserName}>{personas[this.props.user].name}</Text>
					<Text style={styles.messageText}>{this.props.children}</Text>
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
				<Image style={[styIcn, styles.upload]} source={require('./assets/upload.png')} />
			</View>
		);
	}
}

class PersonaSelect extends Component {
	render() {
		return (
			<Image style={styles.selectedPersonaIcon}
				source={{uri: personas[selectedPersona].icon}}
				/>
		);
	}
	//<View style={styles.selectedPersona}>
	//<Text style={styles.selectedPersonaUsername}> {personas[selectedPersona].name} </Text>
	//<Text style={[styIcn, styles.selectedPersonaArrow]}> &#9660; </Text>
}

const styConst = {
	fontSize: 16,
	padding: 10,
	borderRadius: 5,
}

const styClr = {
	light: '#ccc',
	lightMid: '#999',
	mid: '#666',
	darkMid: '#333',
	dark: '#000',
};

const styIcn = {
	width: 30,
	height: 30,
	backgroundColor: styClr.lightMid,
	borderRadius: styConst.borderRadius,
	borderWidth: 5,
	borderColor: styClr.lightMid,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	sideBar: {
		display: 'none',
		flex: 1,
		//position: 'absolute',
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
		flexDirection: 'row',
		padding: styConst.padding,
	},
	channelTitle: {
		flex: 1,
		fontSize: styConst.fontSize,
		padding: styConst.padding,
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
		flex: 5,
		backgroundColor: styClr.darkMid,
		flexDirection: 'column-reverse',
		color: styClr.light,
	},
	message: {
		flexDirection: 'row',
		paddingBottom: styConst.padding,
		paddingLeft: styConst.padding,
	},
	messageIcon: {
		width: styIcn.width,
		height: styIcn.height,
		borderRadius: 100,
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
	},
	upload: {
	},
	send: {
		
	}
});
