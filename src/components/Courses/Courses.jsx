import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({ selectBtnHandler }) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="grid grid-cols-3 gap-6">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    selectBtnHandler={selectBtnHandler}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    selectBtnHandler: PropTypes.func.isRequired
}
export default Courses;
