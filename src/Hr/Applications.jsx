import React, { useEffect, useState } from 'react';

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#fff',
    // minHeight: '100vh',
    height: 'auto',
    padding: '1rem',
    paddingBottom: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    overflowY: 'auto',
    width: '100%',
    // boxSizing: 'border-box',
  },
  heading: {
    color: '#ff3b3f',
    marginBottom: '1.5rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Desktop table styles
  tableContainer: {
    overflowX: 'auto',
    display: 'block',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '800px',
  },
  th: {
    borderBottom: '2px solid #ff3b3f',
    padding: '0.75rem',
    textAlign: 'left',
    color: '#ff3b3f',
    fontWeight: '600',
    whiteSpace: 'nowrap',
  },
  td: {
    padding: '0.75rem',
    borderBottom: '1px solid #333',
    verticalAlign: 'middle',
  },
  
  // Mobile card styles
  cardContainer: {
    display: 'none',
    width: '100%',
    maxWidth: '100%',
    overflow: 'visible',
  },
  card: {
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #ff3b3f',
  },
  cardNumber: {
    backgroundColor: '#ff3b3f',
    color: '#fff',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  cardTitle: {
    color: '#ff3b3f',
    fontSize: '1.1rem',
    fontWeight: '600',
    margin: 0,
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
    flexWrap: 'wrap',
  },
  cardLabel: {
    color: '#ff3b3f',
    fontWeight: '600',
    fontSize: '0.9rem',
    minWidth: '80px',
  },
  cardValue: {
    color: '#fff',
    fontSize: '0.9rem',
    flex: 1,
    textAlign: 'right',
    wordBreak: 'break-word',
  },
  
  // Button styles
  button: {
    backgroundColor: '#ff3b3f',
    border: 'none',
    color: '#fff',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: '600',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    fontSize: '0.9rem',
    minWidth: '100px',
  },
  buttonHover: {
    backgroundColor: '#cc3236',
  },
  buttonDisabled: {
    backgroundColor: '#666',
    cursor: 'not-allowed',
  },
  noData: {
    marginTop: '2rem',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: '#888',
    textAlign: 'center',
  },
  
  // Media query styles (will be applied via className)
  '@media (max-width: 768px)': {
    container: {
      padding: '0.5rem',
    },
    heading: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
    },
    tableContainer: {
      display: 'none',
    },
    cardContainer: {
      display: 'block',
    }
  }
};

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [btnHoverId, setBtnHoverId] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    fetch('http://localhost:5000/applications')
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => {
        console.error('Failed to fetch applications:', err);
      });
      
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const downloadBase64File = (base64Data, fileName, mimeType) => {
    try {
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: mimeType });
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Download error:', error);
      alert('Download la problem aayiduchu. Try pannunga again.');
    }
  };

  const downloadResume = async (id) => {
    setDownloadingId(id);
    try {
      const response = await fetch(`http://localhost:5000/resume/${id}`);
      const data = await response.json();
      
      if (data.success) {
        downloadBase64File(data.fileData, data.fileName, data.mimeType);
      } else {
        alert('Resume download panna mudila: ' + data.message);
      }
      
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Download la error aayiduchu. Network connection check pannunga.');
    } finally {
      setDownloadingId(null);
    }
  };

  const DownloadButton = ({ app }) => (
    <button
      style={{
        ...styles.button,
        ...(btnHoverId === app.id ? styles.buttonHover : {}),
        ...(downloadingId === app.id ? styles.buttonDisabled : {})
      }}
      onClick={() => downloadResume(app.id)}
      onMouseEnter={() => setBtnHoverId(app.id)}
      onMouseLeave={() => setBtnHoverId(null)}
      disabled={downloadingId === app.id}
    >
      {downloadingId === app.id ? 'Downloading...' : 'Download'}
    </button>
  );

  return (
    <div style={styles.container}>
      <style jsx>{`
        @media (max-width: 768px) {
          .table-container {
            display: none !important;
          }
          .card-container {
            display: block !important;
          }
          .container {
            padding: 0.5rem !important;
            padding-bottom: 2rem !important;
            min-height: 100vh !important;
            height: auto !important;
          }
          .heading {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
        }
        
        @media (min-width: 769px) {
          .table-container {
            display: block !important;
          }
          .card-container {
            display: none !important;
          }
        }
      `}</style>
      
      <h2 style={styles.heading} className="heading">Job Applications</h2>

      {applications.length === 0 ? (
        <p style={styles.noData}>No applications found.</p>
      ) : (
        <>
          {/* Desktop Table View */}
          <div style={styles.tableContainer} className="table-container">
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>#</th>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Phone</th>
                  <th style={styles.th}>Job Title</th>
                  <th style={styles.th}>Resume</th>
                  <th style={styles.th}>Applied At</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <tr key={app.id} style={{ backgroundColor: index % 2 === 0 ? '#1e1e1e' : '#121212' }}>
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>{app.name}</td>
                    <td style={styles.td}>{app.email}</td>
                    <td style={styles.td}>{app.phone}</td>
                    <td style={styles.td}>{app.jobTitle}</td>
                    <td style={styles.td}>
                      <DownloadButton app={app} />
                    </td>
                    <td style={styles.td}>
                      {new Date(app.appliedAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div style={styles.cardContainer} className="card-container">
            {applications.map((app, index) => (
              <div key={app.id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardNumber}>{index + 1}</div>
                  <h3 style={styles.cardTitle}>{app.name}</h3>
                </div>
                
                <div style={styles.cardRow}>
                  <span style={styles.cardLabel}>Email:</span>
                  <span style={styles.cardValue}>{app.email}</span>
                </div>
                
                <div style={styles.cardRow}>
                  <span style={styles.cardLabel}>Phone:</span>
                  <span style={styles.cardValue}>{app.phone}</span>
                </div>
                
                <div style={styles.cardRow}>
                  <span style={styles.cardLabel}>Job:</span>
                  <span style={styles.cardValue}>{app.jobTitle}</span>
                </div>
                
                <div style={styles.cardRow}>
                  <span style={styles.cardLabel}>Applied:</span>
                  <span style={styles.cardValue}>
                    {new Date(app.appliedAt).toLocaleDateString()}
                  </span>
                </div>
                
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <DownloadButton app={app} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Applications;