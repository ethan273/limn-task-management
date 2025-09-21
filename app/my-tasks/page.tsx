'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, RefreshCw } from 'lucide-react';

export default function MyTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    // Simulated task loading - replace with actual API call
    setTimeout(() => {
      setTasks([
        { id: 1, title: 'Complete project documentation', status: 'in_progress' },
        { id: 2, title: 'Review pull requests', status: 'todo' },
        { id: 3, title: 'Update task management system', status: 'done' },
      ]);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">My Tasks</h1>
            <p className="text-gray-600 mt-2">Manage your personal tasks and track progress</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={loadTasks} variant="outline" disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Task
            </Button>
          </div>
        </div>

        {/* Task List */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Your Tasks</h2>
          <div className="space-y-4">
            {tasks.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No tasks yet. Create your first task to get started!
              </div>
            ) : (
              tasks.map(task => (
                <div key={task.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">Status: {task.status}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
