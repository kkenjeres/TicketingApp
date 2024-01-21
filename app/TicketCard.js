import DeleteBlock from './(components)/DeleteBlock'
import PriorityDisplay from './(components)/PriorityDisplay'
import ProgressDisplay from './(components)/ProgressDisplay'
import StatusDisplay from './(components)/StatusDisplay'

const TicketCard = () => {
  return (
    <div>
      <DeleteBlock />
      <PriorityDisplay />
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  )
}

export default TicketCard