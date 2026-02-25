// src/pages/Admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  UsersIcon, 
  BriefcaseIcon, 
  ArrowTrendingUpIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import AdminLayout from '../../components/AdminLayout';
import apiClient from '../../services/apiClient';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalCandidates: 0,
    totalEmployers: 0,
    totalSchedules: 0,
    recentCandidates: [],
    recentEmployers: [],
    recentSchedules: []
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Auto-fetch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchDashboardData(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async (isAutoFetch = false) => {
    try {
      if (!isAutoFetch) setLoading(true);
      const result = await apiClient.get('/admin/dashboard');

      if (result.success) {
        setStats(result.data);
        // Create recent activity from candidates and employers
        const activity = [
          ...result.data.recentCandidates.map(c => ({
            type: 'candidate',
            name: c.name,
            email: c.email,
            date: c.registrationDate || c.createdAt
          })),
          ...result.data.recentEmployers.map(e => ({
            type: 'employer',
            name: e.name,
            company: e.company,
            date: e.registrationDate || e.createdAt
          })),
          ...result.data.recentSchedules.map(s => ({
            type: 'schedule',
            name: s.name,
            detail: s.businessType,
            date: s.scheduledAt
          }))
        ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
        
        setRecentActivity(activity);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to fetch dashboard data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Candidates',
      value: stats.totalCandidates,
      icon: UsersIcon,
      color: 'blue',
      bgColor: 'bg-blue-500',
      lightBg: 'bg-blue-50',
      link: '/admin/candidates'
    },
    {
      title: 'Total Employers',
      value: stats.totalEmployers,
      icon: BriefcaseIcon,
      color: 'green',
      bgColor: 'bg-green-500',
      lightBg: 'bg-green-50',
      link: '/admin/employers'
    },
    {
      title: 'Recent Candidates',
      value: stats.recentCandidates?.length || 0,
      icon: ArrowTrendingUpIcon,
      color: 'purple',
      bgColor: 'bg-purple-500',
      lightBg: 'bg-purple-50',
      subtitle: 'Last 7 days'
    },
    {
      title: 'Recent Employers',
      value: stats.recentEmployers?.length || 0,
      icon: ClockIcon,
      color: 'yellow',
      bgColor: 'bg-yellow-500',
      lightBg: 'bg-yellow-50',
      subtitle: 'Last 7 days'
    },
    {
      title: 'Scheduled Calls',
      value: stats.totalSchedules,
      icon: PhoneIcon,
      color: 'orange',
      bgColor: 'bg-orange-500',
      lightBg: 'bg-orange-50',
      link: '/admin/call-schedules',
      subtitle: 'Total requests'
    }
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <XCircleIcon className="w-6 h-6 text-red-600" />
            <div>
              <h3 className="text-red-800 font-semibold">Error Loading Dashboard</h3>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your recruitment platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.lightBg} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                {stat.link && (
                  <Link
                    to={stat.link}
                    className="text-sm text-gray-500 hover:text-yellow-600 font-medium"
                  >
                    View →
                  </Link>
                )}
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                {stat.subtitle && (
                  <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          
          {recentActivity.length === 0 ? (
            <div className="text-center py-12">
              <ClockIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No recent activity</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'candidate' ? 'bg-blue-100' : 
                    activity.type === 'employer' ? 'bg-green-100' : 'bg-orange-100'
                  }`}>
                    {activity.type === 'candidate' && <UsersIcon className="w-5 h-5 text-blue-600" />}
                    {activity.type === 'employer' && <BriefcaseIcon className="w-5 h-5 text-green-600" />}
                    {activity.type === 'schedule' && <PhoneIcon className="w-5 h-5 text-orange-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.type === 'candidate' && 'New Candidate Registration'}
                      {activity.type === 'employer' && 'New Employer Registration'}
                      {activity.type === 'schedule' && 'New Call Scheduled'}
                    </p>
                    <p className="text-sm text-gray-600 truncate">
                      {activity.name} {activity.company ? `(${activity.company})` : activity.detail ? `(${activity.detail})` : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          
          <div className="space-y-3">
            <Link
              to="/admin/candidates"
              className="flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <UsersIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Manage Candidates</p>
                  <p className="text-sm text-gray-500">View and manage all candidates</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              to="/admin/employers"
              className="flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <BriefcaseIcon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Manage Employers</p>
                  <p className="text-sm text-gray-500">View and manage all employers</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <button
              onClick={fetchDashboardData}
              className="w-full flex items-center justify-center p-4 rounded-lg bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 group"
            >
              <CheckCircleIcon className="w-5 h-5 text-gray-900 mr-2" />
              <span className="font-medium text-gray-900">Refresh Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
