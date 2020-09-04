import React, { Component } from 'react';


class XiaoItem  extends Component {
    render() { 
        return ( 
        <li onClick={this.handleCilck.bind(this)}>{this.props.content}</li>
         );
    }
    handleCilck() {
        this.props.deleteItem(this.props.index)

    }
}
 
export default XiaoItem ;