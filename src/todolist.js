import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input} from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div><Input></Input></div>
            </div>
         );
    }
}
 
export default TodoList;