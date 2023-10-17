<h1>PAWLove </h1>
(Deployed with Firebase - https://pawlove-23bad.web.app/ )
<h2>Pet owners forum </h2>
<h3>1. Purpose: </h3> I made this SPA for the React module in SoftUni. It has changed a lot since the first draft. I picked the topic of pets, because as a veterenary doctor and cat owner it was something familiar to me. The idea is that pet owners can login and create pet stories that other usres can like and comment. I mostly followed the project guidelines. The design and colors were my idea and the layout is basic and simple. React architecture is inspired by the course.
<h3>2. Technologies :</h3>
<strong>React</strong> with <strong>React-router</strong><br>
<strong>HTML</strong> is done by me from scratch, styling is done in <strong>CSS</strong> modules and globally by index.css. <br>
Back-end provider is firebase - <strong>Cloud Firestore</strong> - which I find very helpful and well structured, thats why i also use <strong>Firebase authentication</strong> with email/password sign in method. 
<h3>3. App runtrough:</h3>
<h4>3.1. Navigation</h4> 
Main navigation in header
  <ul>
    <li>for users - users can access homepage, catalog page, create page, logout and personal page with own stories </li>
    <li>for guests - guests can access homepage, catalog page, register and login page</li>
  </ul>    
<h4>3.2. Home</h4>
Home page is static, has a link to register page for guests
<h4>3.3. Petcave (catalog) page</h4> 
Has all posted stories. Guest and users can view and click on them and access details page from there.   
 <h4>3.4. Details</h4> - opens when story crd is clicked
    <ul>
        <li>for guests - guests can view basic information and likes and comment count</li>   
        <li>for users - users can additionally like and unlike, comment and see all comments   </li>
        <li>for owners - can edit and delete own stories</li>
    </ul>
<h4>3.5. Owner's cave (profile page)</h4>
A catalog with all of the users created stories
<h4>3.6. Authentication pages</h4> - login and register
    <ul>
      <li>Login page</li>
      <li>Register page</li>    
    </ul>

<h4>3.7. </h4>  
<h3>4. In development:</h3>

<h3>5. Conslusion:</h3>   





