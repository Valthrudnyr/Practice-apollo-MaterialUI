import React, { Component, Fragment } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


// 1. Pass in Character as Props
// 2. Build pre-populated form that updates state
// 3. Configure Update/Submit component swapping
// 4. Setup Graphql updateCharacter Mutation
// 5. Connect Mutation Form with Mutation Statement



// import React, { Component, Fragment } from 'react'
// import { Mutation } from "react-apollo";
// import gql from "graphql-tag";

const style = {
    background: 'blue'
}

export default class extends Component {
    state = {
        id: this.props.id,
        name: this.props.name,
        level: this.props.level,
        about: this.props.about,
        nickname: this.props.nickname,
        isUpdating: false,
        buttonText: "Update"
    }
    updateCharacterMutation = gql`
        mutation updateCharacter($id: ID!, $name: String!, $level: Int!, $about: String!, $nickname: String!) {
            updateCharacter (
                where: {id: $id},
                data: {name: $name, level: $level, about: $about, nickname: $nickname,}
        ){
                id
                name
            }
        }
    `

    updateComp = () => {
        return (
            <Fragment>
                <TextField type="text" value={this.state.name} onChange={event => this.setState({name : event.target.value})}/>
                <br/>
                <input type="number" value={this.state.level} onChange={event => this.setState({level : parseInt(event.target.value)})}/>
                <br/>
                <TextField type="text" value={this.state.about} onChange={event => this.setState({about : event.target.value})}/>
                <br/>
                <TextField type="text" value={this.state.nickname} onChange={event => this.setState({nickname : event.target.value})}/>
                <br/>
            </Fragment>
        )
    }

    render () {
        const update= this.updateComp()
        return (
            <Mutation mutation={this.updateCharacterMutation}>
                {(updateChar, {data}) => (
                    <form onSubmit={event => {
                        event.preventDefault()
                        if(this.state.isUpdating){
                            updateChar({
                                variables: {
                                    id: this.state.id,
                                    name: this.state.name,
                                    level: this.state.level,
                                    about: this.state.about,
                                    nickname: this.state.nickname
                                }
                            })
                            this.setState({buttonText: "Update"})
                            window.location.reload(true)
                        } else {
                            this.setState({buttonText: "Submit"})
                        }
                        this.setState({isUpdating: !this.state.isUpdating })
                    }}>
                        {this.state.isUpdating ? update : null}
                        <Button style={style} type="submit" size="small" variant="contained">{this.state.buttonText}</Button>
                    </form>
                )}
            </Mutation>
        )
    }
}
