import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { createMuiTheme } from '@material-ui/core/styles';

// import TextField from '@material-ui/core/TextField';

// export default class extends Component {
//     deleteCharacterMutation = gql`
//         mutation deleteCharacter($id: ID!) {
//             deleteCharacter (where: {id: $id}) {
//                 id
//                 name
//             }
//         }
//     `
//     render () {
//         const id = this.props.id
//         return (
//             <Mutation mutation={this.deleteCharacterMutation}>
//                 {(deleteChar, {data}) => (
//                     <form onSubmit={event => {
//                         event.preventDefault()
//                         deleteChar({
//                             variables: {
//                                 id: id,
//                             }
//                         })
//                         window.location.reload(true)
//                     }}>
//                         <input type="submit" value="Delete"/>
//                     </form>
//                 )}
//             </Mutation>
//         )
//     }
// }

// import React, { Component } from 'react'
// import { Mutation } from "react-apollo";
// import gql from "graphql-tag";

const style = {
    background: 'red'
}

// const theme = createMuiTheme({
//     palette: {
//         primary: blue,
//     },
// });

class AlertDialog extends Component {
    state = {
        open: false,
    };

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

    render() {
        return (
            <div>
                <Button style={style} onClick={this.handleClickOpen}>Delete</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Caution! You are about to delete me!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} type="submit" size="small" color="secondary" variant="contained" >
                            No, my mistake. What was I thinking?
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
                                        Of course, what a silly question.
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

export default AlertDialog;





// export default class extends Component {
//         state ={
//             buttonText: "Delete"
//
//         }


//     render () {
//         const id = this.props.id
//         return (
//             <Mutation mutation={this.deleteCharacterMutation}>
//                 {(deleteChar, {data}) => (
//                     <form onSubmit={event => {
//                     event.preventDefault()
//                     deleteChar({
//                     variables: {
//                         id: id,
//                         }
//                     })
//                         window.location.reload(true)
//                     }}>
//                         <Button style={style} type="submit" size="small" variant="contained">{this.state.buttonText}</Button>
//                   </form>
//              )}
//          </Mutation>
//       )
//    }
// }


//
//         <Button onClick={this.handleClose} color="primary" autoFocus>
// Agree
// </Button>