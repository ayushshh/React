const UserProfileCard = ({ data }) => {
  const { user, stats, theme } = data;

  return (
    <div style={{ 
      backgroundColor: theme.bg, 
      borderRadius: '12px', 
      padding: '24px', 
      flex: '1 1 450px', 
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      border: '1px solid rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ 
          fontSize: '24px', 
          background: 'rgba(255,255,255,0.5)', 
          borderRadius: '50%', 
          width: '50px', 
          height: '50px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          {user.avatar}
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{user.name}</h3>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>{user.email}</p>
          <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
            <span style={{ background: 'rgba(0,0,0,0.05)', padding: '2px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>{user.role}</span>
            <span style={{ background: 'rgba(0,0,0,0.05)', padding: '2px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>{user.status}</span>
          </div>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: '24px 0' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left' }}>
        <div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>{stats.posts || stats.projects}</div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>{stats.posts ? 'Posts' : 'Projects'}</div>
        </div>
        <div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>{stats.followers || stats.commits}</div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>{stats.followers ? 'Followers' : 'Commits'}</div>
        </div>
        <div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>{stats.following || stats.reviews}</div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>{stats.following ? 'Following' : 'Reviews'}</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
        <button style={{ 
          flex: 2, 
          padding: '12px', 
          backgroundColor: theme.primary, 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          fontWeight: 'bold',
          cursor: 'pointer' 
        }}>
          {theme.btnText}
        </button>
        <button style={{ 
          flex: 3, 
          padding: '12px', 
          backgroundColor: 'rgba(0,0,0,0.05)', 
          border: 'none', 
          borderRadius: '8px', 
          fontWeight: '500',
          color: '#374151',
          cursor: 'pointer' 
        }}>
          {theme.altBtn}
        </button>
      </div>
    </div>
  );
};
function ComplexProps() {
  const userData = [
    {
      id: 1,
      user: { name: "Alice Johnson", email: "alice@example.com", avatar: "👩‍💼", role: "Admin", status: "Active" },
      stats: { posts: 145, followers: 2834, following: 421 },
      theme: { primary: "#a855f7", bg: "#f5f3ff", btnText: "View Profile", altBtn: "Message" }
    },
    {
      id: 2,
      user: { name: "Bob Smith", email: "bob@example.com", avatar: "👨‍💻", role: "Developer", status: "Online" },
      stats: { projects: 28, commits: 1523, reviews: 89 },
      theme: { primary: "#10b981", bg: "#ecfdf5", btnText: "View Profile", altBtn: "Collaborate" }
    }
  ];

  return (
    <div className='p-10 bg-gray-50 min-h-auto rounded-lg'>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-gray-900 text-3xl font-bold">Complex/Nested Props</h1>
        <p className="pt-2 pb-8 text-gray-600 max-w-2xl">
          Complex props allow you to pass nested objects and functions, enabling sophisticated component configuration and interactions.
        </p>
        
        <div className="flex flex-wrap gap-6">
          {userData.map((item) => (
            <UserProfileCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComplexProps