import React from 'react'
import { Stack, Text } from '../../components'

export default function StatisticsContainer() {
  return (
    <Stack justifyContent='center' p="81px 0" gap="80px" direction="row" flexWrap='wrap'>
      {[1, 2, 3].map(() => {
        return (
          <Stack width="auto" alignItems='center'>
            <Text as="h3">5000+</Text>
            <Text>LearnAM downloads</Text>
          </Stack>
        )
      })}
    </Stack>
  )
}
