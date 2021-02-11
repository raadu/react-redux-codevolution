import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UsersContainer({ userData, fetchUsers }) {
  // API call to fetch users when first this component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {userData.loading ? (
        <h3>Loading...</h3>
      ) : userData.error ? (
        <h3>{userData.error}</h3>
      ) : (
        <div>
          <h2>Users List</h2>
          <div>
            {userData?.users.map((user, index) => (
              <p key={index}>{user.name}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(UsersContainer);
