# CA Monk – Blog Dashboard (Frontend Assignment)

This project is a **React-based Blog Dashboard** built as part of the CA Monk Frontend Developer Intern assignment.
The application demonstrates clean UI structuring, state management, and intuitive user interaction.

---

![alt text]("C:\Users\asheesh gaur\Downloads\camonk-interview.png")

## ✨ Features Overview



### 🧱 Two-Panel Layout

The UI is divided into **two main sections**:

#### **Left Panel**

* Displays a **Create New Blog** form at the top
* Shows a **list of blog cards** below the form
* Each blog card contains:

  * Categories
  * Blog title
  * Short description
  * Published date

#### **Right Panel**

* Displays the **full content of the selected blog**
* Includes:

  * Blog cover image
  * Blog title
  * Categories
  * Published date
  * Blog description
  * Complete blog content

---

## 📝 Creating a New Blog

* Users can create a new blog using the **Create New Blog** form located at the **top of the left panel**
* Required fields:

  * Title
  * Short description
  * Categories (comma-separated)
  * Cover image URL
  * Blog content
* On successful submission:

  * A new blog card appears instantly in the **left panel**
  * The blog can then be selected and read like any other blog

---

## 📖 Reading Blogs

* The **left panel** always shows the list of available blogs
* When a user **clicks on any blog card**:

  * That blog becomes active
  * Its complete content is displayed in the **right panel**
* At any given time:

  * **Only one blog is displayed** in the right panel
  * Users can switch between blogs by clicking different cards on the left

---

## 🔁 Interaction Flow

1. User opens the application
2. Blog list is visible on the left
3. User clicks a blog card
4. Selected blog content appears on the right
5. User can:

   * Read the blog
   * Click another blog card to switch content
   * Create a new blog using the form and immediately view it

---

## ▶️ Running the Project (Important)

This project requires **two terminals running in parallel**:

### **Terminal 1 – Start the Mock Backend Server**

```bash
npm run server
```

* Runs the backend / mock API (e.g., JSON Server)
* Required for fetching and storing blog data

### **Terminal 2 – Start the Frontend Application**

```bash
npm run dev
```

* Starts the React development server
* Opens the UI in the browser

⚠️ **Both terminals must be running simultaneously** for the application to work correctly.

---

## 🛠️ Tech Stack

* **React + TypeScript**
* **TanStack React Query** for data fetching and caching
* **Tailwind CSS** for styling
* **shadcn/ui** components
* **Lucide Icons**

---

## 🎯 Purpose

This assignment demonstrates:

* Component-driven UI architecture
* Clean state handling between list and detail views
* Real-world blog reading experience with intuitive UX
* Ability to scale UI for content-heavy applications


