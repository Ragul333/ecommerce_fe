import { useEffect, useState } from 'react';
import './App.css';
import FilterComponent from './components/FilterComponent';
import Table from './components/Table';
import axios from 'axios';
import { BASE_URL } from './constants';
import exportFromJSON from 'export-from-json'

function App() {
  const [data, setData] = useState([]);
  const [params, setParams] = useState('');
  const [paramType, setParamType] = useState('');
  const [downloadType, setDownloadType] = useState('excel');
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/customer_data?${paramType === 'order' ? 'order_id' : 'costumer_id'}=${params}&start_date=${dateRange.startDate}&end_date=${dateRange.endDate}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [params, dateRange]);

  const handleDownload = () => {
    const fileName = 'newfile'
    const exportType = downloadType === 'excel' ? exportFromJSON.types.csv : exportFromJSON.types.xml;
    exportFromJSON({ data, fileName, exportType })
  }

  const handleChange = (e) => {
    setDownloadType(e.target.value);
  }

  const handleStartDateChange = (event) => {
    setDateRange({ ...dateRange, startDate: event.target.value });
  };

  const handleEndDateChange = (event) => {
    setDateRange({ ...dateRange, endDate: event.target.value });
  };

  return (
    <div className='container'>
      <div className='filters-cont d-flex mt-4'>
        <div class="col-6">
        </div>
        <div className='col-6 d-flex align-items-center justify-content-center'>
          <div className='dropdown'>
            <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-filter"></i>
            </button>
            <ul class="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
              <li>
                <FilterComponent setParams={setParams} setParamType={setParamType} />
              </li>
            </ul>
          </div>
          <div className='m-2'>
            <label>
              Start Date:
              <input type="date" class="form-control" value={dateRange.startDate} onChange={handleStartDateChange} />
            </label>
          </div>
          <div className='m-2'>
            <label>
              End Date:
              <input type="date" class="form-control" value={dateRange.endDate} onChange={handleEndDateChange} />
            </label>
          </div>
          <select class="form-select form-select-sm" value={downloadType} onChange={handleChange} aria-label=".form-select-sm example">
            <option value="excel" selected>Excel</option>
            <option value="xml">Xml</option>
          </select>

          <button class="btn btn-secondary" type="button" onClick={handleDownload}>
            <i class="fa fa-download"></i>
          </button>
        </div>
      </div>
      <div className='mt-4 table-cont'>
        <Table data={data} loading={loading} />
      </div>
    </div>
  );
}

export default App;
