import '../App.css';
import Header from '../components/Header';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MedsLogPage() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Header title='Medications Log' />
      <Calendar
        onChange={setDate}
        value={date}
      />
    </>
  )
}

export default MedsLogPage