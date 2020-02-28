import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import Proptypes from "prop-types";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = event => {
    event.preventDefault();
    //alert(this.state.course.tittle);

    this.props.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

//this func determines what state is passed to out component via props
function mapStateToProps(state) {
  return {
    courses: state.courses //be specific. request only the data your component needs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

CoursesPage.Proptypes = {
  courses: Proptypes.array.isRequired,
  createCourse: Proptypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // connect return a function. that function then calls our component
