import { ListChecks, Cloud, Bell, BarChart } from "lucide-react";

const Home = () => {
  return (
    <div className="welcome">
      <h2 className="app-title">Start Your Productive Day! ✨</h2>
      <p>
        Welcome to TaskFlow! We're here to help you manage your daily tasks more
        efficiently.
      </p>

      <h3>Special Features</h3>
      <ul className="feature-list">
        <li className="feature-item">
          <div className="feature-title">
            <ListChecks
              className="inline-block mr-2"
              size={16}
            />
            Smart Task Management
          </div>
          Easily manage your tasks and set priorities on daily, weekly, and
          monthly basis.
        </li>
        <li className="feature-item">
          <div className="feature-title">
            <BarChart
              className="inline-block mr-2"
              size={16}
            />
            Progress Tracking
          </div>
          Monitor your task completion and productivity trends.
        </li>
        <li className="feature-item">
          <div className="feature-title">
            <Bell
              className="inline-block mr-2"
              size={16}
            />
            Smart Reminders
          </div>
          Never miss important tasks with customized notifications.
        </li>
        <li className="feature-item">
          <div className="feature-title">
            <Cloud
              className="inline-block mr-2"
              size={16}
            />
            Cloud Sync
          </div>
          Access your tasks from any device, anytime.
        </li>
      </ul>

      <div className="getting-started">
        <h3>Getting Started</h3>
        <ol className="steps">
          <li>Click the "ADD" button to create a new task</li>
          <li>Enter your task description</li>
          <li>Use checkboxes to mark completed tasks</li>
        </ol>
      </div>

      <div className="footer">
        Let's make today productive! 💪
        <p>Your success starts with organization</p>
      </div>
    </div>
  );
};

export default Home;
