
import * as v from './Vars.tsx';

import * as b from './Base.tsx';

export var message = Object.assign({}, b.message, {
	backgroundColor: v.colors.main[3],
});

export var mesPersona = Object.assign({}, b.mesPersona, {
	color: v.colors.main[12],
});

export var mesText = Object.assign({}, b.mesText, {
	color: v.colors.main[12],
	fontStyle: 'italic',
});