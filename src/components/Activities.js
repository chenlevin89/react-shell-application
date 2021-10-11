import './Activities.css';
import {ButtonComponent} from '@chenlevin89/awesome-lib';

export default function Activities({activities}) {

  return (
    <div className="Activities">
      <h2>Activities</h2>
      <ButtonComponent text="Print" />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Operation</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            activities.map((activity, index) =>
              <tr key={index}>
                <td>{index}</td>
                <td>{activity.date.toDateString()}</td>
                <td>{activity.operation}</td>
                <td>{activity.amount}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}