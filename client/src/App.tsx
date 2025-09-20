import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

  }, [])
  return (
    <>
    <Box display="flex" alignItems="center" gap={0}>
      <img 
          src="/Kojera-Logo-Fundo-Claro.ico" 
          alt="Logo" 
          style={{ width: "80px", height: "80px" }} 
      />
      <Typography variant='h3'>Reactivities</Typography>
    </Box>

      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
