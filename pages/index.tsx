import { useState } from 'react'
import { Center, Group, Text } from '@mantine/core'
import type { NextPage } from 'next'

import MenuBar from '@/components/MenuBar'
import ActionBar from '@/components/ActionBar'

const WORD = 'ひとつめは'

const Home: NextPage = () => {
  const [downstep, setDownstep] = useState(0)

  const accent = Array.from({ length: WORD.length }, (_, i) =>
    i <= downstep ? 'H' : 'L'
  )

  if (downstep !== 0) accent[0] = 'L'

  return (
    <Group direction="column" align="stretch">
      <MenuBar />
      <Center my={96}>
        {WORD.split('').map((letter, i) => (
          <Text
            component="span"
            key={`letter-${i}`}
            sx={{
              fontSize: '120px',
              lineHeight: 1.1,
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#ccc' },
              borderTop: accent[i] === 'H' ? '2px solid' : undefined,
              borderBottom: accent[i] === 'L' ? '2px solid' : undefined,
              borderRight:
                i !== WORD.length - 1 && accent[i] !== accent[i + 1]
                  ? '2px solid'
                  : undefined,
            }}
            onClick={() => setDownstep(i)}
          >
            {letter}
          </Text>
        ))}
      </Center>
      <ActionBar />
    </Group>
  )
}

export default Home
