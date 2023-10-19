import { Button } from "./components/Button/Button"
import Heading from "./components/Heading/Heading"
import Text from "./components/Text/Text"

export const ComponentList = () => {
    return (
        <div>
            <Heading variant={'h1'}>Esto es un título</Heading>
            <Heading variant={'h1'} size={'h2'}>Esto es un título</Heading>
            <Heading variant={'h1'} size={'h3'}>Esto es un título</Heading>
            <Heading variant={'h1'} size={'h4'}>Esto es un título</Heading>
            <Heading variant={'h1'} size={'h5'}>Esto es un título</Heading>
            <Heading variant={'h1'} size={'h6'}>Esto es un título</Heading>
            <Button>hola</Button>
            <Text>Esto es un parrafo <span>Esto es un span</span><Text variant={'span'}>Otro span</Text></Text>
        </div>
    )
}
