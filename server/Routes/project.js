const router = require('express').Router();
const Projects = require('../Models/Project');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(400).json({msg: "Bad Request"})
    }
});

// Single Project
router.get("/:id", async (req, res) => {
    try {
        const project = await Projects.findById(req.params.id);
        res.status(200).json(project);
    } catch (err) {
        res.status(400).json({ msg: "Bad Request"})
    }
});

module.exports = router;