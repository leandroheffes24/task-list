const {Router} = require('express')
const {getAllTasks, getTask, createTaks, deleteTask, updateTask} = require('../controllers/tasks.controller')

const router = Router()

router.get('/tasks', getAllTasks)
router.get('/tasks/:id', getTask)
router.post('/tasks', createTaks)
router.delete('/tasks/:id', deleteTask)
router.put('/tasks/:id', updateTask)

module.exports = router