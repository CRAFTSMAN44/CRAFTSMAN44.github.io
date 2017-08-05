var sketchProc=function(processingInstance){ with (processingInstance){
size(window.innerWidth, window.innerHeight);
frameRate(30);
{//global variables
var colors = [
	color(107, 98, 2)
];
var mode = "menu";
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
var buttonHovers = [1, 1, 1, 1, 1];
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
	buttons[5].drawRound(2);
	buttons[6].drawRound(3);
	pushStyle();
};
var drawProfile = function() {
	background(0);
	pushStyle();
	fill(colors[0], 15);
	noStroke();
	rect(0, 0, width/5, height);
	stroke(colors[0]);
	line(width/5, 0, width/5, height);
	fill(colors[0]);
	stroke(colors[0], 30);
	for(var z = 0; z < width; z+= 20) {
		line(z, 0, z, height);
	}
	for(var z = 0; z < height; z+= 20) {
		line(0, z, width, z);
	}
	stroke(colors[0]);
	drawGPsProfile();
	buttons[7].drawRound(4);
	buttons[7].actionRound5(4);
	popStyle();
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
		buttons[i+8].drawCheck(i);
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
var drawGPsProfile = function() {
	pushStyle();
	textAlign(LEFT, CENTER);
	if(gps.length > 0) {
		for(var i = 0; i < gps.length; i++) {
			text(gps[i].id, width*2*i/10+width*1/5, height/20);
			for(var j = 0; j < gps[i].buttons.length; j++) {
				if(gps[i].buttons[j].pressed) {
					var h = "pressed";
				}else {
					var h = "";
				}
				text("Button " + (j+1) + ": " + h, width*2*i/10+width*1/5, height/10+j*height/20);
			}
			for(var j = 0; j < gps[i].axes.length; j++) {
				text("Axis " + (j+1) + ": " + gps[i].axes[j], width*2*i/10+width*1/5, height/10+j*height/20+gps[i].buttons.length*height/20);
			}
		}
	}else {
		text("No Joystick Connected", width*1/5, height/20);
	}
	popStyle();
};
var interaction = function() {
	buttons[0].actionRound(0);
	buttons[1].actionScrollBar(16);
	buttons[2].actionRound2(1);
	buttons[3].actionMenu();
	buttons[5].actionRound3(2);
	buttons[6].actionRound4(3);
	if(modsMenu) {
		for(var i = 0; i < mods.length/2; i++) {
			buttons[i+8].actionCheck(i);
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
	buttons.push(new EOCbutton("Save", width/2, height*19/20, width/7, height/30));
	buttons.push(new EOCbutton("Profiles", width/10, height*19/20, width/7, height/30));
	buttons.push(new EOCbutton("Back", width/10, height*19/20, width/7, height/30));
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
var download = function(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
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
";\r\n"+
"; (c) 1999-2001 Particle Systems Ltd. All Rights Reserved\r\n"+
";\r\n"+
"; configs/default.ini\r\n"+
";\r\n"+
"; Independence War II input bindings for users without joysticks.\r\n"+
";\r\n"+
"; Revision control information:\r\n"+
";\r\n"+
"; $Header: /iwar2/configs_release/" + name + ".ini 3     26/04/01 13:50 Steve $\r\n"+
";\r\n"+
"\r\n"+
"[Properties]\r\n"+
"name=" + name + "\r\n"+
"\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"; I-War II developer mode commands\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"\r\n"+
"[fcGraphicsDeviceD3D.TakeScreenShot]\r\n"+
controllerData[0] + ", " + controls[0] + shiftData[0] + "\r\n"+
"\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"; I-War II shell commands\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"\r\n"+
"[SpaceFlight.Pause]\r\n"+
controllerData[1] + ", " + controls[1] + shiftData[1] + "\r\n"+
controllerData[2] + ", " + controls[2] + shiftData[2] + "\r\n"+
"\r\n"+
"[SpaceFlight.PDA]\r\n"+
controllerData[3] + ", " + controls[3] + shiftData[3] + "\r\n"+
"\r\n"+
"[Options.Leave]\r\n"+
controllerData[4] + ", " + controls[4] + shiftData[4] + "\r\n"+
"\r\n"+
"[GUI.ControlFocusLeft]\r\n"+
controllerData[5] + ", " + controls[5] + shiftData[5] + "\r\n"+
"\r\n"+
"[GUI.ControlFocusUp]\r\n"+
controllerData[6] + ", " + controls[6] + shiftData[6] + "\r\n"+
"\r\n"+
"[GUI.ControlFocusRight]\r\n"+
controllerData[7] + ", " + controls[7] + shiftData[7] + "\r\n"+
"\r\n"+
"[GUI.ControlFocusDown]\r\n"+
controllerData[8] + ", " + controls[8] + shiftData[8] + "\r\n"+
"\r\n"+
"[GUI.ControlFocusCancel]\r\n"+
controllerData[9] + ", " + controls[9] + shiftData[9] + "\r\n"+
controllerData[10] + ", " + controls[10] + shiftData[10] + "\r\n"+
"\r\n"+
"[GUI.ControlFocusSelect]\r\n"+
controllerData[11] + ", " + controls[11] + shiftData[11] + "\r\n"+
controllerData[12] + ", " + controls[12] + shiftData[12] + "\r\n"+
"\r\n"+
"[GUI.HTMLBack]\r\n"+
controllerData[13] + ", " + controls[13] + shiftData[13] + "\r\n"+
"\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"; I-War II in-flight commands\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"\r\n"+
"; Yoke\r\n"+
"\r\n"+
"[icPlayerPilot.Yaw]\r\n"+
controllerData[14] + ", " + controls[14] + shiftData[14] + ", inverse\r\n"+
controllerData[15] + ", " + controls[15] + shiftData[15] + "\r\n"+
"\r\n"+
"\r\n"+
"[icPlayerPilot.Pitch]\r\n"+
controllerData[16] + ", " + controls[16] + shiftData[16] + ", inverse\r\n"+
controllerData[17] + ", " + controls[17] + shiftData[17] + "\r\n"+
"\r\n"+
"\r\n"+
"[icPlayerPilot.Roll]\r\n"+
controllerData[18] + ", " + controls[18] + shiftData[18] + ",inverse\r\n"+
controllerData[19] + ", " + controls[19] + shiftData[19] + "\r\n"+
"\r\n"+
"; Throttle\r\n"+
"\r\n"+
"[icPlayerPilot.Throttle]\r\n"+
"\r\n"+
"[icPlayerPilot.ThrottleDelta]\r\n"+
controllerData[20] + ", " + controls[20] + shiftData[20] + "\r\n"+
controllerData[21] + ", " + controls[21] + shiftData[21] + "\r\n"+
controllerData[22] + ", " + controls[22] + shiftData[22] + ", inverse\r\n"+
controllerData[23] + ", " + controls[23] + shiftData[23] + ", inverse\r\n"+
"\r\n"+
";  Thrusters\r\n"+
"\r\n"+
"[icPlayerPilot.LateralX]\r\n"+
controllerData[24] + ", " + controls[24] + shiftData[24] + "\r\n"+
controllerData[25] + ", " + controls[25] + shiftData[25] + ", inverse\r\n"+
"\r\n"+
"[icPlayerPilot.LateralY]\r\n"+
controllerData[26] + ", " + controls[26] + shiftData[26] + "\r\n"+
controllerData[27] + ", " + controls[27] + shiftData[27] + ", inverse\r\n"+
"\r\n"+
"[icPlayerPilot.LateralZ]\r\n"+
controllerData[28] + ", " + controls[28] + shiftData[28] + "\r\n"+
controllerData[29] + ", " + controls[29] + shiftData[29] + ", inverse\r\n"+
"\r\n"+
"; Fly-by-wire modes\r\n"+
"\r\n"+
"[icPlayerPilot.FreeHold]\r\n"+
controllerData[30] + ", " + controls[30] + shiftData[30] + "\r\n"+
controllerData[31] + ", " + controls[31] + shiftData[31] + "\r\n"+
"\r\n"+
"[icPlayerPilot.FreeToggle]\r\n"+
controllerData[32] + ", " + controls[32] + shiftData[32] + "\r\n"+
"\r\n"+
"; Fire control\r\n"+
"\r\n"+
"[icPlayerPilot.CurrentWeaponFire]\r\n"+
controllerData[33] + ", " + controls[33] + shiftData[33] + "\r\n"+
"\r\n"+
"[icPlayerPilot.LDSIQuickFire]\r\n"+
controllerData[34] + ", " + controls[34] + shiftData[34] + "\r\n"+
"\r\n"+
"[icPlayerPilot.ToggleAimAssist]\r\n"+
controllerData[35] + ", " + controls[35] + shiftData[35] + "\r\n"+
"\r\n"+
"[icPlayerPilot.ToggleZoom]\r\n"+
controllerData[36] + ", " + controls[36] + shiftData[36] + "\r\n"+
"\r\n"+
"[icPlayerPilot.ToggleWeaponLinkingMode]\r\n"+
controllerData[37] + ", " + controls[37] + shiftData[37] + "\r\n"+
"\r\n"+
"; LDS drive\r\n"+
"\r\n"+
"[icPlayerPilot.ToggleLDS]\r\n"+
controllerData[38] + ", " + controls[38] + shiftData[38] + "\r\n"+
"\r\n"+
"; Docking\r\n"+
"\r\n"+
"[icPlayerPilot.Undock]\r\n"+
controllerData[39] + ", " + controls[39] + shiftData[39] + "\r\n"+
"\r\n"+
"; Targetting\r\n"+
"\r\n"+
"[icPlayerPilot.CycleContactUp]\r\n"+
controllerData[40] + ", " + controls[40] + shiftData[40] + "\r\n"+
"\r\n"+
"[icPlayerPilot.CycleContactDown]\r\n"+
controllerData[41] + ", " + controls[41] + shiftData[41] + "\r\n"+
"\r\n"+
"[icPlayerPilot.CycleContactTop]\r\n"+
controllerData[42] + ", " + controls[42] + shiftData[42] + "\r\n"+
"\r\n"+
"[icPlayerPilot.CycleContactBottom]\r\n"+
controllerData[43] + ", " + controls[43] + shiftData[43] + "\r\n"+
"\r\n"+
"[icPlayerPilot.TargetNearestEnemy]\r\n"+
controllerData[44] + ", " + controls[44] + shiftData[44] + "\r\n"+
"\r\n"+
"[icPlayerPilot.TargetNearestShipToDirection]\r\n"+
controllerData[45] + ", " + controls[45] + shiftData[45] + "\r\n"+
"\r\n"+
"[icPlayerPilot.TargetLastAggressor]\r\n"+
controllerData[46] + ", " + controls[46] + shiftData[46] + "\r\n"+
"\r\n"+
"[icPlayerPilot.SubTarget]\r\n"+
controllerData[47] + ", " + controls[47] + shiftData[47] + "\r\n"+
"\r\n"+
"[icPlayerPilot.CycleEnemy]\r\n"+
controllerData[48] + ", " + controls[48] + shiftData[48] + "\r\n"+
"\r\n"+
"[icPlayerPilot.CycleCritical]\r\n"+
controllerData[49] + ", " + controls[49] + shiftData[49] + "\r\n"+
"\r\n"+
"; Weapon cycling\r\n"+
"\r\n"+
"[icPlayerPilot.NextWeapon]\r\n"+
controllerData[50] + ", " + controls[50] + shiftData[50] + "\r\n"+
"\r\n"+
"[icPlayerPilot.NextPrimaryWeapon]\r\n"+
controllerData[51] + ", " + controls[51] + shiftData[51] + "\r\n"+
"\r\n"+
"[icPlayerPilot.NextSecondaryWeapon]\r\n"+
controllerData[52] + ", " + controls[52] + shiftData[52] + "\r\n"+
"\r\n"+
"; Engineering\r\n"+
"\r\n"+
"[icPlayerPilot.PowerToOffensive]\r\n"+
controllerData[53] + ", " + controls[53] + shiftData[53] + "\r\n"+
"\r\n"+
"[icPlayerPilot.PowerToDefensive]\r\n"+
controllerData[54] + ", " + controls[54] + shiftData[54] + "\r\n"+
"\r\n"+
"[icPlayerPilot.PowerToDrive]\r\n"+
controllerData[55] + ", " + controls[55] + shiftData[55] + "\r\n"+
"\r\n"+
"[icPlayerPilot.BalancePower]\r\n"+
controllerData[56] + ", " + controls[56] + shiftData[56] + "\r\n"+
"\r\n"+
"; Autopilots\r\n"+
"\r\n"+
"[icPlayerPilot.AutopilotOff]\r\n"+
controllerData[57] + ", " + controls[57] + shiftData[57] + "\r\n"+
"\r\n"+
"[icPlayerPilot.AutopilotApproach]\r\n"+
controllerData[58] + ", " + controls[58] + shiftData[58] + "\r\n"+
"\r\n"+
"[icPlayerPilot.AutopilotFormate]\r\n"+
controllerData[59] + ", " + controls[59] + shiftData[59] + "\r\n"+
"\r\n"+
"[icPlayerPilot.AutopilotDock]\r\n"+
controllerData[60] + ", " + controls[60] + shiftData[60] + "\r\n"+
"\r\n"+
"[icPlayerPilot.AutopilotMatchVelocity]\r\n"+
controllerData[61] + ", " + controls[61] + shiftData[61] + "\r\n"+
"\r\n"+
"[icPlayerPilot.RemotePilot]\r\n"+
controllerData[62] + ", " + controls[62] + shiftData[62] + "\r\n"+
"\r\n"+
"; Camera selection\r\n"+
"\r\n"+
"[icDirector.InternalCamera]\r\n"+
controllerData[63] + ", " + controls[63] + shiftData[63] + "\r\n"+
"\r\n"+
"[icDirector.TacticalCamera]\r\n"+
controllerData[64] + ", " + controls[64] + shiftData[64] + "\r\n"+
"\r\n"+
"[icDirector.ExternalCamera]\r\n"+
controllerData[65] + ", " + controls[65] + shiftData[65] + "\r\n"+
"\r\n"+
"[icDirector.DropCamera]\r\n"+
controllerData[66] + ", " + controls[66] + shiftData[66] + "\r\n"+
"\r\n"+
"[icDirector.AutoMode]\r\n"+
controllerData[67] + ", " + controls[67] + shiftData[67] + "\r\n"+
"\r\n"+
"; Camera control\r\n"+
"\r\n"+
"[icDirector.Pan]\r\n"+
controllerData[68] + ", " + controls[68] + shiftData[68] + "\r\n"+
controllerData[69] + ", " + controls[69] + shiftData[69] + ", inverse\r\n"+
"\r\n"+
"icDirector.Tilt]\r\n"+
controllerData[70] + ", " + controls[70] + shiftData[70] + "\r\n"+
controllerData[71] + ", " + controls[71] + shiftData[71] + ", inverse\r\n"+
"\r\n"+
"[icDirector.Roll]\r\n"+
controllerData[72] + ", " + controls[72] + shiftData[72] + "\r\n"+
controllerData[73] + ", " + controls[73] + shiftData[73] + ", inverse\r\n"+
"\r\n"+
"[icDirector.Zoom]\r\n"+
controllerData[74] + ", " + controls[74] + shiftData[74] + ", inverse\r\n"+
controllerData[75] + ", " + controls[75] + shiftData[75] + "\r\n"+
"\r\n"+
"[icDirector.ZoomToFit]\r\n"+
controllerData[76] + ", " + controls[76] + shiftData[76] + "\r\n"+
controllerData[77] + ", " + controls[77] + shiftData[77] + "\r\n"+
"\r\n"+
"[icDirector.MouseDeltaPan]\r\n"+
controllerData[78] + ", " + controls[78] + shiftData[78] + ", inverse\r\n"+
"\r\n"+
"[icDirector.MouseDeltaTilt]\r\n"+
controllerData[79] + ", " + controls[79] + shiftData[79] + "\r\n"+
"\r\n"+
"[icDirector.MouseDeltaZoom]\r\n"+
controllerData[80] + ", " + controls[80] + shiftData[80] + ", inverse\r\n"+
"\r\n"+
"[icDirector.MouseRollModifier]\r\n"+
controllerData[81] + ", " + controls[81] + shiftData[81] + "\r\n"+
"\r\n"+
"[icDirector.MouseZoomModifier]\r\n"+
controllerData[82] + ", " + controls[82] + shiftData[82] + "\r\n"+
"\r\n"+
"[icDirector.Skip]\r\n"+
controllerData[83] + ", " + controls[83] + shiftData[83] + "\r\n"+
"\r\n"+
"; Game controls\r\n"+
"\r\n"+
"[Game.PauseSimulation]\r\n"+
controllerData[84] + ", " + controls[84] + shiftData[84] + "\r\n"+
controllerData[85] + ", " + controls[85] + shiftData[85] + "\r\n"+
"\r\n"+
"[Game.MovieSkip]\r\n"+
controllerData[86] + ", " + controls[86] + shiftData[86] + "\r\n"+
controllerData[87] + ", " + controls[87] + shiftData[87] + "\r\n"+
controllerData[88] + ", " + controls[88] + shiftData[88] + "\r\n"+
"\r\n"+
"; PDA control\r\n"+
"\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"; iWar2 HUD commands\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"\r\n"+
"[HUD.MenuLeft]\r\n"+
controllerData[89] + ", " + controls[89] + shiftData[89] + "\r\n"+
"\r\n"+
"[HUD.MenuRight]\r\n"+
controllerData[90] + ", " + controls[90] + shiftData[90] + "\r\n"+
"\r\n"+
"[HUD.MenuUp]\r\n"+
controllerData[91] + ", " + controls[91] + shiftData[91] + "\r\n"+
"\r\n"+
"[HUD.MenuDown]\r\n"+
controllerData[92] + ", " + controls[92] + shiftData[92] + "\r\n"+
"\r\n"+
"[HUD.MenuSelect]\r\n"+
controllerData[93] + ", " + controls[93] + shiftData[93] + "\r\n"+
"\r\n"+
"[HUD.MenuCancel]\r\n"+
controllerData[94] + ", " + controls[94] + shiftData[94] + "\r\n"+
"\r\n"+
"[HUD.Objectives]\r\n"+
controllerData[95] + ", " + controls[95] + shiftData[95] + "\r\n"+
"\r\n"+
"[HUD.Starmap]\r\n"+
controllerData[96] + ", " + controls[96] + shiftData[96] + "\r\n"+
"\r\n"+
"[HUD.Log]\r\n"+
controllerData[97] + ", " + controls[97] + shiftData[97] + "\r\n"+
"\r\n"+
"[HUD.Engineering]\r\n"+
controllerData[98] + ", " + controls[98] + shiftData[98] + "\r\n"+
"\r\n"+
"[HUD.Statistics]\r\n"+
controllerData[99] + ", " + controls[99] + shiftData[99] + "\r\n"+
"\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"; iWar2 comms commands\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"\r\n"+
"[icComms.PrevResponse]\r\n"+
controllerData[100] + ", " + controls[100] + shiftData[100] + "\r\n"+
"\r\n"+
"[icComms.NextResponse]\r\n"+
controllerData[101] + ", " + controls[101] + shiftData[101] + "\r\n"+
"\r\n"+
"[icComms.SayResponse]\r\n"+
controllerData[102] + ", " + controls[102] + shiftData[102] + "\r\n"+
controllerData[103] + ", " + controls[103] + shiftData[103] + "\r\n"+
"\r\n"+
"[icComms.SkipPhrase]\r\n"+
controllerData[104] + ", " + controls[104] + shiftData[104] + "\r\n"+
"\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"; Generic Flux input commands.\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"\r\n"+
"[PointerX]\r\n"+
controllerData[105] + ", " + controls[105] + shiftData[105] + "\r\n"+
"\r\n"+
"[PointerY]\r\n"+
controllerData[106] + ", " + controls[106] + shiftData[106] + "\r\n"+
"\r\n"+
"[PointerZ]\r\n"+
controllerData[107] + ", " + controls[107] + shiftData[107] + "\r\n"+
"\r\n"+
"[PointerButton1]\r\n"+
controllerData[108] + ", " + controls[108] + shiftData[108] + "\r\n"+
"\r\n"+
"[PointerButton2]\r\n"+
controllerData[109] + ", " + controls[109] + shiftData[109] + "\r\n"+
"\r\n"+
"[PointerButton3]\r\n"+
controllerData[110] + ", " + controls[110] + shiftData[110] + "\r\n"+
"\r\n"+
"\r\n"+
"; Script Bindings ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"\r\n"+
"[ScriptKeys.StartJafsScript]\r\n "+
controllerData[111] + ", " + controls[111] + shiftData[111] + "\r\n"+
"\r\n"+
"; Cutscene accessor\r\n"+
"\r\n"+
"[ScriptKeys.SkipCutscene]\r\n"+
controllerData[112] + ", " + controls[112] + shiftData[112] + "\r\n"+
"\r\n"+
"; Wingmen Commands\r\n"+
"\r\n"+
"[ScriptKeys.WingmenReportStatus]\r\n"+
controllerData[113] + ", " + controls[113] + shiftData[113] + "\r\n"+
"\r\n"+
"[ScriptKeys.WingmenDefendPlayer]\r\n"+
controllerData[114] + ", " + controls[114] + shiftData[114] + "\r\n"+
"\r\n"+
"[ScriptKeys.WingmenAttackTarget]\r\n"+
controllerData[115] + ", " + controls[115] + shiftData[115] + "\r\n"+
"\r\n"+
"[ScriptKeys.WingmenDefendTarget]\r\n"+
controllerData[116] + ", " + controls[116] + shiftData[116] + "\r\n"+
"\r\n"+
"[ScriptKeys.WingmenDockToTarget]\r\n"+
controllerData[117] + ", " + controls[117] + shiftData[117] + "\r\n"+
"\r\n"+
"[ScriptKeys.WingmenHalt]\r\n"+
controllerData[118] + ", " + controls[118] + shiftData[118] + "\r\n"+
"\r\n"+
"\r\n"+
"; T-Fighter Commands\r\n"+
"\r\n"+
"[ScriptKeys.TFighterAttachDetach]\r\n"+
controllerData[119] + ", " + controls[119] + shiftData[119] + "\r\n"+
"\r\n"+
"[ScriptKeys.TFighterCeaseFire]\r\n"+
controllerData[120] + ", " + controls[120] + shiftData[120] + "\r\n"+
"\r\n"+
"[ScriptKeys.TFighterAttackTarget]\r\n"+
controllerData[121] + ", " + controls[121] + shiftData[121] + "\r\n"+
"\r\n"+
"[ScriptKeys.TFighterFireAtWill]\r\n"+
controllerData[122] + ", " + controls[122] + shiftData[122] + "\r\n"+
"\r\n"+
"; Multiplayer Commands\r\n"+
"\r\n"+
"[Multiplayer.Score]\r\n"+
controllerData[123] + ", " + controls[123] + shiftData[123] + "\r\n"+
"\r\n"+
"[ScriptKeys.MultiplayerSay]\r\n"+
controllerData[124] + ", " + controls[124] + shiftData[124] + "\r\n"+
"\r\n"+
"[ScriptKeys.MultiplayerTeamSay]\r\n"+
controllerData[125] + ", " + controls[125] + shiftData[125] + "\r\n"+
"\r\n"+
"[ScriptKeys.MultiplayerAutoTaunt1]\r\n"+
controllerData[126] + ", " + controls[126] + shiftData[126] + "\r\n"+
"\r\n"+
"[ScriptKeys.MultiplayerAutoTaunt2]\r\n"+
controllerData[127] + ", " + controls[127] + shiftData[127] + "\r\n"+
"\r\n"+
"[ScriptKeys.MultiplayerAutoTaunt3]\r\n"+
controllerData[128] + ", " + controls[128] + shiftData[128] + "\r\n"+
"\r\n"+
"[ScriptKeys.MultiplayerAutoTaunt4]\r\n"+
controllerData[129] + ", " + controls[129] + shiftData[129] + "\r\n"+
"\r\n"+
";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"+
"\r\n"+
"; Cheat keys\r\n"+
"\r\n"+
"; :-)\r\n"+
"\r\n"+
"; EOF ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\r\n"
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
EOCbutton.prototype.actionRound3 = function(i) {
	if(mouseX >= this.x-this.w/2 && mouseX <= this.x+this.w/2 && mouseY >= this.y-this.h/2 && mouseY <= this.y+this.h/2) {
		if(__mousePressed) {
			defineTextT();
			download(textt, name+".ini");
		}
		buttonHovers[i] = 2;
	}else {
		buttonHovers[i] = 1;
	}
}
EOCbutton.prototype.actionRound4 = function(i) {
	if(mouseX >= this.x-this.w/2 && mouseX <= this.x+this.w/2 && mouseY >= this.y-this.h/2 && mouseY <= this.y+this.h/2) {
		if(__mousePressed) {
			mode = "profiling";
		}
		buttonHovers[i] = 2;
	}else {
		buttonHovers[i] = 1;
	}
};
EOCbutton.prototype.actionRound5 = function(i) {
	if(mouseX >= this.x-this.w/2 && mouseX <= this.x+this.w/2 && mouseY >= this.y-this.h/2 && mouseY <= this.y+this.h/2) {
		if(__mousePressed) {
			mode = "menu";
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
	if(mode === "menu") {
		drawUI();
		if(modsMenu) {
			drawMods();
		}
		interaction();
		drawData();
		drawGPs();
		detectGPs();
		edit();
		updatePAxes();
	}else {
		detectGPs();
		drawProfile();
	}
	__mousePressed = false;
};
}};