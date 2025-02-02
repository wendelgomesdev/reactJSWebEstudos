import React, { Component } from "react";

const Post = function (props) {
    return (
        <div key={props.id}>
            <h3>Nome: {props.username}</h3>
            <span>{
                props.curtidas > 1 ?
                    props.comentatios + ' Curtidas' :
                    props.comentatios + ' Curtida'} |  

                { props.comentatios > 1 ?
                    props.comentatios + ' Comentários' :
                    props.comentatios + ' Comentário'}
            </span>
            <hr />
        </div>
    );
}

class RenderizacaoCondicional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, username: 'Matheus', curtidas: 10, comentatios: 2 },
                { id: 2, username: 'Lucas', curtidas: 30, comentatios: 20 },
                { id: 2, username: 'Maria', curtidas: 1, comentatios: 1 },
                { id: 3, username: 'Guilherme', curtidas: 120, comentatios: 45 }
            ]
        };

    }

    render() {
        return (
            <div>
                {
                    this.state.feed.map((item) => {
                        return (
                            <Post
                                key={item.id}
                                username={item.username}
                                curtidas={item.curtidas}
                                comentatios={item.comentatios}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default RenderizacaoCondicional;