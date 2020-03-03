import {StyleSheet, Platform,StatusBar} from 'react-native';

import * as v from './styles/Vars.tsx';

export var fonSize = v.fonSize;
export var padding = v.padding;
export var borRadius = v.borRadius;
export var staBarHeight = v.staBarHeight;
export var mesPadding = v.mesPadding;
export var colors = v.colors;
export var icon = v.icon;
export var icoImage = v.icoImage;
export var text = v.text;

import * as ss from './styles/Base.tsx';

var s = StyleSheet.create(ss);

export var container = s.container;
export var topbar = s.topbar;
export var chnTitle = s.chnTitle;
export var menButton = s.menButton;
export var menButImage = s.menButImage;
export var staButton = s.staButton;
export var staButImage = s.staButImage;
export var seaButton = s.seaButton;
export var seaButImage = s.seaButImage;
export var actButton = s.actButton;
export var actButImage = s.actButImage;
export var mesContainer = s.mesContainer;
export var message = s.message;
export var mesIcon = s.mesIcon;
export var mesTextContainer = s.mesTextContainer;
export var mesPersona = s.mesPersona;
export var mesText = s.mesText;
export var botbar = s.botbar;
export var perSelect = s.perSelect;
export var perSelIcon = s.perSelIcon;
export var chtBox = s.chtBox;
export var uplButton = s.uplButton;
export var uplButImage = s.uplButImage;
export var senMessage = s.senMessage;
export var senMesButImage = s.senMesButImage;

import * as a from './styles/Assistant.tsx'

export var ast = StyleSheet.create(a);
