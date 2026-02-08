// src/pages/Admin/EmployersManagement.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { 
  BuildingOfficeIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  BriefcaseIcon, 
  ClockIcon, 
  TrashIcon,
  CheckCircleIcon,
  FunnelIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import AdminLayout from '../../components/AdminLayout';
import AdminTable from '../../components/AdminTable';
import apiClient from '../../services/apiClient';

const EmployersManagement = () => {
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const itemsPerPage = 10;

  const fetchEmployers = useCallback(async (isAutoFetch = false) => {
    try {
      if (!isAutoFetch) setLoading(true);
      
      const params = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage,
        ...(searchTerm && { search: searchTerm }),
        ...(filterRole && { roleNeeded: filterRole })
      });

      const result = await apiClient.get(`/admin/employers?${params}`);

      if (result.success) {
        setEmployers(result.data || []);
        setTotalPages(result.pagination?.totalPages || 1);
        setError(null);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to fetch employers');
      console.error('Fetch error:', err);
    } finally {
      if (!isAutoFetch) setLoading(false);
    }
  }, [searchTerm, filterRole, currentPage]);

  useEffect(() => {
    fetchEmployers();
  }, [fetchEmployers]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchEmployers(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [fetchEmployers]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this employer?')) {
      return;
    }

    try {
      const result = await apiClient.delete(`/admin/employers/${id}`);

      if (result.success) {
        setDeleteSuccess(true);
        setTimeout(() => setDeleteSuccess(false), 3000);
        fetchEmployers();
      } else {
        alert('Failed to delete employer');
      }
    } catch (err) {
      alert('Error deleting employer');
      console.error(err);
    }
  };

  const columns = [
    {
      header: 'Company & Contact',
      render: (item) => (
        <div className="flex items-center space-x-4">
          <div className="w-11 h-11 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0 font-bold border border-green-100 shadow-sm">
            <BuildingOfficeIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">{item.company}</p>
            <p className="text-gray-500 text-xs font-medium mt-0.5">{item.name}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Contact Info',
      render: (item) => (
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2 text-xs font-bold text-gray-600">
            <EnvelopeIcon className="w-4 h-4 text-gray-400" />
            <span>{item.email}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-bold text-gray-600">
            <PhoneIcon className="w-4 h-4 text-gray-400" />
            <span>{item.phone}</span>
          </div>
        </div>
      ),
    },
    {
      header: 'Hiring Requirements',
      render: (item) => (
        <div>
          <div className="inline-flex items-center px-2.5 py-1 bg-purple-50 border border-purple-200 text-purple-800 rounded-lg text-xs font-bold uppercase tracking-wider">
            <BriefcaseIcon className="w-3.5 h-3.5 mr-1.5" />
            {item.roleNeeded}
          </div>
        </div>
      ),
    },
    {
      header: 'Inquiry Date',
      render: (item) => (
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500">
          <ClockIcon className="w-4 h-4 text-gray-400" />
          <span>{new Date(item.createdAt || item.registrationDate).toLocaleDateString(undefined, { dateStyle: 'medium' })}</span>
        </div>
      ),
    },
    {
      header: 'Actions',
      align: 'right',
      render: (item) => (
        <button
          onClick={() => handleDelete(item._id)}
          className="inline-flex items-center p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 active:scale-90"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      ),
    },
  ];

  const uniqueRoles = employers && employers.length > 0
    ? [...new Set(employers.map(e => e.roleNeeded))].filter(Boolean)
    : [];

  const filterElement = (
    <div className="relative group">
      <FunnelIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-yellow-500 transition-colors" />
      <select
        value={filterRole}
        onChange={(e) => setFilterRole(e.target.value)}
        className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-yellow-400/10 focus:border-yellow-400 transition-all outline-none font-bold text-gray-700 appearance-none cursor-pointer"
      >
        <option value="">Filter by Role</option>
        {uniqueRoles.map((role) => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );

  return (
    <AdminLayout>
      {deleteSuccess && (
        <div className="fixed top-24 right-8 z-50 animate-bounce">
          <div className="bg-red-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border-2 border-red-400">
            <CheckCircleIcon className="w-7 h-7" />
            <span className="font-bold text-lg">Employer profile archived</span>
          </div>
        </div>
      )}

      <AdminTable
        title="Business Partners"
        description="Core portal for managing company relationships and hiring requests"
        columns={columns}
        data={employers}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        onSearchChange={(val) => { setSearchTerm(val); setCurrentPage(1); }}
        filterElement={filterElement}
        pagination={{
          currentPage,
          totalPages
        }}
        onPageChange={setCurrentPage}
        stats={true}
        icon={BuildingOfficeIcon}
        emptyMessage="No partner companies registered"
      />
    </AdminLayout>
  );
};

export default EmployersManagement;
