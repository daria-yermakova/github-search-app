# Github search app

SPA, which lists the repositories and organizations by search term.

Use api.github.com to get data.

Use React or React Native. Hooks and functional components.

Use any external State management (Redux). 

Use scss/sass and responsive styles.

Search have debounce input (means that request for the data should be after 300-500 ms after the user finished printing text, not with Enter press or other).

Previous requests are shown in the history module, the maximum number of  displayed requests is 5 (meaning that we should keep 5 new results, and if we add the new one, the first 
result should be deleted). History should be available after reloading the page or mobile application.

If there are results, the user should be able to press on the result and redirected to the GIT repo.
