import React from "react";
import "./ListPopup.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

interface Friend {
  friend_username: string;
}

interface Recommendation {
  user_id: number;
  username: string;
}

const ListPopup = ({
  handleClose,
  show,
  isFriends,
  activeUser,
}: {
  handleClose: () => void;
  show: boolean;
  isFriends: boolean;
  activeUser: string;
}) => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const { username } = useParams();
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/${activeUser}/friends`
      );

      // console.log(response.data.results);
      setFriends(response.data.results);

      const response2 = await axios.get(
        `http://localhost:8080/${activeUser}/recommendations`
      );

      // console.log(response2.data.results);
      setRecommendations(response2.data.results);
    } catch (error) {
      setFriends([{ friend_username: "Error fetching friends" }]);
      setRecommendations([
        {
          user_id: 0,
          username: "Error fetching recommendations",
        },
      ]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showHideClassName = show ? "popup display-block" : "popup display-none";




  return (
    <div className={showHideClassName}>
      <section className="popup-main">
        {isFriends ? (
            friends.length > 0 ? (
              friends.map((friend) => 
                  <h3  className="hover:text-blue-700" onClick={() => navigate(`/${username}/${friend.friend_username}/userProfile`)}>{friend.friend_username}</h3>
              )
            ) : (
              <p>No friends to display.</p>
            )
          ) : (
            recommendations.length > 0 ? (
              recommendations.map((rec) => 
                <h3  className="hover:text-blue-700" onClick={() => navigate(`/${username}/${rec.username}/userProfile`)}>{rec.username}</h3>
              )
            ) : (
              <p>No recommendations to display.</p>
            )
          )}

        <button className="btn btn-success" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default ListPopup;
