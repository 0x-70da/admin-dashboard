"use client";
import { useEffect, useState } from "react";
import { Ban, Trash2 } from "lucide-react";
import Image from "next/image";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data/userData.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm),
  );

  const handleBlock = (id) => {
    if (confirm("Are you sure you want to block this user?")) {
      // In a real app, this would make an API call
      alert(`User #${id} has been blocked`);
    }
  };

  const handleDelete = (id) => {
    if (
      confirm(
        "Are you sure you want to delete this user? This action cannot be undone.",
      )
    ) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <section className="bg-(--background-secondary) rounded-xl p-6 shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-white text-2xl font-semibold">Users List</h2>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-auto min-w-[250px] px-4 py-3 border border-[#2a2a3e] rounded-lg bg-neutral-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
        />
      </div>

      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse bg-(--background-secondary)">
          <thead className="hidden lg:table-header-group border-b border-neutral-600">
            <tr>
              {["Name", "Email", "Phone", "Country", "Actions"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-4 py-4 text-left text-[#a0a0b0] font-semibold text-xs uppercase tracking-wider whitespace-nowrap"
                  >
                    {header}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-neutral-700 hover:bg-(--background-secondary-hover) transition-colors lg:table-row flex flex-col lg:flex-row mb-4 lg:mb-0 rounded-lg lg:rounded-none"
              >
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none"
                  data-label="Name"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <span>{user.name}</span>
                  </div>
                </td>
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none"
                  data-label="Email"
                >
                  {user.email}
                </td>
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none"
                  data-label="Phone"
                >
                  {user.phone}
                </td>
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none"
                  data-label="Country"
                >
                  <span className="inline-block px-3 py-1.5 bg-(--primary-green) text-white rounded-md text-xs font-medium">
                    {user.country}
                  </span>
                </td>
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none lg:border-none"
                  data-label="Actions"
                >
                  <div className="flex gap-2 justify-end md:justify-start w-full lg:w-auto">
                    <button
                      onClick={() => handleBlock(user.id)}
                      className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-all hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
                      title="Block User"
                    >
                      <Ban size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
                      title="Delete User"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-8 text-[#a0a0b0]">
          {`No users found matching "${searchTerm}"`}
        </div>
      )}
    </section>
  );
};

export default UsersTable;
