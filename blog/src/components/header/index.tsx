import { Flex, Heading, Link, ListItem, UnorderedList } from '@chakra-ui/react'
import NextLink from 'next/link'

import ModalLogin from '../modal_login'

const Header = () => {
  return (
    <Flex
      backgroundColor={'#4169E1'}
      alignItems={'center'}
      justifyContent={'space-between'}
      height={'120px'}
      w={'100%'}
      padding={'20px'}
      marginRight={'auto'}
      marginLeft={'auto'}
      maxW={'1200px'}
    >
      <Flex flexDirection={'column'}>
        <Link
          as={NextLink}
          href="/"
          _hover={{
            transform: 'translateY(-1px)',
          }}
        >
          <Heading
            color={'#FF69B4'}
            fontSize={'40px'}
            fontFamily={'var(--style-cris-balde)'}
          >
            Cris Balde
          </Heading>
          <Heading
            fontSize={'40px'}
            marginLeft={'40px'}
            fontFamily={'var(--style-agencia-limpeza)'}
            color={'#FFA500'}
          >
            Agencia de Limpeza
          </Heading>
        </Link>
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        backgroundColor={'#4169E1'}
      >
        <UnorderedList display={'flex'} listStyleType={'none'} padding={0}>
          <Link
            as={NextLink}
            href="/"
            marginRight={'5px'}
            fontWeight={'bold'}
            _hover={{
              transform: 'translateY(-3px)',
            }}
          >
            <ListItem marginRight={'20px'}>Home</ListItem>
          </Link>
          <Link
            as={NextLink}
            href="/contatos"
            marginRight={'5px'}
            fontWeight={'bold'}
            _hover={{
              transform: 'translateY(-3px)',
            }}
          >
            <ListItem marginRight={'20px'}>Contatos</ListItem>
          </Link>
          <Link
            as={NextLink}
            href="/about"
            marginRight={'5px'}
            fontWeight={'bold'}
            _hover={{
              transform: 'translateY(-3px)',
            }}
          >
            <ListItem>Sobre</ListItem>
          </Link>
        </UnorderedList>
        <ModalLogin />
      </Flex>
    </Flex>
  )
}

export default Header
