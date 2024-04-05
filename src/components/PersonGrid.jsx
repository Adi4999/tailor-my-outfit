import React from 'react';
import PersonCard from './PersonCard';
import '../personGrid.css'; // Assuming your CSS file is named PersonGrid.css

const people = [
  { id: 1, name: 'John Doe', year: '1985', image: 'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg' },
  { id: 2, name: 'Jane Smith', year: '1990', image: 'https://cdn.pixabay.com/photo/2014/12/06/19/46/girl-559307_1280.jpg' },
  { id: 3, name: 'Alice Johnson', year: '1992', image: 'https://cdn.pixabay.com/photo/2016/03/23/08/34/woman-1274361_1280.jpg' },
  { id: 4, name: 'Bob Brown', year: '1988', image: 'https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_960_720.jpg' },
  { id: 5, name: 'Charlie Davis', year: '1986', image: 'https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_1280.jpg' },
  { id: 6, name: 'Daisy Evans', year: '1991', image: 'https://cdn.pixabay.com/photo/2017/10/19/18/26/woman-2868727_1280.jpg' },
  { id: 7, name: 'Eliot Ford', year: '1989', image: 'https://cdn.pixabay.com/photo/2018/04/05/09/32/portrait-3292287_1280.jpg' },
  { id: 8, name: 'Fiona Green', year: '1993', image: 'https://cdn.pixabay.com/photo/2018/07/28/09/23/woman-3567600_960_720.jpg' },
  { id: 9, name: 'George Harris', year: '1987', image: 'https://cdn.pixabay.com/photo/2015/09/19/01/03/woman-946699_1280.jpg' }
];

const PersonGrid = () => {
  return (
    <div className="grid">
      {people.map(person => <PersonCard key={person.id} person={person} />)}
    </div>
  );
};

export default PersonGrid;
