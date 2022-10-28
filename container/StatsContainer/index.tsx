import React, { useEffect, useState } from 'react'
import { Stack, Text } from '../../components'
import CountUp from 'react-countup';

export default function StatisticsContainer() {
  const [startCount, setStartCount] = useState(false)

  const handleOnScroll = () => {
    if (window.pageYOffset >= 200) {
      setStartCount(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleOnScroll()
    })

  }, [])
  return (
    <Stack justifyContent='center' p="81px 0" gap="80px" direction="row" flexWrap='wrap'>
      {[1, 2, 3].map((i) => {
        return (

          <Stack key={i} width="auto" alignItems='center'>
            <Text as="h3">
              <>
                {startCount && <CountUp end={5000} />}
                +
              </>
            </Text>
            <Text>LearnAM downloads</Text>
          </Stack>
        )
      })}
    </Stack>
  )
}
