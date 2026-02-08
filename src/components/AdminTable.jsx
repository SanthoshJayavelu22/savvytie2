import React from 'react';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const AdminTable = ({ 
  title, 
  description, 
  columns, 
  data, 
  loading, 
  error,
  pagination,
  onPageChange,
  searchTerm,
  onSearchChange,
  filterElement,
  stats,
  emptyMessage = "No data found",
  icon: Icon
}) => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h1>
          <p className="text-gray-500 mt-1 font-medium">{description}</p>
        </div>
        <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm animate-pulse">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Live Updates Enabled</span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-200 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Search */}
          <div className="relative group lg:col-span-2">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-yellow-500 transition-colors" />
            <input
              type="text"
              placeholder="Search anything..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-yellow-400/10 focus:border-yellow-400 transition-all outline-none font-medium text-gray-700"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            {filterElement}
          </div>
        </div>

        {/* Stats Summary */}
        {stats && (
          <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500">Currently showing:</span>
              <span className="px-2.5 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold">{data?.length || 0} Records</span>
            </div>
            {loading && (
              <div className="flex items-center space-x-2 text-yellow-600">
                <ArrowPathIcon className="w-4 h-4 animate-spin" />
                <span className="text-xs font-bold uppercase tracking-wider">Refreshing...</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-200 overflow-hidden relative">
        {loading && !data?.length ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-yellow-100 border-t-yellow-400 rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs animate-pulse">Syncing Database...</p>
          </div>
        ) : error ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Oops! Connections error</h3>
            <p className="text-gray-500 mt-1">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95"
            >
              Retry Connection
            </button>
          </div>
        ) : !data || data.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 bg-gray-50/30">
            {Icon && <Icon className="w-20 h-20 text-gray-200 mb-6" />}
            <h3 className="text-xl font-bold text-gray-400">{emptyMessage}</h3>
            <p className="text-gray-400 text-sm mt-2">Adjust your filters to see more results</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/80 border-b border-gray-200">
                    {columns.map((column, idx) => (
                      <th 
                        key={idx} 
                        className={`px-6 py-4.5 text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.1em] ${column.align === 'right' ? 'text-right' : ''}`}
                      >
                        {column.header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.map((item, rowIdx) => (
                    <tr 
                      key={item._id || rowIdx} 
                      className="hover:bg-yellow-50/30 transition-all duration-200 group border-l-4 border-l-transparent hover:border-l-yellow-400"
                    >
                      {columns.map((column, colIdx) => (
                        <td key={colIdx} className={`px-6 py-5 ${column.align === 'right' ? 'text-right' : ''}`}>
                          {column.render ? column.render(item) : (
                            <span className="text-gray-700 font-medium">{item[column.accessor]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="px-6 py-5 bg-gray-50/50 border-t border-gray-200 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Page <span className="text-gray-900 font-bold">{pagination.currentPage}</span> of{' '}
                  <span className="text-gray-900 font-bold">{pagination.totalPages}</span>
                </p>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onPageChange(Math.max(1, pagination.currentPage - 1))}
                    disabled={pagination.currentPage === 1}
                    className="flex items-center space-x-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shadow-sm"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    onClick={() => onPageChange(Math.min(pagination.totalPages, pagination.currentPage + 1))}
                    disabled={pagination.currentPage === pagination.totalPages}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shadow-lg shadow-gray-200"
                  >
                    <span>Next</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminTable;
