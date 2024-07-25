To set up an environment on Ubuntu for compiling and running JavaScript in real-time, you'll need a few tools that will allow you to write, execute, and test your code outside the browser's built-in console. Here's a step-by-step guide to setting up a JavaScript development environment in your terminal.

### Step 1: Install Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, which allows you to run JavaScript code on the server side and in the terminal. We'll also install npm (Node Package Manager), which comes bundled with Node.js and is used to manage JavaScript packages.

#### Install Node.js using `nvm` (Node Version Manager)

Using `nvm` is a good practice because it allows you to manage multiple Node.js versions on your system. Follow these steps:

1. **Install `nvm`:**

   Open your terminal and run the following command to install `nvm`:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   ```

   After the installation, you might need to restart your terminal or run the following command to make `nvm` available:

   ```bash
   source ~/.bashrc
   ```

2. **Install Node.js using `nvm`:**

   First, list the available Node.js versions:

   ```bash
   nvm ls-remote
   ```

   To install the latest version, run:

   ```bash
   nvm install node
   ```

   Alternatively, if you need a specific version, replace `node` with the desired version number, like `nvm install 14.17.0`.

3. **Verify the installation:**

   ```bash
   node -v
   npm -v
   ```

   This should display the versions of Node.js and npm you installed.

### Step 2: Set Up a Real-Time JavaScript Compiler

To compile and run JavaScript in real-time, we'll use the `nodemon` package, which automatically restarts the node application whenever a file changes.

1. **Install `nodemon` globally:**

   ```bash
   npm install -g nodemon
   ```

   With `nodemon`, you can run your JavaScript file and have it re-run automatically whenever you make changes.

### Step 3: Write and Execute JavaScript Code

Now you can start writing your JavaScript code in any text editor or directly in the terminal. Here’s how you can do it:

1. **Create a JavaScript file:**

   Create a new JavaScript file, say `app.js`, using your preferred text editor. For example, using `nano`:

   ```bash
   nano app.js
   ```

   Add some sample JavaScript code:

   ```javascript
   console.log("Hello, World!");
   ```

   Save and exit (`Ctrl + X`, then `Y` for yes, and `Enter` to confirm).

2. **Run the JavaScript file with `nodemon`:**

   In your terminal, run the following command:

   ```bash
   nodemon app.js
   ```

   This will execute `app.js` and automatically re-run it whenever you make changes to the file. Open `app.js` in your text editor, change the code, and save it to see `nodemon` in action.

### Step 4: Use a REPL for Real-Time JavaScript Execution

If you prefer executing JavaScript commands interactively, you can use Node.js’s built-in Read-Eval-Print Loop (REPL).

1. **Open Node.js REPL:**

   Run `node` in your terminal:

   ```bash
   node
   ```

   You can now type and execute JavaScript commands line-by-line. For example:

   ```javascript
   > console.log("Hello, REPL!");
   Hello, REPL!
   ```

   Exit the REPL by pressing `Ctrl + C` twice.

### Step 5: Use VS Code with a Live Server (Optional)

If you prefer a more integrated development environment with a code editor, you can use Visual Studio Code (VS Code) with extensions that provide a live server feature.

1. **Install Visual Studio Code:**

   Download and install VS Code for Ubuntu by following the instructions on the [official website](https://code.visualstudio.com/docs/setup/linux).

2. **Install Live Server Extension:**

   - Open VS Code and go to the Extensions view by clicking the Extensions icon in the Activity Bar or pressing `Ctrl + Shift + X`.
   - Search for "Live Server" and install the extension by Ritwick Dey.

3. **Open your project in VS Code:**

   - Open your terminal and navigate to your project directory.
   - Start VS Code with the following command:

     ```bash
     code .
     ```

4. **Start the Live Server:**

   - Open an HTML file with your JavaScript code included, right-click in the editor, and select "Open with Live Server."
   - Your browser will automatically open and refresh whenever you save changes to your code, providing instant feedback.

### Step 6: Debugging JavaScript with VS Code

VS Code also supports JavaScript debugging, which allows you to set breakpoints and inspect code execution.

1. **Add a `launch.json` file:**

   - Open the Run and Debug view by clicking the Run icon in the Activity Bar or pressing `Ctrl + Shift + D`.
   - Click "create a launch.json file" and choose "Node.js" as the environment.

2. **Configure the launch settings:**

   In your `.vscode/launch.json` file, make sure the configuration matches your project setup:

   ```json
   {
       "version": "0.2.0",
       "configurations": [
           {
               "type": "node",
               "request": "launch",
               "name": "Launch Program",
               "skipFiles": ["<node_internals>/**"],
               "program": "${workspaceFolder}/app.js"
           }
       ]
   }
   ```

3. **Set breakpoints and debug:**

   - Open `app.js` and click on the left margin next to the line numbers to set breakpoints.
   - Start the debugger by pressing `F5` or selecting "Run and Debug" from the menu.

### Summary

By following these steps, you'll have a complete environment for running and testing JavaScript code in real-time on Ubuntu. Whether you prefer using the terminal, a text editor, or an integrated development environment like VS Code, you'll be able to run JavaScript outside the browser efficiently.

### Additional Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Nodemon GitHub Repository](https://github.com/remy/nodemon)
- [VS Code Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

