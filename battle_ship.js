$(document).ready(function(){
  // alert($('td').attr('id'));
  for(var i = 0; i <= 9; i++) { //begins for loop for rows
    let row = "<tr id=row" + i +">column</tr>"
    $("#board").append(row)
    for(var j = 0; j <= 9; j++) { //begins for loop for columns
      $("#row"+ i).append("<td id=" +i+j+ "></td>")
    } //ends for loop
  }

  randomizerShip();


  var torpedoRemain = 3
  var hits = 0

  $("td").click(function(){
    var testing = $(this).attr('id').split("");
      var i = testing[0];
      var j = testing[1];

      if (board[i][j] !== 1) {
        $("#miss").text("Miss!!!!!!!!!!!!");
        $(this).css({"background":"blue"})
      } else {
        $("#miss").text("Hit!!!!!!!!!!!")
        $(this).css({"background":"red"})
        hits++
      }

      torpedoRemain--;

      if (hits === 5) {
        $("td").off("click")
        $("#miss").text("Winner!!!!!!!!")
      }


    if (torpedoRemain >= 0 ) {
      $("#torpedos").text("Torpedos Used: " + torpedoRemain)
    } else {
      $("td").off("click")
      $("#torpedos").text("No more torpedos. You Lost!!!!")
      for (var b = 0; b  < shipsFive.length; b++) {
        var string = "#" + shipsFive[b][0].toString() + shipsFive[b][1].toString();
        $(string).css({"background":"yellow"})
      }
    }
  })


})

// jquery ends
var player1 = 1

var board =      [[0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0] ]


// -------------------original

// var shipsFive = [[],[],[],[],[]]
//
// function randomizerShip() {
//   var x = 0;
//   //loops through the array into the array
//   if (x < 5) {
//   for (var i = 1; i <= 5; i++) {
//   do {  //Randomizes the placement of row
//     var shipRow = Math.floor(Math.random()* 8 + 1)
//     //push to the array
//
//     //Randomizes the place of column
//     var shipCol = Math.floor(Math.random()* 8 + 1)
//     //push to the array
//
//
//
//   } while (board[shipRow][shipCol] === 1 || board[shipRow][shipCol] === 2)
//
//     //replaces zero board tile to 1
//
//
//
//     board[shipRow - 1][shipCol] = 2
//     board[shipRow  + 1][shipCol] = 2
//     board[shipRow][shipCol - 1 ] = 2
//     board[shipRow][shipCol + 1 ] = 2
//     board[shipRow - 1][shipCol - 1] = 2
//     board[shipRow  - 1][shipCol +1] = 2
//     board[shipRow +1][shipCol - 1 ] = 2
//     board[shipRow +1][shipCol + 1 ] = 2
//
//     console.log(board[shipRow][shipCol] = 1)
//
//     console.log(board[shipRow][shipCol + 1] = 1)
//     shipsFive[x].push(shipRow);
//     shipsFive[x].push(shipCol);
//     x++;
//     }
//   }
//   console.log(shipsFive)
// }

//-------------------test

var shipsFive = [[],[],[],[],[]]

function randomizerShip() {
  var x = 0;
  //loops through the array into the array
  if (x < 5) {
  for (var i = 1; i <= 5; i++) {
  do {  //Randomizes the placement of row
    var shipRow = Math.floor(Math.random()* 8 + 1)
    var shipRowTwo = shipRow + 1
    console.log("shipRowTwo = " + shipRowTwo);
    //push to the array

    //Randomizes the place of column
    var shipCol = Math.floor(Math.random()* 8 + 1)
    //push to the array
    var shipColTwo = shipCol + 1
    console.log("shipColTwo = " + shipColTwo);



  } while (board[shipRow][shipCol] === 1) //|| board[shipRow][shipCol] === 2)

    //replaces zero board tile to 1

    board[shipRow][shipCol] = 1


    shipsFive[x].push(shipRow);


    shipsFive[x].push(shipCol);
    x++;
    }
  }
  console.log(shipsFive)
}






// function shipCondition() {
// board[shipRow - 1][shipCol] = 2
// board[shipRow  + 1][shipCol] = 2
// board[shipRow][shipCol - 1 ] = 2
// board[shipRow][shipCol + 1 ] = 2
// board[shipRow - 1][shipCol - 1] = 2
// board[shipRow  - 1][shipCol +1] = 2
// board[shipRow +1][shipCol - 1 ] = 2
// board[shipRow +1][shipCol + 1 ] = 2
// }



// function ship2() {
//   var shipRow = Math.floor(Math.random()* 8 + 1)
//   var shipCol = Math.floor(Math.random()* 5 + 1)
//   shipsTwoLocation[0].push(shipRow);
//   shipsTwoLocation[0].push(shipCol);
//   ship3()
//   function ship3() {
//     var shipRow = Math.floor(Math.random()* 8 + 1)
//     var shipCol = Math.floor(Math.random()* 4 + 1)
//     shipsTwoLocation[1].push(shipRow);
//     shipsTwoLocation[1].push(shipCol);
//   }
// }
//
// for(var t = 0; t<3; t++) {
//
// }


var shipsTwoLocation = [[],[]];
function ship2() {
  var b = 0;
  while (b <= 1) {
  var shipRow = Math.floor(Math.random()* 8 + 1)
  var shipCol = Math.floor(Math.random()* 5 + 1)
  shipsTwoLocation[b].push(shipRow);
  shipsTwoLocation[b].push(shipCol);
    b++;
  }
}
