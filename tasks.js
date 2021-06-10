
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
let tasks = [['buy batata'],['hello world'],['buy chocolate']]
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
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text.slice(0,5) === "hello") {
    hello(text);
  } else if (text === "help\n") {
    help();
  }
  else if(text === "list\n") {
    list();
  }
  else if(text.startsWith("add")){
    add(text);
  }
  else if(text === "remove\n" || text.startsWith("remove")){
  remove(text);
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
  const newValue = text.replace(/ +/g," ").trim();
  console.log( newValue.trim().split() +"!");
}
/*help command that lists all possible commands*/
function help(){
  console.log("\n");
  console.log("--- All Commands ---\n");
  console.log("hello - prints hello and greets you\n");
  console.log("list - lists all the possible commands that you can use\n");
  console.log("add - adds new task\n");
  console.log("remove - removes a certain task\n");
  console.log("edit - edits the tasks");
  console.log("check - marks the task as done\n");
  console.log("uncheck - demarks the task so it becomes undone");
  console.log("exit or quit - quits the application\n");
}
function list(){
for(i=0;i<tasks.length;i++){
  console.log(i+1 +"-"+tasks[i]+"\n");
}
}
function add(text){
  text = text.slice(3);
  text = text.trim();
  if(text != ""){
    tasks.push(text);
  }
  else{
  console.log("Error")
  }

}
function remove(text){
  text = text.trim();
  if(text.length == 6){
    tasks.pop();
  }
  else{
  tasks.splice(text.substring(8),1);
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

// The following line starts the application
startApp("mohamad el kaakour ")
