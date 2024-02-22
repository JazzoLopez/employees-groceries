import Employee from "../models/employee.model.js";
const EmployeeDao = {}
EmployeeDao.getAll = async (req, res) => {
    const employee = await Employee.find();
    return employee;
}

EmployeeDao.getOne =  async (workerNumber) => {
    const employee = await Employee.findOne({workerNumber:workerNumber});
    return employee;
}

EmployeeDao.insertOne = async(employee)=>{
    const employeeSaved = new Employee(employee);
    await employeeSaved.save(); 
    return true;  
}

EmployeeDao.updateOne = async(workerNumber, employee)=>{
const employeeUpdate = await Employee.findOneAndUpdate({workerNumber:workerNumber},employee);
if(employeeUpdate != null){ 
    return true;
}
else{
    return false
} 
}


EmployeeDao.deleteOne = async(workerNumber)=>{
const employeeDelete = await Employee.findOneAndDelete({workerNumber:workerNumber});
if(deleteOne != null){ 
    return true;

}
else{
    return false
} 
}

EmployeeDao.getJounge = async()=>{
    const employee = await Employee.findOne().sort({age:1});     
    return employee;
}

EmployeeDao.getSalary = async()=>{
    const employee = await Employee.aggregate([
        {
            $group: {
                _id: "Total Salary",
                totalSalary: { $sum: { $toInt: "$salary" } }
            }
        }
    ]);     
    return employee;
}

EmployeeDao.getRating = async() => {
    const employee = await Employee.findOne().sort({rating:-1})
    return employee;
}

export default EmployeeDao;