import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchStream, editStream} from "../../actions";
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    streamId = this.props.match.params.id;

    componentDidMount() {
        this.props.fetchStream(this.streamId);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.streamId, formValues)
    };

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        return(
            <div>
                <h3>Edit a Stream</h3>

                {/*<StreamForm
                    initialValues={{
                        title: {this.props.stream.title},
                        description: {this.props.stream.description}
                    }}
                    onSubmit={this.onSubmit}
                />*/}
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);