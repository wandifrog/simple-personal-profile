import styled from '@emotion/styled'
import Link from 'next/link'
import HStack from '../components/HStack'
import PFancyHeader from '../components/PFancyHeader'
import Text from '../components/Text'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  width: 300px;
  height: auto;
  padding: 16px;
  background-color: white;
  border-radius: 30px;
`
const ProfilePicture = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`

export default function HomePage() {

  return (
    <Container>
      <Content>
        <HStack>
          <ProfilePicture alt='profile picture' src='/audrey.jpeg' />
          <Text>Audrey Febriany</Text>
        </HStack>
        <div>A creative and passionate professional in Social Media and Marketing field who implements knowledge and executes marketing campaign to achieve company's goal. A student in pursuing a Bachelor's Degree in Physics at University of Indonesia</div>
        <Link href="/about">go to about page</Link>
      </Content>
    </Container>
  )
}
