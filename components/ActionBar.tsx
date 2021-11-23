import { Button, Group } from '@mantine/core'

const ActionBar = () => {
  return (
    <Group position="apart" grow>
      <Button variant="outline" radius="xs">
        History
      </Button>
      <Button variant="outline" radius="xs">
        Stats
      </Button>
      <Button variant="outline" radius="xs">
        Graph
      </Button>
      <Button variant="outline" radius="xs">
        Reference
      </Button>
      <Button variant="outline" radius="xs">
        Restart
      </Button>
    </Group>
  )
}

export default ActionBar
