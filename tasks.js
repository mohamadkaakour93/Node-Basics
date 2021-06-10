
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
let tasks = []
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
  else if(text === 'list\n'){
    list(tasks);
  }
  else if(text === 'add\n'){
    console.log('Cannot add empty fields');
  }
  else if(text.startsWith("add")){
    add(text);
  }
  else if(text.slice(0,6)==='remove'){
  remove(text.slice(6));
  }
  else if(text === 'edit\n' || text.startsWith('edit')){
    edit(text);
  }
  else if(text === 'check\n' || text.startsWith('check ')){
    check(text);
  }
  else if(text === 'uncheck\n' || text.startsWith('uncheck ')){
    unCheck(text);
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
function list(tasks){
  if(tasks.length == 0){
    console.log("No tasks to show")
    return
  }
  for(let i=0; i <tasks.length; i++){
    if(tasks[i].done == false){tasks[i].done = '[ ]'}
    console.log(i+1 + "-"+ tasks[i].done, tasks[i].name)
  }
  console.log("Type check/uncheck number_of_task to mark as complete/incomplete")
}
function add(text){
  let b = {"done": false, "name": text.replace('add ', "").trim()}
  tasks.push(b);
  console.log("New task added. Type \'list\' to see your tasks.")
}
function remove(text){
  text = text.trim();
  if(text.length == 6){tasks.pop()}
  else{
    let num = text.split(' ');
    var c = parseInt(num[1]-1);
    if(c < 0 || c >= tasks.length){
      console.log('entry doesn\'t exist')
    }
    else{
    x = tasks.splice(c, 1);
    for(let i=0; i <tasks.length; i++){
      if(tasks[i].done == true){
        tasks[i].done = '[✓]'
      }
      else{
        tasks[i].done = '[ ]'
      }
      console.log(tasks[i].done, tasks[i].name)
    }
    }
 }  
}
function edit(text){
  let test = text.split(" ");
  test.shift();
  let a = test[0];
  if (text === "edit\n"){
    console.log("Error, type \'help\' for additional commands");
  }
  else{
    let final = test.join(" ").replace("\n","")
    if(isNaN(a)){
      let b = {"done": false, "name": text.replace('edit ', "")}
      tasks.pop()
      tasks.push(b)
    }
    else{
      let b = parseInt(a)
      let temp = final.split(" ")
      temp2 = temp.shift();
      temp = temp.join(" ")
      let final2 = {"done": false, "name": temp};
      tasks[b-1] = final2;
    }
  }
}

function check(text){
  if(text === 'check\n'){
    console.log("Error. Please specify task number to mark as checked!")
  }
  else{
    let v = text.split(" ")
    let y = parseInt(v[1])
    tempList = tasks
    let checker = tempList[0].done
    if(y > tasks.length){
      console.log("error")
      return
    }
    if(checker = '[ ]'){
      tasks[y-1].done = '[✓]';
      console.log("Task " + y + " marked as complete!")
    }
    else{console.log("You're already done with that one!")}
  }
}

function unCheck(text){
  if(text === 'uncheck\n'){
    console.log("Error. Please specify task number to mark as unchecked!")
  }
  else{
    let v = text.split(" ")
    let y = parseInt(v[1])
    if(y > tasks.length){
      console.log("error")
      return
    }
    let checker = tasks[y-1].done
    if(checker = '[✓]'){tasks[y-1].done = '[ ]', console.log("Task " + y + " marked as Incomplete!")}
    else{console.log("Nothing to do.")} 
  }}



 








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
