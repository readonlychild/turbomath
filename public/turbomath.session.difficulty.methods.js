turbomath.session.difficulty.setToSuperEasy = function () {
	turbomath.session.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1,  division:1  };
	turbomath.session.difficulty.n1max = { addition:9,  subtraction:16, multiplication:3,  division:2  };
	turbomath.session.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1,  division:1  };
	turbomath.session.difficulty.n2max = { addition:9,  subtraction:6,  multiplication:3,  division:2  };
	//turbomath.session.availableOperations = [ "+", "-" ];
	turbomath.session.difficulty.level = "superEasy";
};

turbomath.session.difficulty.setToEasy = function () {
	turbomath.session.difficulty.n1min = { addition:4,  subtraction:10, multiplication:1,  division:1  };
	turbomath.session.difficulty.n1max = { addition:20, subtraction:20, multiplication:5,  division:5  };
	turbomath.session.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1,  division:1  };
	turbomath.session.difficulty.n2max = { addition:10, subtraction:10, multiplication:5,  division:5  };
	//turbomath.session.availableOperations = [ "+", "-", "*" ];
	turbomath.session.difficulty.level = "easy";
};

turbomath.session.difficulty.setToNormal = function () {
	turbomath.session.difficulty.n1min = { addition:10, subtraction:10, multiplication:1,  division:1  };
	turbomath.session.difficulty.n1max = { addition:30, subtraction:30, multiplication:10, division:10 };
	turbomath.session.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1,  division:1  };
	turbomath.session.difficulty.n2max = { addition:20, subtraction:20, multiplication:10, division:10 };
	//turbomath.session.availableOperations = [ "+", "-", "*", "/" ];
	turbomath.session.difficulty.level = "normal";
};

turbomath.session.difficulty.setToHard = function () {
	turbomath.session.difficulty.n1min = { addition:10, subtraction:20, multiplication:3,  division:1  };
	turbomath.session.difficulty.n1max = { addition:30, subtraction:50, multiplication:15, division:10 };
	turbomath.session.difficulty.n2min = { addition:10, subtraction:10, multiplication:3,  division:1  };
	turbomath.session.difficulty.n2max = { addition:30, subtraction:20, multiplication:10, division:10 };
	//turbomath.session.availableOperations = [ "+", "-", "*", "/" ];
	turbomath.session.difficulty.level = "hard";
};

turbomath.session.difficulty.getSelectedOperations = function () {
	turbomath.session.availableOperations = [];
	$(".operationToggle.selected").each(function () {
		turbomath.session.availableOperations.push($(this).text());
	});
	if (turbomath.session.availableOperations.length == 0) {
		turbomath.session.availableOperations = [ "+", "-", "*", "/" ];
	}
};

turbomath.session.postScore = function (boardName, lvl) {
		boardName = boardName || 'turbopractice';
		lvl = lvl || "000";
		try {
			var lvlnum = "000" + lvl;
			lvlnum = lvlnum.substr(lvlnum.length-3);
			var gradenum = "000" + (this.goodOnes - this.badOnes);
			gradenum = gradenum.substr(gradenum.length-3);
			$.ajax({
				url: "http://missile-cmd.herokuapp.com/leaderboard/add/" + boardName + "/" + this.guid + "/1" + lvlnum + gradenum,
				type:"GET"
			});
		} catch (err) {
			//console.log (err);
		}
};