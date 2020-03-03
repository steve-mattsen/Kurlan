export const personas = [
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
export const messages = [
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

export var channels = [
	{
		id: 0,
		title: '#general',
		description: 'Just talk about anything.',
	}
];

export var currentChannel = 0;