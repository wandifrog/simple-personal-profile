import styled from '@emotion/styled'
import Link from 'next/link'
import HStack from '../components/HStack'
import PFancyHeader from '../components/PFancyHeader'
import Text from '../components/Text'
import VStack from '../components/VStack'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  width: 350px;
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
const CustomLink = styled.div`
  background-color: #01579B;
  padding: 5px 12px;
  border-radius: 25px;
  color: #F5F5F5;
  margin-right: 5px;
  cursor: pointer;
  font-weight: bold;
`
const DownloadCV = styled.div`
  color: #01579B;
  font-weight: bold;
`
const CustomText = styled.div`
  font-weight: lighter;
  color: rgb(55, 71, 79);
  font-size: 16px;
  font-family: sans-serif;
  font-style: normal;
  text-align: center;
  user-select: initial;
`

export default function HomePage() {

  const _goToInstagram = () => {
    window.open('https://www.instagram.com/audreyfebrianys/?igshid=YmMyMTA2M2Y=', '_blank')
  }

  const _goToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/audrey-febriany-silalahi-77551a217/', '_blank')
  }

  const _downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/audrey-cv.png'
    link.download = 'Audrey CV.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  return (
    <Container>
      <Content>
        <HStack bottom={'10px'}>
          <ProfilePicture alt='profile picture' src='/audrey.jpeg' />
          <VStack width={'68%'}>
            <Text size={'21px'} center bold>Audrey Febriany</Text>
            <CustomText>Student Internship</CustomText>
          </VStack>
        </HStack>
        <Text bottom={'10px'}>A creative and passionate professional in Social Media and Marketing field who implements knowledge and executes marketing campaign to achieve company's goal. A student in pursuing a Bachelor's Degree in Physics at University of Indonesia</Text>
        <DownloadCV onClick={() => _downloadCV()}>Download CV</DownloadCV>

        <HStack top={'15px'} justify={'space-between'} align={'center'}>
          <HStack>
            <CustomLink onClick={() => _goToInstagram()}>#Instagram</CustomLink>
            <CustomLink onClick={() => _goToLinkedIn()}>#LinkedIn</CustomLink>
          </HStack>
          <div style={{ fontSize: '21px', marginRight: '7px' }}>🎶</div>
        </HStack>
      </Content>
    </Container>
  )
}
