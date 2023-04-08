# React-project
PawLove is a SPA , that enables users to post stories about their pets and interact with other users stories via comments and likes.

Backend is provided by softuni practice server.

Frontend – css and html designed by me and controlled by React. 

There are three ways css is applied- there is a static file in the public folder for more common stylization, separate css module files for most components and inline, made dynamic through react and js.

The unauthorized part of the application includes the register, login, pet cave, details and home page.

The home page is simply a representation of the site without any distinct functionality except a link to register page.

Register and login page are controlled by a form.

Register form consists of username, email,  password and confirm password. There is validation for the username length, for password and confirm password sameness. All fields are required.

Login form has username, email and password inputs. All fields are required again.

The pet cave is the place where the users interact and the stories are visualized. You can click on a story card and check out the details page, where unauthorized users can only read the content. Unauthorized users are able to click on comments and see them, while authorized if owners – can delete or edit the story, if not like and comment.

Authorized part includes create page and my cave page. Also edit page via a button in details page.

Create page consists of a form that makes a post api call upon submit to the server with data form the form – name, gender, age, breed, picture and story.

My cave page fetches only the stories of the currently logged in user.

Edit page lets authorized users make changes to their stories via put api call to the server.

The api service relies on four collections the server creates –users, pets, comments and likes. They are separated in three js files in the service folder.

The rest operations are detailed in the api files in the service folder, the authorization is done by an accessToken. There is simple error handling done by a try catch block which includes common fails.

There are four main folders in the src folder except the service and server -hooks, components, styles and contexts.

Components folder includes all the react components, separated in different folders.

Details holds the state for the current story, for the likes and comments.

Header component changes the navigation style and display, based on user authorization and location.

Login and register components change the style of the inputs through validation.

MyCave component holds state for myPets.

Pet state and is Loading are kept App.js.

PetCave, Create and Edit components change the pet state through props.

PetCave, MyCave and Details components change isLoading state through props.

There are three hooks – useAuth, useForm and useLocalStorage.

useAuth does the validation and authorization logic.

useForm holds formValues state and handles form data.

useLocalStorage keeps the user information and sets the accessToken.

There are two contexts - AuthContext and CommentLikesContext.

There is a RouteGuard for create,details, edit and my cave pages.

PetOwner is used for the edit page.

Loading component is a loader set for my cave, pet cave and details pages.
