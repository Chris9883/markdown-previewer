import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  const inlineCode ="`<div>Hello World!</div>`";
  const backticks ="```"
  const defaultText = `# Welcome to my Markdown Previewer!
  Type some text to see the output on the right and style it with markdown -
  You can make your text **bold**, *italics*, or ***both***. 
  ~~Crossing stuff out~~ or adding code ${inlineCode} is another fun thing to do.
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

> This previewer was built by [@Chris9883](github.com/chris9883) as part of a [freecodecamp](freecodecamp.org) project. 

![freecodecamp logo](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/800px-FreeCodeCamp_logo.png)`


  const [input, setInput] = useState(defaultText);
  
  function resolve(e) {
    setInput(e.target.value);
    console.log(marked(input))
  }

  marked.setOptions({
    breaks: true,
  });


  return (
    <div className="App">
     
      <nav className="navbar navbar-light bg-dark text-light d-flex justify-content-center align-items-center">
        <a className="navbar-brand text-light" href="/">Markdown Previewer</a>
    
      </nav>
      <main>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 text-center mt-5">
              <textarea id="editor" className="col-10" rows="20" onChange={resolve} value={input}></textarea>
            </div>
            <div className="col-sm-12 col-md-6">
              <div id="preview" className="col-10" dangerouslySetInnerHTML={{__html: marked(input)}}></div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}


export default App;
