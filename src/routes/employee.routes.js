import Router from 'express';
import {getAll, getOne, insertOne, updateOne, deleteOne, getJounge, getSalary,  refresh, getRating} from '../controllers/employee.controller.js';

const router = Router();

router.get('/',getAll)

router.get('/mejor_empleado', getRating)
router.get('/:workerNumber',getOne)
router.post('/',insertOne)
router.post('/:workerNumber',updateOne)
router.get('/delete/:workerNumber',deleteOne)

router.get('/getJounge',getJounge)
router.get('/getSalary',getSalary)

export default router;  