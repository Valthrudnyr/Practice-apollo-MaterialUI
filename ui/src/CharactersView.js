import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

import DeleteCharacter from './DeleteCharacter'
import UpdateCharacter from './UpdateCharacter'

export default class extends Component {
    charactersQuery = gql`
        {
            characters {
                id
                name
                level
                about
                nickname
            }
        }
    `
    render () {
        return (
            <Query query={this.charactersQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return data.characters.map(({ id, name, level, about, nickname }) => (
                        <div key={id}>
                            <h3>{`${name}: LVL ${level}`}</h3>
                            <p>{about}</p>
                            <p>{nickname}</p>
                            <UpdateCharacter id={id}
                                             name={name}
                                             level={level}
                                             about={about}
                                             nickname={nickname}
                            />
                            <br/>
                            <DeleteCharacter id={id}/>
                        </div>
                    ));
                }}
            </Query>
        )
    }
}
