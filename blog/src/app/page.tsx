import {
  Avatar,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'}>
      <Flex flexDirection={'column'}>
        <Heading fontSize={'40px'} fontFamily={'var(--style-cris-balde)'}>
          Cris Balde
        </Heading>
        <Heading
          fontSize={'40px'}
          marginLeft={'40px'}
          fontFamily={'var(--style-agencia-limpeza)'}
        >
          Agencia de Limpeza
        </Heading>
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        marginRight={'20px'}
      >
        <UnorderedList
          display={'flex'}
          listStyleType={'none'}
          padding={0}
          marginRight={'20px'}
        >
          <ListItem marginRight={'20px'}>Sobre</ListItem>
          <ListItem marginRight={'20px'}>Contatos</ListItem>
          <ListItem>Historias</ListItem>
        </UnorderedList>

        <Avatar src="https://bit.ly/broken-link" />
      </Flex>
    </Flex>
  )
}
