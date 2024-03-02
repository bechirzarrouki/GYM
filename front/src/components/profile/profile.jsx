// Import statements...
import UserProfileDetails from "./userprofile/userprofiledetails";
import UserHistoryDashboard from "./userhistorydashboard/userhistorydashboard";
import React, { useState } from 'react';
import './profile.css'
const ProfilePage = () => {
    const [userDetails, setUserDetails] = useState({
      name: 'Imen',
      role: 'Utilisateur',
      // Add more user details as needed
    });
  
    const [weightProgression, setWeightProgression] = useState([
        { date: '2022-01-01', weight: 70 },
        { date: '2022-02-01', weight: 72 },
        { date: '2022-03-01', weight: 68 },
        { date: '2022-04-01', weight: 73 },
        { date: '2022-05-01', weight: 71 },
        { date: '2022-06-01', weight: 75 },
        { date: '2022-07-01', weight: 72 },
        { date: '2022-08-01', weight: 76 },
        { date: '2022-09-01', weight: 74 },
        { date: '2022-10-01', weight: 77 },
        { date: '2022-11-01', weight: 75 },
        { date: '2022-12-01', weight: 78 },
      // Add more historical weight data with dates
    ]);
  
    const handleUpdateDetails = (updatedDetails) => {
      setUserDetails(updatedDetails);
    };
  
    return (
      <div className="profile-page">
        <UserProfileDetails userDetails={userDetails} onUpdateDetails={handleUpdateDetails} />
        <UserHistoryDashboard historyData={weightProgression} />
        {/* ... (Other components) */}
      </div>
    );
  };
  
  export default ProfilePage;
  