### Day 1: JavaScript Fundamentals

1. **Task 1: Variables and Data Types**

   **Example 1: Storing User Information**

   ```javascript
   // Example 1: Storing User Information
   let userName = 'John Doe';
   const userAge = 30;
   var userEmail = 'john.doe@example.com';

   console.log('Name:', userName);
   console.log('Age:', userAge);
   console.log('Email:', userEmail);
   ```

   **Expected Output:**

   ```plaintext
   Name: John Doe
   Age: 30
   Email: john.doe@example.com
   ```

   **Example 2: Mathematical Calculations**

   ```javascript
   // Example 2: Mathematical Calculations
   const length = 10;
   const width = 5;
   let area = length * width;

   console.log('Area of rectangle:', area);
   ```

   **Expected Output:**

   ```plaintext
   Area of rectangle: 50
   ```

2. **Task 2: Operators**

   **Example 1: Arithmetic Operations**

   ```javascript
   // Example 1: Arithmetic Operations
   let num1 = 20;
   let num2 = 5;
   let resultAdd = num1 + num2; // Addition
   let resultSub = num1 - num2; // Subtraction
   let resultMul = num1 * num2; // Multiplication
   let resultDiv = num1 / num2; // Division

   console.log('Addition:', resultAdd);
   console.log('Subtraction:', resultSub);
   console.log('Multiplication:', resultMul);
   console.log('Division:', resultDiv);
   ```

   **Expected Output:**

   ```plaintext
   Addition: 25
   Subtraction: 15
   Multiplication: 100
   Division: 4
   ```

   **Example 2: Comparison Operators**

   ```javascript
   // Example 2: Comparison Operators
   let age = 25;
   let legalAge = 18;
   let isAdult = age >= legalAge; // Greater than or equal
   let isTeenager = age < legalAge; // Less than

   console.log('Is adult:', isAdult);
   console.log('Is teenager:', isTeenager);
   ```

   **Expected Output:**

   ```plaintext
   Is adult: true
   Is teenager: false
   ```

3. **Task 3: Control Structures - Conditionals (if, else if, else)**

   **Example 1: Checking Number Positivity**

   ```javascript
   // Example 1: Checking Number Positivity
   let number = 0;
   if (number > 0) {
       console.log('Number is positive');
   } else if (number < 0) {
       console.log('Number is negative');
   } else {
       console.log('Number is zero');
   }
   ```

   **Expected Output:**

   ```plaintext
   Number is zero
   ```

   **Example 2: Simple Login System**

   ```javascript
   // Example 2: Simple Login System
   let enteredUsername = 'admin';
   let enteredPassword = 'password123';
   const correctUsername = 'admin';
   const correctPassword = 'password123';

   if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
       console.log('Login successful');
   } else {
       console.log('Incorrect username or password');
   }
   ```

   **Expected Output:**

   ```plaintext
   Login successful
   ```

4. **Task 4: Control Structures - Loops (for, while)**

   **Example 1: Using for Loop to Iterate**

   ```javascript
   // Example 1: Using for Loop to Iterate
   for (let i = 1; i <= 5; i++) {
       console.log('Count:', i);
   }
   ```

   **Expected Output:**

   ```plaintext
   Count: 1
   Count: 2
   Count: 3
   Count: 4
   Count: 5
   ```

   **Example 2: Countdown Timer using while Loop**

   ```javascript
   // Example 2: Countdown Timer using while Loop
   let count = 10;
   while (count >= 0) {
       console.log('Countdown:', count);
       count--;
   }
   ```

   **Expected Output:**

   ```plaintext
   Countdown: 10
   Countdown: 9
   Countdown: 8
   Countdown: 7
   Countdown: 6
   Countdown: 5
   Countdown: 4
   Countdown: 3
   Countdown: 2
   Countdown: 1
   Countdown: 0
   ```

5. **Task 5: Functions**

   **Example 1: Function to Calculate Rectangle Area**

   ```javascript
   // Example 1: Function to Calculate Rectangle Area
   function calculateRectangleArea(length, width) {
       return length * width;
   }

   let area = calculateRectangleArea(10, 5);
   console.log('Area:', area);
   ```

   **Expected Output:**

   ```plaintext
   Area: 50
   ```

   **Example 2: Function to Check if a Number is Prime**

   ```javascript
   // Example 2: Function to Check if a Number is Prime
   function isPrime(number) {
       if (number <= 1) return false;
       if (number === 2) return true;
       for (let i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) {
               return false;
           }
       }
       return true;
   }

   console.log('Is 17 prime?', isPrime(17));
   ```

   **Expected Output:**

   ```plaintext
   Is 17 prime? true
   ```

