#<<<<<<< HEAD
# 🎬 Netflix Frontend

**By Noetica-Tech | Cloud • DevOps • Security**

---

## 📌 Overview

This project is the frontend application for the Netflix-style platform. It connects to the backend API and provides the user interface for interacting with the system.

The frontend should be deployed on a **separate Ubuntu server** from the backend.

---

## ⚙️ Prerequisites

Before running the frontend application, make sure the following are installed on your Ubuntu server:

* **Node.js**
* **npm**

---

## 🐧 Install Node.js and npm on Ubuntu

Update your package list and install Node.js and npm:

```bash
sudo apt update -y
sudo apt install nodejs -y
sudo apt install npm -y
```

### Verify the installation

```bash
node -v
npm -v
```

---

## 🚀 Getting Started

### 1. Clone the frontend repository

```bash
git clone https://github.com/{your-frontend-repository}.git
cd {your-frontend-folder}
```

### 2. Install all project dependencies

Run the following command to install all required packages from `package.json`:

```bash
npm install
```

Or simply:

```bash
npm i
```

---

## 🔗 Configure the Backend API

Before starting the frontend, update the API configuration so it points to your backend server.

### File to edit

```bash
src/api/axiosConfig.js
```

### Update the file with your backend details

```javascript
import axios from 'axios';

export default axios.create({
    baseURL: 'https://{your-backend-url}/api',
    headers: {
        'Content-Type': 'application/json',
    },
});
```

### Example

Replace:

```javascript
https://{your-backend-url}:8080/api
```

With your actual backend URL, for example:

```javascript
http://192.168.1.10:8080/api
```

or

```javascript
https://your-domain.com/api
```

---

## ▶️ Run the Frontend Application

After installing dependencies and updating the backend URL, start the frontend server:

```bash
npm start
```

---

## 🌍 Access the Application

Once the application is running, it will usually be available at:

```bash
http://localhost:3000
```

If the frontend is hosted on a remote Ubuntu server, access it using the server IP address:

```bash
http://<server-ip>:3000
```

---

## ✅ Important Notes

* Make sure the backend server is already running and accessible.
* Confirm that the backend URL in `axiosConfig.js` is correct.
* Ensure port **3000** is open on the frontend server.
* If your backend uses a custom port such as `8080`, make sure that port is also open.
* Use **HTTPS** in production environments for better security.

---

## 💡 Optional Improvement

For better flexibility, you can use an environment variable instead of hardcoding the backend URL.

Example `.env` file:

```bash
REACT_APP_API_URL=https://your-backend-url/api
```

Then update `axiosConfig.js` like this:

```javascript
import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
```

---

## 📦 Summary

Frontend setup steps:

1. Install Node.js and npm on a separate Ubuntu server
2. Clone the frontend repository
3. Run `npm install` or `npm i`
4. Edit `src/api/axiosConfig.js` and add your backend URL
5. Run `npm start`

---

## 🎓 Final Words

Good luck with your studies and project deployment.

**— Noetica-Tech**
=======
# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)
>>>>>>> origin/main
