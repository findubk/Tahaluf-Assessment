import React, { useEffect, useState } from 'react';

import List from 'src/components/List/List';
import Detail from '../Detail/Detail';

import { fetchList } from 'src/modules/list.module';
import Filters from 'src/components/Filters/Filters';
import Layout from 'src/layout/Layout';

function Home() {
  const [universitiesList, setUniversitiesList] = useState([]);
  const [filteredUniversities, setFilteredUniversitiesList] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Columns for the list, name the columns and provide the data key from api response
  const COLUMNS = [
    { name: 'name', dataKey: 'name' },
    { name: 'country', dataKey: 'country' },
    {
      name: 'action',
      // Click handler for the action column
      click: deleteItem => setUniversitiesList(filteredUniversities.filter(item => item.name !== deleteItem.name)),
    },
  ];

  const fetchUniversitiesList = async () => {
    // Fetch universities list
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
    // Set the selected university to show the detail
    setSelectedUniversity(university);
  };

  useEffect(() => {
    // Fetch universities list handler
    fetchUniversitiesList();
  }, []);

  useEffect(() => {
    // Set the filtered universities list to the universities list
    setFilteredUniversitiesList(universitiesList);
  }, [universitiesList]);

  return (
    <Layout pageHeading={selectedUniversity ? 'University Detail' : 'University List'}>
      {selectedUniversity ? (
        <Detail selectedUniversity={selectedUniversity}></Detail>
      ) : (
        <>
          <Filters data={universitiesList} setFilteredData={setFilteredUniversitiesList} />
          <List
            data={filteredUniversities}
            columns={COLUMNS}
            loading={loading}
            error={error}
            onSelectListItem={showUniversityDetail}
          />
        </>
      )}
    </Layout>
  );
}

export default Home;
