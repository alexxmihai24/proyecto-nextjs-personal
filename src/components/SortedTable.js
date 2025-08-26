'use client'
import { useState } from 'react';

function SortedTable() {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const data = [
        {
            id: 1,
            name: "Cy Ganderton",
            job: "Quality Control Specialist",
            company: "Littel, Schaden and Vandervort",
            location: "Canada",
            lastLogin: "12/16/2020",
            color: "Blue"
        },
        {
            id: 2,
            name: "Hart Hagerty",
            job: "Desktop Support Technician",
            company: "Zemlak, Daniel and Leannon",
            location: "United States",
            lastLogin: "12/5/2020",
            color: "Purple"
        },
        {
            id: 3,
            name: "Brice Swyre",
            job: "Tax Accountant",
            company: "Carroll Group",
            location: "China",
            lastLogin: "8/15/2020",
            color: "Red"
        },
        {
            id: 4,
            name: "Marjy Ferencz",
            job: "Office Assistant I",
            company: "Rowe-Schoen",
            location: "Russia",
            lastLogin: "3/25/2021",
            color: "Crimson"
        },
        {
            id: 5,
            name: "Yancy Tear",
            job: "Community Outreach Specialist",
            company: "Wyman-Ledner",
            location: "Brazil",
            lastLogin: "5/22/2020",
            color: "Indigo"
        },
        {
            id: 6,
            name: "Irma Vasilik",
            job: "Editor",
            company: "Wiza, Bins and Emard",
            location: "Venezuela",
            lastLogin: "12/8/2020",
            color: "Purple"
        },
        {
            id: 7,
            name: "Meghann Durtnal",
            job: "Staff Accountant IV",
            company: "Schuster-Schimmel",
            location: "Philippines",
            lastLogin: "2/17/2021",
            color: "Yellow"
        },
        {
            id: 8,
            name: "Sammy Seston",
            job: "Accountant I",
            company: "O'Hara, Welch and Keebler",
            location: "Indonesia",
            lastLogin: "5/23/2020",
            color: "Crimson"
        },
        {
            id: 9,
            name: "Lesya Tinham",
            job: "Safety Technician IV",
            company: "Turner-Kuhlman",
            location: "Philippines",
            lastLogin: "2/21/2021",
            color: "Maroon"
        },
        {
            id: 10,
            name: "Zaneta Tewkesbury",
            job: "VP Marketing",
            company: "Sauer LLC",
            location: "Chad",
            lastLogin: "6/23/2020",
            color: "Green"
        },
        {
            id: 11,
            name: "Andy Tipple",
            job: "Librarian",
            company: "Hilpert Group",
            location: "Poland",
            lastLogin: "7/9/2020",
            color: "Indigo"
        },
        {
            id: 12,
            name: "Sophi Biles",
            job: "Recruiting Manager",
            company: "Gutmann Inc",
            location: "Indonesia",
            lastLogin: "2/12/2021",
            color: "Maroon"
        },
        {
            id: 13,
            name: "Florida Garces",
            job: "Web Developer IV",
            company: "Gaylord, Pacocha and Baumbach",
            location: "Poland",
            lastLogin: "5/31/2020",
            color: "Purple"
        },
        {
            id: 14,
            name: "Maribeth Popping",
            job: "Analyst Programmer",
            company: "Deckow-Pouros",
            location: "Portugal",
            lastLogin: "4/27/2021",
            color: "Aquamarine"
        },
        {
            id: 15,
            name: "Moritz Dryburgh",
            job: "Dental Hygienist",
            company: "Schiller, Cole and Hackett",
            location: "Sri Lanka",
            lastLogin: "8/8/2020",
            color: "Crimson"
        },
        {
            id: 16,
            name: "Reid Semiras",
            job: "Teacher",
            company: "Sporer, Sipes and Rogahn",
            location: "Poland",
            lastLogin: "7/30/2020",
            color: "Green"
        },
        {
            id: 17,
            name: "Alec Lethby",
            job: "Teacher",
            company: "Reichel, Glover and Hamill",
            location: "China",
            lastLogin: "2/28/2021",
            color: "Khaki"
        },
        {
            id: 18,
            name: "Aland Wilber",
            job: "Quality Control Specialist",
            company: "Kshlerin, Rogahn and Swaniawski",
            location: "Czech Republic",
            lastLogin: "9/29/2020",
            color: "Purple"
        },
        {
            id: 19,
            name: "Teddie Duerden",
            job: "Staff Accountant III",
            company: "Pouros, Ullrich and Windler",
            location: "France",
            lastLogin: "10/27/2020",
            color: "Aquamarine"
        },
        {
            id: 20,
            name: "Lorelei Blackstone",
            job: "Data Coordiator",
            company: "Witting, Kutch and Greenfelder",
            location: "Kazakhstan",
            lastLogin: "6/3/2020",
            color: "Red"
        }

    ];

    const sortedData = data.toSorted((a, b) => {
        if (!sortConfig.key) return 0;
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        // Si es una fecha
        if (sortConfig.key === 'lastLogin') {
            return (new Date(aValue) - new Date(bValue)) * (sortConfig.direction === 'asc' ? 1 : -1);
        }

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const headers = [
        { key: 'name', label: 'Name' },
        { key: 'job', label: 'Job' },
        { key: 'company', label: 'Company' },
        { key: 'location', label: 'Location' },
        { key: 'lastLogin', label: 'Last Login' },
        { key: 'color', label: 'Favorite Color' }
    ];

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>#</th>
                        {headers.map(h => (
                            <th key={h.key} onClick={() => requestSort(h.key)} className="cursor-pointer">
                                {h.label}
                                {sortConfig.key === h.key ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, index) => (
                        <tr key={item.id}>
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.job}</td>
                            <td>{item.company}</td>
                            <td>{item.location}</td>
                            <td>{item.lastLogin}</td>
                            <td>{item.color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SortedTable;
