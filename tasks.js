
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
let tasks = [{"task":"task1"},{"task":"task2"},{"task":"task3"}]
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text= text.replace('\n','').trim();
  var arrText = text.split(' ');
  console.log(arrText);
  if (arrText[0] === 'quit' || arrText[0] === 'exit') {
    quit();
  }
  else if(arrText[0] === 'hello'){
    hello(arrText[1]);
  }
  else if(arrText[0]=== 'help'){
    help(arrText[1]);
  }
  else if(arrText[0]==='list'){
    list(arrText[1]);
  }
  
  else{
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  if(!text){
    console.log("hello!")
  }else{
console.log("hello" + " "+text+ "!")
}
}



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/*help command that lists all possible commands*/
function help(){
  console.log('here are the possible commands: \n','\n','quit\n','hello\n','help\n','list\n','remove\n','add\n','edit\n','check\n','uncheck\n')
}
function list(){
for(i=0;i<tasks.length;i++){
console.log(tasks[i]);
}
}

// The following line starts the application
startApp("mohamad el kaakour ")
