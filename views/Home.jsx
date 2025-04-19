import React from "react";
import DefaultLayout from "./layouts/Default";

export default function Home({ title, message }) {
  return (
    <DefaultLayout title={title}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-slate-700 mb-4">Willkommen zur Demo-App</h2>
        <p className="mb-4">{message}</p>

        <div
          id="status"
          className="my-4 p-3 bg-gray-100 border border-gray-300 rounded"
        >
          Status wird geladen...
        </div>

        <button
          id="checkStatus"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
        >
          Status prüfen
        </button>
      </div>
    </DefaultLayout>
  );
}
