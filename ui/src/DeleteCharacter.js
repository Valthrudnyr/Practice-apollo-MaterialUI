import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const style = {
    background: 'red'
}

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class AlertDialogSlide extends Component {
    state = {
        open: false,
    };


// class AlertDialog extends Component {
//     state = {
//         open: false,
//     };

    deleteCharacterMutation = gql`
        mutation deleteCharacter($id: ID!) {
            deleteCharacter (where: {id: $id}) {
                id
                name
            }
        }
    `

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

//     render() {
//         return (
//             <div>
//                 <Button style={style} onClick={this.handleClickOpen}>Delete</Button>
//                 <Dialog
//                     open={this.state.open}
//                     onClose={this.handleClose}
//                     aria-labelledby="alert-dialog-title"
//                     aria-describedby="alert-dialog-description"
//                 >
//                     <DialogTitle id="alert-dialog-title">{"NOOO! Don't delete me! What did I ever do to you?"}</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText id="alert-dialog-description">
//                             I will disappear forever!
//                         </DialogContentText>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={this.handleClose} type="submit" size="small" color="secondary" variant="contained" >
//                             What? I could never delete you!
//                         </Button>
//                         <Mutation mutation={this.deleteCharacterMutation}>
//                             {(deleteChar, {data}) => (
//                                 <form onSubmit={event => {
//                                     event.preventDefault()
//                                     deleteChar({
//                                         variables: {
//                                             id: this.props.id,
//                                         }
//                                     })
//                                     window.location.reload(true)
//                                 }}>
//                                     <Button onClick={this.handleClose} type="submit" size="small" color="primary" variant="contained">
//                                         Of course, what a silly question!
//                                     </Button>
//                                 </form>
//                             )}
//                         </Mutation>
//
//                     </DialogActions>
//                 </Dialog>
//             </div>
//         );
//     }
// }
//
// export default AlertDialog;

render() {
    return (
        <div>
            <Button style={style} size="medium" onClick={this.handleClickOpen}>Delete</Button>
            <Dialog
                open={this.state.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"NOOO! Don't delete me! What did I ever do to you?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        I will disappear forever!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} type="submit" size="small" color="secondary" variant="contained" >
                        What? I could never delete you!
                    </Button>
                    <Mutation mutation={this.deleteCharacterMutation}>
                        {(deleteChar, {data}) => (
                            <form onSubmit={event => {
                                event.preventDefault()
                                deleteChar({
                                    variables: {
                                        id: this.props.id,
                                    }
                                })
                                window.location.reload(true)
                            }}>
                                <Button onClick={this.handleClose} type="submit" size="small" color="primary" variant="contained">
                                    Of course, what a silly question!
                                </Button>
                            </form>
                        )}
                    </Mutation>

                </DialogActions>
            </Dialog>
        </div>
    );
  }
}

export default AlertDialogSlide;
