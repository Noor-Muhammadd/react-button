import React, { useEffect, useState } from 'react';
import User from './User';
import data from '../../../components/team-builder/team/data/data.json'

const Team = () => {
    const [users, setUsers] = useState([]);
    const [team, setTeam] = useState([]);
    const [clubs, setClubs] = useState([]);
   
    useEffect( () => {
      setClubs(data);
    } , [])
  
    useEffect( () =>{
      fetch('https://randomuser.me/api/?results=15')
      .then(res =>  res.json())
      .then(data => setUsers(data.results))
    }, []);
  
    const addMember = (name) => {
      const exists = team.find(m => m === name);
      if(!exists) {
        setTeam([...team, name]);
      }
    }
    return (
        <div>
        <h1>Team Builder : {users.length}</h1>
        <ul>
          {
            clubs.map(club => <h4>{club.name}</h4>)
          }
        </ul>
        <ul>
          {
            team.map( (m, idx) => <li key={idx}>{m}</li>)
          }
        </ul>
        {
          users.map(user => <User user={user} addMember={addMember} key={user.phone}></User>)
        }
    </div>
    );
};

export default Team;