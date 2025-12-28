# 🔐 Authentication System (Login & Create Account)

A modern, responsive **Login & Create Account (Registration) system** built using  
**HTML, Bootstrap 5.3.x, JavaScript**, with a clean UI and client-side validation.

This project demonstrates a **multi-step registration form**, password validation,
and interactive UI behavior using pure JavaScript.

---

## 👤 Author

**Shivam Kumar**

---

## 🚀 Project Features

### ✅ Login Page
- Email & password login form
- Password show / hide toggle
- Demo credentials card
- Forgot password alert (JS-based)
- Client-side credential validation
- Bootstrap alerts for error handling
- Fully responsive UI

### ✅ Create Account (Sign-Up Page)
- **Two-step registration form**
  - Step 1: Name, Email, Phone
  - Step 2: Password & Confirm Password
- Step-wise validation (cannot move forward without filling fields)
- Password match validation
- Password show / hide toggle
- JavaScript success alert on successful registration
- Clean Bootstrap alerts for errors
- Responsive design for all screen sizes

---

## 🛠️ Tech Stack Used

| Technology | Purpose |
|----------|---------|
| **HTML5** | Structure of pages |
| **CSS3** | Custom styling |
| **Bootstrap 5.3.x** | Responsive UI & components |
| **Bootstrap Icons** | Icons |
| **JavaScript (Vanilla JS)** | Validation, logic & interactivity |

> ⚠️ Bootstrap version used: **5.3.x (latest stable)**

---

## 🔑 Demo Login Credentials

Use the following credentials on the **Login Page**:

Email: shibu@gmail.com
Password: 123456

---

## 📜 How It Works

### 🔹 Login Page
- User enters email & password
- JavaScript checks credentials
- Shows:
  - Success alert if correct
  - Error alert if incorrect

### 🔹 Create Account Page
- Step 1 validates basic details
- Step 2 validates password match
- If passwords match → JS success alert
- No backend used (frontend-only demo)

---

## 🧠 JavaScript Highlights

- `nextStep()` → Moves to Step 2 after validation
- `backStep()` → Returns to Step 1
- `togglePassword()` → Show / hide password
- Form `submit` event → Password match validation
- Bootstrap alerts injected dynamically using JS

---

## 📱 Responsive Design

- Mobile-friendly
- Tablet-friendly
- Desktop-friendly  
Powered by **Bootstrap Grid System**

---

## 🔐 Security Note

This project currently uses **client-side validation only**.
For real-world use, you should add:
- PHP backend
- MySQL database
- Password hashing (`password_hash`)
- Server-side validation

---

## 🚧 Future Enhancements (Planned)

- PHP & MySQL integration
- AJAX form submission
- Email verification
- OTP-based registration
- Password strength checker
- Remember Me functionality
- Secure authentication system

---


## 📄 License

This project is created for **learning and demonstration purposes**.  
You are free to use and modify it.

---

## ⭐ Support

If you find this project helpful, give it a ⭐ on GitHub!

---

### ✅ End of README
