import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div
          style={{ backgroundColor: "#ee6e7375" }}
          className="card darken-1"
          key={survey._id}
        >
          <div className="card-content">
            <span className="card-title " style={{ fontWeight: "bold" }}>
              {survey.title}
            </span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <span style={{ marginLeft: "20px" }}>Yes: {survey.yes}</span>
            <span style={{ marginLeft: "20px" }}>No: {survey.no}</span>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
