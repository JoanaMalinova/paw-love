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

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {

            return <div>
                <h1 className="error-message"> Oops, something went wrong! Try again! </h1>
                <img src="https://media.istockphoto.com/id/1255172232/photo/kitten-and-a-pile-of-gnawed-wires.jpg?s=612x612&w=0&k=20&c=xbgLeoHxb3sN8gvu-u-hAxwWlr-XUNXNCWP9dpYijCg=" alt="cats-cables" />
            </div>
        }

        return (
            <>
                {this.props.children}
            </>
        )
    }


}