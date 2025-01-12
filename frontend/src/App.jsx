import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Doctor Appointment System</h1>
      <p style={styles.subtitle}>This feature is currently under development. Stay tuned for updates!</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginTop: '10px',
  },
};

export default App;
