import React, { Component, Fragment } from 'react';
import XiaoItem from './xiaoItem';
import axios from 'axios'

class xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'jspang',
            list: ['基础按摩', '精油开背']
        }
    }

    componentWillMount() {
      console.log(1)
    }

    componentDidMount() {
        axios.post('https://juejin.im/')
        .then((res) => {console.log('成功：'+ JSON.stringify(res))})
        .catch((error=>{console.log('失败：'+error)}))
        console.log(2)

    }
    shouldComponentUpdate() {
        return true
    }

    render() {
        console.log(3)
        return (
            <Fragment>
                {/* sss */}
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div><XiaoItem
                                 content={item}
                                 key={index+item}
                                 deleteItem={this.deleteItem.bind(this)}
                                 ></XiaoItem></div>
                            )

                        })
                    }
                </ul>
            </Fragment>
        );
    }
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })

    }
}

export default xiaojiejie;