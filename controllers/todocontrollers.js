// Bussiness Logic
const Todo = require("../modal/todoModals");

exports.home = (req, res) => {
  res.send("Hello World");
};


exports.createTodo = async (req, res) => {
  try {
    const { title} = req.body;
    if (!title) {
      res.status(401).json({
        success: false,
        message: "Title is required",
      });
      // Inserting in Datbase
      const todo = await Todo.create({title})
      res.status(201).json({
        success: true,
        message: "Title Created Successfully",
        todo
      });
    }
  } catch (error) {
    console.log(error);    
    res.status(401).json({
    message: error.message,
    status: "Error in created todo controller",
    });
  }
};


exports.getTodo = async (req,res) =>{
try {
    const getTodo = await Todo.find()
    res.status(200).json({
        success : true,
        getTodo
    });   
} catch (error) {
    res.status(401).json({
        success : false,
        message : error.message,
    })
}

}

exports.editTodo = async (req,res) => {
    try{
     const editTodo = await Todo.findByIdAndUpdate(req.params.id,req.body);
     res.status(200).json({
        success : true,
        message : "User Updated Successfully" 
     })
    } catch(error){
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}

exports.deleteTodo = async (req,res) =>{
    try {
        const todoId = req.params.id;
        const deleteTodo = await Todo.findOneAndDelete(todoId);
        res.status(201).json({
            success : true,
            message : "User Deleted Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success : false,
            message : error.message
        })
    }

}