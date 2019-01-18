import React from 'react';
import {connect} from 'react-redux';

import Modal from '../Modal';
import history from "../../history";
import {fetchStream, deleteStream} from "../../actions";

class StreamDelete extends React.Component {
    streamId = this.props.match.params.id;

    componentDidMount() {
        this.props.fetchStream(this.streamId);
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure that want delete stream?'
        }

        return `Are you sure that want delete stream with title: ${this.props.stream.title}?`
    }

    renderActions() {
        return (
            <React.Fragment>
                <div onClick={() => history.push('/')} className="ui red cancel inverted button">
                    <i className="remove icon"/>
                    Cancel
                </div>
                <div onClick={() => this.props.deleteStream(this.streamId)} className="ui green ok inverted button">
                    <i className="checkmark icon"/>
                    Yes
                </div>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                Stream Delete
                <Modal
                    icon="delete"
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);