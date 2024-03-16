// components/pagesHome/Callsign.jsx
import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import getUserData from "@/api/discordUser";

const Callsign = () => {
  const [user, setUser] = useState({});
  const [status, setStatus] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, statusBeautify } = await getUserData();
        setUser(data.discord_user);
        setStatus({
          image: `/assets/discord_status/${data.discord_status}.png`,
          status: statusBeautify,
          onMobile: data.active_on_discord_mobile,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="callsign">
      {isLoading ? (
        <Skeleton variant="circular" width={32} height={32} sx={{ bgcolor: "grey.900" }} />
      ) : (
        <img
          src={`https://cdn.discordapp.com/avatars/937876388554375188/${user.avatar}`}
          alt="DISCORD_PROFILE"
        />
      )}

      {isLoading ? (
        <Skeleton variant="text" sx={{ bgcolor: "grey.900", width: "80px", marginLeft: "5px" }} />
      ) : (
        <p>@{user.username}</p>
      )}

      <div className="status-container">
        <p>Sedang</p>
        <div className="discord-status">
          {isLoading ? (
            <Skeleton
              variant="circular"
              width={20}
              height={20}
              sx={{ bgcolor: "grey.900", marginLeft: "5px" }}
            />
          ) : (
            <img src={status.image} alt="STATUS_IMAGE" />
          )}

          {isLoading ? (
            <Skeleton
              variant="text"
              sx={{ bgcolor: "grey.900", width: "80px", marginLeft: "5px" }}
            />
          ) : (
            <i>{status.status}</i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Callsign;

