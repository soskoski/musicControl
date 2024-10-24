import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid2, Button, Typography } from "@mui/material";

const Room = ({ leaveRoomCallBack }) => {
  const { roomCode } = useParams();
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(true);
  const [isHost, setIsHost] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    GetRoomDetails();
  }, [roomCode]);

  const GetRoomDetails = () => {
    fetch(`/api/getRoom?code=${roomCode}`)
      .then((response) => {
        if (!response.ok) {
          leaveRoomCallBack();
          navigate("/");
        }
        return response.json();
      })
      .then((data) => {
        setVotesToSkip(data.votes_to_skip);
        setGuestCanPause(data.guess_can_pause);
        setIsHost(data.is_host);

        console.log("Extracted Room Code:", roomCode);
        console.log("API Response Data:", data);
      })
      .catch((error) => {
        console.error("Error fetching Room details:", error);
      });
  };

  const LeaveRoomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
    };

    fetch("/api/Leave", requestOptions).then((_response) => {
      leaveRoomCallBack();
      navigate("/");
    });
  };

  return (
    <Grid2 container spacing={1} direction={"column"} alignItems={"center"}>
      <Grid2 item="true" xs={12} align="center">
        <Typography variant="h4" component="h4">
          Code: {roomCode}
        </Typography>
      </Grid2>
      <Grid2 item="true" xs={12} align="center">
        <Typography variant="h6" component="h6">
          Votes to Skip: {votesToSkip}
        </Typography>
      </Grid2>
      <Grid2 item="true" xs={12} align="center">
        <Typography variant="h6" component="h6">
          Guest can Pause: {guestCanPause ? "YES" : "NO"}
        </Typography>
      </Grid2>
      <Grid2 item="true" xs={12} align="center">
        <Typography variant="h6" component="h6">
          Host: {isHost ? "YES" : "NO"}
        </Typography>
      </Grid2>
      <Grid2 item="true" xs={12} align="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={LeaveRoomButtonPressed}
        >
          Leave Room
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default Room;
