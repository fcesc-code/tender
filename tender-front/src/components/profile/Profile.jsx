import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CONNECTION_CONFIG from "../auth0/CONNECTION_CONFIG";
import Userinfo from "./Userinfo.jsx";
import Notifier from "./Notifier.jsx";
import {
  saveCurrentUser,
  existCurrentUser,
} from "../../redux/actions/userActions";

const Profile = ({ dispatch }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getUserMetadata = async () => {
      const { domain } = CONNECTION_CONFIG;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        if (accessToken) {
          sessionStorage.setItem("USER_TOKEN", JSON.stringify(accessToken));
          dispatch(saveCurrentUser(user.sub));
          dispatch(existCurrentUser(user));
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getUserMetadata();
  });

  return (
    isAuthenticated && (
      <div>
        <Notifier user={user} />
        <Userinfo user={user} />
      </div>
    )
  );
};

Profile.propTypes = {
  dispatch: PropTypes.any,
};

export default connect()(Profile);
