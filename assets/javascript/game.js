 $(document).ready(function () {

     var targetNumber = Math.floor((Math.random() * 100) + 1);

     //Sets up random numbers for each jewel between 1-12
     var num1 = Math.floor(Math.random() * 12 + 1);
     var num2 = Math.floor(Math.random() * 12 + 1);
     var num3 = Math.floor(Math.random() * 12 + 1);
     var num4 = Math.floor(Math.random() * 12 + 1);

     var userTotal = 0;
     var totalWins = 0;
     var totalLosses = 0;

     $("#number-to-guess").text(targetNumber);

     $("#totalWins").text(totalWins);
     $("#totalLosses").text(totalLosses);


     function reset() {
         targetNumber = function randomNumber() {
             return Math.floor((Math.random() * 100) + 1);
         };
         $("#number-to-guess").text(targetNumber);
         num1 = Math.floor(Math.random() * 12 + 1);
         num2 = Math.floor(Math.random() * 12 + 1);
         num3 = Math.floor(Math.random() * 12 + 1);
         num4 = Math.floor(Math.random() * 12 + 1);
         userTotal = 0;
         $("#totalPoints").text(userTotal);
     }

     //Adds wins to userTotal
     function winner() {
         alert("You win!");
         totalWins++;
         $("#totalWins").text(totalWins);
         reset();
     }

     //Adds losses to userTotal
     function loser() {
         alert("You lose!!");
         totalLosses++;
         $("#totalLosses").text(totalLosses);
         reset();
     }

     // Our click event applies to jewels
     $("#crystal1").on("click", function onClick() {
         userTotal = userTotal + num1;

         $("#totalPoints").text(userTotal, targetNumber);

         console.log('onClick', userTotal, targetNumber);

         if (userTotal === targetNumber) {
             winner()
         } else if (userTotal > targetNumber) {
             loser()
         }
     });
     $("#crystal2").on("click", function () {
         userTotal = userTotal + num2;
         $("#totalPoints").text(userTotal);

         if (userTotal === targetNumber) {
             winner()
         } else if (userTotal > targetNumber) {
             loser()
         }
     });
     $("#crystal3").on("click", function () {
         userTotal = userTotal + num3;
         $("#totalPoints").text(userTotal);

         if (userTotal === targetNumber) {
             winner()
         } else if (userTotal > targetNumber) {
             loser()
         }
     });
     $("#crystal4").on("click", function () {
         userTotal = userTotal + num4;

         console.log("New userTotal= " + userTotal);
         
         $("#totalPoints").text(userTotal);

         if (userTotal === targetNumber) {
             winner()
         } else if (userTotal > targetNumber) {
             loser()
         }
     });

 });