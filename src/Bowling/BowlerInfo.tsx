import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerInfo() {
  const [bowlerInfo, setBowlerInfo] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlingInfo = async () => {
      const rsp = await fetch('http://localhost:5019/Bowler');
      const data = await rsp.json();
      // Filter the data for only Marlins or Shark teams before setting the state
      const filteredData = data.filter(
        (bowler: Bowler) =>
          bowler.teamName === 'Marlins' || bowler.teamName === 'Sharks',
      );
      setBowlerInfo(filteredData);
    };
    fetchBowlingInfo();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowler Information</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler First Name</th>
            <th>Bowler Middle Initial</th>
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
          {bowlerInfo.map((bowler) => (
            <tr key={bowler.id}>
              <td>{bowler.firstName}</td>
              <td>{bowler.middleInitial}</td>
              <td>{bowler.lastName}</td>
              <td>{bowler.address}</td>
              <td>{bowler.city}</td>
              <td>{bowler.state}</td>
              <td>{bowler.zip}</td>
              <td>{bowler.phoneNumber}</td>
              <td>{bowler.teamName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerInfo;
