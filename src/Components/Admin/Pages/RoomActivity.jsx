import React, { useState, useEffect } from 'react';
import '../../Styles/roomActivity.css';

const RoomActivity = () => {
  const [rooms, setRooms] = useState([]);
  const [task, setTask] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  useEffect(() => {
    fetch('/api/rooms')
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((err) => console.error('Error fetching rooms:', err));
  }, []);

  const handleAssignTask = (roomId) => {
    fetch(`/api/rooms/${roomId}/assign-task`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((updatedRoom) => {
        setRooms((prevRooms) =>
          prevRooms.map((room) => (room.id === updatedRoom.id ? updatedRoom : room))
        );
        setTask('');
      })
      .catch((err) => console.error('Error assigning task:', err));
  };

  // ✨ Filter rooms based on selected status
  const filteredRooms = filterStatus === 'All' 
    ? rooms 
    : rooms.filter((room) => room.status === filterStatus);

  return (
    <div className="room-activity">
      <h2>Room Activity Management</h2>

      {/* ✨ Filter Dropdown */}
      <div className="filter-section">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Vacant">Vacant</option>
          <option value="Occupied">Occupied</option>
          <option value="Needs Cleaning">Needs Cleaning</option>
        </select>
      </div>

      <div className="room-list">
        {filteredRooms.length === 0 ? (
          <p>No rooms available.</p>
        ) : (
          filteredRooms.map((room) => (
            <div key={room.id} className="room-card">
              <h3>Room {room.number}</h3>
              <p>Status: {room.status}</p>
              <p>Current Task: {room.currentTask || 'No active task'}</p>

              <input
                type="text"
                placeholder="Assign new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button onClick={() => handleAssignTask(room.id)}>Assign Task</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RoomActivity;
