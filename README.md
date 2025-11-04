# 🧠 React + Redux (No Prop Drilling Example)

This project is a simple **React + Redux Toolkit** example that demonstrates how to **avoid prop drilling** by using a global Redux store.


## Screenshot
![output](screenshots/image.png)

## 🚀 Overview

In React, **prop drilling** happens when data is passed from a parent component to deeply nested children, even if those intermediate components don’t need the data.  
Redux solves this problem by providing a **global store** where any component can access or update state directly — no need to pass props down multiple layers.

This project includes two main components:
- **UsernameInput** — lets the user type their name.
- **Greeting** — displays the name typed, using data directly from the Redux store.

Both components share the same state **without any props being passed** between them.


## 🧩 Features

- 🔁 **Global state management** using Redux Toolkit
- 🚫 **No prop drilling** — clean and scalable
- ⚡ **Real-time updates** between components
- 🧠 **Beginner-friendly** code and explanations
- 🧰 Built with **React + Redux Toolkit + React Redux**


## 🛠️ Technologies Used

| Technology | Purpose |
|-------------|----------|
| React | Frontend UI library |
| Redux Toolkit | Simplified Redux setup |
| React Redux | Connects React components to the Redux store |
| JavaScript (ES6+) | Programming language |
