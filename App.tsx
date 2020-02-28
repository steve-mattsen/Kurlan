import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, View,ScrollView, Picker, Image, FlatList, StatusBar,ImageBackground } from 'react-native';

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
		message: "How are we doing?",
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
		<StatusBar hidden={false} backgroundColor="#f00" translucent={false}/>
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
		return (
			<View style={styles.message}>
				<Image source={{uri: p.icon }} style={styles.messageIcon} />
				<View style={styles.messageTextContainer}>
					<Text style={styles.messageUserName}>{p.name}</Text>
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
				<ImageBackground style={styIcn} imageStyle={styIcnImage} source={require('./assets/upload.png')}/>
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
	padding: 5,
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
		paddingTop: styConst.padding + StatusBar.currentHeight,
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
		flex: 5,
		backgroundColor: styClr.darkMid,
		flexDirection: 'column-reverse',
		color: styClr.light,
	},
	message: {
		flexDirection: 'row',
		paddingBottom: styConst.padding,
		paddingHorizontal: styConst.padding,
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
