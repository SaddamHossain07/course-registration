import PropTypes from 'prop-types'
import { LuDollarSign } from 'react-icons/lu';
import { HiOutlineBookOpen } from 'react-icons/hi2';

const Course = ({ course }) => {
    const { course_name, credit, price, course_detail, course_img } = course

    return (
        <div className="border-2 rounded-lg p-3">
            <img src={course_img} alt="" />
            <h3 className="text-sm font-bold pt-4">{course_name}</h3>
            <p className="text-sm font-normal pt-3">{course_detail}</p>
            <div className='flex gap-3 mt-4 text-sm font-semibold text-gray-500'>
                <span className='flex items-center'><LuDollarSign /> Price : {price}</span>
                <span className='flex items-center'><HiOutlineBookOpen /> Credit : {credit}hr</span>
            </div>
            <button className='mt-7 bg-blue-500 rounded-lg w-full text-white text-xl font-semibold py-2'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}
export default Course;