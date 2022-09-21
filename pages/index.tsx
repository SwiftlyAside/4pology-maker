import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/hooks'
import { Button, Container, useColorModeValue } from '@chakra-ui/react'
import ApologyForm from '../components/apology-form'
import { useContext } from 'react'
import { GlobalContext } from './_app'
import ApologyView from '../components/apology-view'

const Home: NextPage = () => {
  const { apologyFormValues } = useContext(GlobalContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  }

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="auto"
          backdropBlur="5px"
        >
          <ModalContent>
            <ModalHeader>카카오게임즈에 드리는 말씀</ModalHeader>
            <ModalCloseButton />
            <ModalBody>카카오게임즈는 제발 정신 좀 차리세요!</ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>닫기</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      <Container
        backgroundColor={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
        borderRadius="lg"
        boxShadow="base"
        width="100%"
        minW={{ md: 'container.md' }}
      >
        {apologyFormValues ? <ApologyView /> : <ApologyForm onOpen={onOpen} />}
      </Container>
    </motion.article>
  )
}

export default Home
