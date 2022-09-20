import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '../lib/theme'
import MainLayout from '../components/layouts/main'
import { ApologyFormValueProps } from '../components/apology-form'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

type GlobalContextProps = {
  apologyFormValues?: ApologyFormValueProps
  setApologyFormValues?: Dispatch<
    SetStateAction<ApologyFormValueProps | undefined>
  >
}

export const GlobalContext = createContext<GlobalContextProps>({})

function MyApp({ Component, pageProps }: AppProps) {
  const [apologyFormValues, setApologyFormValues] =
    useState<ApologyFormValueProps>()

  return (
    <GlobalContext.Provider
      value={{
        apologyFormValues: apologyFormValues,
        setApologyFormValues: setApologyFormValues
      }}
    >
      <ChakraProvider theme={theme}>
        <MainLayout>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
              }
            }}
          >
            <Component {...pageProps} />
          </AnimatePresence>
        </MainLayout>
      </ChakraProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
