import React from "react";

const InboxPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      {/* Add Task Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a task"
          className="w-full p-2 border rounded"
        />
      </div>
      {/* Task List */}
      <ul>
        {/* Example Task Item */}
        <li className="flex items-center justify-between p-2 border-b">
          <div>
            <input type="checkbox" className="mr-2" />
            <span>Task Title</span>
          </div>
          <div className="text-sm text-gray-500">Due Date</div>
        </li>
      </ul>
    </div>
  );
};

export default InboxPage;