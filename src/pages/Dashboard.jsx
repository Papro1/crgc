import { useState } from "react";

import { useGlobal } from "../GlobalContext";

export default function Dashboard() {
  const {
    participants, setParticipants,
    submissions, setSubmissions,
    contacts, setContacts
  } =  useGlobal()
  // Array of registered users
  const [registerPosts, setRegisterPosts] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", affiliation: "University A" },
    { id: 2, name: "Bob", email: "bob@example.com", affiliation: "University B" },
    { id: 3, name: "Charlie", email: "charlie@example.com", affiliation: "Institute C" },
    { id: 4, name: "David", email: "david@example.com", affiliation: "College D" },
  ]);

  // Array of abstract submissions
  const [abstractPosts, setAbstractPosts] = useState([
    { id: 1, title: "Climate Change Impact", author: "Alice", status: "Pending" },
    { id: 2, title: "Renewable Energy", author: "Bob", status: "Approved" },
    { id: 3, title: "Water Scarcity", author: "Charlie", status: "Rejected" },
  ]);

  // Form states for registration
  const [regForm, setRegForm] = useState({ name: "", email: "", affiliation: "" });
  // Form states for abstract submission
  const [absForm, setAbsForm] = useState({ title: "", author: "", status: "Pending" });

  // Handle registration submit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!regForm.name || !regForm.email || !regForm.affiliation) return;
    const newUser = { id: registerPosts.length + 1, ...regForm };
    setRegisterPosts([...registerPosts, newUser]);
    setRegForm({ name: "", email: "", affiliation: "" });
  };

  // Handle abstract submit
  const handleAbstractSubmit = (e) => {
    e.preventDefault();
    if (!absForm.title || !absForm.author || !absForm.status) return;
    const newAbstract = { id: abstractPosts.length + 1, ...absForm };
    setAbstractPosts([...abstractPosts, newAbstract]);
    setAbsForm({ title: "", author: "", status: "Pending" });
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold text-blue-900">Dashboard</h1>

        {/* Registration Form */}
        <section className="bg-white shadow rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Add New Registered User</h2>
          <form
            onSubmit={handleRegisterSubmit}
            className="flex flex-col md:flex-row gap-3 items-center"
          >
            <input
              type="text"
              placeholder="Name"
              value={regForm.name}
              onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
              className="px-3 py-2 border rounded w-full md:w-auto"
            />
            <input
              type="email"
              placeholder="Email"
              value={regForm.email}
              onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
              className="px-3 py-2 border rounded w-full md:w-auto"
            />
            <input
              type="text"
              placeholder="Affiliation"
              value={regForm.affiliation}
              onChange={(e) => setRegForm({ ...regForm, affiliation: e.target.value })}
              className="px-3 py-2 border rounded w-full md:w-auto"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition"
            >
              Add User
            </button>
          </form>
        </section>

        {/* Registration Table */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-gray-100">
              <thead className="bg-gray-300 text-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Affiliation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {participants.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-200 transition">
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2 font-semibold">{user.fullname}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.affiliation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Abstract Form */}
        <section className="bg-white shadow rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Add New Abstract Submission</h2>
          <form
            onSubmit={handleAbstractSubmit}
            className="flex flex-col md:flex-row gap-3 items-center"
          >
            <input
              type="text"
              placeholder="Title"
              value={absForm.title}
              onChange={(e) => setAbsForm({ ...absForm, title: e.target.value })}
              className="px-3 py-2 border rounded w-full md:w-auto"
            />
            <input
              type="text"
              placeholder="Author"
              value={absForm.author}
              onChange={(e) => setAbsForm({ ...absForm, author: e.target.value })}
              className="px-3 py-2 border rounded w-full md:w-auto"
            />
            <select
              value={absForm.status}
              onChange={(e) => setAbsForm({ ...absForm, status: e.target.value })}
              className="px-3 py-2 border rounded"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition"
            >
              Add Abstract
            </button>
          </form>
        </section>

        {/* Abstract Table */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Abstract Submissions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-gray-100">
              <thead className="bg-gray-300 text-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Author</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {submissions.map((sb, i) => (
                  <tr key={i} className={`hover:bg-gray-200 bg-white ${ i%2 == 0 ? "bg-gray-100" : "bg-white" } transition`}>
                    <td className="px-4 py-2">{sb.id}</td>
                    <td className="px-4 py-2">{sb.title}</td>
                    <td className="px-4 py-2 font-semibold">{sb.author}</td>
                    <td className="px-4 py-2">{sb.affiliation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
