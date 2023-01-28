import React, {useEffect, useRef, useState} from 'react';
import classnames from 'classnames';
import * as calendarFunc from './CalendarFunc';
import cl from './DatePicker.module.css';

const Calendar = ({setPickedDate, openedCal, setOpenedCal}) => {

    const years = [
        2022,
        2023,
        2024,
        2025,
        2026,
        2027,
        2028,
        2029,
        2030
    ]
    const monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ]
    const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс']
    const currentDate = new Date()

    const [date, setDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(null)
    const yearSelectRef = useRef()
    const monthSelectRef = useRef()

    const year = () => {return date.getFullYear()};

    const month = () => {return date.getMonth()};

    const handlePrevMonthButtonClick = () => {
        if (month() - 1 < currentDate.getMonth() && year() === currentDate.getFullYear()) setDate(new Date(currentDate))
        else setDate(new Date(year(), month() - 1))
    };

    const handleNextMonthButtonClick = () => {
        if (month() === 11 && year() + 1 > years[years.length - 1]) setDate(new Date(years[years.length - 1], month()))
        else setDate(new Date(year(), month() + 1))
    };

    const handleSelectChange = () => {
        const year = yearSelectRef.current.value
        const month = monthSelectRef.current.value
        setDate(new Date(year, month))
    };

    const handleDayClick = (date) => {
        setSelectedDate(date)
        setPickedDate(date)
    };

    const handleReset = () => {
        handleDayClick(currentDate)
        setDate(currentDate)
    }

    const monthData = calendarFunc.getMonthDataYM(year(), month());

    return (
        <div className={cl.calendar} style={{display: openedCal ? "block" : "none"}}>
            <header className={cl.calendarHeader}>
                <button className={cl.calendarFormBtn} onClick={handlePrevMonthButtonClick}>{'<'}</button>

                <select
                    className={cl.calendarFormSelect}
                    ref={monthSelectRef}
                    value={month()}
                    onChange={handleSelectChange}
                >
                    {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                    )}
                </select>

                <select
                    className={cl.calendarFormSelect}
                    ref={yearSelectRef}
                    value={year()}
                    onChange={handleSelectChange}
                >
                    {years.map(year =>
                        <option key={year} value={year}>{year}</option>
                    )}
                </select>

                <button className={cl.calendarFormBtn} onClick={handleNextMonthButtonClick}>{'>'}</button>
            </header>

            <table className={cl.calendarTable}>
                <thead>
                    <tr>
                        {weekDayNames.map(name =>
                            <th key={name} className={cl.calendarTableTh}>{name}</th>
                        )}
                    </tr>
                </thead>

                <tbody>
                {monthData.map((week, index) =>
                    <tr key={index}>
                        {week.map((date, index) => date ?
                            <td
                                key={index}
                                className={classnames('calendarDay', {
                                    'today': calendarFunc.areEqual(date, currentDate),
                                    'selected': calendarFunc.areEqual(date, selectedDate)
                                })}
                                onClick={() => handleDayClick(date)}
                            >{date.getDate()}</td>
                            :
                            <td key={index} />
                        )}
                    </tr>
                )}
                </tbody>
            </table>
            <div className={cl.calendarReset}>
                <button className={cl.calendarResetBtn} onClick={handleReset}>Reset</button>
                <button className={cl.calendarResetBtn} onClick={() => setOpenedCal(false)}>OK</button>
            </div>
        </div>
    );
}

export default Calendar;