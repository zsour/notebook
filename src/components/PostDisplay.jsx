import React from "react";
import "./style/PostDisplay.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `
  function BFS(start){
    let queue = [start];
    let visited = {};
    
    while(queue.length > 0){
      let current = queue.shift();
    
      if(current in visited) continue;
      visited[current] = true;  

      for(let neighbor in current.neighbors){
        queue.push(neighbour);
      }
    }
  }
`;

export default function PostDisplay() {
  return (
    <div className="postDisplayContainer">
      <div className="categoryContainer">
        <div className="categoryHeaderContainer">
          <div className="categoryHeader">Graph</div>
        </div>
        <div className="postContainer">
          <div className="postHeaderContainer">
            <p className="postHeader">Dijkstras Algorithm</p>
          </div>

          <div className="descAndCodeWrapper">
            <div className="postDescriptionContainer">
              <p className="postDescription">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint Lorem ipsum dolor sit amet, qui minim labore adipisicing
                minim sint cillum sint consectetur cupidatat.
              </p>
            </div>

            <div className="postCodeContainer">
              <SyntaxHighlighter language="javascript" style={arta}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
