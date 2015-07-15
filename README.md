# Instructions

1. Build an address book using the attached wireframe. All contacts should be listed on the left had side, be searchable, and can be toggled to view their full details in the main view.

2. Contacts should be editable in the main view.

3. Make sure to use filters, binding, and some of Angular's built in directives.

4. Replace this README file with a paragraph explaining your process, the directives you used, and why.

5. BONUS: Use the ng-router directive, pulled in using npm.

6. Submit your app to your Github Repo by the end of day tomorrow and send us a link to view it.

NOTE: use the contacts.json file in the public folder to populate the Address Book.

## Installation

1. Install Node and NPM
2. Run npm install to install the dependencies.
3. Start the server: `node server.js`
4. View in browser at `http://localhost:8080`

***

# Process

1. Stories
* Contacts are listed on the left side bar
* Contact details are shown on the main view
* List is searchable
* Details are editable

2. Business Logics
* Use $http service to get contacts.json
* Build Left Side List -> ng-repeat each contact's lastname and firstname -> filtered by search input && ordered by lastname
*	Build Main View -> use form and <input disabled> with some css decorations to demonstrate details and toggle input back when user click "edit" so that user can directly edit details.
* Use ngroute to identify which contact user clicks by passing $routeparams into main view controller
* Build a customized filter to format phone number as (123)456-7890

3. Module, Directives, filters, Services
* ngroute, $http, ng-repeat, ng-view, ng-model, ng-disable, ng-class, ng-if, ng-hide, ng-cloak, | filter:, | orderBy

4. CSS
* Use grid system from bootstrap
* Use google font use get 'Raleway'
* Build UI based on psd file(color, font, margin and etc)

5. Restrictions
* Mobile version not available
* May have cross-brower compatibility issues
* The way of doing edit and save may be vunnerable to XSS

6. NOTE

server.js file has been modified a bit (document root directory change)

Enter http://localhost:8080/public to run 

