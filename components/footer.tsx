import { Box, Center, HStack, Link, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io'

const Footer = () => {
  return (
    <Box as="footer" w="100%" pb={5}>
      <Center>
        <HStack spacing={5}>
          <Link href="https://github.com/SwiftlyAside/4pology-maker" isExternal>
            Source&nbsp;
            <Icon as={IoLogoGithub} />
          </Link>
          <Text>
            Original project:&nbsp;
            <Link href="https://github.com/strikef/apology-maker" isExternal>
              4과문 생성기 by strikef&nbsp;
              <Icon as={IoLogoGithub} />
            </Link>
          </Text>
        </HStack>
      </Center>
    </Box>
  )
}

export default Footer
