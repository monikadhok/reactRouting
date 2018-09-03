import React from "react"

class Contact extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            first:1,
            second:2
        }
    }

    render(){
        return(
            <p>
                "I am at Contact!"
                {this.state.first}
            </p>
        );
    }
}

export default Contact;