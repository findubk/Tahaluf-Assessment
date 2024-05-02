import React from 'react';

import Card from 'src/components/Card/Card';

import './detail.scss';

function Detail({ selectedUniversity }) {
  return (
    <div className='university-card'>
      <Card title=''>
        <div className='item'>
          <span className='label'>Name:</span>
          <span className='text'>{selectedUniversity.name}</span>
        </div>
        <div className='item'>
          <span className='label'>State:</span>
          <span className='text'>{selectedUniversity['state-province'] ?? 'N/A'}</span>
        </div>
        <div className='item'>
          <span className='label'>Country:</span>
          <span className='text'>
            {selectedUniversity.country}, {selectedUniversity.alpha_two_code}
          </span>
        </div>
        <div className='item webpages-wrapper'>
          <span className='label'>Webpages:</span>
          <div className='webpages'>
            {selectedUniversity.web_pages.map((web_page, index) => (
              <>
                <a href={web_page}>{web_page}</a>
                {index !== selectedUniversity.web_pages.length - 1 && <span>, </span>}
              </>
            ))}
          </div>
        </div>
        <div className='item domain-wrapper'>
          <span className='label'>Domains:</span>
          <div className='domain'>
            {selectedUniversity.domains.map(domain => (
              <span>{domain}</span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Detail;
