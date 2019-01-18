import React from 'react';
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';

import {fetchStreams} from "../../actions";
import StreamDelete from "./StreamDelete";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/stream/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/stream/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large camera middle aligned icon"/>
                    <div className="content">
                        <Link to={`/stream/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreateStreamButton() {
        if (this.props.userIsSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/stream/create" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui relaxed divided list">
                    {this.renderList()}
                </div>
                {this.renderCreateStreamButton()}

                <Route path="/stream/delete/:id" exact component={StreamDelete}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        userIsSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);