turbomath = turbomath || {};
turbomath.adventure = turbomath.adventure || {};
turbomath.adventure.__adventureName = "elementary.beta";

turbomath.adventure.getCurrentLevel = function () {
	var lvl = localStorage.getItem(this.__adventureName) || "1";
	return parseInt(lvl);
};

turbomath.adventure.grade = function (session) {
	return session.goodOnes*1 + session.badOnes*(-1) + session.skips*(0);
};
turbomath.adventure.starsEarned = function (session) {
	var grade = this.grade(session);
	//var level = this.getLevel();
	var starsEarned = 0;
	if (grade >= session.adventureLevel.passingGrade) starsEarned = 1;
	if (grade >= session.adventureLevel.passingGrade + 10) starsEarned = 2;
	if (grade >= session.adventureLevel.passingGrade + 20) starsEarned = 3;
	return starsEarned;
};

turbomath.adventure.passedLevel = function (session) {
	var grade = this.grade(session);
	//var level = this.getLevel(session.adventureLevel.level);
	var currLevel = this.getCurrentLevel();
	var passed = grade >= session.adventureLevel.passingGrade;
	if (passed) {
		var starsEarned = this.starsEarned(session);
		var prevEarned = this.getStarsEarnedInLevel(session.adventureLevel.level);
		if (starsEarned > prevEarned) {
			localStorage.setItem(this.__adventureName+session.adventureLevel.level+'StarsEarned', starsEarned);
		}
		if (session.adventureLevel.level == currLevel) {
			localStorage.setItem(this.__adventureName, currLevel + 1);
		}
	}
	return passed;
};

turbomath.adventure.getStarsEarnedInLevel = function (lvlNumber) {
	var starsEarned = localStorage.getItem(this.__adventureName+lvlNumber+'StarsEarned') || 0;
	return parseInt(starsEarned);
};


turbomath.adventure.summary = "<h2>Elementary Adventure</h2>";
turbomath.adventure.summary+= "Levels start with small numbers, and just addition. ";
turbomath.adventure.summary+= "As levels are achieved, numbers start getting bigger, and other arithmetics operations are intorduced. ";
turbomath.adventure.summary+= "Substraction starts at level 19, Addition is dropped for some levels. ";
turbomath.adventure.summary+= "Additions and Substractions are combined starting at level 31. ";
turbomath.adventure.summary+= "Multiplication joins the party at level 42. ";
turbomath.adventure.summary+= "Division then appears at level ? ";
turbomath.adventure.summary+= " ";

turbomath.adventure.totalLevels = 78;



