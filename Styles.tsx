import {Platform,StatusBar} from 'react-native';

var styConst = {
	fontSize: 16,
	padding: 5,
	borderRadius: 5,
	statusBarHeight: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
}

var styClr = {
	light: '#ccc',
	lightMidLight: '#b8b8b8',
	lightMid: '#999',
	mid: '#666',
	midDarkMid: '#484848',
	darkMid: '#333',
	darkMidDark: '#181818',
	dark: '#000',
};

export const styIcn = {
	width: 40,
	height: 40,
	backgroundColor: styClr.lightMid,
	borderRadius: styConst.borderRadius,
	borderWidth: 0,
	borderColor: styClr.lightMid,
};

export const styIcnMid = {
	marginLeft: styConst.padding,
};

export const styIcnImage = {
	width: styIcn.width - styConst.padding * 2,
	height: styIcn.height - styConst.padding * 2,
	marginLeft: styConst.padding,
	marginTop: styConst.padding,
};

export const container = {
	flex: 1,
	flexDirection: 'column',
};

export const sideBar = {
	display: 'none',
	flex: 1,
	top: 0,
	left: -200,
	bottom: 0,
	width: 200,
	zIndex: 1,
	backgroundColor: styClr.mid,
	padding: styConst.padding,
};

export const topBar = {
	backgroundColor: styClr.mid,
	flexDirection: 'row-reverse',
	padding: styConst.padding,
	paddingTop: styConst.padding + styConst.statusBarHeight,
};

export const channelTitle = {
	flex: 1,
	fontSize: styConst.fontSize,
	paddingHorizontal: styConst.padding,
	paddingTop: styConst.padding,
	fontWeight: 'bold',
	color: styClr.light,
};

export const menuButton = {
};

export const searchButton = {
	padding: 10,
	marginLeft: styConst.padding,
	marginRight: styConst.padding,
};

export const messageContainer = {
	backgroundColor: styClr.darkMid,
	flexDirection: 'column-reverse',
};

export const message = {
	flexDirection: 'row',
	padding: styConst.padding,
	paddingVertical: styConst.fontSize * 1.5 * .5,	//The goal is to have this to have exactly one line space between messages.
};

export const messageIcon = {
	width: styIcn.width,
	height: styIcn.height,
	borderRadius: 100,
	marginRight: styConst.padding,
};

export const messageUserName = {
	fontSize: styConst.fontSize,
	paddingLeft: styConst.padding,
	color: styClr.light,
	fontWeight: 'bold',
	flex: 1,
};

export const messageText = {
	flex: 1,
	fontSize: styConst.fontSize,
	paddingLeft: styConst.padding,
	color: styClr.light,
	flexWrap: 'wrap'
};

export const messageTextContainer = {
	marginTop: styConst.padding * -0.4,
	flex: 1,
};

export const messageAssistant = {
	flexDirection: 'row',
	paddingVertical: (styConst.fontSize * 1.25 * 0.5),
	paddingHorizontal: styConst.padding,
	backgroundColor: styClr.midDarkMid,
};

export const messageTextContainerAssistant = {
	marginTop: styConst.padding * -0.4,
	flex: 1,
};

export const messageUserNameAssistant = {
	fontSize: styConst.fontSize,
	paddingLeft: styConst.padding,
	color: styClr.light,
	fontWeight: 'bold',
	flex: 1,
};

export const messageTextAssistant = {
	flex: 1,
	fontSize: styConst.fontSize,
	paddingLeft: styConst.padding,
	color: styClr.light,
	flexWrap: 'wrap',
	fontWeight: 'normal',
	fontStyle: 'italic',
};

export const bottomBar = {
	flexDirection: 'row',
	padding: styConst.padding,
	backgroundColor: styClr.mid,
};

export const selectedPersona = {
	flexDirection: 'row',
	borderRadius: styConst.borderRadius,
	backgroundColor: styClr.light,
	padding: styConst.padding,
};

export const selectedPersonaIcon = {
	width: styIcn.width,
	height: styIcn.height,
	borderRadius: styIcn.borderRadius,
};

export const selectedPersonaUsername = {
	fontSize: styConst.fontSize,
};

export const selectedPersonaArrow = {
	backgroundColor: 'transparent',
};

export const chatBox = {
	flex: 1,
	marginLeft: 10,
	marginRight: 10,
	padding: styConst.padding,
	paddingBottom: 0,
	paddingTop: 0,
	fontSize: styConst.fontSize,
	color: "white",
};

export const upload = {
};

export const send = {
	
};
