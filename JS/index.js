// function countMatches(array1, array2) {
//     let count = 0;
//     let positions = [];
//     let attempts = 0;
    
//     while (positions.length < 4) {
//       let index1 = Math.floor(Math.random() * array1.length);
//       let index2 = Math.floor(Math.random() * array2.length);
//       attempts++;
      
//       if (array1[index1] === array2[index2]) {
//         count++;
//         positions.push(index1);
//       }
//     }
    
//     return { count, positions, attempts };
//   }
  
  // ตัวอย่างการเรียกใช้ฟังก์ชัน

  (()=>{
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomIndex);
        }
      
        return result;
      }
      
      function countMatchingCharacters(secret, guess) {
        let count = 0;
      
        for (let i = 0; i < secret.length; i++) {
          if (secret.charAt(i) === guess.charAt(i)) {
            count++;
          }
        }
      
        return count;
      }
      
      function countMatchingPositions(secret, guess) {
        let count = 0;
      
        for (let i = 0; i < secret.length; i++) {
          if (secret.includes(guess.charAt(i))) {
            count++;
          }
        }
      
        return count;
      }
      
      function playGame() {
        const secretLength = 4;
        const secret = generateRandomString(secretLength);
        let attempts = 0;
      
        while (true) {
          const guess = generateRandomString(secretLength);
          attempts++;
      
          const matchingCharacters = countMatchingCharacters(secret, guess);
          const matchingPositions = countMatchingPositions(secret, guess);
      
          console.log(`Guess: ${guess}`);
          console.log(`Matching Characters: ${matchingCharacters}`);
          console.log(`Matching Positions: ${matchingPositions}`);
          console.log(`Attempts: ${attempts}`);
      
          if (matchingCharacters === secretLength) {
            console.log('Congratulations! You guessed the secret correctly!');
            break;
          }
      
          if (attempts >= 10) {
            console.log('Game Over! You reached the maximum number of attempts.');
            break;
          }
        }
      }
      
      playGame();
  })()
  