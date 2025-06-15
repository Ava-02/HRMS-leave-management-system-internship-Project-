// employee.js

// Wait until DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leaveForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const leaveType = document.getElementById('leaveType').value;
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      const reason = document.getElementById('reason').value;

      // Basic validation
      if (!leaveType || !startDate || !endDate || !reason) {
        alert('Please fill in all fields.');
        return;
      }

      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      const newLeave = {
      email: currentUser.username || currentUser.email,  // include email
      type,
      startDate,
      endDate,
      reason,
      status: "Pending"
    };

      leaveRequests.push(newLeave);
      localStorage.setItem("leaveRequests", JSON.stringify(leaveRequests));

      // Get existing leaves from localStorage
      let leaveList = JSON.parse(localStorage.getItem('leaveRequests')) || [];
      leaveList.push(leaveRequest);
      localStorage.setItem('leaveRequests', JSON.stringify(leaveList));

      alert('Leave request submitted successfully!');
      form.reset();
    });
  }
});
