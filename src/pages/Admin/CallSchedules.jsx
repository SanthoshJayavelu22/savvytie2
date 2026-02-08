// src/pages/Admin/CallSchedules.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { 
  CalendarDaysIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  BriefcaseIcon, 
  TrashIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  BanknotesIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import AdminLayout from '../../components/AdminLayout';
import AdminTable from '../../components/AdminTable';
import apiClient from '../../services/apiClient';

const CallSchedules = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const itemsPerPage = 10;

  const fetchSchedules = useCallback(async (isAutoFetch = false) => {
    try {
      if (!isAutoFetch) setLoading(true);
      
      const params = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm
      });

      const response = await apiClient.get(`/admin/call-schedules?${params}`);

      if (response.success) {
        setSchedules(response.data || []);
        setTotalPages(response.pagination?.totalPages || 1);
        setError(null);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Failed to fetch schedules');
      console.error('Fetch error:', err);
    } finally {
      if (!isAutoFetch) setLoading(false);
    }
  }, [searchTerm, currentPage]);

  useEffect(() => {
    fetchSchedules();
  }, [fetchSchedules]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchSchedules(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [fetchSchedules]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this schedule?')) {
      return;
    }

    try {
      const response = await apiClient.delete(`/admin/call-schedules/${id}`);
      if (response.success) {
        setDeleteSuccess(true);
        setTimeout(() => setDeleteSuccess(false), 3000);
        fetchSchedules();
      } else {
        alert(response.message);
      }
    } catch (err) {
      alert('Failed to delete schedule');
    }
  };

  const columns = [
    {
      header: 'Client info',
      render: (item) => (
        <div className="flex items-center space-x-4">
          <div className="w-11 h-11 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0 font-bold border border-yellow-100 shadow-sm">
            {item.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">{item.name}</p>
            <div className="flex flex-col space-y-0.5 mt-1">
               <span className="text-[10px] text-gray-500 font-bold flex items-center bg-gray-100 px-1.5 py-0.5 rounded w-fit">
                  <EnvelopeIcon className="w-3 h-3 mr-1" /> {item.email}
               </span>
               <span className="text-[10px] text-gray-500 font-bold flex items-center bg-gray-100 px-1.5 py-0.5 rounded w-fit">
                  <PhoneIcon className="w-3 h-3 mr-1" /> {item.phone}
               </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      header: 'Schedule Time',
      render: (item) => (
        <div className="space-y-1">
          <div className="text-sm text-gray-900 font-extrabold flex items-center">
            <CalendarDaysIcon className="w-4 h-4 mr-2 text-yellow-500" />
            {new Date(item.preferredDateTime).toLocaleDateString(undefined, { dateStyle: 'medium' })}
          </div>
          <div className="text-[11px] text-gray-500 font-bold bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100 w-fit ml-6">
            {new Date(item.preferredDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      ),
    },
    {
      header: 'Business Intel',
      render: (item) => (
        <div className="space-y-2">
          <div className="flex items-center text-[11px] font-bold text-gray-700">
            <BriefcaseIcon className="w-4 h-4 mr-2 text-gray-400" />
            {item.businessType}
          </div>
          <div className="flex items-center text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            <BanknotesIcon className="w-3.5 h-3.5 mr-2 text-green-500" />
            Budget: {item.budget}
          </div>
          {item.companyWebsite && (
            <div className="flex items-center text-[11px] font-bold">
              <GlobeAltIcon className="w-4 h-4 mr-2 text-blue-400" />
              <a href={item.companyWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2">
                Visit Website
              </a>
            </div>
          )}
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

  return (
    <AdminLayout>
      {deleteSuccess && (
        <div className="fixed top-24 right-8 z-50 animate-bounce">
          <div className="bg-orange-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border-2 border-orange-400">
            <CalendarDaysIcon className="w-7 h-7" />
            <span className="font-bold text-lg">Schedule entry cleared</span>
          </div>
        </div>
      )}

      <AdminTable
        title="Consultation Requests"
        description="Priority dashboard for high-intent client scheduling"
        columns={columns}
        data={schedules}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        onSearchChange={(val) => { setSearchTerm(val); setCurrentPage(1); }}
        pagination={{
          currentPage,
          totalPages
        }}
        onPageChange={setCurrentPage}
        stats={true}
        icon={CalendarDaysIcon}
        emptyMessage="No consultation requests pending"
      />
    </AdminLayout>
  );
};

export default CallSchedules;
