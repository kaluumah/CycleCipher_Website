import { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/waitlist/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (response.ok) alert("Email added to waitlist!");
    else alert("Error! Email might already be registered.");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2 border rounded w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded w-full">
        Join Waitlist
      </button>
    </form>
  );
};

export default WaitlistForm;
