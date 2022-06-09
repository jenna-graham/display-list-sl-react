import ActivityItem from './ActivityItem.js';
import './App.css';
export default function ActivitiesList({ activities }) {
  return <div className="activity">
    <h3>My favorite things to do</h3>
    {
      activities.map((activity, i) => <ActivityItem 
        activity={activity} 
        key={activity + i} />) 
    }
  </div>;
}
