import { Button } from "./components/Button/Button"
import Col from "./components/Grid/Col"
import Container from "./components/Grid/Container"
import Row from "./components/Grid/Row"
import Heading from "./components/Heading/Heading"
import RitchContent from "./components/RitchContent/RitchContent"
import Text from "./components/Text/Text"

export const ComponentList = () => {
    return (
        <div>
            <Container>

                <Row>

                    <Col className={'col-md-8'}>
                        <Heading variant={'h1'}>Esto es un título</Heading>
                        <Heading variant={'h1'} size={'h2'}>Esto es un título</Heading>
                        <Heading variant={'h1'} size={'h3'}>Esto es un título</Heading>
                        <Heading variant={'h1'} size={'h4'}>Esto es un título</Heading>
                        <Heading variant={'h1'} size={'h5'}>Esto es un título</Heading>
                        <Heading variant={'h1'} size={'h6'}>Esto es un título</Heading>
                        <Button>hola</Button>
                        <Text>
                            Cillum pariatur id pariatur reprehenderit proident exercitation in ipsum ad commodo sint elit.
                            Enim consequat id voluptate et in. Do ut anim nisi sunt exercitation ipsum cupidatat voluptate exercitation aute.
                            <Text variant={'span'}>Esto es un span</Text>
                        </Text>
                        <Heading variant={'h2'} size={'h6'}>Ritch content</Heading>
                        <RitchContent>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores at <a href="#">Esto es un link</a></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores at</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores at</p>
                        </RitchContent>
                    </Col>

                </Row>

            </Container>

        </div>
    )
}
