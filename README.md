<h1 align="center">Wedding-Wish-List React App  💟</h1>  
<p align="center">
    A simple Wishlist App built using <a href="https://reactjs.org/">React</a>
</p>

![wedding wishlist](https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/d7f81994-1adb-4d05-a5f7-7f3f1737419f)

## This is a super simple Wishlist App built using React.js

You can view a live demo of the project here: https://wish-list-wedding.netlify.app/

## 🙂 Features:

- 🗑️ Remove Individual Elements
- ❌ Delete Complete List
- 🖼️ Image-Slide

## A part of the code that is responsible for the function for the remove button.
````
const removeItem = (id) => {
    let newGifts = gifts.filter(element => element.id !== id);
    setGifts(newGifts);
  };

<button className='btnDelete' onClick={ ()=> removeItem(id) }>
    <img src={Trash} alt="remove" width='20' height='20' />
</button>
````

## Built With

In this section you will find the programming languages ​​/ frameworcs / libraries that I used in this project.

* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/c43e4d15-62e4-4254-a673-c4021fd4cf25" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/e8f0b5ca-935a-45d1-b5c0-419f02ee83d4" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/d1885e0d-bc56-480b-b104-b181b8c82cbf" width="30">

## Contact

Alexander - [@my linkedin](https://www.linkedin.com/in/alexander-nikel-888aab279/) [@my xing](https://www.xing.com/profile/Alexander_Nikel08841/cv)

My Portfolio - [https://portfolio-nikel.glitch.me/](https://portfolio-nikel.glitch.me/)
!!!!
