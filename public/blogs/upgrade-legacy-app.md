![3D Chart Demo](/toothmate.jpg)

# 🛠 Upgrading APP: From Legacy to Modern Stack

**Published:** July 8, 2025  
**Author:** Xu Yan

---

## 🕰 Background: Inheriting an Old Codebase

Tooth Mate is a mobile app for dental health management and education. It was originally developed in 2022 using **React Native**, but without consistent design patterns or modern tooling.

In early 2025, Our team **took over the project** — not as the original author, but as someone tasked with upgrading and maintaining it. The goal was to **modernize the codebase**, make it easier to maintain, and **extend the platform** to support 3D dental chart which is a web project.

---

## 🔁 Gradual File-by-File Migration

Instead of rewriting everything, I adopted a **file-by-file migration** approach:

- **Copied logic modules, screens, and components one at a time**
- **Replaced old libraries with modern alternatives** (e.g., navigation, animation)
- **Isolated platform-specific code** when necessary

This ensured each part was reviewed, refactored, and tested before becoming part of the new app.

---

## ⚙️ New Architecture & Stack

I built a **new project from scratch**, using:

- **React Native (mobile)** with Expo SDK 50+
- **React (web)** powered by Vite + React 18
- **React Navigation** for mobile routing
- **React Router** for web routing
- Shared component logic where applicable

New modules like 3D dental charts were built only in the web layer, while existing mobile features were preserved and improved.

---

## 🌐 Web Expansion: 3D Charts & More

The biggest visible upgrade was bringing **web support** to Tooth Mate. This included:

- A responsive homepage
- Color coding of treatments and info
- Integration of 3D dental charts using `three.js` + `React Three Fiber`

---

## 📱 Mobile Improvements

While migrating files, I also cleaned up:

- Unused components and styles
- Navigation hierarchy
- State logic (simplified and centralized)
- Assets and static files

The result: faster startup, clearer folder structure, and a foundation for adding features like **age-based chart switching**.

---
## 🔍 Why We Chose File-by-File Migration

Maintaining and upgrading an inherited codebase is not just a technical decision — it’s also about **minimizing disruption** for both users and stakeholders.

In our case, **we inherited an old React Native project**, and we needed to:

- Modernize it technically
- Add web support (React + web view)
- **Avoid interrupting the existing mobile workflows**
- Ensure the client-facing experience and team workflow stayed familiar

To achieve this, we chose **file-by-file migration** — a safe, controlled method that let us **improve the project while keeping it stable**.

---

### 🧭 Migration Strategies Comparison

| Approach | Description | Pros | Cons | Best For |
|----------|-------------|------|------|----------|
| 🔁 **File-by-File Migration**<br>(our approach) | Gradually move files into a new modern project, one at a time | ✅ Lower risk<br>✅ Easier testing<br>✅ Keeps app running during upgrades<br>✅ Aligns with client workflow | ❌ Takes longer<br>❌ Temporary code duplication | ✅ Active projects with existing users<br>✅ Client requires continuity |
| 🔨 **Full Rewrite**<br>aka "Big Bang" | Start fresh and rebuild everything from scratch | ✅ Modern code<br>✅ Clean architecture<br>✅ No legacy debt | ❌ Risky<br>❌ Long downtime<br>❌ Expensive | ❌ Only ideal when old app can be shut down or paused |
| 🛠 **In-place Refactor** | Clean up and upgrade directly inside the old project | ✅ No migration overhead<br>✅ Short-term improvements | ❌ Hard to fully modernize<br>❌ Mixed old/new code | ✅ Small refactors<br>✅ Projects that can’t be restarted |
| 🌿 **Strangler Pattern** | Wrap the old system and replace modules gradually | ✅ Parallel new/old coexistence<br>✅ Flexible architecture | ❌ Complex structure<br>❌ More suited to services than frontends | ✅ APIs or backend-heavy systems |

---

## 🚀 Final Result

- Full-stack project with both **mobile and web platforms**
- Unified design and folder structure
- Modern developer experience with hot reload, TypeScript, and modular code
- Easier onboarding for future devs

---

## 💭 Final Thoughts

This project wasn’t about reinventing Tooth Mate — it was about **respecting the legacy while building forward**. One file at a time.

I learned the value of small, incremental upgrades — and how to bridge the past with the future.