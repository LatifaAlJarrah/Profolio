// app/error.tsx
"use client";

export default function GlobalError({ error }: { error: Error }) {
  if (error.message.startsWith("REDIRECT:")) {
    const path = error.message.split("REDIRECT:")[1];
    if (typeof window !== "undefined") {
      window.location.href = path;
    }
    return null;
  }

  return (
    <html>
      <body>
        <h2>حدث خطأ!</h2>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
