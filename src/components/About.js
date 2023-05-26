import React from 'react'
const About = () => {
  
  return (
    <div>
       <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Overview
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Online Notepad is a free browser-based text editor</strong> that allows you to create and edit multiple plain-text files in your browser. No registration and login required. It is great for writing quick notes and printing a simple page. What makes it special is the autosave functionality which saves your draft every second. This prevents data loss in case you accidentally close the tab, or the browser window suddenly crashes. The document you're working on will be automatically restored when you visit back, even when you close and reopen your browser. There's also support for saving documents directly to your computer. Online Notepad is packed with core features that your common text editor provides, including undo, redo, copy, cut, paste, find and replace, font formatting, character map, insert date and time, emoji list, spell checker, word counter, open and save files, and print page.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How does it work?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Changes are saved automatically as you work thanks to HTML5 localStorage API. It grabs a copy of the content from the text editor and saves it to your computer. With this method, your data never leaves your device. The default time interval at which draft is saved is 1000ms or 1 second. Your notes will stay in the web browser until you clear the cookies and other site data. You can try it out by typing anything in the editor and refreshing the page.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Browser Compatibility
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Online Notepad supports modern web browsers including Google Chrome, Mozilla Firefox, Safari, Opera, Edge, Internet Explorer and Steam browser. You need to enable JavaScript in order to use the app.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapsFive">
      About
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" id="headingFive">
      This web app is a free product, which can be used by any individual, company, school, government office etc. I originally made this for myself to help me remember ideas that will eventually end up on my personal blog. This simple tool that all started as a simple project has helped my productivity immensely and I hope it helps you too.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Useful Tools
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      I like making useful web apps. Feel free to check out my other side projects.

    Text Tools - A collection of web-based text processing tools that will help you automate the recurring tasks of editing and formatting blocks of text. </div>
    </div>
  </div>
  </div>    
</div>
  )
}

export default About
