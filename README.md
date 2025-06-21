# 🛍️ Geer-Inspired E-commerce Platform

An e-commerce web application inspired by [Geer.in](https://geer.in), built as part of the **Geer Intern Assignment**. This full-stack project includes a responsive product listing frontend using **Next.js**, and a product API backend using **Express.js**.

---

## 📂 Folder Structure

```
/frontend  → Next.js app (Product listing UI)
/backend   → Node.js + Express (Product APIs)
```

---

## 🚀 How to Run the Project

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/NikhilV6/gold-silver-store.git
cd gold-silver-store
```

### ✅ 2. Start the Backend Server

```bash
cd backend
npm install
npm start
```

- Runs at [http://localhost:8000](http://localhost:8000)
- API Endpoints:
  - `GET /api/products` – Get all products
  - `POST /api/products` – Add a new product
  - `DELETE /api/products/:id` – Delete a product by ID

### ✅ 3. Start the Frontend App

```bash
cd ../frontend
npm install
npm run dev
```

- Runs at [http://localhost:3000](http://localhost:3000)
- Pages:
  - `/` – Product listing (home)
  - `/product/:id` – Single product details

---

## 🧱 Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | Next.js (App Router) |
| Styling    | Tailwind CSS        |
| Backend    | Node.js + Express   |
| Data Store | JSON / In-Memory    |

---

## ✅ Features Implemented

- [x] Responsive product listing UI
- [x] Image, name, and price per product
- [x] API-driven dynamic product rendering
- [x] Dynamic route: `/product/:id`
- [x] Reusable Header and Footer components

---

## 📝 Notes & Assumptions

- Products are stored in a JSON file or memory (no DB)
- Images are served from `/public/` or backend static route
- GitHub repository is structured as a monorepo

---

## 📦 Optional Bonus (To-do)

- [ ] Add product filtering or search
- [ ] Add admin panel for adding/deleting products
- [ ] Category-wise product pages

---

