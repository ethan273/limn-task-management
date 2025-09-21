'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, RefreshCw, Filter } from 'lucide-react';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');

  const loadTasks = async () => {
    setLoading(true);
    // Simulated task loading - replace with actual API call
    setTimeout(() => {
      setTasks([
        { id: 1, title: 'Complete project documentation', status: 'in_progress', priority: 'high', assignee: 'John Doe' },
        { id: 2, title: 'Review pull requests', status: 'todo', priority: 'medium', assignee: 'Jane Smith' },
        { id: 3, title: 'Update task management system', status: 'done', priority: 'low', assignee: 'Bob Wilson' },
        { id: 4, title: 'Client meeting preparation', status: 'todo', priority: 'urgent', assignee: 'Alice Brown' },
        { id: 5, title: 'Deploy to production', status: 'in_progress', priority: 'high', assignee: 'John Doe' },
      ]);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(task => task.status === filter);

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'done': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'todo': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">All Tasks</h1>
            <p className="text-gray-600 mt-2">View and manage all tasks across the organization</p>
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

        {/* Filters */}
        <div className="flex gap-2">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            All Tasks ({tasks.length})
          </Button>
          <Button 
            variant={filter === 'todo' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('todo')}
          >
            To Do ({tasks.filter(t => t.status === 'todo').length})
          </Button>
          <Button 
            variant={filter === 'in_progress' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('in_progress')}
          >
            In Progress ({tasks.filter(t => t.status === 'in_progress').length})
          </Button>
          <Button 
            variant={filter === 'done' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('done')}
          >
            Done ({tasks.filter(t => t.status === 'done').length})
          </Button>
        </div>

        {/* Task List */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Task List</h2>
          <div className="space-y-4">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No tasks found. Try changing the filter or create a new task.
              </div>
            ) : (
              filteredTasks.map(task => (
                <div key={task.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{task.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">Assigned to: {task.assignee}</p>
                      <div className="flex gap-2 mt-3">
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                        <Badge className={getStatusColor(task.status)}>
                          {task.status.replace('_', ' ')}
                        </Badge>
                      </div>
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
