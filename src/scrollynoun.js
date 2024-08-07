/*************
        
        This is the JavaScript that makes the scrolly work 
        
        *************/

/* 
        This part attaches a scroll to the element with id="scrolly-ai2html"    
        */
(() => {
  const scroller = scrollama();

  scroller
    .setup({
      parent: document.querySelector("#scrolly-table"),
      step: ".step",
      offset: 0.5,
      debug: false,
    })
    .onStepEnter(function ({ element, index, direction }) {
      const event = new CustomEvent("stepin", {
        detail: { direction: direction },
      });
      element.dispatchEvent(event);
    })
    .onStepExit(function ({ element, index, direction }) {
      const event = new CustomEvent("stepout", {
        detail: { direction: direction },
      });
      if (direction === "up" && element.previousElementSibling) {
        const event = new CustomEvent("stepin", {
          detail: { direction: direction },
        });
        element.previousElementSibling.dispatchEvent(event);
      }
    });

  window.addEventListener("resize", scroller.resize);
})();
