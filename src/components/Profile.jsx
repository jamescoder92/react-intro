import { useState } from 'react';


function Profile(){
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div style={{backgroundColor: 'white',padding: '10px', margin: '10px', borderRadius: '50px'}}>
      <h3>3. Profile Component</h3>
      <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" style={{ width: '50px', height: '50px', borderRadius: '50%',  }}></img>
        <div>
          <div style={{ marginBottom: '10px' }}> 
          <h4 style={{ margin: 0 }}>John Doe {isFollowing ? "(Following)" : ""}</h4>
          <h5 style={{ margin: 0, marginTop: '2px', }}>Follow for more</h5>
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            style={{ 
              backgroundColor: isFollowing ? 'red' : '#0095f6',
              color: isFollowing ? 'black' : 'white',
              border: 'none',
              padding: '7px 100px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 