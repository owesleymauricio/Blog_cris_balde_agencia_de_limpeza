import Header from '@/components/header'
import { Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      maxW={'1200px'}
      w={'100vw'}
      h={'100vh'}
      marginRight={'auto'}
      marginLeft={'auto'}
      flexDirection={'column'}
    >
      <Header />
      <h1>primeira tela que o cliente vai ver</h1>
    </Flex>
  )
}
