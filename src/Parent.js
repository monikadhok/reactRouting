import React,{Component} from 'react';

class Parent extends Component {
  constructor(props){
    super(props)
     this.state={
        internal:'',
        msg:'default'
     }
  }
  
  internalChange(){
     this.setState({internal:'new'})
  }
  render(){  
    return (
    <div>
        <Child msg={this.state.msg} />
        <button onClick={this.internalChange.bind(this)}>internal change</button>
    </div>
  )}
}

class Child extends Component{
    //shouldComponentUpdate(nextProps, nextState){
       //console.log('insert your break point here')
       // you will find  that this.props != nextProps, 
       // becuase when parent gets re-rendered triggered by setState, it builds it 
       // new VDOM, which is ReactElement(s);
       // the nextProps is the prop passed to the new ReactElement, and obviously 
       // nextProps and this.props points to different object and thus they are not shalldow equal
       // to each other. 
       // child gets re-rendered
    //}
    render(){
      const {msg} = this.props
      return <h1>msg:{msg}</h1>
    }
  }
  
  export default Parent;