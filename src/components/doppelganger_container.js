import { connect } from "react-redux";
import React, { Component } from "react";

const DoppelgangerContainer = ({ doppelganger }) => {
    console.log(doppelganger)
    return (
        <div>
            <img src={doppelganger.url} />
        </div>
    );

}

function mapStateToProps({ doppelganger }) {
    return { doppelganger };
}

export default connect(mapStateToProps)(DoppelgangerContainer);
