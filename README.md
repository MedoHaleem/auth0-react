
## Available Scripts

In the project directory, you can run:

### `npm start`

Copy the .env file and place it in root folder (client) <br>
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### How Auth0 was setup

Auth0 login button is found in root page and through the navigation bar, you can login through email or gmail.

### How was Auth0 Roles was setup

Sales rep roles is setup using  slightly edited Auth0 rule, this is the following rule:


```function (user, context, callback) {

  // Roles should only be set to verified users.
  if (!user.email || !user.email_verified) {
    return callback(null, user, context);
  }

  user.app_metadata = user.app_metadata || {};
  // You can add a Role based on what you want
  // In this case I check domain
  const addRolesToUser = function(user) {
    const endsWith = '@asolvi.com';

    if (user.email && (user.email.substring(user.email.length - endsWith.length, user.email.length) === endsWith)) {
      return ['sales_rep'];
    }
    if (user.email === "medo_e3@hotmail.com") {
      return ['sales_rep'];
    }
    return ['user'];
  };

  const roles = addRolesToUser(user);

  user.app_metadata.roles = roles;
  auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
    .then(function() {
      context.idToken['http://localhost:3000/roles'] = user.app_metadata.roles;
      callback(null, user, context);
    })
    .catch(function (err) {
      callback(err);
    });
}
```


 Of course in the real life case we would store and setup user roles through Database in users_role table that contain for example user_id and role_id
 and we use Auth0 rule to fetch the user role through the database (Auth0 already have template to connect to the relational database to get user role).
 I opted to this approach to speed up configuration and setup as per assigment spec.
 
 
 By default getting user role is considered a custom claim as Auth0 doesn't provide it by default in the access token so I wrote a custom rule to set the user role in the claim.
 
 ```
function (user, context, callback) {
  if(user.app_metadata && user.app_metadata.roles) {
   context.accessToken['http://localhost:3000/roles'] = user.app_metadata.roles;
  }
  callback(null, user, context);
}
```
 
 
### Getting the Access Token

After your login you can get access token in profile page to test the api separately without the client side app.

The Access Token is stored in-memory to protect against XSRF and react have already built-in security against XSS, I maintain user session across tabs
through silent auth request provided by Auth0.