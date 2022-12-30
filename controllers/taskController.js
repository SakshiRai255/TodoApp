const Todo = require("../modal/todoModals");

//  create Task

exports.createTask = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        throw new Error("no such todo exists");
    }
    const { task } = req.body;

    todo.task.push(task);

    // saving the todo
    await todo.save();

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      todo,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

//  edit Task

exports.editTask = async (req, res) => {
  try {
    // grabbing todo

    const todo = await Todo.findById(req.params.id);
    console.log(todo);

    if (!todo) {
        throw new Error("no such todo exists");
    }

    const {task} = req.body;
    const taskArrayIndex = Number(task)
    console.log(taskArrayIndex);

    if(typeof(taskArrayIndex) !== "number"){
        throw new Error("task index is not number");
    }
    todo.task[taskArrayIndex] = task;
    await todo.save();
    res.status(201).json({
      success: true,
      message: "Task Updated Successfully",
      todo,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};


// Delete Task 

exports.deleteTask = async(req,res)=>{
    try{
        // grabbing the todo
        const todo = await Todo.findById(req.params.id);

        if(!todo){
            throw new Error("no such todo exists")
        }

        const{ taskIndex} = req.body;
        const taskArrayIndex = Number(taskIndex)
        
        if(typeof(taskArrayIndex) !== "number"){
            throw new Error("task index is not number");
        }

        todo.task.splice(taskArrayIndex, 1)
          // saving the todo
          await todo.save();
          res.status(201).json({
              success: true, 
              message: "Task deleted successfully",
              todo
          })
    }catch(error){
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}