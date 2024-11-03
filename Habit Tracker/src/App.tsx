import { Container, Box, Typography } from '../node_modules/@mui/material/index'
import './App.css'
import useHabitStore from './store/store'

function App() {

  // const store = useHabitStore();
  // console.log(store);

  return (
    <Container>
      <Box>
        <Typography variant="h3" align="center">Habit Tracker</Typography>
        {/* <HabitForm /> */}
        {/* <HabitList /> */}
        {/* <HabitStats /> */}
      </Box>
    </Container>
  )
}

export default App
