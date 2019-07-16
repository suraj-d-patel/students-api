const express = require("express");
const StudentController = require("../controllers/student");
const router = express.Router();

router.post("", StudentController.createStudent);

router.post("/search", StudentController.searchStudent);

router.put("/:id", StudentController.updateStudent);

router.get("/:id", StudentController.getStudent);

router.get("/", StudentController.getAllStudent);

router.delete("/:id", StudentController.deleteStudent);

module.exports = router;
