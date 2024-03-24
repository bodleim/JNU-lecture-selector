import React from 'react';
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import './LectureSelector.css'; // 위에서 주어진 CSS 파일을 import 해야 합니다.

function LectureSelector() {
  return (
      <div className="grid">
        {/* Left Column */}
        <div className="column">
          <div className="header">JNU Lecture Selector</div>
          <div className="form-group">
            <label htmlFor="major" className="label">전공:</label>
            <input type="text" className="major-input" name="major" value="인공지능전공"/>
          </div>
          <div className="form-group">
            <label htmlFor="credits" className="label">목표 학점:</label>
            <input type="number" className="credits-input" name="credits" value="21"/>
          </div>
          <div className="form-group">
            <label htmlFor="flexibility" className="label">수업 간의 여유:</label>
            <select className="flexibility-input" name="flexibility">
              <option>많음</option>
              <option defaultValue>보통</option>
              <option>적음</option>
            </select>
          </div>
          <div className="timetable-list"></div>
          <Button variant="contained" endIcon={<CheckIcon />}>생성</Button>
        </div>

        {/* Middle Column for MAP */}
        <div className="column" style={{ gridColumn: 'span 2' }}>
          <div className="header">MAP</div>
          <div className="map-placeholder"></div>
        </div>

        {/* Right Column for Timetable Confirmation */}
        <div className="column">
          <div className="header">시간표 확인</div>
          <div className="timetable-preview"></div>
        </div>
      </div>
  );
}

export default LectureSelector;
