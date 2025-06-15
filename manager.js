// manager.js

window.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const tableBody = document.getElementById('leaveTableBody');
    const totalLeaves = document.getElementById('totalLeaves');
    const pendingLeaves = document.getElementById('pendingLeaves');
    const approvedLeaves = document.getElementById('approvedLeaves');
  
    let leaveData = JSON.parse(localStorage.getItem('leaveRequests')) || [];
  
    // Show only that user's data if employee
    if (currentUser?.role === 'employee') {
      leaveData = leaveData.filter(l => l.username === currentUser.username);
    }
  
    // Summary cards
    totalLeaves.textContent = leaveData.length;
    pendingLeaves.textContent = leaveData.filter(l => l.status === 'Pending').length;
    approvedLeaves.textContent = leaveData.filter(l => l.status === 'Approved').length;
  
    if (leaveData.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6">No leave requests available.</td></tr>`;
      return;
    }
  
    // Populate table
    leaveData.forEach(req => {
      // Inside your forEach loop that generates leave rows
const row = document.createElement('tr');
row.innerHTML = `
  <td>${request.email || 'N/A'}</td>
  <td>${request.type}</td>
  <td>${request.startDate}</td>
  <td>${request.endDate}</td>
  <td>${request.status}</td>
  <td>
    ${request.status === 'Pending' ? `
      <button class="approve-btn" onclick="updateStatus(${request.id}, 'Approved')">Approve</button>
      <button class="reject-btn" onclick="updateStatus(${request.id}, 'Rejected')">Reject</button>
    ` : '—'}
  </td>
`;

      tableBody.appendChild(row);
    });
  });
  
  function updateStatus(id, newStatus) {
    let requests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
    requests = requests.map(req => {
      if (req.id === id) req.status = newStatus;
      return req;
    });
  
    localStorage.setItem('leaveRequests', JSON.stringify(requests));
    alert(`Leave ${newStatus}`);
    location.reload();
  }
  
  function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
  }
  