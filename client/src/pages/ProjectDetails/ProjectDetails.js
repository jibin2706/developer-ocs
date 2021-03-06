import React, { Component } from 'react';
// import { SaveBtn } from '../../components/SaveBtn';


class ProjectDetails extends Component {

render() {
    return (
      <Row>
        <Col size="sm-12">
          <br />
          <div>
            {/* This main panel will hold the details of the selected project */}
            {this.state.savedProjects.length ? (
              <List className="savedResults">
                {this.state.savedProjects.map(project => {
                  return <ListItem key={project.id} className="listItem">
                    {/* <SaveBtn className="saveBtn" onClick={() => this.saveProjects(project._id)}>
                        {{SaveBtn}}
                      </SaveBtn> */}
                    {/* <DeleteBtn className="deleteBtn" onClick={() => this.deleteProjects(project._id)}>
                        ✗
                      </DeleteBtn> */}
                      &nbsp; &nbsp;
                      {project.posted_date} &nbsp;
                      <strong>{project.title}</strong>
                      <br />
                      {project.details}
                    </ListItem>;
                })}
              </List>
            ) : (
              <h3 style={{ marginLeft: 15 }}>No Results to Display</h3>
            )}
          </div>
        </Col>
      </Row>
    );
  }
}


export default ProjectDetails;
