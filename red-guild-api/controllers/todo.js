const todos = ["todo1", "todo2", "todo3"]

//always write your code in try catch blocks

export const getAllTodos = async (req, res) => {
  //send a res with a 200 status and the todos array
  try {
    res.status(200).json(todos)
  } catch (error) {
    res.status(500).json({
      location: "error in the controller",
      message: error.message
    })
  }
}

export const addTodo = async (req, res) => {
  //get the todo from the body
  //add the todo to the todos array
  //send a res with a 200 status and the new todos array
}

export const updateTodo = async (req, res) => {
  //get the id from params
  //get the todo from the body
  //if the id is not in the todos array
  // send a res with a 400 status and a message "id not found" use findIndex
  //findIndex returns -1 if the id is not found google it
  //update the todo using map
  //send a res with a 200 status of the new todos (with the updated one)
}
export const deleteTodo = async (req, res) => {
  //get the id from params
  //if the id is not in the todos array send a res with a 400 status and a message "id not found" use findIndex
  //findIndex returns -1 if the id is not found google it
  //delete the todo using filter or splice
  //send a res with a 200 status of the new todos (without the deleted one)
}