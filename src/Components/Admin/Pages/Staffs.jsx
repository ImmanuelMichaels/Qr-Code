import React, { useState, useEffect } from 'react';
import '../../Styles/staffs.css'; // Import CSS for styling

const Staffs = () => {
  // State for staff list and new staff form
  const [staffList, setStaffList] = useState([]);
  const [newStaff, setNewStaff] = useState({ name: '', role: '', department: '', isOnDuty: false });
  const [isAddingStaff, setIsAddingStaff] = useState(false); // Toggle for adding staff

  // Fetch staff on component mount
  useEffect(() => {
    fetch('/api/staff')  // Replace with the actual API endpoint
      .then((response) => response.json())
      .then((data) => setStaffList(data))
      .catch((err) => console.error('Error fetching staff:', err));
  }, []);

  // Handle new staff form submission
  const handleAddStaff = (e) => {
    e.preventDefault();
    fetch('/api/staff', {  // Replace with your API endpoint to add staff
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStaff),
    })
      .then((response) => response.json())
      .then((data) => {
        setStaffList([...staffList, data]);
        setIsAddingStaff(false);
        setNewStaff({ name: '', role: '', department: '', isOnDuty: false });
      })
      .catch((err) => console.error('Error adding staff:', err));
  };

  // Toggle staff duty status
  const toggleDutyStatus = (id) => {
    const updatedStaffList = staffList.map((staff) =>
      staff.id === id ? { ...staff, isOnDuty: !staff.isOnDuty } : staff
    );
    setStaffList(updatedStaffList);

    // You can send the updated duty status to the backend if needed
    fetch(`/api/staff/${id}/toggle-duty`, {  // Replace with your API endpoint
      method: 'PATCH',
    }).catch((err) => console.error('Error updating staff duty status:', err));
  };

  // Handle staff information edit (you can expand this based on your needs)
  const handleEditStaff = (id, updatedInfo) => {
    const updatedStaffList = staffList.map((staff) =>
      staff.id === id ? { ...staff, ...updatedInfo } : staff
    );
    setStaffList(updatedStaffList);

    // Send the updated staff information to the backend
    fetch(`/api/staff/${id}`, {  // Replace with your API endpoint
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedInfo),
    }).catch((err) => console.error('Error editing staff:', err));
  };

  return (
    <div className="staff-management">
      <h2>Staff Management</h2>

      {/* Button to toggle add staff form */}
      {!isAddingStaff && <button onClick={() => setIsAddingStaff(true)}>Add New Staff</button>}

      {/* Add Staff Form */}
      {isAddingStaff && (
        <form onSubmit={handleAddStaff} className="add-staff-form">
          <input
            type="text"
            placeholder="Name"
            value={newStaff.name}
            onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={newStaff.role}
            onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Department"
            value={newStaff.department}
            onChange={(e) => setNewStaff({ ...newStaff, department: e.target.value })}
            required
          />
          <button type="submit">Add Staff</button>
          <button type="button" onClick={() => setIsAddingStaff(false)}>Cancel</button>
        </form>
      )}

      {/* Staff List */}
      <div className="staff-list">
        {staffList.length === 0 ? (
          <p>No staff available.</p>
        ) : (
          <ul>
            {staffList.map((staff) => (
              <li key={staff.id}>
                <h3>{staff.name}</h3>
                <p>Role: {staff.role}</p>
                <p>Department: {staff.department}</p>
                <p>Status: {staff.isOnDuty ? 'On Duty' : 'Off Duty'}</p>

                {/* Toggle Duty Status */}
                <button onClick={() => toggleDutyStatus(staff.id)}>
                  {staff.isOnDuty ? 'Mark as Off Duty' : 'Mark as On Duty'}
                </button>

                {/* Edit Button */}
                <button onClick={() => handleEditStaff(staff.id, { name: 'Updated Name' })}>Edit</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Staffs;
