import styled from '@emotion/styled'
import HStack from '../components/HStack'
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
  position: relative;
  top: -20px;
`
const ProfilePicture = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`
const CustomLink = styled.div`
  background-color: #263238;
  padding: 4px 8px;
  border-radius: 3px;
  color: #ECEFF1;
  margin-right: 9px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
`
const DownloadCV = styled.div`
  color: #263238;
  font-weight: normal;
  text-decoration: underline;
  font-size: 13px;
  margin-left: 5px;
  margin-top: 20px;
  cursor: pointer;
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

const Portfolio = styled.div`
  width: 115px;
  height: 75px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
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
      <VStack>
        <Content>
          <HStack bottom={'16px'}>
            <ProfilePicture alt='profile picture' src='/audrey.jpeg' />
            <VStack width={'68%'}>
              <Text size={'21px'} center bold>Audrey Febriany</Text>
              <CustomText>Student Internship</CustomText>
            </VStack>
          </HStack>

          <Text style={{ textAlign: 'justify' }}>A creative and passionate professional in Social Media and Marketing field who implements knowledge and executes marketing campaign to achieve company's goal. A student in pursuing a Bachelor's Degree in Physics at University of Indonesia.</Text>
          <DownloadCV onClick={() => _downloadCV()}>Download CV</DownloadCV>
          <HStack top={'15px'} justify={'space-between'} align={'center'}>
            <HStack left={'5px'}>
              <CustomLink onClick={() => _goToInstagram()}>#Instagram</CustomLink>
              <CustomLink onClick={() => _goToLinkedIn()}>#LinkedIn</CustomLink>
            </HStack>
            <div style={{ fontSize: '22px', marginRight: '7px' }}>🎹</div>
          </HStack>
        </Content>
        <HStack bottom={'20px'} justify={'space-between'}>
          <Portfolio2 name="Portfolio" />
          <Portfolio2 name="Music" />
          <Portfolio2 name="Books" />
        </HStack>
        {/* <HStack justify={'space-between'}>
          <Portfolio2 name="Marketing" />
          <Portfolio2 name="Books" />
          <Portfolio2 name="Graphic Design" />
        </HStack> */}
      </VStack>
    </Container>
  )
}

const Portfolio2 = ({ name }: { name: string }) => {

  return (
    <Portfolio onClick={() => alert('under development')}>
      <Text>{name}</Text>
    </Portfolio>
  )
}
