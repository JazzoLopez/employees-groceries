import {Schema, model} from 'mongoose';

const employeeSchema = new Schema({
    workerNumber:{
        type: Number,
        unique: true,
        required: true
    },
    name:String,
    lastname:String,
    department:String,
    age:Number,
    salary:String,
    rating:Number
},{
    timestamps:true,
    versionKey:false
})


export default model('employee', employeeSchema);