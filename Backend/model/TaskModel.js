//importing the mongoose 
import mongoose  from "mongoose";

//describing the task schema for tasks
const taskSchema = new mongoose.Schema(
  {
    //task title
    title: { type: String, required: true },

    //task description
    description: { type: String, required: true },

    //task status
    status: { type: String, enum: ["PENDING", "COMPLETED"], default: "PENDING" },
    
  },
  //task time stamp gives the createdAt and updatedAt time 
  { timestamps: true }
);

//connecting the db with the schema
const taskModel = mongoose.model("Task", taskSchema);

//exporting the schema for using in servicess
export default taskModel;