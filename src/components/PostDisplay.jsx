import React, { useEffect, useState } from "react";
import "./style/PostDisplay.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function PostDisplay() {
  let [posts, setPosts] = useState({
    Graph: {
      posts: [
        {
          label: "Dijkstras",
          codeBlocks: [
            {
              description:
                "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
              code: `function BFS(start){
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
}`,
            },
            {
              description:
                "This is a modified version of the Dijkstras algorithm.",
              code: "let queue = true;",
            },
          ],
        },
        {
          label: "A*",
          codeBlocks: [
            {
              description:
                "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
              code: `function BFS(start){
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
}`,
            },
            {
              description:
                "This is a modified version of the Dijkstras algorithm.",
              code: "let queue = true;",
            },
          ],
        },
      ],
    },
    Math: {
      posts: [
        {
          label: "Dijkstras",
          codeBlocks: [
            {
              description:
                "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
              code: `function BFS(start){
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
}`,
            },
            {
              description:
                "This is a modified version of the Dijkstras algorithm.",
              code: "let queue = true;",
            },
          ],
        },
      ],
    },
  });

  useEffect(() => {
    setPosts((prev) => prev);
  }, []);

  function renderPosts() {
    let categoryJsx = [];

    for (let category in posts) {
      let postJsx = [];

      for (let post of posts[category].posts) {
        let codeBlocksJsx = [];

        for (let codeBlock of post.codeBlocks) {
          let tmpCodeBlockJsx = (
            <div className="descAndCodeWrapper">
              <div className="postDescriptionContainer">
                <p className="postDescription">{codeBlock.description}</p>
              </div>

              <div className="postCodeContainer">
                <SyntaxHighlighter language="javascript" style={arta}>
                  {codeBlock.code}
                </SyntaxHighlighter>
              </div>
            </div>
          );

          codeBlocksJsx.push(tmpCodeBlockJsx);
        }

        let newPost = (
          <div className="postContainer">
            <div className="postHeaderContainer">
              <p className="postHeader">{post.label}</p>
            </div>

            {codeBlocksJsx}
          </div>
        );

        postJsx.push(newPost);
      }

      let tmpCategoryJsx = (
        <div className="categoryContainer">
          <div className="categoryHeaderContainer">
            <div className="categoryHeader">{category}</div>
          </div>

          {postJsx}
        </div>
      );

      categoryJsx.push(tmpCategoryJsx);
    }

    return categoryJsx;
  }

  return <div className="postDisplayContainer">{renderPosts()}</div>;
}
