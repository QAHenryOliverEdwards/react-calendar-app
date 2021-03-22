import React from 'react';
import './main-page.css';

export class TopBar extends React.Component {
    constructor() {
        super();
        this.state = {date: this.getCurrentDate(), space: '    '}
    }

    getCurrentDate = () => {
        let currentDate = new Date();
        let currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth() + 1;
        let currentYear = currentDate.getFullYear();
        let dateFormat = `${currentDay} / ${currentMonth} / ${currentYear}`;
        return dateFormat;
    }

    render() {
        return (
            <p className={'top-bar'}>The Current Date Is: <span>&nbsp;&nbsp;&nbsp;</span> {this.state.date}</p>
        )
    }

}