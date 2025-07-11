import { ITask } from '@/types';
import React, { useState } from 'react';

interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: ITask) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [project, setProject] = useState('Project Name');
  const [type, setType] = useState('Bug fixes');
  const [desc, setDesc] = useState('');
  const [hours, setHours] = useState(12);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#232937]/80">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">
        <button
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-6">Add New Entry</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({
              project,
              typeOfWork: type,
              description: desc,
              hours,
              date: new Date(),
            });
          }}
        >
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Select Project <span className="text-blue-600">*</span>
              <span
                className="ml-1 text-xs text-gray-400 align-middle"
                title="Select the project"
              >
                &#9432;
              </span>
            </label>
            <select
              className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              <option>Project Name</option>
              <option>Another Project</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Type of Work <span className="text-blue-600">*</span>
              <span
                className="ml-1 text-xs text-gray-400 align-middle"
                title="Type of work"
              >
                &#9432;
              </span>
            </label>
            <select
              className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Bug fixes</option>
              <option>Feature</option>
              <option>Refactor</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block font-medium mb-1">
              Task description <span className="text-blue-600">*</span>
            </label>
            <textarea
              className="w-full border border-gray-300 rounded px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
              placeholder="Write text here ..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <div className="text-xs text-gray-400 mt-1">
              A note for extra info
            </div>
          </div>
          <div className="mb-6">
            <label className="block font-medium mb-1">
              Hours <span className="text-blue-600">*</span>
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-8 h-8 border border-gray-300 rounded text-lg flex items-center justify-center bg-gray-50"
                onClick={() => setHours((h) => Math.max(0, h - 1))}
              >
                -
              </button>
              <input
                type="number"
                className="w-16 text-center border border-gray-300 rounded px-2 py-1 bg-gray-50 focus:outline-none"
                value={hours}
                min={0}
                onChange={(e) => setHours(Number(e.target.value))}
              />
              <button
                type="button"
                className="w-8 h-8 border border-gray-300 rounded text-lg flex items-center justify-center bg-gray-50"
                onClick={() => setHours((h) => h + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition text-center"
            >
              Add entry
            </button>
            <button
              type="button"
              className="flex-1 border border-gray-300 bg-white text-gray-700 font-semibold py-2 rounded transition text-center"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
