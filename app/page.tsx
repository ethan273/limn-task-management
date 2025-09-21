import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Task Management System</h1>
        <div className="grid gap-4">
          <Link href="/tasks" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">All Tasks</h2>
            <p className="text-gray-600">View and manage all tasks</p>
          </Link>
          <Link href="/my-tasks" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">My Tasks</h2>
            <p className="text-gray-600">View your assigned tasks</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
