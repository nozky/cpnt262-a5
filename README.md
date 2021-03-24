# Assignment 5: JSON Routes with Heroku and MongoDB Atlas

I use `Dayjs module` to calculate the days from the last time i updated the page content.  

I also have import.js setting on root directory to be use for batch import data.

>Attribution is already included in the Gallery.

### Note:
- `Criteria No 2. Rendered single image`
  I have created two approch, Im sorry this is not to show off or whatsoever but more on future reference, When i am doing this, I always find ideas that got my interest, i write the code so i wont forget about it,  i also brute force this as i am running out of time.
  <br>

  - routes/api/v0.js: line 25: This is what i come up first as i like doing it dynamically and i am try to imitate some feature found in some frame work like react, i want to know if this is posible doing it with vanilla javascript. I am also aware that i did not pass the object to ejs template on a response. 
  <br>

  - routes/index.js: line 28: On this line, in the gallery item i added a view comments link that re-direct to single-item.ejs, i achieve this by grabbing the id and atouch it to the link along with the data to be rendered in the page.
  

---
### API

- GET /image/:id
  - To query a single item and passing data to ejs template. This is server side rendering.
  <br>
- GET /gallery/id/:id
  - Same as above but i am handling the the data on the front end. This is rendering front end.
  <br>
- GET /gallery/name/:name
  - I use this to query a title and it will return all title that contain the query string\<name>. 

---
### Live links
GH repo: [https://github.com/nozky/cpnt262-a5](https://github.com/nozky/cpnt262-a5)

Heroku Url: [https://norvs-cpnt262-a5.herokuapp.com/](https://norvs-cpnt262-a5.herokuapp.com/)

---
### Author
Norvillie Villaruel
2021 © Sait Web Development