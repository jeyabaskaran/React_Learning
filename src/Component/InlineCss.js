import React from "react";

const sheet = {
    fontSize: '72px',
    color: 'blue'
}

function InlineCss() {
    return (
        <div>
            <h2 className="Error">Error</h2>
            <h1 style={sheet}>Inline Docs</h1>
        </div>
    )
}

export default InlineCss;