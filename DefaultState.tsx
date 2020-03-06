export const personas = [];
export const messages = [];

function addPersona(name, icon) {
	//Return id of added persona.
	return personas.push({
		id: personas.length,
		name: name,
		icon: require("./assets/personas/" + icon),
	}) - 1;
}


function addMessage (personaId, text) {
	//Return id of added message.
	return messages.push({
		id: messages.length,
		persona: personaId,
		text: text,
	}) - 1;
}

var assistant = addPersona('Assistant', 'assistant.png');
var self = addPersona('Guy','guy.png');
var donkey = addPersona('Sad Donkey','sadDonkey.png');
var chicken = addPersona('Headless Chicken','chicken.png');
var child = addPersona('Inner Child','innerChild.png');
var parent = addPersona('Mr. Rogers','fredRogers.png');

addMessage(assistant, "Good morning. How are you doing today?");

addMessage(self, "For the most part I'm feeling pretty good, but I'm also a bit down today.");
addMessage(assistant, "Why's that?");
addMessage(parent, "Well, life's good in many ways. I have a healthy and meaningful life.");
addMessage(chicken, "But I have to do like 10 tasks right now.");
addMessage(donkey, "There's so much to do that I get overwhelmed and do nothing.");
addMessage(child, "I just want to relax and have fun.");
addMessage(parent, "Maybe I can just start by taking out the trash.");

export var channels = [
	{
		id: 0,
		title: '#general',
		description: 'Just talk about anything.',
	}
];

export var currentChannel = 0;