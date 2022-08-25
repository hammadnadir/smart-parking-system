import React from "react";

export class ComponentToPrint extends React.PureComponent {

  render() {
    return (
      <div className="relativeCSS">
        <div className="flash" />
        <table className="testClass">
          <thead>
            <tr>
              <th className="column1">Test Name</th>
              <th>Test</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
