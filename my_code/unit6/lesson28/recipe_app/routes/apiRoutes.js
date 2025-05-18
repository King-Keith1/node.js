const router = require("express").Router();
const coursesController = require("../controllers/coursesController");
const usersController = require("../controllers/usersController");

router.post("/login", usersController.apiAuthenticate);
router.use(usersController.verifyJWT)
router.get("/courses/:id/join", coursesController.join, coursesController.respondJSON);
router.get("/courses",coursesController.index,coursesController.filterUserCourses,coursesController.respondJSON);
router.use(coursesController.errorJSON);

module.exports = router;