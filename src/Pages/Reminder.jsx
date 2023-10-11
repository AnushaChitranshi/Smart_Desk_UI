import React, { Component } from "react";
import { connect } from "react-redux";
import { addReminder, deleteReminder, deleteAllReminders } from "../Actions";
import moment from "moment";
import { Link } from "react-router-dom";

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: "",
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate);
    this.setState({ text: "", dueDate: "" });
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  deleteAllReminders() {
    this.props.deleteAllReminders();
  }

  renderClearButton() {
    const { reminders } = this.props;
    if (reminders.length !== 0) {
      return (
        <button
          className="btn btn-danger"
          onClick={() => this.deleteAllReminders()}
          style={{ position: "relative", width: 146, top: -12, left: 349 }}
        >
          Clear Reminders
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-danger disabled"
          style={{ position: "relative", width: 146, top: -12, left: 349 }}
        >
          Clear Reminders
        </button>
      );
    }
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-md-4 col-sm-9 col-xs-10">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div>
                  <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                </div>
              </div>
              <div
                className="list-item delete-button"
                onClick={() => this.deleteReminder(reminder.id)}
              >
                &#x2715;
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div
        className="App"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 916,
            height: 578,
            left: 0,
            top: 0,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            border: "1px black solid",
            backgroundImage:
              'url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm428-0019-x.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=16c4ed18afc4ccfb86f468a829d23a1d")',
          }}
        >
          <div
            style={{
              width: 862,
              height: 0,
              left: 22,
              top: 69,
              position: "absolute",
              border: "1px black solid",
            }}
          ></div>
          <Link to="/">
            <button>
              <img
                className="Home_Icon"
                style={{
                  width: 51,
                  height: 47,
                  left: 820,
                  top: 18,
                  position: "absolute",
                }}
                src="https://cdn-icons-png.flaticon.com/512/7133/7133312.png"
                alt="Loading..."
              />
            </button>
          </Link>
          <h3
            style={{
              position: "absolute",
              left: 50,
              top: 29,
              fontFamily: "Lusitana",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            {" "}
            Reminders{" "}
          </h3>

          {/*</div> <div className="title">Reminder App</div>*/}
          <div className="form-inline reminder-form">
            <div className="form-group">
              <br></br>
              <br></br>

              <input
                className="form-control"
                placeholder="I have to..."
                value={this.state.text}
                onChange={(event) =>
                  this.setState({ text: event.target.value })
                }
                style={{ position: "relative", width: 400, top: 20, left: 30 }}
              />
              <input
                className="form-control"
                type="datetime-local"
                value={this.state.dueDate}
                onChange={(event) =>
                  this.setState({ dueDate: event.target.value })
                }
                style={{ position: "absolute", width: 200, top: 97, left: 447 }}
              />
              <button
                className="btn btn-success"
                onClick={() => this.addReminder()}
                style={{
                  position: "relative",
                  width: 130,
                  top: -23,
                  left: 662,
                }}
              >
                Add Reminder
              </button>
            </div>
          </div>
          {this.renderReminders()}
          {this.renderClearButton()}
        </div>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addReminder}, dispatch);
// }

function mapStateToProps(state) {
  return {
    reminders: state,
  };
}

export default connect(mapStateToProps, {
  addReminder,
  deleteReminder,
  deleteAllReminders,
})(Reminder);