turbomath.adventure.getLevel = function (numb) {
	
	var lvl = {};
	lvl.level = 0;
	lvl.operations = [ "+", "-", "*", "/" ];
	lvl.seconds = 120;
	lvl.difficulty = {};
	lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1,  division:1  };
	lvl.difficulty.n1max = { addition:90, subtraction:90, multiplication:20, division:20 };
	lvl.difficulty.n2min = { addition:1,  subtraction:16, multiplication:1,  division:1  };
	lvl.difficulty.n2max = { addition:90, subtraction:52, multiplication:20, division:20 };
	lvl.difficulty.level = "000";
	lvl.passingGrade = 40;

	var currLevel = this.getCurrentLevel();
	var rlvl = numb || currLevel;
	
	switch (rlvl) {
		case 1:
			lvl.level = 1;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p01.1";
			lvl.passingGrade = 40;
			break;
		case 2:
			lvl.level = 2;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:7,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p01.2";
			lvl.passingGrade = 40;
			break;
		case 3:
			lvl.level = 3;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:9,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p01.3";
			lvl.passingGrade = 40;
			break;
		case 4:
			lvl.level = 4;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:2,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:2,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p02.1";
			lvl.passingGrade = 40;
			break;
		case 5:
			lvl.level = 5;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:7,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:2,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:2,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p02.2";
			lvl.passingGrade = 40;
			break;
		case 6:
			lvl.level = 6;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:9,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:2,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:2,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p02.3";
			lvl.passingGrade = 40;
			break;
		case 7:
			lvl.level = 7;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:5,  multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:9,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.level = "m01.1";
			lvl.passingGrade = 40;
			break;
		case 8:
			lvl.level = 8;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:7,  multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.level = "m01.2";
			lvl.passingGrade = 40;
			break;
		case 9:
			lvl.level = 9;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:6,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.level = "m01.3";
			lvl.passingGrade = 40;
			break;
		case 10:
			lvl.level = 10;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:7,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.level = "m02.1";
			lvl.passingGrade = 40;
			break;
		case 11:
			lvl.level = 11;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:8,  subtraction:8,  multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.level = "m02.2";
			lvl.passingGrade = 40;
			break;
		case 12:
			lvl.level = 12;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:9,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.level = "m02.3";
			lvl.passingGrade = 40;
			break;
		case 13:
			lvl.level = 13;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:3,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:3, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p03.1";
			lvl.passingGrade = 40;
			break;
		case 14:
			lvl.level = 14;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:7, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:3,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:3, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p03.2";
			lvl.passingGrade = 40;
			break;
		case 15:
			lvl.level = 15;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:9, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:3,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:3, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p03.3";
			lvl.passingGrade = 40;
			break;
		case 16:
			lvl.level = 16;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p04.1";
			lvl.passingGrade = 40;
			break;
		case 17:
			lvl.level = 17;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:7, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p04.2";
			lvl.passingGrade = 40;
			break;
		case 18:
			lvl.level = 18;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:9, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "p04.3";
			lvl.passingGrade = 40;
			break;
		case 19:
			lvl.level = 19;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:3,  subtraction:3,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:8, subtraction:8, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:3,  subtraction:3,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:3, subtraction:3,  multiplication:1, division:1 };
			lvl.difficulty.level = "m03.1";
			lvl.passingGrade = 40;
			break;
		case 20:
			lvl.level = 20;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:3,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:3,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:3,  multiplication:1, division:1 };
			lvl.difficulty.level = "m03.2";
			lvl.passingGrade = 40;
			break;
		case 21:
			lvl.level = 21;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:3,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:12, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:3,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:3,  multiplication:1, division:1 };
			lvl.difficulty.level = "m03.3";
			lvl.passingGrade = 40;
			break;
		case 22:
			lvl.level = 22;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:9, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.level = "m04.1";
			lvl.passingGrade = 40;
			break;
		case 23:
			lvl.level = 23;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.level = "m04.2";
			lvl.passingGrade = 40;
			break;
		case 24:
			lvl.level = 24;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:13, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.level = "m04.3";
			lvl.passingGrade = 40;
			break;
		case 25:
			lvl.level = 25;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:6, subtraction:12, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1, subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4, subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.level = "n01.1";
			lvl.passingGrade = 40;
			break;
		case 26:
			lvl.level = 26;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:9, subtraction:16, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1, subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4, subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.level = "n01.2";
			lvl.passingGrade = 40;
			break;
		case 27:
			lvl.level = 27;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:12, subtraction:18, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.level = "n01.3";
			lvl.passingGrade = 40;
			break;
		case 28:
			lvl.level = 28;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:15, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.level = "n01.4";
			lvl.passingGrade = 40;
			break;
		case 29:
			lvl.level = 29;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:15, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.level = "n01.5";
			lvl.passingGrade = 40;
			break;
		case 30:
			lvl.level = 30;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:15, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.level = "n01.6";
			lvl.passingGrade = 40;
			break;
		case 31:
			lvl.level = 31;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:6, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:5, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.level = "p05.1";
			lvl.passingGrade = 40;
			break;
		case 32:
			lvl.level = 32;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:9, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:5, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.level = "p05.2";
			lvl.passingGrade = 40;
			break;
		case 33:
			lvl.level = 33;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:12, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:5, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.level = "p05.3";
			lvl.passingGrade = 40;
			break;
		case 34:
			lvl.level = 34;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:3,  subtraction:5, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:3,  subtraction:5,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:5, multiplication:1, division:1 };
			lvl.difficulty.level = "m05.1";
			lvl.passingGrade = 40;
			break;
		case 35:
			lvl.level = 35;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:3,  subtraction:5, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:12, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:5,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:5, multiplication:1, division:1 };
			lvl.difficulty.level = "m05.2";
			lvl.passingGrade = 40;
			break;
		case 36:
			lvl.level = 36;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:3,  subtraction:5, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:11, subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:5,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:12, subtraction:5, multiplication:1, division:1 };
			lvl.difficulty.level = "m05.3";
			lvl.passingGrade = 40;
			break;
		case 37:
			lvl.level = 37;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:14, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:6, subtraction:26, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:6,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:6, subtraction:14, multiplication:1, division:1 };
			lvl.difficulty.level = "p06.1";
			lvl.passingGrade = 40;
			break;
		case 38:
			lvl.level = 38;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:9, subtraction:28, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:6,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:6, subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.level = "p06.2";
			lvl.passingGrade = 40;
			break;
		case 39:
			lvl.level = 39;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:12, subtraction:29, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:6,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:6, subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.level = "p06.3";
			lvl.passingGrade = 40;
			break;
		case 40:
			lvl.level = 40;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:6,  subtraction:6, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:15, subtraction:12, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:6,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:15, subtraction:6, multiplication:1, division:1 };
			lvl.difficulty.level = "m06.1";
			lvl.passingGrade = 40;
			break;
		case 41:
			lvl.level = 41;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:6,  subtraction:6, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:15, subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:6,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:15, subtraction:6, multiplication:1, division:1 };
			lvl.difficulty.level = "m06.2";
			lvl.passingGrade = 40;
			break;
		case 42:
			lvl.level = 42;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:6,  subtraction:6, multiplication:1,  division:1 };
			lvl.difficulty.n1max = { addition:15, subtraction:18, multiplication:1,  division:1 };
			lvl.difficulty.n2min = { addition:6,  subtraction:6,  multiplication:1,  division:1 };
			lvl.difficulty.n2max = { addition:15, subtraction:6, multiplication:10, division:1 };
			lvl.difficulty.level = "m06.3";
			lvl.passingGrade = 40;
			break;
		case 43:
			lvl.level = 43;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6, multiplication:1,  division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:9, multiplication:2,  division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:4, multiplication:1,  division:1 };
			lvl.difficulty.n2max = { addition:6,  subtraction:6, multiplication:10, division:1 };
			lvl.difficulty.level = "n02.1";
			lvl.passingGrade = 40;
			break;
		case 44:
			lvl.level = 44;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6, multiplication:1,  division:1 };
			lvl.difficulty.n1max = { addition:12, subtraction:12, multiplication:3,  division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:4,  multiplication:1,  division:1 };
			lvl.difficulty.n2max = { addition:6,  subtraction:6, multiplication:10, division:1 };
			lvl.difficulty.level = "n02.2";
			lvl.passingGrade = 40;
			break;
		case 45:
			lvl.level = 45;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6, multiplication:1,  division:1 };
			lvl.difficulty.n1max = { addition:15, subtraction:15, multiplication:4,  division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:4,  multiplication:1,  division:1 };
			lvl.difficulty.n2max = { addition:6,  subtraction:6, multiplication:10, division:1 };
			lvl.difficulty.level = "n02.3";
			lvl.passingGrade = 40;
			break;
		case 46:
			lvl.level = 46;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6, multiplication:1,  division:1 };
			lvl.difficulty.n1max = { addition:16, subtraction:16, multiplication:5,  division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:4,  multiplication:1,  division:1 };
			lvl.difficulty.n2max = { addition:6,  subtraction:6, multiplication:10, division:1 };
			lvl.difficulty.level = "n02.4";
			lvl.passingGrade = 40;
			break;
		case 47:
			lvl.level = 47;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6, multiplication:1,  division:1 };
			lvl.difficulty.n1max = { addition:17, subtraction:17, multiplication:6,  division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:4,  multiplication:1,  division:1 };
			lvl.difficulty.n2max = { addition:6,  subtraction:6, multiplication:10, division:1 };
			lvl.difficulty.level = "n02.5";
			lvl.passingGrade = 40;
			break;
		case 48:
			lvl.level = 48;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6, multiplication:1,  division:1 };
			lvl.difficulty.n1max = { addition:18, subtraction:18, multiplication:7,  division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:4,  multiplication:1,  division:1 };
			lvl.difficulty.n2max = { addition:6,  subtraction:6, multiplication:10, division:1 };
			lvl.difficulty.level = "n02.6";
			lvl.passingGrade = 40;
			break;
		case 49:
			lvl.level = 49;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:15, multiplication:1,  division:1 };
			lvl.difficulty.n1max = { addition:8, subtraction:30, multiplication:8,  division:1 };
			lvl.difficulty.n2min = { addition:7, subtraction:4,  multiplication:1,  division:1 };
			lvl.difficulty.n2max = { addition:7, subtraction:15, multiplication:10, division:1 };
			lvl.difficulty.level = "p07.1";
			lvl.passingGrade = 40;
			break;
		case 50:
			lvl.level = 50;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:15, multiplication:1,  division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:30, multiplication:9,  division:1 };
			lvl.difficulty.n2min = { addition:7,  subtraction:4,  multiplication:1,  division:1 };
			lvl.difficulty.n2max = { addition:7,  subtraction:15, multiplication:10, division:1 };
			lvl.difficulty.level = "p07.2";
			lvl.passingGrade = 40;
			break;
		case 51:
			lvl.level = 51;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:15, multiplication:1,  division:1 };
			lvl.difficulty.n1max = { addition:12, subtraction:30, multiplication:10, division:1 };
			lvl.difficulty.n2min = { addition:7,  subtraction:4,  multiplication:1,  division:1 };
			lvl.difficulty.n2max = { addition:7,  subtraction:15, multiplication:10, division:1 };
			lvl.difficulty.level = "p07.3";
			lvl.passingGrade = 40;
			break;
		case 52:
			lvl.level = 52;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:6,  subtraction:7, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:15, subtraction:13, multiplication:2, division:1 };
			lvl.difficulty.n2min = { addition:6,  subtraction:7,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:15, subtraction:7, multiplication:2, division:1 };
			lvl.difficulty.level = "m07.1";
			lvl.passingGrade = 40;
			break;
		case 53:
			lvl.level = 53;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:6,  subtraction:7, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:15, subtraction:15, multiplication:3, division:1 };
			lvl.difficulty.n2min = { addition:6,  subtraction:7,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:15, subtraction:7, multiplication:2, division:1 };
			lvl.difficulty.level = "m07.2";
			lvl.passingGrade = 40;
			break;
		case 54:
			lvl.level = 54;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:6,  subtraction:7, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:15, subtraction:18, multiplication:4, division:1 };
			lvl.difficulty.n2min = { addition:6,  subtraction:7,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:15, subtraction:7, multiplication:2, division:1 };
			lvl.difficulty.level = "m07.3";
			lvl.passingGrade = 40;
			break;
		case 55:
			lvl.level = 55;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:9, subtraction:30, multiplication:5, division:1 };
			lvl.difficulty.n2min = { addition:8,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:8, subtraction:15, multiplication:2, division:1 };
			lvl.difficulty.level = "p08.1";
			lvl.passingGrade = 40;
			break;
		case 56:
			lvl.level = 56;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:65,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:12, subtraction:100, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:8, subtraction:13,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:8, subtraction:65,  multiplication:20, division:20  };
			lvl.difficulty.level = "p08.2";
			lvl.passingGrade = 40;
			break;
		case 57:
			lvl.level = 57;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:65,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:15, subtraction:100, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:8, subtraction:13,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:8, subtraction:65,  multiplication:20, division:20  };
			lvl.difficulty.level = "p08.3";
			lvl.passingGrade = 40;
			break;
		case 58:
			lvl.level = 58;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:8,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:1, subtraction:15, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:8, subtraction:8,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:8, subtraction:8,  multiplication:20, division:20  };
			lvl.difficulty.level = "m08.1";
			lvl.passingGrade = 40;
			break;
		case 59:
			lvl.level = 59;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:8,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:1, subtraction:18, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:8, subtraction:8,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:8, subtraction:8,  multiplication:20, division:20  };
			lvl.difficulty.level = "m08.2";
			lvl.passingGrade = 40;
			break;
		case 60:
			lvl.level = 60;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:8,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:1, subtraction:20, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:8, subtraction:8,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:8, subtraction:8,  multiplication:20, division:20  };
			lvl.difficulty.level = "m08.3";
			lvl.passingGrade = 40;
			break;
		case 61:
			lvl.level = 61;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:9, subtraction:30, multiplication:5, division:1 };
			lvl.difficulty.n2min = { addition:9,  subtraction:4,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:9, subtraction:15, multiplication:2, division:1 };
			lvl.difficulty.level = "p09.1";
			lvl.passingGrade = 40;
			break;
		case 62:
			lvl.level = 62;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:65,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:12, subtraction:100, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:9, subtraction:13,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9, subtraction:65,  multiplication:20, division:20  };
			lvl.difficulty.level = "p09.2";
			lvl.passingGrade = 40;
			break;
		case 63:
			lvl.level = 63;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:65,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:15, subtraction:100, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:9, subtraction:13,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9, subtraction:65,  multiplication:20, division:20  };
			lvl.difficulty.level = "p09.3";
			lvl.passingGrade = 40;
			break;
		case 64:
			lvl.level = 64;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:1, subtraction:15, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:8, subtraction:9,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:8, subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "m09.1";
			lvl.passingGrade = 40;
			break;
		case 65:
			lvl.level = 65;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:1, subtraction:18, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:8, subtraction:9,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:8, subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "m09.2";
			lvl.passingGrade = 40;
			break;
		case 66:
			lvl.level = 66;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1, subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:1, subtraction:20, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:8, subtraction:9,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:8, subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "m09.3";
			lvl.passingGrade = 40;
			break;
		case 67:
			lvl.level = 67;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:10, subtraction:15, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:8,  subtraction:8,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9,  subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "n03.1";
			lvl.passingGrade = 40;
			break;
		case 68:
			lvl.level = 68;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:12, subtraction:18, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:8,  subtraction:8,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9,  subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "n03.2";
			lvl.passingGrade = 40;
			break;
		case 69:
			lvl.level = 69;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:15, subtraction:20, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:8,  subtraction:8,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9,  subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "n03.3";
			lvl.passingGrade = 40;
			break;
		case 70:
			lvl.level = 70;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:15, subtraction:20, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:7,  subtraction:7,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9,  subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "n03.4";
			lvl.passingGrade = 40;
			break;
		case 71:
			lvl.level = 71;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:15, subtraction:20, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:6,  subtraction:6,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9,  subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "n03.5";
			lvl.passingGrade = 40;
			break;
		case 72:
			lvl.level = 72;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:15, subtraction:20, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:5,  subtraction:5,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9,  subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "n03.6";
			lvl.passingGrade = 40;
			break;
		case 73:
			lvl.level = 73;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:17, subtraction:24, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:4,  subtraction:4,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9,  subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "n03.7";
			lvl.passingGrade = 40;
			break;
		case 74:
			lvl.level = 74;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:18, subtraction:25, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:3,  subtraction:3,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9,  subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "n03.8";
			lvl.passingGrade = 40;
			break;
		case 75:
			lvl.level = 75;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:19, subtraction:26, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:2,  subtraction:2,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9,  subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "n03.9";
			lvl.passingGrade = 40;
			break;
		case 76:
			lvl.level = 76;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:9,  multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:20, subtraction:27, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:9,  subtraction:9,  multiplication:20, division:20  };
			lvl.difficulty.level = "Grad!";
			lvl.passingGrade = 40;
			break;
		case 77:
			lvl.level = 77;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-", "*", "/" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:25, multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:50, subtraction:99, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:1,  subtraction:25, multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:50, subtraction:60, multiplication:20, division:20  };
			lvl.difficulty.level = "Crazy";
			lvl.passingGrade = 40;
			break;
		case 78:
			lvl.level = 78;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-", "*", "/" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:25, multiplication:5,  division:10  };
			lvl.difficulty.n1max = { addition:50, subtraction:99, multiplication:20, division:100 };
			lvl.difficulty.n2min = { addition:1,  subtraction:25, multiplication:3,  division:4   };
			lvl.difficulty.n2max = { addition:50, subtraction:60, multiplication:20, division:20  };
			lvl.difficulty.level = "Crazzy";
			lvl.passingGrade = 40;
			break;
	}

	return lvl;

};
