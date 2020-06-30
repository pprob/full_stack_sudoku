import React from "react";

const LeaderboardRow = (props) => {
  const { rank, userName, wins } = props;
  return (
    <tr>
      <td>{rank}</td>
      <td>{userName}</td>
      <td>{wins}</td>
    </tr>
  );
};

export default LeaderboardRow;
