# 🎯 Angular Personalized Content App with Adobe Target Integration

This is a minimal Angular application that demonstrates how to render personalized content using Adobe Target (or mock JSON data). The app dynamically injects offer content into Angular components using shared state (`BehaviorSubject`), making it scalable and reactive.

---

## 🧠 How It Works

The app is built around a **shared service** (`TargetService`) that simulates fetching personalized offers. Instead of injecting offers directly into components manually, the app uses Angular's `BehaviorSubject` to manage and distribute content updates:

1. Each personalized component (e.g., `BannerComponent`, `CardComponent`) subscribes to a `BehaviorSubject` for its specific scope (like `'banner-scope'`, `'card-scope'`).
2. The service method `loadOffers(scopes)` simulates fetching content (from Adobe Target or mock data) and pushes updates to each scope’s subject.
3. Whenever the offer data changes, all subscribed components are automatically updated — no manual DOM manipulation or component reference needed.

### 🔄 Example Flow:

- The HTML has component tags like `<app-banner>` and `<app-card>`.
- In `app.component.ts`, the app calls:

  ```ts
  this.targetService.loadOffers(['banner-scope', 'card-scope']);
  ```

- The mock TargetService returns:

  ```ts
  {
    scope: 'banner-scope',
    data: {
      title: 'Special Offer!',
      message: 'Get 20% off your next purchase'
    }
  }
  ```

- `BannerComponent` receives the new data and updates its internal state.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Angular CLI](https://angular.io/cli)

---

### 📦 Installation

```bash
# Clone the repo
git clone https://github.com/vadymus/angular-target-demo.git
cd angular-target-demo

# Install dependencies
npm install
```

---

### ▶️ Running the App

```bash
ng serve
```

Open your browser to:

```
http://localhost:4200
```

The app will hot reload as you make changes.

---

## ⚙️ Using Adobe Target Instead of Mock Data

The current version of the app uses **mock offers**. To use Adobe Target:

1. **Include Adobe Experience Platform Web SDK (alloy.js)** in your `index.html`.

2. Replace the mocked data in `target.service.ts` with a real `sendEvent` call:

   ```ts
   alloy("sendEvent", {
     decisionScopes: ["banner-scope", "card-scope"]
   }).then((result) => {
     // Handle result.propositions here
   });
   ```

3. Ensure scopes in your Target activity match your component subscriptions.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── banner.component.ts
│   │   └── card.component.ts
│   ├── services/
│   │   └── target.service.ts
│   ├── app.component.ts
│   └── app.module.ts
├── main.ts
└── index.html
```

---

## 🧩 Customization Guide

To add a new personalized component:

1. Create a new component file in `src/app/components/`
2. In the component, subscribe to a new scope like `'my-scope-name'` using `TargetService`
3. Add your component to the app template (`app.component.html`)
4. Call `this.targetService.loadOffers(['my-scope-name'])` where appropriate

---

## 🧪 Testing Components

Each component works independently by subscribing to its own scope. You don’t need to register or inject components manually into `AppComponent`. This makes it highly scalable for many different offers.

---

## 📄 License

MIT License

---

## 🤝 Contributing

Contributions are welcome! Fork the repo and submit a pull request with your improvements.

---
