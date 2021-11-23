import { ActionIcon, Group, Text, ThemeIcon } from '@mantine/core'
import { MdBolt, MdHome, MdThumbUp } from 'react-icons/md'
import { AiFillFire } from 'react-icons/ai'

const MenuBar = () => {
  return (
    <Group style={{ width: '100%' }} position="apart" align="center">
      <OptionsBar />
      <TrafficLights />
      <FeedbackBar />
    </Group>
  )
}

const OptionsBar = () => {
  return (
    <Group>
      <ActionIcon color="blue" size="lg" variant="light">
        <MdHome size={18} />
      </ActionIcon>
      <ActionIcon color="blue" size="lg" variant="light">
        <MdBolt size={18} />
      </ActionIcon>
      <ActionIcon color="blue" size="lg" variant="light">
        漢
      </ActionIcon>
    </Group>
  )
}

// prettier-ignore
const TRAFFIC = [true, true, true, false, true, true, false, false, true, true, null, null, null, null, null]

const TrafficLights = () => {
  const lights = TRAFFIC.map((e) => {
    if (e === null) return '#CACACA'
    else return e ? '#4DD936' : '#F97575'
  })

  return (
    <svg width={(lights.length + 1) * 16} height="10">
      {lights.map((fill, i) => (
        <circle
          key={`circle-${i}`}
          cx={(i + 1) * 16}
          cy="5"
          r="4"
          fill={fill}
        />
      ))}
    </svg>
  )
}

const FeedbackBar = () => {
  return (
    <Group spacing={32}>
      <Group spacing={8}>
        <AiFillFire size={18} />
        <Text>18</Text>
      </Group>
      <Group spacing={8}>
        <MdThumbUp size={18} />
        <Text>92%</Text>
      </Group>
    </Group>
  )
}

export default MenuBar
