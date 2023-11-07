<h1 align="center">Wedding-Wish-List React App  💟</h1>  
<p align="center">
    A simple Wishlist App built using <a href="https://reactjs.org/">React</a>
</p>

![wedding wishlist](https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/98d69e9e-2309-4f1c-b8c2-c38bfac38de9)

## This is a super simple Wishlist App built using React.js

You can view a live demo of the project here: https://wedding-wish-list.netlify.app/

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

* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/531eb2b2-5e31-4a04-a436-915ef57375ef" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/d9cb5e75-00bf-4344-9224-38d0e8534c39" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/d526e066-f37c-4e87-abe6-a9f274daade8" width="30">

## Contact

Alexander - [@my linkedin](https://www.linkedin.com/in/alexander-nikel-888aab279/) [@my xing](https://www.xing.com/profile/Alexander_Nikel08841/cv)

My Portfolio - [https://portfolio-nikel.glitch.me/](https://portfolio-nikel.glitch.me/)
!!!