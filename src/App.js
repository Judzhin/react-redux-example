import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SyncPosts from "./components/Post/SyncPosts";
import AsyncPosts from "./components/Post/AsyncPosts";
import PostForm from "./components/Post/PostForm";
import {useDispatch, useSelector} from "react-redux";
import Modal from "@mui/material/Modal/Modal";
import Box from "@mui/material/Box/Box";
import Alert from "@mui/material/Alert/Alert";
import AlertTitle from "@mui/material/AlertTitle/AlertTitle";
import {hideAlert} from "./actions";

// import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

function App() {

    const dispatch = useDispatch();
    const app = useSelector(state => state.app);

    const onCloseAlert = () => {
        dispatch(hideAlert());
    }

    return (
        <React.Fragment>
            {app.alert && <Alert severity={app.alert.severity} onClose={onCloseAlert}>
                <AlertTitle>{app.alert.title}</AlertTitle>
                {app.alert.message}
            </Alert>}
            <Container className="pt-5">
                <Modal open={app.loader}>
                    <Box>
                        {/*<CircularProgress/>*/}
                    </Box>
                </Modal>
                <div className="row mb-5">
                    <div className="col">
                        <Typography variant="h3" component="div" gutterBottom>
                            React/Redux Post Example
                        </Typography>
                        <PostForm/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Typography variant="h4" component="div" gutterBottom>
                            Sync Posts
                        </Typography>
                        <SyncPosts posts={[
                            {id: 1, title: 'Some Post Title 1'},
                            {id: 2, title: 'Some Post Title 2'},
                            {id: 3, title: 'Some Post Title 3'}
                        ]}/>
                    </div>
                    <div className="col">
                        <Typography variant="h4" component="div" gutterBottom>
                            Async Posts
                        </Typography>
                        <AsyncPosts posts={[]}/>
                    </div>
                </div>
            </Container>
        </React.Fragment>

    );
}

export default App;
