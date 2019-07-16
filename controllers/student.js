const Student = require("../models/student");
const joi = require("@hapi/joi");

exports.createStudent = (req, res, next) => {
    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        class: req.body.class,
        mobile_no: req.body.mobile_no,
        roll_no: req.body.roll_no,
        subjects: req.body.subjects
    });

    student.save().then(createdStudent => {
        res.status(201).json({
            message: "Student added successfully",
            student: {
                // ...createdStudent,
                id: createdStudent._id
            }
        });
    }).catch(error => {
        res.status(500).json({
            message: "Creating a student failed!",
            error: error
        });
    });
};

exports.searchStudent = (req, res, next) => {
    Student.find({
            name: {
                $regex: req.body.search_student
            }
        }).then(createdStudent => {
            const returned_student_array = [...createdStudent];
            if (returned_student_array.length > 0) {
                res.status(201).json({
                    message: "Student found successfully",
                    student: returned_student_array
                });
            } else {
                res.status(201).json({
                    message: "Cannot find Student with provided Name",
                    student: returned_student_array
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "An error Occured!",
                error: error
            });
        });
};

exports.updateStudent = (req, res, next) => {
    const student = {
        name: req.body.name
    };
    Student.updateOne({
            _id: req.params.id
        }, student)
        .then(result => {
            if (result.n > 0) {
                res.status(200).json({
                    message: "Update successful!"
                });
            } else {
                res.status(401).json({
                    message: "Not authorized!"
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Couldn't udpate student!",
                error: error
            });
        });
};

exports.getStudent = (req, res, next) => {
    Student.findById(req.params.id)
        .then(student => {
            if (student) {
                res.status(200).json(student);
            } else {
                res.status(404).json({
                    message: "Student not found!"
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching student failed!",
                error: error
            });
        });
};

exports.getAllStudent = (req, res, next) => {
    Student.find({})
        .then(student => {
            if (student) {
                res.status(200).json(student);
            } else {
                res.status(404).json({
                    message: "Student not found!"
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching student failed!",
                error: error
            });
        });
};

exports.deleteStudent = (req, res, next) => {
    Student.deleteOne({
            _id: req.params.id
        })
        .then(result => {
            if (result.n > 0) {
                res.status(200).json({
                    message: "Deletion successful!"
                });
            } else {
                res.status(401).json({
                    message: "Not authorized!"
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Deleting students failed!",
                error: error
            });
        });
};
