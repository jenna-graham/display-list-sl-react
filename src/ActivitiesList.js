import ActivityItem from './ActivityItem.js';

export default function ActivitiesList({ activities }) {
  return <div>
    <h3>My favorite things to do</h3>
    {
      activities.map((activity, i) => <ActivityItem 
        activity={activity} 
        key={activity + i} />) 
    }
  </div>;
}
