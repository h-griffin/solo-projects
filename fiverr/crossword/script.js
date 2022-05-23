function createBoard(info) {
  var board = document.getElementById("crossword");
  for (var i=0; i<info.height; i++) {
    var row = createRow(i, info);
    board.appendChild(row);
  }
}

function createRow(rowNumber, info) {
  var row = document.createElement("div");
  row.classList = "row";
  for (var i=0; i<info.width; i++) {
    var block = createBlock(rowNumber, i, info);
    row.appendChild(block);
  }
  return row;
}

function createBlock(row, column, info) {
  var block = document.createElement("div");
  block.classList = "block";
  
  var letter = info.puzzle[row][column];
  if (letter === " ") {
     block.classList += " no-letter";
  }

  if (letter != " "){
    var letterSpan = document.createElement("div");
    letterSpan.classList = "letter"; 
    letterSpan.innerHTML = " ";
    letterSpan.innerHTML = '<input></input>';
    // letterSpan.innerHTML = letter;
    block.appendChild(letterSpan);
  }
  
  var numberDiv = getNumberDiv(row, column, info);
  if (numberDiv) {
    block.appendChild(numberDiv);
  }
  
  return block;
}

function getNumberDiv(row, column, info) {
  var numberObj;
  info.elements.forEach(function (element) {
    if (element.row === row && element.column === column) {
      numberObj = element;
    }
  });
  
  var div;
  if (numberObj) {
    div = document.createElement("div");
    div.classList = "number";
    div.innerHTML = numberObj.number;
  }
  return div;
}

function writeClues(puzzle) {
  var acrossCluesDiv = document.getElementById("acrossClues");
  var downCluesDiv = document.getElementById("downClues");
  
  puzzle.elements.forEach(function (element) {
    var clueDiv = document.createElement("div");
    clueDiv.classList = "clue";
    
    var clue = "";
    clue += element.number;
    clue += element.direction==="across"?"":"";
    clue += ". ";
    clue += element.clue;
    clue += " (" + element.answer.length + ")";
    clueDiv.innerHTML = clue;
    
    if (element.direction === "across") {
      acrossCluesDiv.appendChild(clueDiv);
    } else {
      downCluesDiv.appendChild(clueDiv);
    }
  });
}

var info = {
  "puzzle1": {
    "width": 17,
    "height": 9,
    "puzzle": [
      ["S","U","M","P","T","U","O","U","S"," "," "," ","P"," "," "," ","I"],
      ["H"," "," "," ","A"," "," "," ","E","U","P","H","E","M","I","S","M"],
      ["A","F","T","E","R","W","A","R","D"," "," "," ","N"," "," "," ","P"],
      ["M"," "," "," ","A"," "," "," ","E","N","J","O","I","N","D","E","R"],
      ["A","T","T","E","N","T","I","O","N"," "," "," ","N"," "," "," ","O"],
      ["N"," "," "," ","T"," "," "," ","T","R","A","N","S","F","O","R","M"],
      ["I","N","F","L","U","E","N","Z","A"," "," "," ","U"," "," "," ","P"],
      ["S"," "," "," ","L"," "," "," ","R","E","C","O","L","L","E","C","T"],
      ["M","A","N","D","A","T","O","R","Y"," "," "," ","A"," "," "," ","U"],
      
    ],
    "elements": [
      {
        "number": 1,
        "direction": "across",
        "row": 0,
        "column": 0,
        "clue": "&nbsp;Lavish",
        "answer": "SUMPTUOUS"
      },
      {
        "number": 1,
        "direction": "down",
        "row": 0,
        "column": 0,
        "clue": "Animistic religion of Northern Asia",
        "answer": "SHAMANISM"
      },
      {
        "number": 2,
        "direction": "down",
        "row": 0,
        "column": 4,
        "clue": "Large hairy spider",
        "answer": "TARANTULA"
      },
      {
        "number": 3,
        "direction": "down",
        "row": 0,
        "column": 8,
        "clue": "Inactive: Sitting ",
        "answer": "SEDENTARY"
      },
      {
        "number": 4,
        "direction": "down",
        "row": 0,
        "column": 12,
        "clue": "Headland",
        "answer": "PENINSULA"
      },
      {
        "number": 5,
        "direction": "down",
        "row": 0,
        "column": 16,
        "clue": "Spontaneous",
        "answer": "IMPROMPTU"
      },
      {
        "number": 6,
        "direction": "across",
        "row": 1,
        "column": 8,
        "clue": "&nbsp;Polite term",
        "answer": "EUPHEMISM"
      },
      {
        "number": 7,
        "direction": "across",
        "row": 2,
        "column": 0,
        "clue": "&nbsp;At a later or subsequent time",
        "answer": "AFTERWARD"
      },
      {
        "number": 8,
        "direction": "across",
        "row": 3,
        "column": 8,
        "clue": "&nbsp;Authoritative request: Command",
        "answer": "ENJOINDER"
      },
      {
        "number": 9,
        "direction": "across",
        "row": 4,
        "column": 0,
        "clue": "&nbsp;Concentration: Awareness",
        "answer": "ATTENTION"
      },
      {
        "number": 10,
        "direction": "across",
        "row": 5,
        "column": 8,
        "clue": "Change",
        "answer": "TRANSFORM"
      },
      {
        "number": 11,
        "direction": "across",
        "row": 6,
        "column": 0,
        "clue": "Highly infectious viral infection",
        "answer": "INFLUENZA"
      },
      {
        "number": 12,
        "direction": "across",
        "row": 7,
        "column": 8,
        "clue": "Remember",
        "answer": "RECOLLECT"
      },
      {
        "number": 13,
        "direction": "across",
        "row": 8,
        "column": 0,
        "clue": "Compulsory: Required",
        "answer": "MANDATORY"
      }
    ]
  }
};
            
createBoard(info.puzzle1);
writeClues(info.puzzle1);