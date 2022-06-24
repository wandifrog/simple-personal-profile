import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import HStack from '../components/HStack'
import Text from '../components/Text'
import VStack from '../components/VStack'


export default function Detail() {
  const { pathname } = useRouter()
  return (
    <VStack>
      <Text>Audrey's {pathname}</Text>
    </VStack>
  )
}
