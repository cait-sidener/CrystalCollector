 $(document).ready(function(){
 
 var targetNumber = function randomNumber() {
      return Math.floor((Math.random() * 100) +1);
  };

  $("#number-to-guess").text(targetNumber);

  var num1 = Math.floor(Math.random() * 12 +1);
  var num2 = Math.floor(Math.random() * 12 +1);
  var num3 = Math.floor(Math.random() * 12 +1);
  var num4 = Math.floor(Math.random() * 12 +1);

  var userTotal = 0;
  var totalWins = 0;
  var totalLosses = 0;

  $("#totalWins").text(totalWins);
  $("#totalLosses").text(totalLosses);


    // All of the same game win-lose logic applies. So the rest remains unchanged.


    function reset() {
        var targetNumber = function randomNumber() {
            return Math.floor((Math.random() * 100) +1);
        };
        $("#number-to-guess").text(targetNumber);
        var num1 = Math.floor(Math.random() * 12 +1);
        var num2 = Math.floor(Math.random() * 12 +1);
        var num3 = Math.floor(Math.random() * 12 +1);
        var num4 = Math.floor(Math.random() * 12 +1);
        userTotal = 0;
    }

    function winner() {
        alert("You win!");
        totalWins++;
        $("#totalWins").text(totalWins);
        reset();
    }

    function loser() {
      alert("You lose!!");
      totalLosses++;
      $("#totalLosses").text(totalLosses);
      reset();
    }



  // This time, our click event applies to every single crystal on the page. Not just one.
  $("#crystal1").on("click", function() {
    userTotal = userTotal + num1;
    $("totalPoints").text(userTotal);

    if (userTotal === targetNumber) {
        winner()
    } else if (userTotal > targetNumber) {
        loser()
    }
});
    $("#crystal2").on("click", function() {
        userTotal = userTotal + num2;
        $("totalPoints").text(userTotal);
    
        if (userTotal === targetNumber) {
            winner()
        } else if (userTotal > targetNumber) {
            loser()
        }
    });
        $("#crystal3").on("click", function() {
            userTotal = userTotal + num3;
            $("totalPoints").text(userTotal);
        
            if (userTotal === targetNumber) {
                winner()
            } else if (userTotal > targetNumber) {
                loser()
            }
        });
            $("#crystal4").on("click", function() {
                userTotal = userTotal + num4;
                console.log("New userTotal= " + userTotal);
                $("totalPoints").text(userTotal);
            
                if (userTotal === targetNumber) {
                    winner()
                } else if (userTotal > targetNumber) {
                    loser()
                }   
        });

    });