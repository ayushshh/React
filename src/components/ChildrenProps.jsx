function Card({ children, title, color = 'blue' }) {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50',
    green: 'border-green-500 bg-green-50',
    purple: 'border-purple-500 bg-purple-100/30',
    red: 'border-red-500 bg-red-50',
  };

  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md flex-1 min-w-62.5`}>
      {title && <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = 'grid' }) {
  const layoutClasses = {
    vertical: 'flex flex-col space-y-4',
    horizontal: 'flex flex-row flex-wrap gap-4',
    grid: 'grid grid-cols-1 md:grid-cols-2 gap-4'
  };

  return (
    <div className={layoutClasses[layout]}>
      {children}
    </div>
  );
}

function ChildrenProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg max-w mx-auto">
      <h2 className="text-3xl mb-2 font-bold text-gray-800">Children Props</h2>
      <p className="mb-8 text-gray-600">
        The <code className="bg-gray-100 px-1 rounded">children</code> prop allows you to pass JSX elements or components as children to other components, enabling component composition.
      </p>
      
      <div className="space-y-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Card Components with Children:</h3>
        
        <Container layout="grid">
          {/* 1. User Profile - Blue */}
          <Card color="blue" title="User Profile">
            <p className="mb-1"><strong>Name:</strong> John Doe</p>
            <p className="mb-1"><strong>Email:</strong> john@example.com</p>
            <p><strong>Role:</strong> Developer</p>
          </Card>

          {/* 2. Statistics - Green */}
          <Card color="green" title="Statistics">
            <div className="flex justify-between mb-1">
              <span>Total Users:</span>
              <span className="font-bold">1,234</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Active Sessions:</span>
              <span className="font-bold">567</span>
            </div>
            <div className="flex justify-between">
              <span>Revenue:</span>
              <span className="font-bold">$89,000</span>
            </div>
          </Card>

          {/* 3. Quick Actions - Purple */}
          <Card color="purple" title="Quick Actions">
            <div className="flex flex-col gap-2">
              <button className="w-full py-2 bg-purple-500 text-white rounded font-medium hover:bg-purple-600 transition">
                Create New
              </button>
              <button className="w-full py-2 bg-slate-500 text-white rounded font-medium hover:bg-slate-600 transition">
                View All
              </button>
            </div>
          </Card>

          {/* 4. Warning - Red */}
          <Card color="red" title="Warning">
            <p className="leading-relaxed">
              Your trial period ends in 5 days. Please upgrade your account to continue using all features.
            </p>
          </Card>
        </Container>
      </div>
    </section>
  );
}

export default ChildrenProps;