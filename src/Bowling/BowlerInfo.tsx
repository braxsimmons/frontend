import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerInfo() {
  const [bowlerInfo, setBowlerInfo] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlingInfo = async () => {
      const rsp = await fetch('http://localhost:5019/Bowler');
      const data = await rsp.json();
      setBowlerInfo(data);
    };
    fetchBowlingInfo();
  }, []);

  // Function to get team name based on team ID
  const getTeamName = (teamId: number) => {
    switch (teamId) {
      case 1:
        return 'Marlins';
      case 2:
        return 'Sharks';
      default:
        return 'Unknown Team';
    }
  };
  // Filter out only the bowlers from teams with ID 1 and 2
  const filteredBowlers = bowlerInfo.filter(
    (bowler) => bowler.teamId === 1 || bowler.teamId === 2,
  );
  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowler Information</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler First Name</th>
            <th>Bowler Middle Name</th>
            <th>Bowler Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
            <th>Bowler Team</th>
          </tr>
        </thead>
        <tbody>
          {filteredBowlers.map((bowler) => (
            <tr key={bowler.bowlerId}>
              <td>{bowler.bowlerFirstName}</td>
              <td>{bowler.bowlerMiddleInit}</td>
              <td>{bowler.bowlerLastName}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
              <td>{getTeamName(bowler.teamId)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerInfo;
