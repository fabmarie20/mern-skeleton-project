import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
} from "@mui/material";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Vite proxy will forward /api to http://localhost:3000
        const res = await fetch("/api/tasks");
        if (!res.ok) {
          throw new Error("Failed to load tasks");
        }
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <Card sx={{ maxWidth: 800, margin: "2rem auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Pastel Planner Tasks
        </Typography>

        {loading && <CircularProgress />}

        {error && <Alert severity="error">{error}</Alert>}

        {!loading && !error && (
          <>
            {tasks.length === 0 ? (
              <Typography>No tasks found.</Typography>
            ) : (
              <List>
                {tasks.map((task) => (
                  <ListItem key={task._id} divider>
                    <ListItemText
                      primary={task.title}
                      secondary={`${task.description} — status: ${task.status}`}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskList;
