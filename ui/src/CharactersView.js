import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

import DeleteCharacter from './DeleteCharacter'
import UpdateCharacter from './UpdateCharacter'

const style = {
    background: 'cyan'
}

const styles = {
    card: {
        maxWidth: 335,
        margin: '2em'
    },
}
class SimpleCard extends Component {
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

    render()
    {
        const {classes} = this.props;
            return (
                <Query query={this.charactersQuery}>
                    {({loading, error, data}) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;

                        return data.characters.map(({id, name, level, about, nickname}) => (
                            <div class="flex-container"  key={id}>
                                <Card style={style} className={classes.card}>
                                    <CardContent>
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
                                        <CardActions>
                                            <Button size="small" color="error">Equipment</Button>
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </div>
                        ));
                    }}
                </Query>
            )
        }
    }


SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);