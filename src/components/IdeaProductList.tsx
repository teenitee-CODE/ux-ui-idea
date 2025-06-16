import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface IdeaProductListProps {
  // Define any props if needed in the future
}

const IdeaProductList: React.FC<IdeaProductListProps> = () => {
  const [keyword, setKeyword] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedTagTeam, setSelectedTagTeam] = useState('');
  const [selectedUser, setSelectedUser] = useState(''); // Assuming 'selectedUser' is for the "Assign User" dropdown
  const [selectedCreator, setSelectedCreator] = useState('');

  const uniqueGroups = ['Group A', 'Group B', 'All Groups']; // Added 'All Groups'
  const uniqueTagTeams = ['Team X', 'Team Y', 'All Teams']; // Added 'All Teams'
  const uniqueUsers = ['User 1', 'User 2', 'All Users']; // Placeholder for "Assign User"
  const uniqueCreators = ['Creator 1', 'Creator 2', 'All Creators']; // Added 'All Creators'

  // Hardcoded stats for now
  const totalIdeas = 120;
  const activeModels = 85;
  const totalValue = 250000; // Example value
  const ideasNeedingFeedback = 15;

  const handleSearch = () => {
    // Implement search functionality here
    console.log({ keyword, selectedGroup, selectedTagTeam, selectedUser, selectedCreator });
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Idea Product List</h1>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 shadow rounded-lg">
          <h2 className="text-sm font-medium text-gray-500">Total Ideas</h2>
          <p className="text-3xl font-bold text-gray-800">{totalIdeas}</p>
        </div>
        <div className="bg-white p-5 shadow rounded-lg">
          <h2 className="text-sm font-medium text-gray-500">Active Models</h2>
          <p className="text-3xl font-bold text-gray-800">{activeModels}</p>
        </div>
        <div className="bg-white p-5 shadow rounded-lg">
          <h2 className="text-sm font-medium text-gray-500">Total Value</h2>
          <p className="text-3xl font-bold text-gray-800">${totalValue.toLocaleString()}</p>
        </div>
        <div className="bg-white p-5 shadow rounded-lg">
          <h2 className="text-sm font-medium text-gray-500">Ideas Needing Feedback</h2>
          <p className="text-3xl font-bold text-red-600">{ideasNeedingFeedback}</p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="mb-6 p-4 bg-white shadow rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
          <div className="col-span-1 lg:col-span-2">
            <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-1">Keyword</label>
            <div className="relative">
              <input
                type="text"
                id="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search by keyword, ID, or text"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="group" className="block text-sm font-medium text-gray-700 mb-1">Group</label>
            <select
              id="group"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {uniqueGroups.map(group => <option key={group} value={group}>{group}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="tag-team" className="block text-sm font-medium text-gray-700 mb-1">Tag Team</label>
            <select
              id="tag-team"
              value={selectedTagTeam}
              onChange={(e) => setSelectedTagTeam(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {uniqueTagTeams.map(team => <option key={team} value={team}>{team}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="assign-user" className="block text-sm font-medium text-gray-700 mb-1">Assign User</label>
            <select
              id="assign-user"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {uniqueUsers.map(user => <option key={user} value={user}>{user}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="creator" className="block text-sm font-medium text-gray-700 mb-1">Creator</label>
            <select
              id="creator"
              value={selectedCreator}
              onChange={(e) => setSelectedCreator(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {uniqueCreators.map(creator => <option key={creator} value={creator}>{creator}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Search
          </button>
        </div>
      </div>

      {/* Table Section - Placeholder for actual data rendering */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creator</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Example Row - Replace with dynamic data later */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">IDEA-001</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sample Idea Name</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$5,000</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Creator 1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
                <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
              </td>
            </tr>
            {/* Add more rows or map through data */}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">120</span> results
        </p>
        <div className="flex space-x-1">
            <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 border border-indigo-500 bg-indigo-50 text-indigo-600 text-sm rounded-md">1</button>
            <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
};

export default IdeaProductList;
