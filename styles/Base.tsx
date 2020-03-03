
import {
	fonSize,
	padding,
	borRadius,
	staBarHeight,
	mesPadding,
	colors,
	icon,
	icoImage,
	text,
} from './Vars.tsx';

export var container = {
	flex: 1,
	flexDirection: 'column',
	backgroundColor: colors.main[1],
};

export var sidebar = {
	display: 'none',
	flex: 1,
	top: 0,
	left: -200,
	bottom: 0,
	width: 200,
	zIndex: 1,
	backgroundColor: colors.main[5],
	padding: padding,
};

export var topbar = {
	backgroundColor: colors.main[2],
	flexDirection: 'row-reverse',
	padding: padding,
	paddingTop: padding + staBarHeight,
};

export var chnTitle = Object.assign({}, text, {
	flex: 1,
	paddingHorizontal: padding,
	paddingTop: padding,
	fontWeight: 'bold',
});

export var menButton = Object.assign({}, icon, {
});

export var menButImage = Object.assign({}, icoImage, {
});

export var staButton = Object.assign({}, icon, {
});

export var staButImage = Object.assign({}, icoImage, {
});

export var seaButton = Object.assign({}, icon, {
	padding: 10,
	marginLeft: padding,
	marginRight: padding,
});

export var seaButImage = Object.assign({}, icoImage, {
});

export var actButton = Object.assign({}, icon, {
});

export var actButImage = Object.assign({}, icoImage, {
});

export var mesContainer = {
	flexDirection: 'column-reverse',
};

export var message = {
	flexDirection: 'row',
	padding: padding,
	paddingVertical: mesPadding,
};

export var mesIcon = Object.assign({}, icon, {
	borderRadius: 100,
	marginRight: padding,
});

export var mesTexContainer = {
	marginTop: padding * -0.4,
	flex: 1,
};

export var mesPersona = Object.assign({}, text, {
	paddingLeft: padding,
	fontWeight: 'bold',
	flex: 1,
});

export var mesText = Object.assign({}, text, {
	flex: 1,
	paddingLeft: padding,
	flexWrap: 'wrap',
});

export var botbar = {
	flexDirection: 'row',
	padding: padding,
	backgroundColor: colors.main[2],
	marginTop: mesPadding,
	paddingLeft: padding,
};

export var perSelect = {
	borderRadius: borRadius
}

export var perSelIcon = Object.assign({}, icon, {
});

export var chtBox = {
	flex: 1,
	marginLeft: padding,
	marginRight: 10,
	padding: padding,
	paddingBottom: 0,
	paddingTop: 0,
	fontSize: fonSize,
	color: colors.main[6],
};

export var uplButton = Object.assign({}, icon, {
	display: 'none',
});

export var uplButImage = Object.assign({}, icoImage, {
});

export var senMessage = Object.assign({}, icon, {
});

export var senMesButton = Object.assign({}, icon, {
});

export var senMesButImage = Object.assign({}, icoImage, {
});
