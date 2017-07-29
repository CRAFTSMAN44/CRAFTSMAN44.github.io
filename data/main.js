var sketchProc=function(processingInstance){ with (processingInstance){

var sketchProc=function(processingInstance){ with (processingInstance){
size(window.innerWidth, window.innerHeight);
frameRate(30);
{//global variables
var colors = [
	color(107, 98, 2)
];
var nameActive = false;
var controlsActive = false;
var controlActive = 0;
var modsMenu = false;
var buttons = [];
var hasGPs = false;
var gps = [];
var pAxes = [];
for(var i = 0; i < 100; i++) {
	pAxes.push([]);
	for(var j = 0; j < 100; j++) {
		pAxes[i].push([]);
	}
}
var mods = ["Torn Stars", false, "Gold Rush", false];
var controllerData, controls, shiftData, textT;
var scroll1 = 0;
var mouseIsPressed = false;
var buttonTimer = 0;
var buttonHovers = [1, 1];
var controlsKeys = [
"Take screenshot",
"Pause1",
"Pause2",
"PDA",
"Leave Options Menu",
"GUI Focus Left",
"GUI Focus Up",
"GUI Focus Right",
"GUI Focus Down",
"GUI Focus Cancel 1",
"GUI Focus Cancel 2",
"GUI Focus Select 1",
"GUI Focus Select 2",
"GUI HTML back",
"Yaw Left",
"Yaw Right",
"Pitch Up",
"Pitch Down",
"Roll Left",
"Roll Right",
"Throttle+1",
"Throttle+2",
"Throttle-1",
"Throttle-2",
"Lateral Thrusters Right",
"Lateral Thrusters Left",
"Lateral Thrusters Up",
"Lateral Thrusters Down",
"Lateral Thrusters Forward",
"Lateral Thrusters Backwards",
"Fly-by-wire FreeHold",
"Fly-by-wire FreeToggle",
"Toggle Flight Assist",
"Fire",
"LDSI Missile",
"Toggle Aim Assist",
"Zoom",
"Toggle Weapon Link Mode",
"LDS",
"Undock",
"Cycle Contacts Up",
"Cycle Contacts Down",
"Cycle Contacts Top",
"Cycle Contacts Bottom",
"Target NearestEnemy",
"Target Ship in Reticle",
"Target Last Attacker",
"SubTarget",
"Cycle Enemy",
"Cycle Critical",
"Next Weapon",
"Next Primary Weapon",
"Next Secondary Weapon",
"Power To Weapons",
"Power To Shields",
"Power To Engines",
"Balance Power",
"Autopilot Off",
"Autopilot Approach",
"Autopilot Formate",
"Autopilot Dock",
"Autopilot Pursuit",
"Remote link",
"Internal Camera",
"Tactical Camera",
"External Camera",
"Drop Camera",
"Auto Camera",
"Camera Pan Right",
"Camera Pan Left",
"Camera Tilt Down",
"Camera Tilt Up",
"Camera Roll Left",
"Camera Roll Right",
"Camera Zoom In",
"Camera Zoom Out",
"Camera Zoom To Fit 1",
"Camera Zoom To Fit 2",
"Camera Mouse Pan",
"Camera Mouse Tilt",
"Camera Mouse Zoom",
"Camera Mouse Roll Modifier",
"Camera Mouse Zoom Modifier",
"Camera Skip",
"Pause1(Again?)",
"Pause2 (Again?)",
"Skip Movie 1",
"Skip Movie 2",
"Skip Movie 3",
"Hud Menu Left",
"Hud Menu Right",
"Hud Menu Up",
"Hud Menu Down",
"Hud Menu Select",
"Hud Menu Cancel",
"View Objectives",
"View Starmap",
"View Log",
"View Engineering",
"View Statistics",
"Coms Previous Response",
"Coms Next Response",
"Coms Say Response 1",
"Coms Say Response 2",
"Coms Skip Phrase",
"PointerX",
"PointerY",
"PointerZ",
"PointerButton1",
"PointerButton2",
"PointerButton3",
"Call Jafs",
"Skip Cutscene",
"Wingmen Report Status",
"Wingmen Defend Player",
"Wingmen Attack Target",
"Wingmen Defend Target",
"Wingmen Dock To Target",
"Wingmen Halt",
"T-Fighter Attatch/Detatch",
"T-Fighter Cease Fire",
"T-Fighter Attack Target",
"T-Fighter Fire At Will",
"Multiplayer View Score",
"Multiplayer Chat",
"Multiplayer Team CHat",
"Multiplayer Taunt 1",
"Multiplayer Taunt 2",
"Multiplayer Taunt 3",
"Multiplayer Taunt 4"
];
var controlsTitle = [
[112, "F1"],
[113, "F2"],
[114, "F3"],
[115, "F4"],
[116, "F5"],
[117, "F6"],
[118, "F7"],
[119, "F8"],
[120, "F9"],
[121, "F10"],
[122, "F11"],
[123, "F12"],
[33, "Break"],
[34, "Pause"],
[35, "End"],
[36, "Home"],
[37, "Left"],
[39, "Right"],
[38, "Up"],
[40, "Down"],
[65, "A"],
[66, "B"],
[67, "C"],
[68, "D"],
[69, "E"],
[70, "F"],
[71, "G"],
[72, "H"],
[73, "I"],
[74, "J"],
[75, "K"],
[76, "L"],
[77, "M"],
[78, "N"],
[79, "O"],
[80, "P"],
[81, "Q"],
[82, "R"],
[83, "S"],
[84, "T"],
[85, "U"],
[86, "V"],
[87, "W"],
[88, "X"],
[89, "Y"],
[90, "Z"],
[48, "0"],
[49, "1"],
[50, "2"],
[51, "3"],
[52, "4"],
[53, "5"],
[54, "6"],
[55, "7"],
[56, "8"],
[57, "9"],
[96, "NumPad0"],
[97, "NumPad1"],
[98, "NumPad2"],
[99, "NumPad3"],
[100, "NumPad4"],
[101, "NumPad5"],
[102, "NumPad6"],
[103, "NumPad7"],
[104, "NumPad8"],
[105, "NumPad9"],
[187, "Equals"],
[107, "NumPadPlus"],
[189, "Minus"],
[109, "NumPadMinus"],
[32, "Space"],
[188, "Comma"],
[190, "Dot"],
[221, "RightBracket"],
[219, "LeftBracket"],
[106, "NumPadStar"],
[127, "Delete"],
[undefined, ""],
[111, "NumPadSlash"],
[220, "ForwardSlash"],
[191, "Slash"],//Fix
[110, "NumPadDot"],
[192, "Backquote"],
[157, "Unknown"],//this is the button between right alt and CTRL
[186, "SemiColon"],
[222, "Apostrophe"],
[144, "NumLock"],
[155, "Insert"],
[8, "Backspace"],
[9, "Tab"],
[20, "CapsLock"],
[310, "Return"],
[410, "NumPadReturn"],
[317, "LeftControl"],
[417, "RightControl"],
[318, "LeftAlt"],
[418, "RightAlt"],
[27, "Escape"],
[800, "MouseXAxis"],
[801, "MouseYAxis"],
[802, "MouseZAxis"],
[901, "MouseButton1"],
[903, "MouseButton2"],
[1000, "JoyXAxis"],
[1001, "JoyXAxis"],
[1002, "JoyYAxis"],
[1003, "JoyYAxis"],
[1004, "JoyZAxis"],
[1005, "JoyZAxis"],
[1006, "JoyUAxis"],
[1007, "JoyUAxis"],
[1018, "JoyPov1Left"],
[1019, "JoyPov1Right"],
[1020, "JoyPov1Up"],
[1021, "JoyPov1Down"],
[]
];
}
{//functions
var environment = function() {
	if(window.innerWidth !== width || window.innerHeight !== height) {
		size(window.innerWidth, window.innerHeight);
	}
};
var mouseFunction = function() {
	mousePressed = function() {
		mouseIsPressed = true;
	};
	mouseReleased = function() {
		mouseIsPressed = false;
		buttonTimer = 0;
	};
};
var drawUI = function() {
	background(0);
	pushStyle();
	fill(colors[0], 15);
	noStroke();
	rect(0, 0, width/5, height);
	stroke(colors[0]);
	line(width/5, 0, width/5, height);
	rect(3*width/10, height/10, width*6/10, height*8/10, 20);
	line(5*width/10, height/10, 5*width/10, height-height/10);
	line(7*width/10, height/10, 7*width/10, height-height/10);
	fill(colors[0]);
	stroke(colors[0], 30);
	for(var z = 0; z < width; z+= 20) {
		line(z, 0, z, height);
	}
	for(var z = 0; z < height; z+= 20) {
		line(0, z, width, z);
	}
	stroke(colors[0]);
	for(var z = 0; z < 15; z++) {
		line(3*width/10, (z+3)*height/20, 9*width/10, (z+3)*height/20+5);
	}
	buttons[0].drawRound(0);
	buttons[1].drawScrollBar(scroll1, 16);
	buttons[2].drawRound(1);
	buttons[4].drawRound();
};
var drawData = function() {
	pushStyle();
	textAlign(CENTER, CENTER);
	for(var i = scroll1; i < scroll1+16; i++) {
		text(controlsKeys[i], width*2/5, (i-scroll1)*height/20+height/7.7);
		text(controllerData[i], width*3/5, (i-scroll1)*height/20+height/7.7);
		text(controls[i], width*4/5, (i-scroll1)*height/20+height/7.7);
		text(shiftData[i], width*4.3/5, (i-scroll1)*height/20+height/7.7);
	}
	popStyle();
};
var drawMods = function() {
	pushStyle();
	fill(colors[0], 15);
	stroke(colors[0]);
	rect(width/10-width/14, height/6, width/7, height/40*mods.length, 20);
	line(3*width/20, height/6, 3*width/20, height/6+height/40*mods.length);
	for(var i = 0; i < mods.length/2-1; i++) {
		line(width/10-width/14, height/6+height/20*(i+1), width/10+width/14, height/6+height/20*(i+1));
	}
	for(var i = 0; i < mods.length/2; i++) {
		fill(colors[0]);
		textAlign(CENTER, CENTER);
		text(mods[i*2], width/10, height/6+height/40+height/20*i);
		buttons[i+5].drawCheck(i);
	}
	popStyle();
};
var detectGPs = function() {
	gps = [];
	if("getGamepads" in navigator) {
		if(navigator.getGamepads()[0] !== undefined) {
			hasGPs = true;
			for(var i = 0; i < navigator.getGamepads().length; i++) {
				if(navigator.getGamepads()[i] !== null) {
					gps.push(navigator.getGamepads()[i]);
				}
			}
		}else {
			hasGPs = false;
		}
	}
};
var updatePAxes = function() {
	for(var i = 0; i < gps.length; i++) {
		for(var j = 0; j < gps[i].axes.length; j++) {
			pAxes[i][j] = gps[i].axes[j];
		}
	}
};
var drawGPs = function() {
	pushStyle();
	textAlign(CENTER, CENTER);
	if(gps.length > 0) {
		for(var i = 0; i < gps.length; i++) {
			text(gps[i].id, width/10, height*13/20+i*height/20);
		}
	}else {
		text("No Joystick Connected", width/10, height*13/20);
	}
	popStyle();
};
var interaction = function() {
	buttons[0].actionRound(0);
	buttons[1].actionScrollBar(16);
	buttons[2].actionRound2(1);
	buttons[3].actionMenu();
	if(modsMenu) {
		for(var i = 0; i < mods.length/2; i++) {
			buttons[i+5].actionCheck(i);
		}
	}
};
var preparation = function() {
	buttons = [];
	buttons.push(new EOCbutton("MODS", width/10, height/10, width/7, height/30));
	buttons.push(new EOCbutton("", 9.001*width/10, height/10, width/100, height*4/5));
	buttons.push(new EOCbutton(name, width*3/5, height/20, width/2, height/30));
	buttons.push(new EOCbutton("", 3*width/10, height/10, width*6/10, height*8/10));
	buttons.push(new EOCbutton("Joysticks", width/10, height*3/5, width/7, height/30));
	for(var i = 0; i < mods.length/2; i++) {
		buttons.push(new EOCbutton("X", 3*width/20+width/100, height/6+height/40+height/20*i, width/100, width/100));
	}
};
var returnControlTitle = function(k) {
	for(var i = 0; i < controlsTitle.length; i++) {
		if(controlsTitle[i][0] === k) {
			controlsActive = false;
			return controlsTitle[i][1];
		}
	}
};
var edit = function() {
	if(nameActive) {
		onkeydown = function() {
			var charCode = event.keyCode;
			if(charCode === 8) {
				name = name.slice(0, name.length-1);
			}
		};
		keyPressed = function() {
			var charCode = key;
			var charStr = String.fromCharCode(charCode);
			if((keyCode >= 65 && keyCode <= 90) || (charStr === "_")) {
				name += charStr;
			}
		};
	}else if(controlsActive) {
		onkeydown = function() {
			if(event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 27) {
				controls[controlActive] = returnControlTitle(event.keyCode);
			}
		};
		keyPressed = function() {
			if(keyCode === 17 || keyCode === 18) {
				if(event.location === 1) {
					controls[controlActive] = returnControlTitle(keyCode+300);
				}else {
					controls[controlActive] = returnControlTitle(keyCode+400);
				}
			}else if(keyCode === 10) {
				if(event.location === 0) {
					controls[controlActive] = returnControlTitle(keyCode+300);
				}else {
					controls[controlActive] = returnControlTitle(keyCode+400);
				}
			} else if(keyCode === 16) {
				if(shiftData[controlActive] === "") {
					shiftData[controlActive] = "SHIFT";
				}else {
					shiftData[controlActive] = "";
				}
			} else {
				controls[controlActive] = returnControlTitle(keyCode);
			}
		};
		mousePressed = function() {
			controls[controlActive] = returnControlTitle(900+event.which);
		};
		if(mouseX!==pmouseX) {
			controls[controlActive] = returnControlTitle(800);
		}else if(mouseY!==pmouseY) {
			controls[controlActive] = returnControlTitle(801);
		}/*else if(mouseZ!==pmouseZ) {
			controls[controlActive] = returnControlTitle(802);
		}*/
		if(hasGPs) {
			for(var i = 0; i < gps.length; i++) {
				for(var j = 0; j < gps[i].buttons.length; j++) {
					if(gps[i].buttons[j].pressed) {
						controllerData[controlActive] = "Joystick" + (i+1);
						controls[controlActive] = "JoyButton" + (j+1);
						controlsActive = false;
					}
				}
				for(var j = 0; j < gps[i].axes.length; j++) {
					if(gps[i].axes[j] <= pAxes[i][j]-0.1 || gps[i].axes[j] 	>= pAxes[i][j]+0.1) {
						controllerData[controlActive] = "Joystick" + (i+1);
						println(j);
						controls[controlActive] = returnControlTitle(1000+j*2+ceil(gps[i].axes[j]));
						controlsActive = false;
					}
				}
			}
		}
	}else {
		onkeydown = function() {};
		keyPressed = function() {};
	}
};
}
{//data
var name = "customkeyboard";
var defineControllerData = function() {
controllerData = ["Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Mouse","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Mouse","Keyboard","Mouse","Mouse","Mouse","Mouse","Mouse","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Mouse","Mouse","Mouse","Mouse","Mouse","Mouse","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard","Keyboard"];
};
defineControllerData();
var defineControls = function() {
controls = [
"F12",
"Pause",
"P",
"Escape",
"Escape",
"Left",
"Up",
"Right",
"Down",
"Escape",
"MouseButton2",
"Return",
"NumPadReturn",
"Backspace",
"NumPad4",
"NumPad6",
"NumPad2",
"NumPad8",
"NumPad1",
"NumPad3",
"Equals",
"NumPadPlus",
"Minus",
"NumPadMinus",
"D",
"A",
"",
"",
"W",
"S",
"LeftControl",
"NumPad5",
"N",
"Space",
"I",
"X",
"Z",
"F",
"L",
"U",
"Comma",
"Dot",
"Home",
"End",
"R",
"T",
"Q",
"Y",
"E",
"C",
"RightBracket",
"Return",
"Backspace",
"Left",
"Right",
"Down",
"Up",
"F5",
"F6",
"F7",
"F8",
"F9",
"R",
"F1",
"F2",
"F3",
"F4",
"F11",
"NumPad6",
"NumPad4",
"NumPad8",
"NumPad2",
"NumPad7",
"NumPad9",
"NumPadPlus",
"NumPadMinus",
"MouseButton3",
"NumPadStar",
"MouseXAxis",
"MouseYAxis",
"MouseZAxis",
"MouseButton2",
"MouseButton1",
"Space",
"Pause",
"P",
"Space",
"Escape",
"Return",
"Left",
"Right",
"Up",
"Down",
"Return",
"Backspace",
"O",
"M",
"L",
"E",
"S",
"Up",
"Down",
"Space",
"Return",
"Delete",
"MouseAbsXAxis",
"MouseAbsYAxis",
"MouseZAxis",
"MouseButton1",
"MouseButton2",
"MouseButton3",
"J",
"Space",
"1",
"2",
"3",
"4",
"5",
"6",
"0",
"7",
"8",
"9",
"Tab",
"Backquote",
"Backquote",
"1",
"2",
"3",
"4"
];
};
defineControls();
var defineShiftData = function() {
shiftData = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",", SHIFT",", SHIFT",", SHIFT",", SHIFT","","","","","",", SHIFT","","","","","",", SHIFT",", SHIFT",", SHIFT",", SHIFT",", SHIFT",", SHIFT",", SHIFT",", SHIFT","",", SHIFT","","","","","","","","","","","","","","","","","",", SHIFT",", SHIFT",", SHIFT",", SHIFT",", SHIFT","","","","","","","","","","","","","","","","","","","","","","","","","",", SHIFT",", SHIFT",", SHIFT",", SHIFT",", SHIFT"];
};
defineShiftData();
var defineTextT = function() {
textt = [
";",
"; (c) 1999-2001 Particle Systems Ltd. All Rights Reserved",
";",
"; configs/default.ini",
";",
"; Independence War II input bindings for users without joysticks.",
";",
"; Revision control information:",
";",
"; $Header: /iwar2/configs_release/" + name + ".ini 3     26/04/01 13:50 Steve $",
";",

"[Properties]",
"name=" + name,

";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
"; I-War II developer mode commands",
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",

"[fcGraphicsDeviceD3D.TakeScreenShot]",
controllerData[0] + ", " + controls[0] + shiftData[0],

";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
"; I-War II shell commands",
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",

"[SpaceFlight.Pause]",
controllerData[1] + ", " + controls[1] + shiftData[1],
controllerData[2] + ", " + controls[2] + shiftData[2],

"[SpaceFlight.PDA]",
controllerData[3] + ", " + controls[3] + shiftData[3],

"[Options.Leave]",
controllerData[4] + ", " + controls[4] + shiftData[4],

"[GUI.ControlFocusLeft]",
controllerData[5] + ", " + controls[5] + shiftData[5],

"[GUI.ControlFocusUp]",
controllerData[6] + ", " + controls[6] + shiftData[6],

"[GUI.ControlFocusRight]",
controllerData[7] + ", " + controls[7] + shiftData[7],

"[GUI.ControlFocusDown]",
controllerData[8] + ", " + controls[8] + shiftData[8],

"[GUI.ControlFocusCancel]",
controllerData[9] + ", " + controls[9] + shiftData[9],
controllerData[10] + ", " + controls[10] + shiftData[10],

"[GUI.ControlFocusSelect]",
controllerData[11] + ", " + controls[11] + shiftData[11],
controllerData[12] + ", " + controls[12] + shiftData[12],

"[GUI.HTMLBack]",
controllerData[13] + ", " + controls[13] + shiftData[13],

";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
"; I-War II in-flight commands",
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",

"; Yoke",

"[icPlayerPilot.Yaw]",
controllerData[14] + ", " + controls[14] + shiftData[14] + ", inverse",
controllerData[15] + ", " + controls[15] + shiftData[15],


"[icPlayerPilot.Pitch]",
controllerData[16] + ", " + controls[16] + shiftData[16] + ", inverse",
controllerData[17] + ", " + controls[17] + shiftData[17],


"[icPlayerPilot.Roll]",
controllerData[18] + ", " + controls[18] + shiftData[18] + ",inverse",
controllerData[19] + ", " + controls[19] + shiftData[19],

"; Throttle",

"[icPlayerPilot.Throttle]",

"[icPlayerPilot.ThrottleDelta]",
controllerData[20] + ", " + controls[20] + shiftData[20],
controllerData[21] + ", " + controls[21] + shiftData[21],
controllerData[22] + ", " + controls[22] + shiftData[22] + ", inverse",
controllerData[23] + ", " + controls[23] + shiftData[23] + ", inverse",

";  Thrusters",

"[icPlayerPilot.LateralX]",
controllerData[24] + ", " + controls[24] + shiftData[24],
controllerData[25] + ", " + controls[25] + shiftData[25] + ", inverse",

"[icPlayerPilot.LateralY]",
controllerData[26] + ", " + controls[26] + shiftData[26],
controllerData[27] + ", " + controls[27] + shiftData[27] + ", inverse",

"[icPlayerPilot.LateralZ]",
controllerData[28] + ", " + controls[28] + shiftData[28],
controllerData[29] + ", " + controls[29] + shiftData[29] + ", inverse",

"; Fly-by-wire modes",

"[icPlayerPilot.FreeHold]",
controllerData[30] + ", " + controls[30] + shiftData[30],
controllerData[31] + ", " + controls[31] + shiftData[31],

"[icPlayerPilot.FreeToggle]",
controllerData[32] + ", " + controls[32] + shiftData[32],

"; Fire control",

"[icPlayerPilot.CurrentWeaponFire]",
controllerData[33] + ", " + controls[33] + shiftData[33],

"[icPlayerPilot.LDSIQuickFire]",
controllerData[34] + ", " + controls[34] + shiftData[34],

"[icPlayerPilot.ToggleAimAssist]",
controllerData[35] + ", " + controls[35] + shiftData[35],

"[icPlayerPilot.ToggleZoom]",
controllerData[36] + ", " + controls[36] + shiftData[36],

"[icPlayerPilot.ToggleWeaponLinkingMode]",
controllerData[37] + ", " + controls[37] + shiftData[37],

"; LDS drive",

"[icPlayerPilot.ToggleLDS]",
controllerData[38] + ", " + controls[38] + shiftData[38],

"; Docking",

"[icPlayerPilot.Undock]",
controllerData[39] + ", " + controls[39] + shiftData[39],

"; Targetting",

"[icPlayerPilot.CycleContactUp]",
controllerData[40] + ", " + controls[40] + shiftData[40],

"[icPlayerPilot.CycleContactDown]",
controllerData[41] + ", " + controls[41] + shiftData[41],

"[icPlayerPilot.CycleContactTop]",
controllerData[42] + ", " + controls[42] + shiftData[42],

"[icPlayerPilot.CycleContactBottom]",
controllerData[43] + ", " + controls[43] + shiftData[43],

"[icPlayerPilot.TargetNearestEnemy]",
controllerData[44] + ", " + controls[44] + shiftData[44],

"[icPlayerPilot.TargetNearestShipToDirection]",
controllerData[45] + ", " + controls[45] + shiftData[45],

"[icPlayerPilot.TargetLastAggressor]",
controllerData[46] + ", " + controls[46] + shiftData[46],

"[icPlayerPilot.SubTarget]",
controllerData[47] + ", " + controls[47] + shiftData[47],

"[icPlayerPilot.CycleEnemy]",
controllerData[48] + ", " + controls[48] + shiftData[48],

"[icPlayerPilot.CycleCritical]",
controllerData[49] + ", " + controls[49] + shiftData[49],

"; Weapon cycling",

"[icPlayerPilot.NextWeapon]",
controllerData[50] + ", " + controls[50] + shiftData[50],

"[icPlayerPilot.NextPrimaryWeapon]",
controllerData[51] + ", " + controls[51] + shiftData[51],

"[icPlayerPilot.NextSecondaryWeapon]",
controllerData[52] + ", " + controls[52] + shiftData[52],

"; Engineering",

"[icPlayerPilot.PowerToOffensive]",
controllerData[53] + ", " + controls[53] + shiftData[53],

"[icPlayerPilot.PowerToDefensive]",
controllerData[54] + ", " + controls[54] + shiftData[54],

"[icPlayerPilot.PowerToDrive]",
controllerData[55] + ", " + controls[55] + shiftData[55],

"[icPlayerPilot.BalancePower]",
controllerData[56] + ", " + controls[56] + shiftData[56],

"; Autopilots",

"[icPlayerPilot.AutopilotOff]",
controllerData[57] + ", " + controls[57] + shiftData[57],

"[icPlayerPilot.AutopilotApproach]",
controllerData[58] + ", " + controls[58] + shiftData[58],

"[icPlayerPilot.AutopilotFormate]",
controllerData[59] + ", " + controls[59] + shiftData[59],

"[icPlayerPilot.AutopilotDock]",
controllerData[60] + ", " + controls[60] + shiftData[60],

"[icPlayerPilot.AutopilotMatchVelocity]",
controllerData[61] + ", " + controls[61] + shiftData[61],

"[icPlayerPilot.RemotePilot]",
controllerData[62] + ", " + controls[62] + shiftData[62],

"; Camera selection",

"[icDirector.InternalCamera]",
controllerData[63] + ", " + controls[63] + shiftData[63],

"[icDirector.TacticalCamera]",
controllerData[64] + ", " + controls[64] + shiftData[64],

"[icDirector.ExternalCamera]",
controllerData[65] + ", " + controls[65] + shiftData[65],

"[icDirector.DropCamera]",
controllerData[66] + ", " + controls[66] + shiftData[66],

"[icDirector.AutoMode]",
controllerData[67] + ", " + controls[67] + shiftData[67],

"; Camera control",

"[icDirector.Pan]",
controllerData[68] + ", " + controls[68] + shiftData[68],
controllerData[69] + ", " + controls[69] + shiftData[69] + ", inverse",

"icDirector.Tilt] ",
controllerData[70] + ", " + controls[70] + shiftData[70],
controllerData[71] + ", " + controls[71] + shiftData[71] + ", inverse",

"[icDirector.Roll]",
controllerData[72] + ", " + controls[72] + shiftData[72],
controllerData[73] + ", " + controls[73] + shiftData[73] + ", inverse",

"[icDirector.Zoom]",
controllerData[74] + ", " + controls[74] + shiftData[74] + ", inverse",
controllerData[75] + ", " + controls[75] + shiftData[75],

"[icDirector.ZoomToFit]",
controllerData[76] + ", " + controls[76] + shiftData[76],
controllerData[77] + ", " + controls[77] + shiftData[77],

"[icDirector.MouseDeltaPan]",
controllerData[78] + ", " + controls[78] + shiftData[78] + ", inverse",

"[icDirector.MouseDeltaTilt]",
controllerData[79] + ", " + controls[79] + shiftData[79],

"[icDirector.MouseDeltaZoom]",
controllerData[80] + ", " + controls[80] + shiftData[80] + ", inverse",

"[icDirector.MouseRollModifier]",
controllerData[81] + ", " + controls[81] + shiftData[81],

"[icDirector.MouseZoomModifier]",
controllerData[82] + ", " + controls[82] + shiftData[82],

"[icDirector.Skip]",
controllerData[83] + ", " + controls[83] + shiftData[83],

"; Game controls",

"[Game.PauseSimulation]",
controllerData[84] + ", " + controls[84] + shiftData[84],
controllerData[85] + ", " + controls[85] + shiftData[85],

"[Game.MovieSkip]",
controllerData[86] + ", " + controls[86] + shiftData[86],
controllerData[87] + ", " + controls[87] + shiftData[87],
controllerData[88] + ", " + controls[88] + shiftData[88],

"; PDA control",

";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
"; iWar2 HUD commands",
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",

"[HUD.MenuLeft]",
controllerData[89] + ", " + controls[89] + shiftData[89],

"[HUD.MenuRight]",
controllerData[90] + ", " + controls[90] + shiftData[90],

"[HUD.MenuUp]",
controllerData[91] + ", " + controls[91] + shiftData[91],

"[HUD.MenuDown]",
controllerData[92] + ", " + controls[92] + shiftData[92],

"[HUD.MenuSelect]",
controllerData[93] + ", " + controls[93] + shiftData[93],

"[HUD.MenuCancel]",
controllerData[94] + ", " + controls[94] + shiftData[94],

"[HUD.Objectives]",
controllerData[95] + ", " + controls[95] + shiftData[95],

"[HUD.Starmap]",
controllerData[96] + ", " + controls[96] + shiftData[96],

"[HUD.Log]",
controllerData[97] + ", " + controls[97] + shiftData[97],

"[HUD.Engineering]",
controllerData[98] + ", " + controls[98] + shiftData[98],

"[HUD.Statistics]",
controllerData[99] + ", " + controls[99] + shiftData[99],

";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
"; iWar2 comms commands",
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",

"[icComms.PrevResponse]",
controllerData[100] + ", " + controls[100] + shiftData[100],

"[icComms.NextResponse]",
controllerData[101] + ", " + controls[101] + shiftData[101],

"[icComms.SayResponse]",
controllerData[102] + ", " + controls[102] + shiftData[102],
controllerData[103] + ", " + controls[103] + shiftData[103],

"[icComms.SkipPhrase]",
controllerData[104] + ", " + controls[104] + shiftData[104],

";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
"; Generic Flux input commands.",
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",

"[PointerX]",
controllerData[105] + ", " + controls[105] + shiftData[105],

"[PointerY]",
controllerData[106] + ", " + controls[106] + shiftData[106],

"[PointerZ]",
controllerData[107] + ", " + controls[107] + shiftData[107],

"[PointerButton1]",
controllerData[108] + ", " + controls[108] + shiftData[108],

"[PointerButton2]",
controllerData[109] + ", " + controls[109] + shiftData[109],

"[PointerButton3]",
controllerData[110] + ", " + controls[110] + shiftData[110],


"; Script Bindings ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",

"[ScriptKeys.StartJafsScript]",
controllerData[111] + ", " + controls[111] + shiftData[111],

"; Cutscene accessor",

"[ScriptKeys.SkipCutscene]",
controllerData[112] + ", " + controls[112] + shiftData[112],

"; Wingmen Commands ",

"[ScriptKeys.WingmenReportStatus]",
controllerData[113] + ", " + controls[113] + shiftData[113],

"[ScriptKeys.WingmenDefendPlayer]",
controllerData[114] + ", " + controls[114] + shiftData[114],

"[ScriptKeys.WingmenAttackTarget]",
controllerData[115] + ", " + controls[115] + shiftData[115],

"[ScriptKeys.WingmenDefendTarget]",
controllerData[116] + ", " + controls[116] + shiftData[116],

"[ScriptKeys.WingmenDockToTarget]",
controllerData[117] + ", " + controls[117] + shiftData[117],

"[ScriptKeys.WingmenHalt]",
controllerData[118] + ", " + controls[118] + shiftData[118],


"; T-Fighter Commands",

"[ScriptKeys.TFighterAttachDetach]",
controllerData[119] + ", " + controls[119] + shiftData[119],

"[ScriptKeys.TFighterCeaseFire]",
controllerData[120] + ", " + controls[120] + shiftData[120],

"[ScriptKeys.TFighterAttackTarget]",
controllerData[121] + ", " + controls[121] + shiftData[121],

"[ScriptKeys.TFighterFireAtWill]",
controllerData[122] + ", " + controls[122] + shiftData[122],

"; Multiplayer Commands",

"[Multiplayer.Score]",
controllerData[123] + ", " + controls[123] + shiftData[123],

"[ScriptKeys.MultiplayerSay]",
controllerData[124] + ", " + controls[124] + shiftData[124],

"[ScriptKeys.MultiplayerTeamSay]",
controllerData[125] + ", " + controls[125] + shiftData[125],

"[ScriptKeys.MultiplayerAutoTaunt1]",
controllerData[126] + ", " + controls[126] + shiftData[126],

"[ScriptKeys.MultiplayerAutoTaunt2]",
controllerData[127] + ", " + controls[127] + shiftData[127],

"[ScriptKeys.MultiplayerAutoTaunt3]",
controllerData[128] + ", " + controls[128] + shiftData[128],

"[ScriptKeys.MultiplayerAutoTaunt4]",
controllerData[129] + ", " + controls[129] + shiftData[129],

";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",

"; Cheat keys",

"; :-)",

"; EOF ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"


];
};
defineTextT();
}
{//objects
var EOCbutton = function(t, x, y, w, h) {
	this.t = t;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
};
EOCbutton.prototype.drawRound = function(i) {
	pushStyle();
	stroke(colors[0]);
	fill(colors[0], 30*buttonHovers[i]);
	rectMode(CENTER, CENTER);
	rect(this.x, this.y, this.w, this.h, 15);
	fill(colors[0]);
	textAlign(CENTER, CENTER);
	text(this.t, this.x, this.y);
	popStyle();
};
EOCbutton.prototype.drawCheck = function(i) {
	pushStyle();
	rectMode(CENTER);
	noFill();
	rect(this.x, this.y, this.w, this.h);
	if(mods[i*2+1] === true) {
		textAlign(CENTER, CENTER);
		text(this.t, this.x+1, this.y+1);
	}
	popStyle();
};
EOCbutton.prototype.drawScrollBar = function(t, n) {
	pushStyle();
	noFill();
	rect(this.x, this.y, this.w, this.h);
	fill(colors[0]);
	triangle(this.x+this.w/4+1, this.y+this.h*197/200, this.x+this.w*3/4+1, this.y+this.h*197/200, this.x+this.w/2+1, this.y+this.h*198.5/200);
	triangle(this.x+this.w/4+1, this.y+this.h*3.5/200, this.x+this.w*3/4+1, this.y+this.h*3.5/200, this.x+this.w/2+1, this.y+this.h*2/200);
	rect(this.x, this.y+this.w+(t*(this.h-this.w*2)/controls.length), this.w, (this.h-this.w*2)*n/controls.length);
	fill(colors[0], 30);
	rect(this.x, this.y, this.w, this.w);
	rect(this.x, this.y+this.h-this.w, this.w, this.w);
	popStyle();
};
EOCbutton.prototype.actionRound = function(i) {
	if(mouseX >= this.x-this.w/2 && mouseX <= this.x+this.w/2 && mouseY >= this.y-this.h/2 && mouseY <= this.y+this.h/2) {
		if(__mousePressed) {
			modsMenu = !modsMenu;
		}
		buttonHovers[i] = 2;
	}else {
		buttonHovers[i] = 1;
	}
};
EOCbutton.prototype.actionRound2 = function(i) {
	if(mouseX >= this.x-this.w/2 && mouseX <= this.x+this.w/2 && mouseY >= this.y-this.h/2 && mouseY <= this.y+this.h/2) {
		if(__mousePressed) {
			nameActive = !nameActive;
		}
		buttonHovers[i] = 2;
	}else {
		buttonHovers[i] = 1;
	}
};
EOCbutton.prototype.actionCheck = function(i) {
	if(mouseX >= this.x-this.w/2 && mouseX <= this.x+this.w/2 && mouseY >= this.y-this.h/2 && mouseY <= this.y+this.h/2) {
		if(__mousePressed) {
			mods[i*2+1] = !mods[i*2+1];
		}
	}
};
EOCbutton.prototype.actionScrollBar = function(n) {
	if(mouseIsPressed) {
		if(mouseX >= this.x && mouseX <= this.x+this.w && mouseY >= this.y && mouseY <= this.y+this.w) {
			if(scroll1 > 0 && (buttonTimer === 0 || buttonTimer >= 15)) {
				scroll1--;
			}
			buttonTimer++;
		}else if(mouseX >= this.x && mouseX <= this.x+this.w && mouseY >= this.y+this.h-this.w && mouseY <= this.y+this.h) {
			if(scroll1 < controls.length-n && (buttonTimer === 0 || buttonTimer >= 15)) {
				scroll1++;
			}
			buttonTimer++;
		}else if(mouseX >= this.x && mouseX <= this.x+this.w && mouseY > this.y+this.w-this.w && mouseY < this.y+this.h-this.w) {
			scroll1 = constrain(floor(map(mouseY, this.y+this.w+(this.h-this.w*2)*n/controls.length/2, this.y+this.h-this.w+(this.h-this.w*2)*n/controls.length/2, 0, controls.length)), 0, controls.length-n);
		}
	}
}
EOCbutton.prototype.actionMenu = function() {
	if(mouseX >= this.x && mouseY >= this.y && mouseX <= this.x+this.w && mouseY <= this.y+this.h && mouseIsPressed) {
		controlsActive = true;
		controlActive = floor(map(mouseY, this.y, this.y+this.h, 0, 16))+scroll1;
	}
};
}
draw = function() {
	environment();
	mouseFunction();
	preparation();
	drawUI();
	if(modsMenu) {
		drawMods();
	}
	interaction();
	drawData();
	detectGPs();
	drawGPs();
	edit();
	updatePAxes();
	__mousePressed = false;
};
}};

}};