6. **Task 6: Arrays**

   **Example 1: Sorting an Array of Numbers**

   ```javascript
   // Example 1: Sorting an Array of Numbers
   let numbers = [5, 2, 9, 1, 5, 6];
   numbers.sort((a, b) => a - b);
   console.log('Sorted numbers:', numbers);
   ```

   **Expected Output:**

   ```plaintext
   Sorted numbers: [1, 2, 5, 5, 6, 9]
   ```

   **Example 2: Filtering an Array of Objects**

   ```javascript
   // Example 2: Filtering an Array of Objects
   let users = [
       { name: 'Alice', age: 25 },
       { name: 'Bob', age: 30 },
       { name: 'Charlie', age: 20 }
   ];

   let filteredUsers = users.filter(user => user.age >= 25);
   console.log('Users older than 25:', filteredUsers);
   ```

   **Expected Output:**

   ```plaintext
   Users older than 25: [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 } ]
   ```

7. **Task 7: Objects**

   **Example 1: Object Representing a Car**

   ```javascript
   // Example 1: Object Representing a Car
   let car = {
       make: 'Toyota',
       model: 'Camry',
       year: 2020,
       drive: function() {
           console.log('Driving the', this.make, this.model);
       }
   };

   car.drive();
   ```

   **Expected Output:**

   ```plaintext
   Driving the Toyota Camry
   ```

   **Example 2: Adding Methods to an Object**

   ```javascript
   // Example 2: Adding Methods to an Object
   let person = {
       name: 'John',
       age: 30,
       greet: function() {
           console.log('Hello, my name is', this.name);
       }
   };

   person.greet();
   ```

   **Expected Output:**

   ```plaintext
   Hello, my name is John
   ```

8. **Task 8: Strings**

   **Example 1: Manipulating Strings**

   ```javascript
   // Example 1: Manipulating Strings
   let greeting = 'Hello, World!';
   let truncatedGreeting = greeting.slice(0, 5); // "Hello"
   let repeatedGreeting = greeting.repeat(3); // "Hello, World!Hello, World!Hello, World!"

   console.log('Truncated Greeting:', truncatedGreeting);
   console.log('Repeated Greeting:', repeatedGreeting);
   ```

   **Expected Output:**

   ```plaintext
   Truncated Greeting: Hello
   Repeated Greeting: Hello, World!Hello, World!Hello, World!
   ```

   **Example 2: Counting Occurrences of a Character**

   ```javascript
   // Example 2: Counting Occurrences of a Character
   function countOccurrences(str, char) {
       return str.split(char).length - 1;
   }

   let sentence = 'This is a sentence.';
   let countLetterS = countOccurrences(sentence, 's');
   console.log('Occurrences of "s":', countLetterS);
   ```

   **Expected Output:**

   ```plaintext
   Occurrences of "s": 3
   ```

9. **Task 9: Dates**

   **Example 1: Displaying Current Date and

 Time**

   ```javascript
   // Example 1: Displaying Current Date and Time
   let currentDate = new Date();
   console.log('Current date and time:', currentDate.toLocaleString());
   ```

   **Expected Output:**

   ```plaintext
   Current date and time: [Current date and time based on the system]
   ```

   **Example 2: Calculating Difference Between Dates**

   ```javascript
   // Example 2: Calculating Difference Between Dates
   let date1 = new Date('2023-06-01');
   let date2 = new Date('2023-07-01');
   let differenceInDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
   console.log('Difference in days:', differenceInDays);
   ```

   **Expected Output:**

   ```plaintext
   Difference in days: 30
   ```

10. **Task 10: Error Handling (try...catch)**

    **Example 1: Handling Invalid Input**

    ```javascript
    // Example 1: Handling Invalid Input
    function validateInput(input) {
        if (isNaN(input)) {
            throw new Error('Invalid input: Not a number');
        }
        return input * 2;
    }

    try {
        let result = validateInput('abc');
        console.log('Result:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
    ```

    **Expected Output:**

    ```plaintext
    Error: Invalid input: Not a number
    ```

    **Example 2: Handling Errors in Asynchronous Operations**

    ```javascript
    // Example 2: Handling Errors in Asynchronous Operations
    async function fetchData(url) {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            let data = await response.json();
            console.log('Data:', data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    fetchData('https://api.example.com/data');
    ```

    **Expected Output:**

    ```plaintext
    Error fetching data: [Error message based on the request]
    ```

---

By practicing these examples, you'll build a strong foundation in JavaScript and be able to understand and apply its core concepts effectively.