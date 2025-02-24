module.exports = {
    getAllTasks: async (req, res) => {
        res.send('retrieving a list of task')
    },

    getTask: async (req, res) => {
        res.send('retrieving a single task')
    },

    createTaks: async (req, res) => {
        const {title, description} = req.body
        console.log(title, description);
        res.send('creating a task')
    },

    deleteTask: async (req, res) => {
        res.send('deleting a task')
    },

    updateTask: async (req, res) => {
        res.send('updating a task')
    }
}