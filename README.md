# Movie DB Browser Demo App

To run the app locally (developed and tested with Node v12.14.0):

```
$ git clone https://github.com/triniMahn/moviebrowser.git
$ cd moviebrowser
$ npm install
(Before you start: add your Movie DB API key to the constants.js file)
$ npm start
```

## App Structure Notes

This application is a React isomorphic application which "renders" and serves the markup from the server-side.

* Why did I choose isomorphic React?
    * I had the skeleton of a very basic app from a previous project, and this allowed me to "stand up"/serve the app very easily
    * In terms of React concepts, I haven't worked with React in over a year and a half, so this familiar scaffolding allowed me to get started on the implementation without a lot of set up -- given the short turnaround time for the project
    * Oh yeah, and we get better SEO and indexing (supposedly, since Google says their crawler doesn't mind ajaxy sites anymore)
    * Oh yeah again, and we get a better perceived loading time without any "janky-ness"

* Caveats
    * My original app skeleton used Redux for state management, but I stripped use of Redux out as it would have been overkill for this project
    * Now, there's no state management, but upon direct load of a route, the data is made available from the server on load -- providing the benefits discussed above


## Additional Caveats

* Not assessed for accessibility standards whatsoever
* Not robust in terms of error handling (i.e. no toaster msg, UI degrades somewhat gracefully) -- for failed api calls, etc.
* CSS compilation is not working -- can't get it to work in an isomorphic env -- so there are ugly style objects in some components
* The layout does not match the design mockups 100%, and I'm not sure what's up with the nav width on the detail page (I suspect some React + Bootstrap issue)

