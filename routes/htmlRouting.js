/**
 * these sets the html path for the application
 */

const router = require("express").Router();
const path = require("path");

/**
 * get all route sends html to the fronend via sendFile and joining the path
 */
router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
/**
 * get exercise route sends html to the fronend via sendFile and joining the path
 */

router.get("/exercise", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

/**
 * get stats route sends html to the fronend via sendFile and joining the path
 */
router.get("/stats", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


//export
module.exports = router;