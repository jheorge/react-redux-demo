import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import Proptypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch(error => {
      alert("loading courses failed " + error);
    });
  }

  render() {
    return (
      <div>
        <h2>Courses</h2>;
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
        ;
      </div>
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
    actions: bindActionCreators(courseActions, dispatch)
  };
}

CoursesPage.Proptypes = {
  courses: Proptypes.array.isRequired,
  actions: Proptypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // connect return a function. that function then calls our component
