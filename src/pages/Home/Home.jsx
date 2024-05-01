import React, { useEffect, useState } from 'react';

import List from 'src/components/List/List';
import Detail from '../Detail/Detail';

import { fetchList } from 'src/modules/list.module';
import Filters from 'src/components/Filters/Filters';

function Home() {
  const [universitiesList, setUniversitiesList] = useState([]);
  const [filteredUniversities, setFilteredUniversitiesList] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const COLUMNS = [
    { name: 'name', dataKey: 'name' },
    { name: 'country', dataKey: 'country' },
    {
      name: 'action',
      click: deleteItem => setUniversitiesList(filteredUniversities.filter(item => item.name !== deleteItem.name)),
    },
  ];

  const fetchUniversitiesList = async () => {
    setLoading(true);
    const response = await fetchList();
    if (response.success) {
      setUniversitiesList(response.data);
      setLoading(false);
    } else {
      setError(response.error);
      setLoading(false);
    }
  };

  const showUniversityDetail = university => {
    setSelectedUniversity(university);
  };

  useEffect(() => {
    fetchUniversitiesList();
  }, []);

  useEffect(() => {
    setFilteredUniversitiesList(universitiesList);
  }, [universitiesList]);

  return (
    <div>
      {selectedUniversity ? (
        <Detail selectedUniversity={selectedUniversity}></Detail>
      ) : (
        <>
          <h2>University List</h2>
          <Filters data={universitiesList} setFilteredData={setFilteredUniversitiesList} />
          <List data={filteredUniversities} columns={COLUMNS} loading={loading} error={error} onSelectListItem={showUniversityDetail} />
        </>
      )}
    </div>
  );
}

export default Home;