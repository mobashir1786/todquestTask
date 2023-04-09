var WorksnapsTimeEntry = BaseSchema.extend({
    student: {
        type: Schema.ObjectId,
        ref: 'Student'
    },
    timeEntry: {
        type: Object
    }
});
var StudentSchema = BaseSchema.extend({
    firstName: {
        type: String,
        trim: true,
        default: ''
        // validate: [validateLocalStrategyProperty, 'Please fill in your first name']
    },
    lastName: {
        type: String,
        trim: true,
        default: ''
        // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
    },
    displayName: {
        type: String,
        trim: true
    },
    municipality: {
        type: String
    }
});

Student.find()
    .populate('times')
    .exec((err, students) => {
        if (err) {
            console.error(err);
            return;
        }

        students.forEach((student) => {
            console.log(`Student: ${student.firstName} ${student.lastName}`);
            console.log(`Time entries:`);
            student.times.forEach((timeEntry) => {
                console.log(`${JSON.stringify(timeEntry)}`);
            });
        });
    });