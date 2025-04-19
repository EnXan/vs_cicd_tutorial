import React from "react";

export default function DefaultLayout({ children, title }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="/css/styles.css"
        />
      </head>
      <body className="bg-gray-100 flex flex-col h-screen m-0 overflow-hidden">
        <header className="bg-slate-800 text-white py-2">
          <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-2 flex-grow overflow-auto flex items-center justify-center">
          {children}
        </main>
        <footer className="bg-slate-800 text-white py-2">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Docker CI/CD Tutorial</p>
          </div>
        </footer>
        <script src="/js/script.js"></script>
      </body>
    </html>
  );
}
