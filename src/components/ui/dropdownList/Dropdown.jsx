import { IoIosArrowDown } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import './dropdown.css';
import {
  changetStatus,
  changeRequestStatus,
} from '../../../features/requests/requestsSlice';
import { useDispatch } from 'react-redux';

const Dropdown = ({ id, status }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  let statusBg =
    status === 'wait' ? '#96A0BD' : status === 'reject' ? '#ff382c' : '#22CD8B';
  const [statusContent, setStatusContent] = useState(status);
  const btnRef = useRef();

  const handleChange = (e) => {
    if (e.target.value === 'accept') {
      btnRef.current.style.backgroundColor = '#22CD8B';
      setStatusContent(e.target.value);
      dispatch(changetStatus({ id, status: e.target.value }));
    } else if (e.target.value === 'reject') {
      btnRef.current.style.backgroundColor = '#ff382c';
      setStatusContent(e.target.value);
      dispatch(changetStatus({ id, status: e.target.value }));
    }
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(changeRequestStatus());
  }, [statusContent]);

  return (
    <div className="dropdown-container">
      <button
        className="dropdown-selected"
        style={
          statusContent === 'wait'
            ? { backgroundColor: statusBg, cursor: 'pointer' }
            : { backgroundColor: statusBg, cursor: 'auto' }
        }
        onClick={() => setIsOpen(!isOpen)}
        ref={btnRef}
      >
        {statusContent === 'wait' && <IoIosArrowDown />} {statusContent}
      </button>

      {statusContent === 'wait' && isOpen && (
        <div className="dropdown-content">
          <article className="dropdown-item">
            <label htmlFor="accept">accept</label>
            <input
              type="radio"
              name="status"
              id="accept"
              onChange={handleChange}
              value="accept"
            />
          </article>

          <article className="dropdown-item">
            <label htmlFor="reject">reject</label>
            <input
              type="radio"
              name="status"
              id="reject"
              onChange={handleChange}
              value="reject"
            />
          </article>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
