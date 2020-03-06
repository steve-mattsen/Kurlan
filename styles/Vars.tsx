import {StyleSheet, Platform,StatusBar} from 'react-native';

export var fonSize = 15;
export var padding = 5;
export var borRadius = 5;
var staBarHeight = (Platform.OS === 'ios' ? 20 : StatusBar.currentHeight);
if (staBarHeight < 0 || staBarHeight == undefined) {
	var staBarHeight = 0;
}
export var staBarHeight;
export var mesPadding = (fonSize * 1.5 * .5);	//The goal is to have this to have exactly one line space between messages.
export var colors = {	//colors.<palette>.<lightLevel>  # 0:dark 3:mid 6:light
	alt2: [ //Orange
		'#320000',
		'#4e1c00',
		'#784a00',
		'#a3772b',
		'#cda25a',
		'#f4cf8b',
		'#fffbba',
	],
	main: [ //Grayscale
		'#000000',
		'#111111',
		'#222222',
		'#333333',
		'#444444',
		'#555555',
		'#666666',
		'#777777',
		'#888888',
		'#999999',
		'#AAAAAA',
		'#BBBBBB',
		'#CCCCCC',
		'#DDDDDD',
		'#EEEEEE',
		'#FFFFFF',
	],
	alt0: [	//Purple
		'#200056',
		'#4f0085',
		'#8420b8',
		'#b653e9',
		'#e47fff',
		'#ffacff',
		'#ffd7ff',
	],
	alt1: [ //Green
		'#001b00',
		'#00380e',
		'#006636',
		'#00945f',
		'#35c087',
		'#6dedb1',
		'#9effd9',
	],
};

// Define some "macros."
export var icon = {
	width: 40,
	height: 40,
	backgroundColor: colors.main[9],
	borderRadius: borRadius,
	borderWidth: 0,
	borderColor: colors.main[4],
};

export var icoImage = {
	width: icon.width - padding * 2,
	height: icon.height - padding * 2,
	marginLeft: padding,
	marginTop: padding,
};

export var text = {
	fontSize: fonSize,
	color: colors.main[11],
}
