import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

// export default class extends Component {
//     state = {
//         name: "",
//         level: 1,
//         nickname: ""
//     }
//     createCharacterMutation = gql`
//         mutation createCharacter($name: String!, $level: Int!, $nickname: String!) {
//             createCharacter(data: {name: $name, level: $level, nickname: $nickname }) {
//                 id
//                 name
//                 level
//                 nickname
//             }
//         }
//     `;
//
//     render () {
//         return (
//             <Mutation mutation={this.createCharacterMutation}>
//                 {(createChar, {data}) => (
//                     <div>
//                         <form onSubmit={event => {
//                             event.preventDefault()
//                             createChar({variables: {
//                                     name: this.state.name,
//                                     level: this.state.level,
//                                     nickname: this.state.nickname
//                                 }})
//                             window.location.reload(true)
//                         }}>
//                             <input type="text" placeholder="Name" onChange={event => this.setState({ name : event.target.value})}/>
//                             <input type="number" placeholder="Level" min="1" max="50" onChange={event => this.setState({ level : parseInt(event.target.value)})}/>
//                             <input type="text" placeholder="Nickname" onChange={event => this.setState({ nickname : event.target.value})}/>
//                             <input type="submit" />
//                         </form>
//                     </div>
//                 )}
//             </Mutation>
//         )
//     }
// }




// import React, { Component } from 'react';
// import gql from "graphql-tag";
// import { Mutation } from "react-apollo";
//
//
export default class extends Component {
    state = {
        name: "",
        level: 1,
        about: "",
        nickname: ""
    }
    createCharacterMutation = gql`
        mutation createCharacter ($name: String!, $level: Int!, $about: String!, $nickname: String!) {
            createCharacter (data: {name: $name, level: $level, about: $about, nickname: $nickname }) {
                id
                name
                level
                about
                nickname
            }
        }
    `;

    render () {
        return (
            <Mutation mutation={this.createCharacterMutation}>
                {(createChar, {data}) => (
                    <div>
                        <form onSubmit={event => {
                            event.preventDefault()
                            createChar({variables: {
                                    name: this.state.name,
                                    level: this.state.level,
                                    about: this.state.about,
                                    nickname: this.state.nickname
                                }})
                            window.location.reload(true)
                        }}>
                            <input type="text" placeholder="Name" required onChange={event => this.setState({ name : event.target.value})}/>
                            <input type="number" placeholder="Level" required min="1" max="5000" onChange={event => this.setState({ level : parseInt(event.target.value)})}/>
                            <input type="text" placeholder="about" required onChange={event => this.setState({ about : event.target.value})}/>
                            <input type="text" placeholder="Nickname" required onChange={event => this.setState({ nickname : event.target.value})}/>
                            <input type="submit" />
                        </form>
                    </div>
                )}
            </Mutation>
        )
    }
}
