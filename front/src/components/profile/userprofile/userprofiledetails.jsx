// User Profile Details Component
import React, { useState } from 'react';
const UserProfileDetails = ({ userDetails, onUpdateDetails }) => {
    const [editing, setEditing] = useState(false);
    const [editedDetails, setEditedDetails] = useState(userDetails);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        onUpdateDetails(editedDetails);
        setEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedDetails({
            ...editedDetails,
            [name]: value,
        });
    };

    return (
        <div className="user-details">
            {!editing ? (
                <div>
                    <h2>{editedDetails.name}</h2>
                    <div className="details">{editedDetails.role}</div>
                    <h1>Welcome to My Profile</h1>
                    <button onClick={handleEditClick}>Edit Details</button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        name="name"
                        value={editedDetails.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="role"
                        value={editedDetails.role}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSaveClick}>Save Details</button>
                </div>
            )}
        </div>
    );
};
export default UserProfileDetails;