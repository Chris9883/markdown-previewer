import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  const inlineCode ="`<div>Hello World!</div>`";
  const backticks ="```"
  const defaultText = `# Welcome to my Markdown Previewer!

  Type some text in the editor to see it converted into HTML and style it with markdown -
  You can make your text **bold**, *italics*, or ***both***. 

  ~~Crossing things out~~ or adding code ${inlineCode} is another fun thing to do.
  You can even add whole code blocks:
  ${backticks} 
  function sayHello(name) = {
    console.log("Hello", name);
  } 
  ${backticks}

  ## How to add lists
  It's easy! 
  1. You type a number followed by a dot
  2. You add your list item
  
  and there you have it - an ordered list! Unordered lists  on the other hand are a great tool for 
  - Having an eye on things you need to do
  - Writing down ideas
  - Keeping track of stuff you need to buy at the supermarket, such as
       - bananas and
      - bread.

> This previewer was built by [@Chris9883](github.com/chris9883) as part of a [freecodecamp](freecodecamp.org) project. `


  const [input, setInput] = useState(defaultText);
  
  function resolve(e) {
    setInput(e.target.value);
    console.log(marked(input))
  }

  marked.setOptions({
    breaks: true,
  });


  return (
    <div className="App bg-white">
     
      <nav className="navbar navbar-light bg-dark text-light d-flex justify-content-center align-items-center">
        <a className="navbar-brand text-light" href="/"><h1>Markdown Previewer</h1></a>
      </nav>
      <main>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 text-center mt-md-5 mt-sm-4">
              <textarea id="editor" className="col-10 p-md-4 p-sm-2" rows="20" onChange={resolve} value={input}></textarea>
            </div>
            <div className="col-sm-12 col-md-6 mt-5">
              <div id="preview" className="col-11 p-sm-2 bg-white" dangerouslySetInnerHTML={{__html: marked(input)}}></div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}


export default App;
