import { connect } from "react-redux";
import React, { Component } from "react";

const DoppelgangerContainer = ({ doppelganger }) => {
    if (doppelganger.found) {
        return (
            <div>
                <img src={doppelganger.url} />
            </div>
        );
    } else {
        return <div>No Doppelganger Found. Try taking another selfie.</div>
    }
}

function mapStateToProps({ doppelganger }) {
    return { doppelganger };
}

export default connect(mapStateToProps)(DoppelgangerContainer);
