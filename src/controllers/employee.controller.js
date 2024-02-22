import EmployeeDao from "../dao/employee.dao.js";
import employeeModel from "../models/employee.model.js";

const getAll = async (req, res) => {
   EmployeeDao.getAll()
      //PROMESA
      .then(employees => {
         res.render('../src/views/index.ejs', { employees })
      }).catch(err => {
         res.json("Error")
      })
}


const getOne = async (req, res) => {
   EmployeeDao.getOne(req.params.workerNumber)
      .then(result => {
         if (result != null) {
          res.render('../src/views/edit.ejs', { employee: result })
         }
         else {
            res.json({
               "status": "not found"
            })
         }
      })
      .catch(err => {
         console.log(err.msg)
         res.json({ "status": "Server unaviable" })
      })
}

const insertOne = async (req, res) => {
   EmployeeDao.insertOne(req.body)
      .then(result => {
         if (result)
            res.redirect('/')
      }).catch(err => {
         res.json({ "status": "Server unaviable" })
         console.log(err)
      })
}

const updateOne = async (req, res) => {
   EmployeeDao.updateOne(req.params.workerNumber, req.body)
      .then(result => {
         if (result) {
           res.redirect('/')
         }
      })
      .catch(err => {
         res.json({ "status": "Server unaviable" })
      })
}

const deleteOne = async (req, res,) => {
   EmployeeDao.deleteOne(req.params.workerNumber)
      .then(result => {
         if (result) {
           try{
            res.redirect('/')
           }catch(err){
               res.json({ "status": "Server unaviablehgfhg" })
            }
         }
         else{
            res.json({ "status": "employee not found" })
         }
      })
      .catch(err => {
         // console.log(err.msg)
        res.redirect('/')
      })

}

const getJounge = async (req, res) => {
   EmployeeDao.getJounge()
      .then(result => {
         res.json(result)
      })
      .catch(err => {
         res.json({ "status": "Server unaviable" })
      })
}

const getSalary = async (req, res) => {
   EmployeeDao.getSalary()
      .then(result => {
         res.json(result)
      })
      .catch(err => {
         res.json({ "status": "Server unaviable" })
      })
}

const refresh = (req, res, next) => {
   res.setHeader('Refresh', '1');

}

const getRating = async (req, res) => {
   EmployeeDao.getRating()
      .then(result => {
       res.render('../src/views/contact.ejs', { employee: result })
      })
      .catch(err => {
         // console.log(err)
         res.json({ "status": "Server unaviable" })
      })
}

export { getAll, getOne, insertOne, updateOne, deleteOne, getJounge, getSalary, refresh, getRating} 