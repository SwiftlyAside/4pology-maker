import React, { useContext } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack
} from '@chakra-ui/react'
import { Field, FieldProps, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { GlobalContext } from '../pages/_app'

type ApologyFormProps = {
  onOpen: () => void
}

export type ApologyFormValueProps = {
  productName: string
  companyName: string
  ceoName: string
}

const ApologyForm: React.FC<ApologyFormProps> = ({
  onOpen
}: ApologyFormProps) => {
  const { setApologyFormValues } = useContext(GlobalContext)
  const initialValues: ApologyFormValueProps = {
    productName: '',
    companyName: '',
    ceoName: ''
  }
  const ApologyFormSchema = Yup.object().shape({
    productName: Yup.string()
      .min(1, '1글자 이상 입력해주세요.')
      .matches(
        /(^(?![0-9]+$)([a-zA-Z가-힣\s]|[0-9a-zA-Z가-힣\s])+$)/,
        '사용할 수 없는 문자를 포함하고 있습니다.'
      )
      .required('제품명은 반드시 입력해야합니다.'),
    companyName: Yup.string()
      .min(1, '1글자 이상 입력해주세요.')
      .matches(
        /(^(?![0-9]+$)([a-zA-Z가-힣\s]|[0-9a-zA-Z가-힣\s])+$)/,
        '사용할 수 없는 문자를 포함하고 있습니다.'
      )
      .required('회사명은 반드시 입력해야합니다.'),
    ceoName: Yup.string()
      .min(1, '1글자 이상 입력해주세요.')
      .matches(
        /(^(?![0-9]+$)([a-zA-Z가-힣\s]|[0-9a-zA-Z가-힣\s])+$)/,
        '사용할 수 없는 문자를 포함하고 있습니다.'
      )
      .required('대표자명은 반드시 입력해야합니다.')
  })
  return (
    <Box py={5} width="100%">
      <Heading mb={4}>입력</Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={ApologyFormSchema}
        onSubmit={values => {
          console.log(values)

          const { productName, ceoName, companyName } = values
          if (
            productName === '우마무스메 프리티 더비' &&
            companyName === '카카오게임즈' &&
            ceoName === '조계현'
          ) {
            onOpen()
          } else if (setApologyFormValues) {
            setApologyFormValues(values)
          }
        }}
      >
        {({ touched, isValid }) => (
          <Form>
            <VStack spacing={4} align="flex-start">
              <Field name="productName">
                {({
                  field,
                  form: { touched, errors, isValid }
                }: FieldProps) => (
                  <FormControl isInvalid={touched && !isValid}>
                    <FormLabel>제품명</FormLabel>
                    <Input {...field} placeholder="제품명을 입력하세요" />
                    <FormErrorMessage>
                      {errors.productName as string}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="companyName">
                {({
                  field,
                  form: { touched, errors, isValid }
                }: FieldProps) => (
                  <FormControl isInvalid={touched && !isValid}>
                    <FormLabel>회사명</FormLabel>
                    <Input {...field} placeholder="회사명을 입력하세요" />
                    <FormErrorMessage>
                      {errors.companyName as string}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="ceoName">
                {({
                  field,
                  form: { touched, errors, isValid }
                }: FieldProps) => (
                  <FormControl isInvalid={touched && !isValid}>
                    <FormLabel>대표자명</FormLabel>
                    <Input {...field} placeholder="대표자명을 입력하세요" />
                    <FormErrorMessage>
                      {errors.ceoName as string}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                isDisabled={touched && !isValid}
                type="submit"
                colorScheme="teal"
                width="full"
              >
                4과문 보기
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default ApologyForm
