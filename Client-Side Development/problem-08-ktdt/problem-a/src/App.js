import React from 'react'; //import React library

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

let columnNames = ['Name', 'State', 'Phone', 'Twitter'];

/* Your code goes here */
export function App(prop) {
  return (
    <div className="container">
      <h1>US Senators (Oct 2020)</h1>
      <SenatorTable senators={prop.senators}/>
    </div>
  );
}

export function SenatorTable(prop) {
  let tableRows = prop.senators.map((senator) => {
    let rows = <SenatorRow key={senator.id} senator={senator}/>
    return rows;
  });

  return (
    <table className="table-bordered">
      <TableHeader columnNames={columnNames}/>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

export function TableHeader(prop) {
  let columns = prop.columnNames.map((column) => {
    let columnKey = <th key={column}>{column}</th>
    return columnKey;
  });

  return (
    <thead>
      <tr>
        {columns}
      </tr>
    </thead>
  );
}

export function SenatorRow(prop) {
  let party = prop.senator.party.charAt(0);
  let tel = "tel:" + prop.senator.phone;
  let twitter = "https://twitter.com/" + prop.senator.twitter;
  return (
    <tr>
      <td>{prop.senator.name}</td>
      <td>{party} - {prop.senator.state}</td>
      <td><a href={tel}>{prop.senator.phone}</a></td>
      <td><a href={twitter}>@{prop.senator.twitter}</a></td>
    </tr>
  );
}