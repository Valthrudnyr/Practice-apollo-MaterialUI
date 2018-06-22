import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";



import './index.css';
import CharactersView from './CharactersView'
import CreateCharacter from './CreateCharacter'

    const client = new ApolloClient({
        uri: "https://us1.prisma.sh/nathanael-sherwood/CharacterWalle/dev"
    });

const App = () => (
    <ApolloProvider client={client}>
        <div>
                        <h2> 🚀 My first Apollo app 🚀</h2>
                        <h4>Create and Submit your new Character</h4>
                        <CreateCharacter/>
                        <hr/>
            <CharactersView/>
        </div>
    </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();




// const client = new ApolloClient({
//     uri: "https://us1.prisma.sh/nathanael-sherwood/CharacterWalle/dev"
// });
//
// const App = () => (
//     <ApolloProvider client={client}>
//         <div>
//             <h2>🚀 Character Tracking System</h2>
//             <CreateCharacter/>
//             <hr/>
//             <CharactersView/>
//         </div>
//     </ApolloProvider>
// );
//
// ReactDOM.render(<App/>, document.getElementById('root'));





// import React from 'react';
// import ReactDOM from 'react-dom';
// import CreateCharacter from './CreateCharacter'
// import registerServiceWorker from './registerServiceWorker';
// import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";
// import { Query, ApolloProvider } from "react-apollo";
//
// import DeleteCharacter from './DeleteCharacter'
// import UpdateCharacter from './UpdateCharacter'