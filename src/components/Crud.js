import React from 'react';
import {Link} from 'react-router';

class Crud extends React.Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <title>Countries CRUD</title>
        <style dangerouslySetInnerHTML={{__html: "\n    input[type='submit'], button, [aria-label]{\n      cursor: pointer;\n    }\n    #spoiler{\n      display: none;\n    }\n  " }} />
        <form action="javascript:void(0);" method="POST" onsubmit="app.Add()">
          <input type="text" id="add-name" placeholder="New country" />
          <input type="submit" defaultValue="Add" />
        </form>
        <div id="spoiler" role="aria-hidden">
          <form action="javascript:void(0);" method="POST" id="saveEdit">
            <input type="text" id="edit-name" />
            <input type="submit" defaultValue="Edit" /> <a onclick="CloseInput()" aria-label="Close">✖</a>
          </form>
        </div>
        <p id="counter" />
        <table>
          <tbody><tr>
              <th>Name</th>
            </tr>
          </tbody><tbody id="countries">
          </tbody>
        </table>
      </div>
    );
  }
}

export default Crud;