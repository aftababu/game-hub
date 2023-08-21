import { HStack, Image, Text } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch:(searchInput :string)=>void
}

const Navbar = ({onSearch}:Props) => {
  return (
    <HStack  padding={'10px'}>
        <Image src='/logo.webp' boxSize='60px' />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar