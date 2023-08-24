import { Component } from "react";

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {

        return { hasError: true }
    }

    componentDidCatch(error){
        console.log(error);
    }

    render() {        
        if (this.state.hasError) {
            
            return <h1 className="error-message"> Oops, something went wrong! Try again! </h1>
        }

        return (
            <>
                {this.props.children}
            </>
        )
    }


}