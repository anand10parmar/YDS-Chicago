import React, {Component} from 'react';
import ProjectList from '../project/projectList';
class Dashboard extends Component {

render() {


        return(

        <div className="dashboard container">
        <div className="row">
                <div className= "col s12 m6">
             
             <ProjectList></ProjectList>
                </div>
                <div className= "col s12 m5 offset-m1"></div>
        </div>
        </div>    
        );
    }
}

export default Dashboard
