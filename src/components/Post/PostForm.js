import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {connect} from "react-redux";
import {createPost} from "./actions";

// export default class PostForm extends React.Component {
//
//     /**
//      *
//      * @param props
//      */
//     constructor(props) {
//         super(props)
//         this.state = {title: ''}
//     }
//
//     /**
//      *
//      * @param event
//      */
//     onSubmitHandler = event => {
//         event.preventDefault();
//
//         const {title} = this.state;
//         const newPost = {
//             title, id: Date.now().toString()
//         }
//
//         console.log(newPost);
//
//         // Clear
//         this.setState({title: ''})
//     }
//
//     /**
//      *
//      * @param event
//      */
//     onChangeTextFieldHandler = event => {
//         this.setState(prev => ({
//             ...prev, ...{
//                 [event.target.name]: event.target.value
//             }
//         }))
//     }
//
//     render() {
//         return (<form onSubmit={this.onSubmitHandler}>
//             <div className="mb-3">
//                 <TextField name="title"
//                            label="Title"
//                            onChange={this.onChangeTextFieldHandler}
//                            value={this.state.title}
//                            variant="outlined"
//                            fullWidth/>
//             </div>
//             <Button variant="contained" type="submit">Submit</Button>
//         </form>)
//     }
// }

class PostForm extends React.Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props)
        this.state = {title: ''}
    }

    /**
     *
     * @param event
     */
    onSubmitHandler = event => {
        event.preventDefault();

        const {title} = this.state;
        const newPost = {
            title, id: Date.now().toString()
        }

        console.log(newPost);

        // Clear
        this.setState({title: ''})
        this.props.createPost(newPost)
    }

    /**
     *
     * @param event
     */
    onChangeTextFieldHandler = event => {
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (<form onSubmit={this.onSubmitHandler}>
            <div className="mb-3">
                <TextField name="title"
                           label="Title"
                           onChange={this.onChangeTextFieldHandler}
                           value={this.state.title}
                           variant="outlined"
                           fullWidth/>
            </div>
            <Button variant="contained" type="submit" disabled={!this.state.title.length}>Submit</Button>
        </form>)
    }
}

const mapStateToProps = null;
// const mapDispatchToProps = {
//     // createPost: createPost
//     createPost
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
export default connect(mapStateToProps, {createPost})(PostForm)