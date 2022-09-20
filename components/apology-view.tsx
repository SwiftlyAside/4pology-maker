import React, { useContext } from 'react'
import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { GlobalContext } from '../pages/_app'

const ApologyView: React.FC = () => {
  const { apologyFormValues, setApologyFormValues } = useContext(GlobalContext)
  const handleDownloadText = () => {
    const fileData = title + content
    const blob = new Blob([fileData], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = '4과문.txt'
    link.href = url
    link.click()
  }
  const handleClose = () => {
    if (setApologyFormValues) {
      setApologyFormValues(undefined)
    }
  }

  const { productName, ceoName, companyName } = apologyFormValues!
  const title = `< ${companyName} 대표이사 ${ceoName}입니다. >\n\n`
  const content = `안녕하세요. ${companyName} 대표이사 ${ceoName}입니다.\n\n
${productName}의 이번 간담회를 통해 이용자분들의 목소리를 직접 듣고\n마음 깊이 통감하며 반성하고 있습니다.\n\n
이번 간담회 내용이 미흡했던 점에 대해 회사를 대표하여 대단히 죄송하다는 말씀을 드립니다.\n
간담회 중 저희의 표현이 미숙했던 점에 대해서도 사과드립니다.\n\n
그리고, 간담회에서 보내주신 많은 의견들과 목소리를 내어준 분들께 진심으로 감사드립니다.\n\n
${productName}를 향한 이용자분들의 깊은 애정에 좋은 서비스로 보답하지 못하고,\n
오히려 불편함만 드리게 되었습니다.신뢰를 드리지 못한 점 다시 한번 사과드립니다.\n\n
${companyName}가 ${productName}를 아껴주시는 이용자들의 목소리를 최우선으로 하여\n
진정성 어린 소통을 해나갈 수 있도록 힘쓰겠습니다.\n\n
${productName} 간담회에서 말씀드린 개선 부분도 이용자분들의 기대치에 부합해 나가며\n
이행될 수 있도록 자세하고 투명한 방법으로 경과 및 내용에 대해 말씀드리겠습니다.\n\n
개선책들을 하나씩 직접 실행해 나가며, 이용자분들의 기대에 부응할 수 있도록\n
또 신뢰를 하나씩 쌓아 나갈 수 있도록 최선을 다하겠습니다.\n\n
다시 한번 기회를 주시길 부탁드립니다.\n\n
감사합니다.\n
${ceoName} 드림.\n`

  return apologyFormValues ? (
    <Box py={20} width="100%">
      <VStack>
        <Heading alignSelf="center">{title}</Heading>
        <Text style={{ whiteSpace: 'pre-line' }}>{content}</Text>
        <HStack spacing={5}>
          <Button onClick={handleDownloadText}>4과문 다운로드</Button>
          <Button colorScheme="red" onClick={handleClose}>
            처음으로
          </Button>
        </HStack>
      </VStack>
    </Box>
  ) : (
    <></>
  )
}

export default ApologyView
